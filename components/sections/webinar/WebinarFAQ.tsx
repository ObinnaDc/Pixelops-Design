"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question:
      "What if our webinars vary in length—some are 30 minutes, others 90 minutes?",
    answer:
      "Our pricing is per webinar regardless of length. Longer webinars typically give us more content to work with, which means richer assets for you.",
  },
  {
    question: "Can you match our existing brand guidelines precisely?",
    answer:
      "Yes. Share your logo, colors, fonts, examples, and any brand rules. We design the assets to feel native to your existing marketing system.",
  },
  {
    question: "What if we need content faster than 7 days?",
    answer:
      "Rush delivery may be available depending on scope and current capacity. We will confirm the fastest realistic timeline before the project starts.",
  },
  {
    question: "Do you handle the actual posting/publishing for us?",
    answer:
      "PixelOps focuses on strategy-ready creative assets and organized delivery files. Your team keeps control of scheduling, captions, approvals, and publishing.",
  },
  {
    question: "What video formats do you provide?",
    answer:
      "We can provide vertical, square, and platform-ready video exports with captions, so your team can use them across LinkedIn, Instagram, YouTube Shorts, and TikTok.",
  },
  {
    question: "Can we request specific insights to be featured?",
    answer:
      "Absolutely. If there are specific quotes, frameworks, case studies, or moments you want featured, send them with the recording and we will prioritize them.",
  },
  {
    question:
      "What if we run panel discussions or interviews instead of solo presentations?",
    answer:
      "That works well. Panel discussions and interviews often create strong quote cards, carousel storylines, and short clips because there are multiple voices and angles.",
  },
  {
    question: "Do you offer content strategy/planning services?",
    answer:
      "Yes. We include practical recommendations for how to use the assets, and retainer clients can receive deeper planning support around rollout and priorities.",
  },
  {
    question: "Can you repurpose older webinars from our archive?",
    answer:
      "Yes. Archived webinars are a great fit as long as the recording is still relevant and you can provide any current brand assets or positioning updates.",
  },
] as const;

export default function WebinarFAQ() {
  return (
    <section id="faq" className="bg-white px-5 py-12 sm:px-0 sm:py-20 lg:py-24">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <header className="mx-auto max-w-[900px] text-center">
          <p className="font-sans text-base font-normal uppercase tracking-[0.01em] text-brand-coral lg:text-xl">
            FAQs
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,8vw,3rem)] font-bold leading-[1.12] tracking-[-0.045em] text-brand-dark sm:text-5xl lg:text-[58px] lg:leading-[1.08]">
            Frequently Asked Questions
          </h2>
        </header>

        <Accordion.Root
          type="single"
          collapsible
          defaultValue="faq-0"
          className="mx-auto mt-10 max-w-[1120px] space-y-4 sm:mt-12"
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={faq.question}
              value={`faq-${index}`}
              className="overflow-hidden rounded-xl border border-scraped-silver/70 bg-white"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left font-sans text-base font-bold leading-6 text-brand-dark outline-none transition hover:bg-brand-light/40 focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 sm:px-6 lg:px-7 lg:text-[17px]">
                  <span>{faq.question}</span>
                  <span className="shrink-0 text-scraped-steel">
                    <Plus
                      aria-hidden="true"
                      className="size-5 group-data-[state=open]:hidden"
                      strokeWidth={1.8}
                    />
                    <Minus
                      aria-hidden="true"
                      className="hidden size-5 group-data-[state=open]:block"
                      strokeWidth={1.8}
                    />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-5 pb-5 font-sans text-base leading-7 text-scraped-steel sm:px-6 lg:px-7 lg:text-[17px]">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <p className="mx-auto mt-10 max-w-[920px] text-center font-sans text-lg font-medium leading-8 text-brand-dark lg:text-[20px]">
          Timeline: 7 business days from submission to final delivery.
        </p>
      </div>
    </section>
  );
}
