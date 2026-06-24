import { Check } from "lucide-react";

const reasons = [
  "5-day turnaround (guaranteed)",
  "Professional design quality (every time)",
  "Proven frameworks (not guesswork)",
  "100% satisfaction guarantee (revise until you're happy)",
  "Built for B2B marketing teams (we speak your language)",
] as const;

export default function WebinarWhyChoose() {
  return (
    <section id="why-pixelops" className="bg-white px-5 py-12 sm:px-0 sm:py-20 lg:py-24">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <header className="mx-auto max-w-[900px] text-center">
          <h2 className="font-display text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.12] tracking-[-0.045em] text-brand-dark sm:text-5xl lg:text-[52px] lg:leading-[1.08]">
            Why B2B Teams Choose PixelOps
          </h2>
        </header>

        <div className="mx-auto mt-12 grid max-w-[1120px] gap-5 md:grid-cols-2 lg:grid-cols-6">
          {reasons.map((reason, index) => (
            <article
              key={reason}
              className={[
                "flex items-center gap-3 rounded-lg border border-scraped-silver/70 bg-white px-5 py-5 font-sans text-base font-bold leading-6 text-brand-dark",
                index < 3 ? "lg:col-span-2" : "lg:col-span-3",
              ].join(" ")}
            >
              <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#ED6B5C] text-white">
                <Check aria-hidden="true" className="size-3" strokeWidth={3} />
              </span>
              <span>{reason}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
