import puppeteer from "puppeteer";
import fs from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "scrape");
await fs.mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
const page = await browser.newPage();

async function settleAndLazyLoad() {
  await page
    .waitForNetworkIdle({ idleTime: 750, timeout: 20000 })
    .catch(() => {});
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 700) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 80));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForNetworkIdle({ idleTime: 750, timeout: 10000 }).catch(() => {});
}

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto("https://pixelops.design/", {
  waitUntil: "domcontentloaded",
  timeout: 120000,
});
await settleAndLazyLoad();
await page.screenshot({
  path: path.join(outDir, "screenshot-desktop.png"),
  fullPage: true,
});

const extracted = await page.evaluate(() => {
  const clean = (value) => {
    let text = (value || "").replace(/\s+/g, " ").trim();
    if (/[Ââ]/.test(text)) {
      try {
        text = decodeURIComponent(escape(text));
      } catch {
        // Keep the original text if it was not actually mojibake.
      }
    }
    return text;
  };
  const absolute = (url) => {
    try {
      return new URL(url, location.href).href;
    } catch {
      return url;
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
  const texts = (root, selector) =>
    [...root.querySelectorAll(selector)]
      .filter(visible)
      .map((element) => clean(element.innerText || element.textContent))
      .filter(Boolean);
  const linkObjects = (root) =>
    [...root.querySelectorAll("a")]
      .filter(visible)
      .map((anchor) => ({
        text: clean(
          anchor.innerText ||
            anchor.textContent ||
            anchor.getAttribute("aria-label"),
        ),
        href: absolute(anchor.getAttribute("href") || ""),
      }))
      .filter((link) => link.text || link.href);
  const buttons = (root) =>
    [...root.querySelectorAll("a,button")]
      .filter(visible)
      .map((element) =>
        clean(
          element.innerText ||
            element.textContent ||
            element.getAttribute("aria-label"),
        ),
      )
      .filter(Boolean);

  const rootStyle = getComputedStyle(document.documentElement);
  const tokens = {};
  for (let index = 0; index < rootStyle.length; index += 1) {
    const name = rootStyle[index];
    if (name.startsWith("--")) {
      tokens[name] = rootStyle.getPropertyValue(name).trim();
    }
  }

  const imageUrls = new Set();
  document
    .querySelectorAll("img,source,input[type=image],video")
    .forEach((element) => {
      ["src", "srcset", "poster"].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (!value) return;
        if (attribute === "srcset") {
          value.split(",").forEach((part) => {
            imageUrls.add(absolute(part.trim().split(/\s+/)[0]));
          });
        } else {
          imageUrls.add(absolute(value));
        }
      });
    });
  document.querySelectorAll("*").forEach((element) => {
    const background = getComputedStyle(element).backgroundImage;
    if (!background || background === "none") return;
    for (const match of background.matchAll(/url\(["']?(.*?)["']?\)/g)) {
      imageUrls.add(absolute(match[1]));
    }
  });

  const inlineSvgs = [...document.querySelectorAll("svg")].map(
    (svg, index) => `<!-- inline-svg-${index + 1} -->\n${svg.outerHTML}`,
  );
  const externalSvgs = new Set(
    [...imageUrls].filter((url) => /\.svg(?:[?#]|$)/i.test(url)),
  );
  document.querySelectorAll("use,image,object,embed").forEach((element) => {
    ["href", "xlink:href", "data", "src"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value && (/\.svg/i.test(value) || value.startsWith("#"))) {
        externalSvgs.add(value.startsWith("#") ? value : absolute(value));
      }
    });
  });

  const fonts = new Set();
  const colors = new Set();
  const colorProperties = [
    "color",
    "backgroundColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
    "outlineColor",
    "textDecorationColor",
    "fill",
    "stroke",
  ];
  document.querySelectorAll("*").forEach((element) => {
    const style = getComputedStyle(element);
    style.fontFamily
      .split(",")
      .map((font) => font.trim())
      .filter(Boolean)
      .forEach((font) => fonts.add(font));
    colorProperties.forEach((property) => {
      const value = style[property];
      if (
        value &&
        value !== "transparent" &&
        value !== "rgba(0, 0, 0, 0)" &&
        value !== "none"
      ) {
        colors.add(value);
      }
    });
  });

  const externals = [];
  document.querySelectorAll("script[src]").forEach((element) => {
    externals.push(`<script src="${absolute(element.getAttribute("src"))}">`);
  });
  document.querySelectorAll("link[href]").forEach((element) => {
    externals.push(
      `<link rel="${element.getAttribute("rel") || ""}" href="${absolute(element.getAttribute("href"))}">`,
    );
  });

  const nav = document.querySelector("nav,header");
  const main = document.querySelector("main") || document.body;
  const hero = main.querySelector("section") || main;
  const heroButtons = buttons(hero);
  const sectionElements = [...main.querySelectorAll(":scope > section, section")]
    .filter(
      (element, index, all) => visible(element) && all.indexOf(element) === index,
    );
  const slug = (value, index) =>
    (value || `section-${index + 1}`)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || `section-${index + 1}`;
  const sections = sectionElements.map((section, index) => {
    const headingElement = section.querySelector("h1,h2,h3");
    const heading = clean(headingElement?.innerText);
    return {
      id: section.id || slug(heading, index),
      heading,
      body: texts(section, "p").join("\n"),
      items: texts(section, "li"),
      cta: buttons(section)[0] || "",
    };
  });

  const pricing = [];
  const pricePattern =
    /(?:[$€£]\s?\d[\d,.]*|\d[\d,.]*\s?(?:USD|EUR|GBP)|free)/i;
  document
    .querySelectorAll(
      'article,[class*="price" i],[class*="plan" i],[class*="card" i]',
    )
    .forEach((card) => {
      if (!visible(card)) return;
      const text = clean(card.innerText);
      if (!pricePattern.test(text)) return;
      const headings = texts(card, "h1,h2,h3,h4");
      const price =
        (
          text.match(
            /(?:[$€£]\s?\d[\d,.]*(?:\s*\/\s*\w+)?|\bfree\b)/i,
          ) || [""]
        )[0];
      const cadence =
        (
          text.match(
            /(?:per\s+(?:month|year|week)|\/(?:mo|month|yr|year|week))/i,
          ) || [""]
        )[0];
      const features = texts(card, "li");
      const cardButtons = buttons(card);
      const plan = headings[0] || "";
      if (plan || features.length) {
        pricing.push({
          plan,
          price,
          cadence,
          features,
          cta: cardButtons[cardButtons.length - 1] || "",
        });
      }
    });

  const faq = [];
  document.querySelectorAll("details").forEach((details) => {
    const question = clean(details.querySelector("summary")?.innerText);
    const clone = details.cloneNode(true);
    clone.querySelector("summary")?.remove();
    const answer = clean(clone.textContent);
    if (question) faq.push({ question, answer });
  });
  if (!faq.length) {
    document.querySelectorAll('[class*="faq" i]').forEach((container) => {
      const question = clean(
        container.querySelector("h3,h4,button")?.innerText,
      );
      const answer = texts(container, "p").join("\n");
      if (question) faq.push({ question, answer });
    });
  }

  const footer = document.querySelector("footer");
  const logoElement = nav?.querySelector('img,[class*="logo" i],a');
  const navLinks = nav ? linkObjects(nav) : [];
  const footerLinks = footer ? linkObjects(footer) : [];
  const social = footerLinks.filter((link) =>
    /(instagram|twitter|x\.com|linkedin|facebook|youtube|tiktok|github|dribbble|behance)/i.test(
      `${link.href} ${link.text}`,
    ),
  );
  const legal = footer
    ? texts(footer, 'small,[class*="legal" i],[class*="copyright" i]').join(" ")
    : "";
  const footerParagraphs = footer ? texts(footer, "p") : [];

  const copy = {
    nav: {
      logo: clean(
        logoElement?.getAttribute?.("alt") ||
          logoElement?.innerText ||
          document.title,
      ),
      links: navLinks,
    },
    hero: {
      headline: clean(hero.querySelector("h1")?.innerText),
      subheadline: texts(hero, "p")[0] || "",
      cta_primary: heroButtons[0] || "",
      cta_secondary: heroButtons[1] || "",
    },
    sections,
    pricing,
    faq,
    footer: {
      tagline: footerParagraphs[0] || "",
      links: footerLinks,
      social,
      legal,
    },
  };

  // Bubble-based pages often render their visual hierarchy with generic divs
  // instead of semantic headings/sections. Build a visual text model as a
  // fallback so the structured copy still reflects the rendered page.
  const textBlocks = [...document.querySelectorAll("body *")]
    .filter(visible)
    .map((element) => {
      const directText = [...element.childNodes]
        .filter((node) => node.nodeType === Node.TEXT_NODE)
        .map((node) => node.textContent)
        .join(" ");
      const hasTextChild = [...element.children].some((child) =>
        clean(child.innerText || child.textContent),
      );
      const text = clean(directText || (!hasTextChild ? element.innerText : ""));
      if (!text) return null;
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return {
        text,
        top: rect.top + window.scrollY,
        left: rect.left,
        bottom: rect.bottom + window.scrollY,
        fontSize: Number.parseFloat(style.fontSize) || 0,
        fontWeight: Number.parseInt(style.fontWeight, 10) || 400,
        tag: element.tagName.toLowerCase(),
        href:
          element.closest("a")?.getAttribute("href") &&
          absolute(element.closest("a").getAttribute("href")),
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.top - b.top || a.left - b.left);
  const uniqueBlocks = textBlocks.filter(
    (block, index, all) =>
      !all
        .slice(Math.max(0, index - 4), index)
        .some(
          (previous) =>
            previous.text === block.text &&
            Math.abs(previous.top - block.top) < 3,
        ),
  );
  const pageHeight = document.documentElement.scrollHeight;
  const visualHeadings = uniqueBlocks.filter(
    (block) =>
      block.fontSize >= 22 &&
      block.text.length <= 160 &&
      !/^(home|work|services|pricing|about|contact)$/i.test(block.text),
  );

  if (!copy.nav.links.length) {
    copy.nav.links = uniqueBlocks
      .filter(
        (block) =>
          block.href &&
          block.top < 180 &&
          block.text.length < 50,
      )
      .map((block) => ({ text: block.text, href: block.href }));
  }

  if (!copy.hero.headline) {
    const heroHeading =
      visualHeadings.find(
        (block) =>
          block.top > 180 &&
          block.top < 1100 &&
          block.text.toLowerCase() !== "pixelops",
      ) || visualHeadings[0];
    if (heroHeading) {
      copy.hero.headline = heroHeading.text;
      const following = uniqueBlocks.filter(
        (block) =>
          block.top > heroHeading.bottom &&
          block.top < heroHeading.bottom + 500 &&
          block.fontSize < heroHeading.fontSize &&
          block.text !== heroHeading.text,
      );
      copy.hero.subheadline = following[0]?.text || "";
      const heroCtas = following.filter(
        (block) =>
          block.href ||
          /^(schedule demo|see plans|get started|start today|book a call)$/i.test(
            block.text,
          ),
      );
      copy.hero.cta_primary =
        heroCtas[0]?.text || copy.hero.cta_primary || "";
      copy.hero.cta_secondary =
        heroCtas[1]?.text || copy.hero.cta_secondary || "";
    }
  }

  if (!copy.sections.length && visualHeadings.length) {
    copy.sections = visualHeadings.map((heading, index) => {
      const nextTop =
        visualHeadings[index + 1]?.top ?? Math.min(pageHeight, heading.top + 1800);
      const content = uniqueBlocks.filter(
        (block) =>
          block.top > heading.bottom &&
          block.top < nextTop &&
          block.text !== heading.text,
      );
      const body = content
        .filter(
          (block) =>
            !block.href &&
            block.fontSize < 22 &&
            block.text.length > 35,
        )
        .map((block) => block.text);
      const items = content
        .filter(
          (block) =>
            block.fontSize < 22 &&
            block.text.length <= 80 &&
            !block.href,
        )
        .map((block) => block.text);
      const cta = content.find((block) => block.href)?.text || "";
      return {
        id: slug(heading.text, index),
        heading: heading.text,
        body: [...new Set(body)].join("\n"),
        items: [...new Set(items)],
        cta,
      };
    });
  }

  if (!copy.faq.length) {
    const faqHeading = uniqueBlocks.find(
      (block) => block.text.toLowerCase() === "faq",
    );
    uniqueBlocks
      .filter(
        (block) =>
          block.text.endsWith("?") &&
          block.top > (faqHeading?.top || pageHeight * 0.7) &&
          block.text.length < 180,
      )
      .forEach((question) => {
        const answer = uniqueBlocks.find(
          (block) =>
            block.top > question.bottom &&
            block.top < question.bottom + 220 &&
            block.text.length > 30 &&
            !block.text.endsWith("?"),
        );
        copy.faq.push({
          question: question.text,
          answer: answer?.text || "",
        });
      });
  }

  if (!copy.pricing.length) {
    const pricingHeading = uniqueBlocks.find((block) =>
      /design subscription plans/i.test(block.text),
    );
    const pricingEnd = uniqueBlocks.find(
      (block) =>
        pricingHeading &&
        block.top > pricingHeading.top &&
        /interested in a quoted project/i.test(block.text),
    );
    const planNames = uniqueBlocks.filter(
      (block) =>
        /^(lite|standard|pro)$/i.test(block.text) &&
        (!pricingHeading || block.top > pricingHeading.top) &&
        (!pricingEnd || block.top < pricingEnd.top),
    );
    const priceBlocks = uniqueBlocks.filter(
      (block) =>
        /^\$[\d,]+/.test(block.text) &&
        (!pricingHeading || block.top > pricingHeading.top) &&
        (!pricingEnd || block.top < pricingEnd.top),
    );
    copy.pricing = planNames.map((plan) => {
      const price = [...priceBlocks].sort(
        (a, b) =>
          Math.abs(a.left - plan.left) +
          Math.abs(a.top - plan.top) * 0.2 -
          (Math.abs(b.left - plan.left) +
            Math.abs(b.top - plan.top) * 0.2),
      )[0];
      const columnContent = uniqueBlocks.filter(
        (block) =>
          block.top > plan.bottom &&
          block.top < (pricingEnd?.top || plan.top + 1800) &&
          Math.abs(block.left - plan.left) < 260 &&
          block.text !== price?.text,
      );
      return {
        plan: plan.text,
        price: price?.text || "",
        cadence:
          columnContent.find((block) =>
            /(?:per month|\/month|monthly)/i.test(block.text),
          )?.text || "",
        features: [
          ...new Set(
            columnContent
              .filter(
                (block) =>
                  block.text.length < 90 &&
                  !/^(start today|most popular|pause or cancel anytime)$/i.test(
                    block.text,
                  ),
              )
              .map((block) => block.text),
          ),
        ],
        cta:
          columnContent.find((block) => /^start today$/i.test(block.text))
            ?.text || "",
      };
    });
  }

  if (!copy.footer.links.length) {
    const footerStart = pageHeight * 0.88;
    copy.footer.links = uniqueBlocks
      .filter((block) => block.href && block.top >= footerStart)
      .map((block) => ({ text: block.text, href: block.href }));
    copy.footer.social = copy.footer.links.filter((link) =>
      /(instagram|twitter|x\.com|linkedin|facebook|youtube|tiktok|github|dribbble|behance)/i.test(
        `${link.href} ${link.text}`,
      ),
    );
    const footerText = uniqueBlocks.filter(
      (block) => block.top >= footerStart && !block.href,
    );
    copy.footer.tagline =
      footerText.find((block) => /handles all of your/i.test(block.text))
        ?.text ||
      footerText[0]?.text ||
      "";
    copy.footer.legal =
      footerText
        .filter((block) => /©|copyright|rights reserved/i.test(block.text))
        .map((block) => block.text)
        .join(" ") || copy.footer.legal;
  }

  return {
    html: `<!DOCTYPE html>\n${document.documentElement.outerHTML}`,
    copy,
    imageUrls: [...imageUrls].sort(),
    svgs: [
      ...inlineSvgs,
      "",
      "<!-- external-svg-urls -->",
      ...[...externalSvgs].sort(),
    ],
    tokens,
    fonts: [...fonts].sort(),
    colors: [...colors].sort(),
    externals: [...new Set(externals)].sort(),
    meta: {
      title: document.title,
      url: location.href,
      sectionCount: sections.length,
      inlineSvgCount: inlineSvgs.length,
    },
  };
});

await Promise.all([
  fs.writeFile(
    path.join(outDir, "rendered.html"),
    extracted.html,
    "utf8",
  ),
  fs.writeFile(
    path.join(outDir, "copy.json"),
    JSON.stringify(extracted.copy, null, 2),
    "utf8",
  ),
  fs.writeFile(
    path.join(outDir, "image-urls.txt"),
    `${extracted.imageUrls.join("\n")}\n`,
    "utf8",
  ),
  fs.writeFile(
    path.join(outDir, "svgs.txt"),
    `${extracted.svgs.join("\n\n")}\n`,
    "utf8",
  ),
  fs.writeFile(
    path.join(outDir, "tokens.json"),
    JSON.stringify(extracted.tokens, null, 2),
    "utf8",
  ),
  fs.writeFile(
    path.join(outDir, "fonts.txt"),
    `${extracted.fonts.join("\n")}\n`,
    "utf8",
  ),
  fs.writeFile(
    path.join(outDir, "colors.txt"),
    `${extracted.colors.join("\n")}\n`,
    "utf8",
  ),
  fs.writeFile(
    path.join(outDir, "externals.txt"),
    `${extracted.externals.join("\n")}\n`,
    "utf8",
  ),
]);

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto("https://pixelops.design/", {
  waitUntil: "domcontentloaded",
  timeout: 120000,
});
await settleAndLazyLoad();
await page.waitForFunction(
  () => document.documentElement.scrollHeight > window.innerHeight * 3,
  { timeout: 30000 },
).catch(() => {});
await page.screenshot({
  path: path.join(outDir, "screenshot-mobile.png"),
  fullPage: true,
});

await browser.close();

console.log(
  JSON.stringify(
    {
      outDir,
      meta: extracted.meta,
      counts: {
        images: extracted.imageUrls.length,
        inlineSvgs: extracted.meta.inlineSvgCount,
        tokens: Object.keys(extracted.tokens).length,
        fonts: extracted.fonts.length,
        colors: extracted.colors.length,
        externals: extracted.externals.length,
        pricing: extracted.copy.pricing.length,
        faq: extracted.copy.faq.length,
      },
    },
    null,
    2,
  ),
);
