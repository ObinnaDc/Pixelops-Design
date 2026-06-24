"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Asterisk, Plus } from "lucide-react";

import type { FAQItem } from "@/types";

const faqItems: FAQItem[] = [
  {
    question: "How long does it take to setup?",
    answer:
      "Once you have booked a call and settled on your plan or trial, we invite you to our task management portal right after payment and you can start sending in requests from there or via email as soon as needed.",
  },
  {
    question: "What is the turn around time?",
    answer:
      "For most designs, you can expect a speedy delivery within just 2-3 business days. We prioritize efficiency without compromising on quality. While generating initial concepts and addressing intricate design requests take a bit longer, rest assured, we are fully committed to delivering top-tier designs as promptly as possible.",
  },
  {
    question: "What is the maximum number of requests I can have?",
    answer:
      "You can submit as many requests at a time but the number of requests that will be actively worked on at a time is determined by your subscription plan.",
  },
  {
    question: "What if I don't like a design?",
    answer:
      "We offer unlimited revision on all requests. If you don't like a design we will make the necessary changes until you are satisfied.",
  },
  {
    question: "How does the trial work?",
    answer:
      "The 1-week trial gives you access to try out Pixelops services as a Lite Plan subscriber. After a period of 1 week you can then decide if you want to continue working with us and choose the plan that works best for you.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 bg-brand-light py-20 sm:py-24 lg:py-[100px]"
    >
      <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-8">
        <header className="flex items-center justify-between">
          <h2
            id="faq-heading"
            className="font-display text-4xl font-semibold tracking-[-0.04em] text-brand-dark sm:text-5xl"
          >
            FAQ
          </h2>
          <Asterisk
            aria-hidden="true"
            strokeWidth={3.2}
            className="size-12 text-black sm:size-14"
          />
        </header>

        <AccordionPrimitive.Root
          type="single"
          collapsible
          defaultValue="item-5"
          className="mt-12 flex w-full flex-col gap-2 sm:mt-14"
        >
          {faqItems.map((item, index) => (
            <AccordionPrimitive.Item
              key={item.question}
              value={`item-${index + 1}`}
              className="overflow-hidden rounded-2xl border border-brand-muted/25 bg-brand-light"
            >
              <AccordionPrimitive.Header>
                <AccordionPrimitive.Trigger className="group flex min-h-[104px] w-full items-center justify-between gap-6 px-6 py-7 text-left font-sans text-base font-semibold leading-6 text-brand-dark outline-none transition-colors hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-primary sm:min-h-[108px] sm:px-11">
                  <span>{item.question}</span>
                  <Plus
                    aria-hidden="true"
                    className="size-4 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>

              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-6 pb-8 font-sans text-sm leading-6 text-brand-dark sm:px-11 sm:pb-10 sm:text-base">
                  {item.answer}
                </div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  );
}
