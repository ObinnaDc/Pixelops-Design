import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const bookingUrl = "https://cal.com/pixelops/15min";

const plans = [
  {
    name: "Single Webinar Package",
    price: "$2,000",
    cadence: "/webinar",
    bestFor:
      "Companies running 1–2 webinars per quarter who want to test our service.",
    intro: "Everything you need to maximise one webinar's ROI:",
    features: [
      "Premium Lead Magnet Guide (15–20 pages)",
      "2 LinkedIn Carousel Sets (14–20 slides total)",
      "5 Social Media Graphics (multi-platform)",
      "3–5 Short-Form Video Clips (captioned, edited)",
      "Email Announcement Template",
      "One round of revisions",
      "7-day delivery guarantee",
    ],
    cta: "Get started with one Webinar",
    highlighted: false,
  },
  {
    name: "Monthly Retainer",
    price: "$5,000",
    cadence: "/month",
    bestFor:
      "B2B companies running consistent webinar programs who want systematic repurposing built into their workflow.",
    intro: "For teams running regular webinars (3–4 per month):",
    features: [
      "Everything in Single Webinar Package × 3–4 webinars",
      "Priority 4-day turnaround",
      "Dedicated account manager (not rotating team)",
      "Unused webinar credits roll over (up to 2 months)",
      "10% discount vs. per-webinar pricing",
    ],
    cta: "Schedule a strategy call",
    highlighted: true,
  },
  {
    name: "Quarterly Package",
    price: "$14,000",
    cadence: "/quarter",
    bestFor:
      "Enterprise marketing teams or agencies running multiple webinar series simultaneously.",
    intro: "Everything in Monthly Retainer, plus:",
    features: [
      "10–12 webinars per quarter",
      "Bi-weekly strategy check-ins",
      "Content performance analytics dashboard",
      "First priority on rush requests",
      "Competitor webinar content analysis (quarterly)",
      "20% discount vs. per-webinar pricing",
    ],
    cta: "Book an Enterprise Consultation",
    highlighted: false,
  },
] as const;

export default function WebinarPricing() {
  return (
    <section id="pricing" className="bg-white px-5 py-12 sm:px-0 sm:py-20 lg:py-24">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <header className="mx-auto max-w-[820px] text-center">
          <p className="font-sans text-base font-normal uppercase tracking-[0.01em] text-brand-coral lg:text-xl">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.12] tracking-[-0.045em] text-brand-dark sm:text-5xl lg:text-[58px] lg:leading-[1.08]">
            Pricing &amp; Packages
          </h2>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-start lg:gap-8">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-white p-6 sm:p-7 lg:p-8",
                plan.highlighted
                  ? "border-brand-coral bg-[#fffafa] shadow-[0_18px_40px_rgb(255_94_87_/_0.12)] lg:-mt-4"
                  : "border-scraped-silver/70 shadow-[0_1px_2px_rgb(16_24_40_/_0.03)]",
              )}
            >
              {plan.highlighted ? (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-brand-coral px-5 py-2 font-sans text-sm font-bold text-white shadow-soft">
                  Most Popular
                </div>
              ) : null}

              <h3 className="font-display text-xl font-bold leading-tight tracking-[-0.025em] text-brand-dark lg:text-[22px]">
                {plan.name}
              </h3>
              <p className="mt-4 font-sans text-base font-medium leading-7 text-scraped-steel lg:text-[18px]">
                <span className="font-bold text-brand-dark">Best for:</span>{" "}
                {plan.bestFor}
              </p>

              <div className="mt-7 flex items-end gap-1 font-display font-bold tracking-[-0.045em] text-brand-dark">
                <span className="text-4xl leading-none lg:text-[40px]">
                  {plan.price}
                </span>
                <span className="pb-1 font-sans text-xl font-semibold tracking-normal">
                  {plan.cadence}
                </span>
              </div>

              <p className="mt-7 font-sans text-base font-semibold leading-7 text-scraped-steel lg:text-[18px]">
                {plan.intro}
              </p>

              <ul className="mt-3 space-y-2 font-sans text-base leading-6 text-scraped-steel lg:text-[17px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-brand-coral"
                      strokeWidth={2.5}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "mt-8 inline-flex h-12 w-full items-center justify-center rounded-full px-5 text-center font-sans text-base font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2",
                  plan.highlighted
                    ? "bg-brand-coral text-white hover:bg-brand-coral/90"
                    : "border border-brand-coral text-brand-coral hover:bg-[#fff0ee]",
                )}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[1120px] text-center font-sans text-lg font-medium leading-8 text-brand-dark lg:text-[20px]">
          If you&apos;re not satisfied with your first webinar package, we&apos;ll
          revise until you are—or refund 100% of your payment. No questions
          asked
        </p>
      </div>
    </section>
  );
}
