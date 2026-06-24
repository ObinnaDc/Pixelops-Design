import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16 xl:px-20">
        <header className="text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.02em] text-brand-dark sm:text-base">
            Reach out to us
          </p>
          <h2
            id="contact-heading"
            className="mx-auto mt-8 max-w-[1320px] text-balance font-display text-[44px] font-semibold leading-[1.08] tracking-[-0.055em] text-brand-dark sm:text-6xl lg:mt-10 lg:text-[92px]"
          >
            Redefine the way you approach design
          </h2>
        </header>

        <a
          href="https://cal.com/pixelops/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-12 flex min-h-16 w-full max-w-[970px] items-center justify-center gap-3 rounded-full bg-brand-coral px-7 font-sans text-lg font-semibold text-white transition duration-200 hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-4 sm:min-h-[82px] lg:mt-16"
        >
          Book a call
          <ArrowRight aria-hidden="true" className="size-5" />
        </a>
      </div>
    </section>
  );
}
