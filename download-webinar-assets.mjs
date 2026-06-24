import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const inputPath = path.join(root, "scrape", "webinar-assets.txt");
const outputDir = path.join(root, "public", "assets", "webinar");
const mapPath = path.join(root, "scrape", "webinar-asset-map.json");

await fs.mkdir(outputDir, { recursive: true });

const lines = (await fs.readFile(inputPath, "utf8"))
  .split(/\r?\n/)
  .map((line) => line.trim());
const urls = [...new Set(lines.filter((line) => /^(https?:|data:)/.test(line)))];

const extensions = new Map([
  ["image/avif", ".avif"],
  ["image/gif", ".gif"],
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/svg+xml", ".svg"],
  ["image/webp", ".webp"],
]);

function hash(value) {
  return crypto.createHash("sha1").update(value).digest("hex").slice(0, 8);
}

function kebab(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function filenameFor(originalUrl, contentType) {
  if (originalUrl.startsWith("data:")) {
    return `inline-${hash(originalUrl)}${extensions.get(contentType) || ".bin"}`;
  }

  const parsed = new URL(originalUrl);
  const raw = decodeURIComponent(
    parsed.pathname.split("/").filter(Boolean).at(-1) || "asset",
  );
  let extension = path.extname(raw).toLowerCase();
  if (!extension || extension.length > 8) {
    extension = extensions.get(contentType) || ".bin";
  }
  const stem = kebab(path.basename(raw, path.extname(raw))) || "asset";
  return `${stem}-${hash(parsed.origin + parsed.pathname)}${extension}`;
}

function decodeDataUri(uri) {
  const match = uri.match(/^data:([^;,]+)?(;base64)?,(.*)$/s);
  if (!match) throw new Error("Invalid data URI");
  return {
    contentType: (match[1] || "application/octet-stream").toLowerCase(),
    bytes: match[2]
      ? Buffer.from(match[3], "base64")
      : Buffer.from(decodeURIComponent(match[3])),
  };
}

const assetMap = {};
const fetched = new Map();

async function save(originalUrl) {
  if (originalUrl.startsWith("data:")) {
    const { contentType, bytes } = decodeDataUri(originalUrl);
    const filename = filenameFor(originalUrl, contentType);
    await fs.writeFile(path.join(outputDir, filename), bytes);
    assetMap[originalUrl] = `/assets/webinar/${filename}`;
    return;
  }

  const parsed = new URL(originalUrl);
  const fragment = parsed.hash;
  parsed.hash = "";
  const fetchUrl = parsed.href;

  let localPath = fetched.get(fetchUrl);
  if (!localPath) {
    const response = await fetch(fetchUrl, {
      redirect: "follow",
      headers: { "user-agent": "Mozilla/5.0 PixelopsWebinarAssetDownloader/1.0" },
      signal: AbortSignal.timeout(60000),
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${fetchUrl}`);
    }
    const contentType = (response.headers.get("content-type") || "")
      .split(";")[0]
      .trim()
      .toLowerCase();
    const filename = filenameFor(fetchUrl, contentType);
    await fs.writeFile(
      path.join(outputDir, filename),
      Buffer.from(await response.arrayBuffer()),
    );
    localPath = `/assets/webinar/${filename}`;
    fetched.set(fetchUrl, localPath);
  }

  assetMap[originalUrl] = `${localPath}${fragment}`;
}

let cursor = 0;
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (cursor < urls.length) {
      const url = urls[cursor++];
      await save(url);
    }
  }),
);

const sorted = Object.fromEntries(
  Object.entries(assetMap).sort(([a], [b]) => a.localeCompare(b)),
);
await fs.writeFile(mapPath, `${JSON.stringify(sorted, null, 2)}\n`, "utf8");

console.log(
  JSON.stringify({ discovered: urls.length, downloaded: Object.keys(sorted).length }),
);
