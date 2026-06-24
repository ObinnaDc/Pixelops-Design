import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { assetPath } from "@/lib/paths";

const presenterImage = "/assets/webinar/image-214-e44eace8.svg";

export default function WebinarHero() {
  return (
    <section className="bg-white px-5 py-12 sm:px-0 sm:pb-12 sm:pt-24 lg:pb-14 lg:pt-[145px]">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-[1400px] text-center">
          <h1 className="mx-auto max-w-[1320px] text-balance font-display text-[clamp(2.1rem,9vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.055em] text-brand-dark sm:text-[56px] sm:leading-[1.2] lg:text-[72px] lg:leading-[1.6]">
            Your Webinar Costs $5,000 to
            <br className="hidden lg:block" /> Produce. then generates leads for
            <br className="hidden lg:block" /> only 48 hours
          </h1>

          <p className="mx-auto mt-5 max-w-[1080px] text-balance font-sans text-base font-normal leading-7 text-scraped-steel sm:text-lg lg:text-[20px] lg:leading-[1.45]">
            PixelOps transforms your one-time webinar into 90 days of systematic
            lead generation—with
            <br className="hidden lg:block" /> professionally designed assets
            your team can deploy in minutes, not weeks.
          </p>

          <a
            href="https://cal.com/pixelops/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-[56px] max-w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-brand-primary px-4 py-3 font-sans text-[12px] font-semibold text-white transition-colors hover:bg-brand-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 min-[380px]:gap-2 min-[380px]:px-6 min-[380px]:text-sm sm:min-h-[58px] sm:px-8 sm:text-lg"
          >
            Get your free webinar content audit
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="mt-10 w-full rounded-[20px] bg-[#fff0ed] p-0 sm:mt-14 sm:rounded-[24px] sm:p-6 lg:mt-14 lg:p-8">
          <Image
            src={assetPath(presenterImage)}
            alt="Webinar presenter with PixelOps content repurposing results"
            width={1176}
            height={718}
            priority
            sizes="(max-width: 639px) calc(100vw - 56px), (max-width: 1023px) calc(100vw - 64px), calc(100vw - 160px)"
            className="block h-auto w-full rounded-[14px]"
          />
        </div>
      </div>
    </section>
  );
}
