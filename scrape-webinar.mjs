import puppeteer from "puppeteer";
import fs from "node:fs/promises";
import path from "node:path";

const targetUrl = "https://pixelops.design/webinar";
const outDir = path.join(process.cwd(), "scrape");
await fs.mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  const page = await browser.newPage();

  async function renderAt(width, screenshotName) {
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    await page.goto(targetUrl, {
      waitUntil: "domcontentloaded",
      timeout: 15000,
    });
    await page
      .waitForNetworkIdle({ idleTime: 750, timeout: 15000 })
      .catch(() => {});
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += 650) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 80));
      }
      window.scrollTo(0, 0);
    });
    await page
      .waitForNetworkIdle({ idleTime: 500, timeout: 5000 })
      .catch(() => {});
    await page.screenshot({
      path: path.join(outDir, screenshotName),
      fullPage: true,
    });
  }

  await renderAt(1440, "webinar-desktop.png");

  const extracted = await page.evaluate(() => {
    const clean = (value) => (value || "").replace(/\s+/g, " ").trim();
    const absolute = (value) => {
      try {
        return new URL(value, location.href).href;
      } catch {
        return value;
      }
    };
    const visible = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        rect.width > 0 &&
        rect.height > 0
      );
    };
    const unique = (values) => [...new Set(values.filter(Boolean))];
    const textOf = (element) =>
      clean(element?.innerText || element?.textContent || "");
    const headingOf = (root) =>
      textOf(root?.querySelector("h1,h2,h3,h4,h5,h6"));
    const ctaOf = (root) =>
      textOf(root?.querySelector("a[href],button,input[type=submit]"));

    const main =
      document.querySelector("main") ||
      document.querySelector('[role="main"]') ||
      document.body;
    const structuralSections = [
      ...main.querySelectorAll(
        ":scope > section, :scope > div > section, [data-section], section",
      ),
    ].filter(visible);
    const sectionRoots = structuralSections.length
      ? unique(structuralSections)
      : [...main.children].filter(visible);

    const heroRoot =
      document.querySelector("h1")?.closest("section") ||
      document.querySelector("h1")?.parentElement ||
      sectionRoots[0] ||
      main;
    const heroHeading = textOf(heroRoot.querySelector("h1"));
    const heroSubheadline =
      [...heroRoot.querySelectorAll("p")]
        .filter(visible)
        .map(textOf)
        .find((text) => text && text !== heroHeading) || "";

    const formElement = document.querySelector("form");
    const formRoot =
      formElement?.closest("section") ||
      formElement?.parentElement ||
      formElement;
    const fields = formElement
      ? [...formElement.querySelectorAll("input,textarea,select")]
          .filter(
            (field) =>
              !["hidden", "submit", "button"].includes(
                field.getAttribute("type") || "",
              ),
          )
          .map((field) => {
            const id = field.id;
            const label =
              (id && document.querySelector(`label[for="${CSS.escape(id)}"]`)) ||
              field.closest("label");
            return clean(
              label?.textContent ||
                field.getAttribute("placeholder") ||
                field.getAttribute("name") ||
                field.getAttribute("type"),
            );
          })
          .filter(Boolean)
      : [];

    const sections = sectionRoots
      .filter((root) => root !== heroRoot && !root.contains(formElement))
      .map((root, index) => {
        const heading = headingOf(root);
        const paragraphs = [...root.querySelectorAll("p")]
          .filter(visible)
          .map(textOf)
          .filter(Boolean);
        const items = unique(
          [...root.querySelectorAll("li")]
            .filter(visible)
            .map(textOf)
            .filter(Boolean),
        );
        return {
          id:
            root.id ||
            root.getAttribute("data-section") ||
            heading
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "") ||
            `section-${index + 1}`,
          heading,
          body: paragraphs.join("\n"),
          items,
          cta: ctaOf(root),
        };
      })
      .filter(
        (section) =>
          section.heading ||
          section.body ||
          section.items.length ||
          section.cta,
      );

    const footerCandidate =
      document.querySelector("footer") ||
      [...sectionRoots].reverse().find((root) =>
        /book|register|reserve|join|watch|get started/i.test(textOf(root)),
      );

    const assets = new Set();
    document
      .querySelectorAll("img,source,video,input[type=image]")
      .forEach((element) => {
        ["src", "srcset", "poster"].forEach((attribute) => {
          const value = element.getAttribute(attribute);
          if (!value) return;
          if (attribute === "srcset") {
            value.split(",").forEach((part) => {
              assets.add(absolute(part.trim().split(/\s+/)[0]));
            });
          } else {
            assets.add(absolute(value));
          }
        });
      });
    document.querySelectorAll("*").forEach((element) => {
      const background = getComputedStyle(element).backgroundImage;
      for (const match of background.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
        assets.add(absolute(match[1]));
      }
    });
    document.querySelectorAll("svg").forEach((svg, index) => {
      assets.add(
        `inline-svg-${index + 1}: ${svg.outerHTML.replace(/\s+/g, " ").slice(0, 1000)}`,
      );
    });
    document
      .querySelectorAll(
        'use[href],use[xlink\\:href],object[data$=".svg"],embed[src$=".svg"],link[href$=".svg"]',
      )
      .forEach((element) => {
        const value =
          element.getAttribute("href") ||
          element.getAttribute("xlink:href") ||
          element.getAttribute("data") ||
          element.getAttribute("src");
        if (value) assets.add(absolute(value));
      });

    const embeds = [
      ...document.querySelectorAll("iframe,embed,object,video"),
    ].map((element) => ({
      tag: element.tagName.toLowerCase(),
      src:
        element.getAttribute("src") ||
        element.getAttribute("data") ||
        element.getAttribute("poster") ||
        "",
      title: element.getAttribute("title") || "",
      html: element.outerHTML.replace(/\s+/g, " ").slice(0, 2000),
    }));
    document.querySelectorAll("script[src]").forEach((script) => {
      if (
        /youtube|vimeo|wistia|loom|calendly|cal\.com|typeform|hubspot|zoom|webinar/i.test(
          script.src,
        )
      ) {
        embeds.push({
          tag: "script",
          src: script.src,
          title: "",
          html: script.outerHTML,
        });
      }
    });

    return {
      bodyText: clean(document.body.innerText),
      copy: {
        meta: {
          title: document.title,
          description:
            document
              .querySelector('meta[name="description"]')
              ?.getAttribute("content") || "",
        },
        hero: {
          headline: heroHeading,
          subheadline: heroSubheadline,
          cta: ctaOf(heroRoot),
        },
        sections,
        form: {
          heading: headingOf(formRoot),
          fields: unique(fields),
          submit_label: textOf(
            formElement?.querySelector(
              'button[type=submit],input[type=submit],button:not([type])',
            ),
          ),
        },
        footer_cta: {
          heading: headingOf(footerCandidate),
          body: footerCandidate
            ? [...footerCandidate.querySelectorAll("p")]
                .filter(visible)
                .map(textOf)
                .filter(Boolean)
                .join("\n")
            : "",
          cta: ctaOf(footerCandidate),
        },
      },
      assets: [...assets],
      embeds,
    };
  });

  await fs.writeFile(
    path.join(outDir, "webinar-rendered.html"),
    await page.content(),
    "utf8",
  );
  await fs.writeFile(
    path.join(outDir, "webinar-copy.json"),
    `${JSON.stringify(extracted.copy, null, 2)}\n`,
    "utf8",
  );
  await fs.writeFile(
    path.join(outDir, "webinar-assets.txt"),
    `${extracted.assets.join("\n")}\n`,
    "utf8",
  );
  await fs.writeFile(
    path.join(outDir, "webinar-embeds.txt"),
    extracted.embeds.length
      ? `${extracted.embeds
          .map(
            (embed, index) =>
              `[Embed ${index + 1}]\ntag: ${embed.tag}\nsrc: ${embed.src}\ntitle: ${embed.title}\nhtml: ${embed.html}`,
          )
          .join("\n\n")}\n`
      : "No iframe, video, embed, object, or known third-party embed scripts found.\n",
    "utf8",
  );
  await fs.writeFile(
    path.join(outDir, "webinar-body.txt"),
    `${extracted.bodyText}\n`,
    "utf8",
  );

  await renderAt(390, "webinar-mobile.png");
} finally {
  await browser.close();
}
