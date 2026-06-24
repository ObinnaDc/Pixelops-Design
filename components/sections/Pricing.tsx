"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/types";

interface DisplayPlan extends PricingPlan {
  description: string;
  dark?: boolean;
}

const plans: DisplayPlan[] = [
  {
    name: "Lite",
    price: "$600",
    cadence: "/mo.",
    description:
      "Perfect for SMEs with average workload in need of some creative help.",
    features: [
      "1 request at a time",
      "Unlimited Requests",
      "72 hour turnaround",
      "Pause or Cancel Anytime",
      "Task Management Portal",
    ],
    cta: "Start today",
    featured: true,
  },
  {
    name: "Standard",
    price: "$1,000",
    cadence: "/mo.",
    description: "Increased capacity. Great for SMEs with more regular workload.",
    features: [
      "2 requests at a time",
      "Unlimited Requests",
      "48 hour turnaround",
      "Pause or Cancel Anytime",
      "Shared Slack Channel",
      "Task Management Portal",
    ],
    cta: "Start today",
  },
  {
    name: "Pro",
    price: "$1,400",
    cadence: "/mo.",
    description:
      "Get the highest possible output for your high volume business.",
    features: [
      "Unlimited requests at a time",
      "Unlimited Requests",
      "24 hour turnaround",
      "Pause or Cancel Anytime",
      "Shared Slack Channel",
      "Task Management Portal",
      "Dedicated account manager",
    ],
    cta: "Start today",
    dark: true,
  },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 28 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-24 bg-brand-light py-20 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16 xl:px-20">
        <header className="text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.02em] text-brand-dark sm:text-base">
            Pricing &amp; planning
          </p>
          <h2
            id="pricing-heading"
            className="mx-auto mt-6 max-w-[1280px] text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-brand-dark sm:text-5xl lg:text-[64px]"
          >
            Design subscription plans that scale with your business
          </h2>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-[72px] lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              custom={index}
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className={cn(
                "relative flex min-h-[620px] flex-col rounded-2xl border p-7 sm:p-9 lg:min-h-[670px] lg:p-11",
                plan.dark
                  ? "border-brand-dark bg-brand-dark text-white"
                  : "border-brand-muted/55 bg-white text-brand-dark",
              )}
            >
              {plan.featured ? (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-brand-muted/40 bg-white px-2.5 py-1 font-sans text-sm font-medium text-brand-primary shadow-control">
                  Most popular
                </span>
              ) : null}

              <h3 className="font-display text-2xl font-semibold tracking-[-0.025em]">
                {plan.name}
              </h3>
              <p
                className={cn(
                  "mt-1 min-h-[72px] font-sans text-base leading-6",
                  plan.dark ? "text-white" : "text-brand-dark",
                )}
              >
                {plan.description}
              </p>

              <div className="mt-10 flex items-baseline gap-1.5">
                <span className="font-display text-[38px] font-semibold leading-none tracking-[-0.035em]">
                  {plan.price}
                </span>
                <span className="font-sans text-base">{plan.cadence}</span>
              </div>
              <p className="mt-4 font-sans text-base">
                pause or cancel anytime
              </p>

              <a
                href="#contact"
                className={cn(
                  "mt-9 inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border font-sans text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
                  plan.dark
                    ? "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus-visible:ring-offset-brand-dark"
                    : plan.name === "Standard"
                      ? "border-brand-primary bg-brand-primary text-white hover:bg-brand-coral"
                      : "border-brand-primary text-brand-dark hover:bg-brand-primary hover:text-white",
                )}
              >
                {plan.cta}
                <ArrowRight aria-hidden="true" className="size-5" />
              </a>

              <div className="mt-9">
                <h4 className="font-sans text-base font-semibold">
                  What&apos;s included
                </h4>
                <ul className="mt-4 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-sans text-sm leading-5 sm:text-base"
                    >
                      <Check
                        aria-hidden="true"
                        strokeWidth={1.8}
                        className="mt-0.5 size-4 shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 flex flex-col gap-7 rounded-2xl border border-brand-muted/55 bg-white p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <h3 className="font-display text-2xl font-medium tracking-[-0.025em] text-brand-dark">
              Are you interested in a quoted project?
            </h3>
            <p className="mt-2 max-w-[720px] font-sans text-base leading-6 text-brand-dark">
              If your project doesn&apos;t fit in the above plans, or if
              you&apos;d like to discuss before making up your mind, book a call
              with us.
            </p>
          </div>
          <a
            href="https://cal.com/pixelops/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-brand-primary px-7 font-sans text-base font-semibold text-white transition-colors hover:bg-brand-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            Call Pixelops
            <Phone aria-hidden="true" className="size-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
