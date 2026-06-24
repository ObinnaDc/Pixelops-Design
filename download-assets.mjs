import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const scrapeDir = path.join(root, "scrape");
const assetsDir = path.join(root, "public", "assets");
await fs.mkdir(assetsDir, { recursive: true });

const imageText = await fs.readFile(
  path.join(scrapeDir, "image-urls.txt"),
  "utf8",
);
const svgText = await fs.readFile(path.join(scrapeDir, "svgs.txt"), "utf8");
const externalSvgText = svgText.split("<!-- external-svg-urls -->")[1] || "";

const urls = [
  ...imageText.split(/\r?\n/),
  ...externalSvgText.split(/\r?\n/),
]
  .map((value) => value.trim())
  .filter(
    (value) =>
      value.startsWith("http://") ||
      value.startsWith("https://") ||
      value.startsWith("data:"),
  )
  .filter((value, index, all) => all.indexOf(value) === index);

const extensionByType = new Map([
  ["image/avif", ".avif"],
  ["image/gif", ".gif"],
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/svg+xml", ".svg"],
  ["image/webp", ".webp"],
  ["application/pdf", ".pdf"],
  ["application/zip", ".zip"],
]);

function kebab(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function shortHash(value) {
  return crypto.createHash("sha1").update(value).digest("hex").slice(0, 8);
}

function filenameFor(url, contentType) {
  if (url.startsWith("data:")) {
    return `inline-${shortHash(url)}${extensionByType.get(contentType) || ".bin"}`;
  }

  const parsed = new URL(url);
  let rawName = decodeURIComponent(
    parsed.pathname.split("/").filter(Boolean).pop() || "asset",
  );
  let extension = path.extname(rawName).toLowerCase();
  if (!extension || extension.length > 8) {
    extension = extensionByType.get(contentType) || ".bin";
    rawName = `${rawName}${extension}`;
  }

  const stem = kebab(path.basename(rawName, path.extname(rawName))) || "asset";
  return `${stem}-${shortHash(url.split("#")[0])}${extension}`;
}

function decodeDataUri(uri) {
  const match = uri.match(/^data:([^;,]+)?(;base64)?,(.*)$/s);
  if (!match) throw new Error("Invalid data URI");
  const contentType = (match[1] || "application/octet-stream").toLowerCase();
  const bytes = match[2]
    ? Buffer.from(match[3], "base64")
    : Buffer.from(decodeURIComponent(match[3]));
  return { bytes, contentType };
}

const assetMap = {};
const skipped = [];
const downloadedByFetchUrl = new Map();

async function download(originalUrl) {
  if (originalUrl.startsWith("data:")) {
    if (originalUrl.length > 500) {
      skipped.push({ url: originalUrl.slice(0, 80) + "…", reason: "data-uri-too-long" });
      return;
    }
    const { bytes, contentType } = decodeDataUri(originalUrl);
    const filename = filenameFor(originalUrl, contentType);
    await fs.writeFile(path.join(assetsDir, filename), bytes);
    assetMap[originalUrl] = `/assets/${filename}`;
    return;
  }

  const parsed = new URL(originalUrl);
  const fragment = parsed.hash;
  parsed.hash = "";
  const fetchUrl = parsed.href;

  let saved = downloadedByFetchUrl.get(fetchUrl);
  if (!saved) {
    let response;
    try {
      response = await fetch(fetchUrl, {
        redirect: "follow",
        headers: { "user-agent": "Mozilla/5.0 PixelopsAssetDownloader/1.0" },
        signal: AbortSignal.timeout(60000),
      });
    } catch (error) {
      skipped.push({ url: originalUrl, reason: error.message });
      return;
    }

    if (response.status === 404) {
      skipped.push({ url: originalUrl, reason: "404" });
      return;
    }
    if (!response.ok) {
      skipped.push({ url: originalUrl, reason: `http-${response.status}` });
      return;
    }

    const contentType = (response.headers.get("content-type") || "")
      .split(";")[0]
      .trim()
      .toLowerCase();
    const bytes = Buffer.from(await response.arrayBuffer());
    const filename = filenameFor(fetchUrl, contentType);
    await fs.writeFile(path.join(assetsDir, filename), bytes);
    saved = `/assets/${filename}`;
    downloadedByFetchUrl.set(fetchUrl, saved);
  }

  assetMap[originalUrl] = `${saved}${fragment}`;
}

const concurrency = 8;
let cursor = 0;
await Promise.all(
  Array.from({ length: concurrency }, async () => {
    while (cursor < urls.length) {
      const index = cursor++;
      await download(urls[index]);
    }
  }),
);

const sortedMap = Object.fromEntries(
  Object.entries(assetMap).sort(([a], [b]) => a.localeCompare(b)),
);
await fs.writeFile(
  path.join(scrapeDir, "asset-map.json"),
  `${JSON.stringify(sortedMap, null, 2)}\n`,
  "utf8",
);

console.log(
  JSON.stringify(
    {
      discovered: urls.length,
      downloaded: Object.keys(sortedMap).length,
      skipped,
    },
    null,
    2,
  ),
);
