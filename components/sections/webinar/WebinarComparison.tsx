const comparisonRows = [
  {
    challenge: "Timeline",
    internal: "3–4 weeks (if prioritized)",
    pixelops: "7 business days, guaranteed",
  },
  {
    challenge: "Consistency",
    internal: "Depends on workload",
    pixelops: "Never miss a webinar",
  },
  {
    challenge: "Quality",
    internal: "Variable based on bandwidth",
    pixelops: "Professional design, every time",
  },
  {
    challenge: "Cost",
    internal: "$5K–8K/month (designer salary)",
    pixelops: "$2,000 per webinar, no overhead",
  },
  {
    challenge: "Strategic Input",
    internal: "You plan the repurposing strategy",
    pixelops: "We recommend best practices",
  },
] as const;

export default function WebinarComparison() {
  return (
    <section id="benefits" className="bg-white px-5 py-12 sm:px-0 sm:py-20 lg:py-24">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <header className="mx-auto max-w-[980px] text-center">
          <p className="font-sans text-base font-normal uppercase tracking-[0.01em] text-brand-coral lg:text-xl">
            Benefits
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.12] tracking-[-0.045em] text-brand-dark sm:text-5xl lg:text-[58px] lg:leading-[1.08]">
            Why PixelOps Instead of Hiring In-House
          </h2>
        </header>

        <div className="no-scrollbar mt-12 max-w-full overflow-x-auto pb-3 lg:overflow-visible lg:pb-0">
          <div className="grid min-w-[760px] grid-cols-[150px_260px_350px] items-stretch lg:min-w-0 lg:grid-cols-[minmax(180px,1fr)_minmax(300px,1.35fr)_minmax(360px,1.45fr)]">
            <div className="border-b border-scraped-silver/70 px-8 py-6 font-sans text-[20px] font-semibold text-scraped-steel">
              Challenge
            </div>
            <div className="border-b border-scraped-silver/70 px-8 py-6 font-sans text-[20px] font-semibold text-scraped-steel">
              Internal Team
            </div>
            <div className="rounded-t-2xl bg-[#fff0ee] px-8 py-6 font-sans text-[20px] font-semibold text-scraped-steel">
              Pixelops Solution
            </div>

            {comparisonRows.map((row, index) => {
              const isLast = index === comparisonRows.length - 1;

              return (
                <div key={row.challenge} className="contents">
                  <div className="border-b border-scraped-silver/70 px-8 py-7 font-sans text-[22px] font-medium text-brand-dark">
                    {row.challenge}
                  </div>
                  <div className="border-b border-scraped-silver/70 px-8 py-7 font-sans text-[22px] leading-8 text-brand-dark">
                    {row.internal}
                  </div>
                  <div
                    className={[
                      "bg-[#fff0ee] px-8 py-7 font-sans text-[22px] leading-8 text-brand-dark",
                      isLast ? "rounded-b-2xl" : "",
                    ].join(" ")}
                  >
                    {row.pixelops}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[1180px] text-center font-sans text-xl leading-8 text-brand-dark sm:text-2xl lg:mt-12 lg:text-[24px]">
          Bottom line: Your team focuses on running great webinars. We handle
          everything that happens after.
        </p>
      </div>
    </section>
  );
}
