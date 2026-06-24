const useCases = [
  {
    label: "SaaS Company (HR Tech)",
    title: "Three months of LinkedIn content from one webinar series",
    body:
      "We've run webinars for 2 years but never had bandwidth to repurpose them properly. PixelOps gave us 3 months of LinkedIn content from our Q4 webinar series. Our engagement rate went from 2.1% to 8.3%.",
    author: "Michael Torres",
    role: "Director of Marketing",
  },
  {
    label: "Professional Services Firm",
    title: "186 qualified downloads from a lead magnet PDF",
    body:
      "The lead magnet PDF from our 'Future of Work' webinar generated 186 downloads in the first month. That's 186 qualified prospects we wouldn't have captured otherwise. ROI was immediate.",
    author: "Jennifer Park",
    role: "Head of Business Development",
  },
  {
    label: "Professional Services Firm",
    title: "15–20 hours saved for every webinar",
    body:
      "Honestly, the time savings alone justified the cost. Our designer was spending 15–20 hours per webinar on repurposing. Now she focuses on campaign creative while PixelOps handles the execution.",
    author: "David Okonkwo",
    role: "Creative Director",
  },
] as const;

export default function WebinarUseCases() {
  return (
    <section id="social-proof" className="bg-white px-5 py-12 sm:px-0 sm:py-20 lg:py-24">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <header className="max-w-[760px]">
          <p className="font-sans text-base font-normal uppercase tracking-[0.01em] text-brand-coral lg:text-xl">
            Social Proof
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.12] tracking-[-0.045em] text-brand-dark sm:text-5xl lg:text-[58px] lg:leading-[1.08]">
            How B2B Teams Use PixelOps Content
          </h2>
        </header>

        <div className="no-scrollbar mt-12 flex max-w-full snap-x snap-mandatory gap-5 overflow-x-auto pb-3 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0">
          {useCases.map((item) => (
            <article
              key={item.author}
              className="flex min-h-[320px] min-w-[82vw] snap-start flex-col rounded-2xl border border-scraped-silver/70 bg-white p-5 shadow-[0_1px_2px_rgb(16_24_40_/_0.03)] sm:min-w-[430px] sm:p-7 lg:min-h-[350px] lg:min-w-0 lg:p-8"
            >
              <p className="font-display text-xl font-bold leading-tight tracking-[-0.025em] text-brand-dark lg:text-[22px]">
                {item.label}
              </p>
              <h3 className="sr-only">{item.title}</h3>

              <p className="mt-6 font-sans text-base leading-7 text-scraped-steel sm:text-lg lg:text-[22px] lg:leading-[1.45]">
                {item.body}
              </p>

              <footer className="mt-auto flex items-center gap-4 pt-8">
                <div
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#f6d7c8] font-display text-base font-bold text-brand-coral"
                >
                  {item.author
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-sans text-xl font-medium leading-6 text-brand-dark lg:text-[22px]">
                    {item.author}
                  </p>
                  <p className="mt-1 font-sans text-base leading-6 text-scraped-steel lg:text-[20px]">
                    {item.role}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
