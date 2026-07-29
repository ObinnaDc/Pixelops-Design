import puppeteer from "puppeteer-core";
import fs from "node:fs/promises";
import path from "node:path";

const targetUrl = "https://pixelops.design/showcase/hawthorn-brewery";
const outputDirectory = path.join(
  process.cwd(),
  "scrape",
  "showcase",
);
const chromiumPath =
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

await fs.mkdir(outputDirectory, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  executablePath: chromiumPath,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

async function waitForIdle(page) {
  await page.waitForNetworkIdle({
    idleTime: 750,
    timeout: 15_000,
  }).catch((error) => {
    console.warn(`Network idle timed out after 15s: ${error.message}`);
  });
}

async function revealLazyContent(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 700) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 80));
    }
    window.scrollTo(0, 0);
  });
  await waitForIdle(page);
}

try {
  const page = await browser.newPage();

  await page.setViewport({
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
  });
  await page.goto(targetUrl, {
    waitUntil: "domcontentloaded",
    timeout: 15_000,
  });
  await waitForIdle(page);
  await revealLazyContent(page);

  await page.screenshot({
    path: path.join(outputDirectory, "hawthorn-brewery-desktop.png"),
    fullPage: true,
  });

  const extracted = await page.evaluate(() => {
    const absoluteUrl = (value) => {
      try {
        return new URL(value, location.href).href;
      } catch {
        return value;
      }
    };
    const imageUrls = new Set();
    const addUrl = (value) => {
      if (value && !value.startsWith("data:")) {
        imageUrls.add(absoluteUrl(value));
      }
    };
    const addSrcset = (value) => {
      value
        .split(",")
        .map((candidate) => candidate.trim().split(/\s+/)[0])
        .forEach(addUrl);
    };

    document
      .querySelectorAll("img,source,picture,video,input[type=image],image")
      .forEach((element) => {
        addUrl(element.currentSrc);
        ["src", "poster", "href", "xlink:href"].forEach((attribute) => {
          addUrl(element.getAttribute(attribute));
        });
        ["srcset", "imagesrcset"].forEach((attribute) => {
          const value = element.getAttribute(attribute);
          if (value) addSrcset(value);
        });
      });

    document.querySelectorAll("*").forEach((element) => {
      const backgroundImage = getComputedStyle(element).backgroundImage;
      for (const match of backgroundImage.matchAll(
        /url\(\s*["']?([^"')]+)["']?\s*\)/g,
      )) {
        addUrl(match[1]);
      }
    });

    const bodyText = document.body.innerText
      .replace(/\r\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    return {
      html: document.documentElement.outerHTML,
      copy: {
        url: location.href,
        title: document.title,
        text: bodyText,
        lines: bodyText
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
      },
      imageUrls: [...imageUrls].sort(),
    };
  });

  await fs.writeFile(
    path.join(outputDirectory, "hawthorn-brewery-rendered.html"),
    extracted.html,
    "utf8",
  );
  await fs.writeFile(
    path.join(outputDirectory, "hawthorn-brewery-copy.json"),
    `${JSON.stringify(extracted.copy, null, 2)}\n`,
    "utf8",
  );
  await fs.writeFile(
    path.join(outputDirectory, "hawthorn-brewery-assets.txt"),
    `${extracted.imageUrls.join("\n")}\n`,
    "utf8",
  );

  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
  });
  await page.reload({
    waitUntil: "domcontentloaded",
    timeout: 15_000,
  });
  await waitForIdle(page);
  await revealLazyContent(page);
  await page.screenshot({
    path: path.join(outputDirectory, "hawthorn-brewery-mobile.png"),
    fullPage: true,
  });

  console.log(
    JSON.stringify(
      {
        targetUrl,
        title: extracted.copy.title,
        textLines: extracted.copy.lines.length,
        imageUrls: extracted.imageUrls.length,
        outputDirectory,
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}
