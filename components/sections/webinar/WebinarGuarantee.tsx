import { ClipboardCheck, Clock, FileCheck2, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Guarantee = {
  title: string;
  body: string;
  icon: LucideIcon;
};

const guarantees: Guarantee[] = [
  {
    title: "7-Day Delivery Promise",
    body:
      "If we miss our deadline, your next webinar is 50% off. In 2 years, we've never had to honor this.",
    icon: Clock,
  },
  {
    title: "Unlimited Revisions on First Project",
    body:
      "Not happy with something? We'll revise until you are. Your satisfaction matters more than our efficiency.",
    icon: ClipboardCheck,
  },
  {
    title: "File Ownership",
    body:
      "You own all files we create. Use them however you want, forever. No licensing restrictions.",
    icon: FileCheck2,
  },
  {
    title: "Brand Consistency Lock",
    body:
      "Once we've nailed your brand style, we document it. Every future webinar matches perfectly—no variation unless you request it.",
    icon: ShieldCheck,
  },
];

export default function WebinarGuarantee() {
  return (
    <section id="guarantee" className="bg-[#fbfbfb] px-5 py-12 sm:px-0 sm:py-20 lg:py-24">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <header className="mx-auto max-w-[900px] text-center">
          <p className="font-sans text-base font-normal uppercase tracking-[0.01em] text-brand-coral lg:text-xl">
            Guaranty
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.12] tracking-[-0.045em] text-brand-dark sm:text-5xl lg:text-[52px] lg:leading-[1.08]">
            The pixelops guarantee
          </h2>
        </header>

        <div className="mx-auto mt-12 grid max-w-[1240px] gap-6 md:grid-cols-2 lg:gap-8">
          {guarantees.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-xl border border-scraped-silver/70 bg-white p-6 sm:p-7 lg:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#ED6B5C] text-white">
                    <Icon aria-hidden="true" className="size-4" strokeWidth={2.4} />
                  </span>
                  <h3 className="font-display text-lg font-bold leading-tight tracking-[-0.02em] text-brand-dark lg:text-[18px]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-7 font-sans text-base leading-7 text-scraped-steel lg:text-[18px] lg:leading-7">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
