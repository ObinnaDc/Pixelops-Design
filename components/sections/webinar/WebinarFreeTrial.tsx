const bookingUrl = "https://cal.com/pixelops/15min";

const benefits = [
  "See our design quality with your actual content",
  "Evaluate if the ROI justifies the investment",
  "Experience our communication style before committing",
] as const;

export default function WebinarFreeTrial() {
  return (
    <section id="free-audit" className="bg-white px-5 py-12 sm:px-0 sm:py-20 lg:py-24">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto rounded-[28px] bg-[#F6F2EB] px-6 py-14 text-center sm:rounded-[36px] sm:px-10 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-[760px]">
            <h2 className="font-display text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.12] tracking-[-0.045em] text-brand-dark sm:text-5xl lg:text-[52px] lg:leading-[1.08]">
              See the PixelOps Difference
              <span className="block">(For Free)</span>
            </h2>

            <p className="mt-5 font-sans text-lg leading-8 text-scraped-steel lg:text-[20px]">
              Not sure if your webinars are repurposing-ready?
            </p>

            <div className="mx-auto mt-8 max-w-[700px] text-left font-sans text-base leading-7 text-scraped-steel sm:text-lg">
              <p>
                Send us one webinar recording. We&apos;ll analyze the content
                and create a sample asset (your choice: carousel mock-up, PDF
                excerpt, or video clip concept) to show you the potential.
              </p>
              <p className="mt-5">
                Zero cost. Zero obligation. You keep the mock-up even if you
                don&apos;t move forward.
              </p>

              <div className="mt-6">
                <p>This lets you:</p>
                <ul className="mt-1 list-disc pl-7">
                  {benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-6">
                Most companies who request an audit become clients within 2
                weeks.
              </p>
            </div>

            <div className="mt-9 flex max-w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-full bg-[#ED6B5C] px-4 text-center font-sans text-[13px] font-bold text-white transition hover:bg-[#ED6B5C]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6B5C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F2EB] min-[380px]:text-sm sm:w-auto sm:px-6 sm:text-base"
              >
                Get my free webinar content audit
              </a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-full bg-[#ED6B5C] px-4 text-center font-sans text-[13px] font-bold text-white transition hover:bg-[#ED6B5C]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED6B5C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F2EB] min-[380px]:text-sm sm:w-auto sm:px-6 sm:text-base"
              >
                Schedule a 20minute strategy call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
