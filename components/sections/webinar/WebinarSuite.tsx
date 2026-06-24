import Image from "next/image";

import { assetPath } from "@/lib/paths";

const deliverables = [
  {
    title: "Premium Lead Magnet Guide",
    what:
      "A professionally designed 15–20 page PDF that packages your webinar’s core insights into a downloadable resource.",
    why:
      "Lead magnets give prospects a reason to engage after your webinar ends. Use it in LinkedIn posts (\"Comment 'GUIDE' for the download\"), email campaigns, or your website.",
    receives: [
      "Print-ready PDF (your brand colors, logo, fonts)",
      "Editable Canva template for future updates",
      "Suggested LinkedIn promotion copy",
    ],
    note: "Timeline: Ready in 7 business days",
    src: "/assets/webinar/frame-3-33d5681a.svg",
    alt: "Webinar insight lead magnet guide mockup",
  },
  {
    title: "LinkedIn Carousel Sets",
    what:
      "Visual story sequences (7–10 slides each) designed to stop the scroll and drive engagement.",
    why:
      "Carousels generate 3–5x more engagement than standard LinkedIn posts. We structure each carousel around a single framework, insight, or case study from your webinar.",
    receives: [
      "2 carousel sets per webinar (14–20 total slides)",
      "Delivered as editable PowerPoint or Canva files",
      "Optimized dimensions for LinkedIn (1080x1080px)",
    ],
    note: "",
    src: "/assets/webinar/frame-1618869407-9041d255.svg",
    alt: "LinkedIn carousel displayed on a mobile device",
  },
  {
    title: "Social Media Post Graphics",
    what:
      "Ready-to-publish static graphics for LinkedIn, Twitter/X, and Instagram.",
    why:
      "Key quotes, statistics, and announcements formatted as scroll-stopping visuals. Perfect for your social media manager to schedule immediately.",
    receives: [
      "5 formatted graphics per webinar",
      "Quote cards, stat highlights, and promotional images",
      "Multiple size options (LinkedIn feed, Instagram square, Twitter header)",
    ],
    note: "",
    src: "/assets/webinar/frame-70-9f6af9b0.svg",
    alt: "Social media graphic templates",
  },
  {
    title: "Short-Form Video Clips",
    what:
      "AI Generated Video content inspired by your webinar’s most compelling insights and data points transformed into scroll stopping visual stories.",
    why:
      "Video content captures attention across LinkedIn, YouTube Shorts, Instagram Reels, and TikTok. We identify the 'aha moments' and package them for maximum impact using AI video generation tools.",
    receives: [
      "3–4 AI generated video shorts (30–90 seconds each)",
      "Hardcoded captions (optimized for sound-off viewing)",
      "Vertical (9:16) and square (1:1) formats",
      "MP4 files ready to upload",
    ],
    note: "",
    src: "/assets/webinar/frame-1618874985-9877597a.svg",
    alt: "Short-form webinar video content mockup",
  },
] as const;

export default function WebinarSuite() {
  return (
    <section className="bg-white px-5 py-12 sm:px-0 sm:py-20 lg:py-24">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <header className="mx-auto max-w-[900px] text-center">
          <p className="font-sans text-base font-normal uppercase tracking-[0.01em] text-brand-coral lg:text-xl">
            Deliverables
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.12] tracking-[-0.045em] text-brand-dark sm:text-5xl lg:text-[58px] lg:leading-[1.15]">
            The PixelOps Repurposing Suite: What You Get
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] font-sans text-base leading-7 text-scraped-steel sm:text-lg lg:text-[22px] lg:leading-8">
            For every webinar, we deliver a complete package of branded,
            publication-ready design assets:
          </p>
        </header>

        <ol className="mt-14 space-y-8 sm:mt-16 lg:mt-20 lg:space-y-10">
          {deliverables.map((item, index) => (
            <li
              key={item.title}
              className="grid overflow-hidden rounded-2xl border border-brand-muted/20 bg-white lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)]"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.025em] text-brand-dark sm:text-[28px]">
                  {index + 1}. {item.title}
                </h3>

                <p className="mt-6 font-sans text-base leading-7 text-brand-dark sm:text-lg lg:text-[20px]">
                  <strong className="font-bold">What it is:</strong> {item.what}
                </p>

                <p className="mt-5 font-sans text-base leading-7 text-brand-dark sm:text-lg lg:text-[20px]">
                  <strong className="font-bold">Why it works:</strong> {item.why}
                </p>

                <div className="mt-5">
                  <h4 className="font-sans text-base font-bold text-brand-dark sm:text-lg lg:text-[20px]">
                    What you receive:
                  </h4>
                  <ul className="mt-2 space-y-1.5 pl-6 font-sans text-base leading-7 text-scraped-steel sm:text-lg lg:text-[19px]">
                    {item.receives.map((received) => (
                      <li key={received} className="list-disc pl-1">
                        {received}
                      </li>
                    ))}
                  </ul>
                </div>

                {item.note ? (
                  <p className="mt-5 font-sans text-base font-semibold text-brand-coral sm:text-lg lg:text-[20px]">
                    {item.note}
                  </p>
                ) : null}
              </div>

              <div className="relative min-h-[260px] bg-brand-light sm:min-h-[400px] lg:min-h-full">
                <Image
                  src={assetPath(item.src)}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1023px) calc(100vw - 40px), 480px"
                  className="object-cover object-center"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
