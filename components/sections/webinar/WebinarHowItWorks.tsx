import {
  CalendarDays,
  FileText,
  PackageCheck,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ProcessStep = {
  title: string;
  body: string;
  icon: LucideIcon;
};

const steps: ProcessStep[] = [
  {
    title: "Submit Your Webinar",
    body:
      "Share your recording link + any brand assets (logo, colors, fonts). No prep work required on your end.",
    icon: CalendarDays,
  },
  {
    title: "Strategy Call (15 Minutes)",
    body:
      "We'll ask about your goals, audience, and where you plan to distribute content. This ensures everything aligns with your marketing strategy.",
    icon: PhoneCall,
  },
  {
    title: "We Design",
    body:
      "Our team extracts insights, maps content structure, and creates your asset suite. You're welcome to check in anytime, but we don't need your involvement until review.",
    icon: Sparkles,
  },
  {
    title: "Review & Revisions",
    body:
      "You receive all assets for feedback. We include one round of revisions to ensure everything meets your standards.",
    icon: FileText,
  },
  {
    title: "Final Delivery",
    body:
      "All files delivered in organized folders (by format and platform). Plus: usage recommendations for each asset.",
    icon: PackageCheck,
  },
];

export default function WebinarHowItWorks() {
  return (
    <section id="process" className="bg-white px-5 py-12 sm:px-0 sm:py-20 lg:py-24">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <header className="mx-auto max-w-[1060px] text-center">
          <p className="font-sans text-base font-normal uppercase tracking-[0.01em] text-brand-coral lg:text-xl">
            Process
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.12] tracking-[-0.045em] text-brand-dark sm:text-5xl lg:text-[58px] lg:leading-[1.12]">
            How It Works: From Recording to Published Content
          </h2>
        </header>

        <div className="mt-14 grid gap-x-16 gap-y-12 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title}>
                <div className="flex items-center gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#fff0ee] text-brand-coral">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-xl font-bold leading-tight tracking-[-0.02em] text-brand-dark lg:text-[22px]">
                    {index + 1}. {step.title}
                  </h3>
                </div>
                <p className="mt-7 font-sans text-lg leading-8 text-scraped-steel lg:text-[22px] lg:leading-[1.35]">
                  {step.body}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-14 max-w-[920px] text-center font-sans text-xl font-semibold leading-8 text-brand-dark sm:text-2xl lg:mt-16 lg:text-[24px]">
          Timeline: 7 business days from submission to final delivery.
        </p>
      </div>
    </section>
  );
}
