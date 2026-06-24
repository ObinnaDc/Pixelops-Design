"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

import { assetPath } from "@/lib/paths";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    quote: "A great business decision",
    body: "Pixelops has been a great help to my business as we have a continuous demand for design work from our clients. It has been a great business decision using them to save time and money.",
    author: "John",
    role: "Founder of",
    company: "Classic Forms and Products",
    avatar: "/assets/john-tyler-459b3a56.jpeg",
  },
  {
    quote: "Been a breeze",
    body: "All I can say is that it has been a breeze since I started using them for my spillover design work.",
    author: "Marc",
    role: "Signage Printer",
    avatar: "/assets/download-4-7eeb5be1.jpeg",
  },
  {
    quote: "A great experience",
    body: "It has been a great experience working with Pixelops to get designs and branding done for my new startup.",
    author: "Femi",
    role: "Founder @",
    company: "Sliced",
    avatar: "/assets/jxigvmcb-400x400-488eccf8.jpg",
  },
];

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(direction: "previous" | "next") {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>("[data-testimonial-card]");
    const gap = 16;

    carousel.scrollBy({
      left: (card?.offsetWidth ?? carousel.clientWidth) * (direction === "next" ? 1 : -1) +
        gap * (direction === "next" ? 1 : -1),
      behavior: "smooth",
    });
  }

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16 xl:px-20">
        <header className="text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.02em] text-brand-dark sm:text-base">
            Customer stories
          </p>
          <h2
            id="testimonials-heading"
            className="mx-auto mt-6 max-w-[1240px] text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-brand-dark sm:text-5xl lg:text-[64px]"
          >
            What some of our customers say about Pixelops
          </h2>
        </header>

        <div
          ref={carouselRef}
          className="-mx-5 mt-14 flex items-start snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-[72px] lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              data-testimonial-card
              className="w-[86vw] max-w-[420px] shrink-0 snap-center rounded-[16px] border border-brand-muted/70 bg-white p-6 sm:w-[68vw] sm:p-7 lg:w-auto lg:max-w-none lg:snap-none"
            >
              <blockquote>
                <h3 className="font-display text-[28px] font-semibold leading-[1.2] tracking-[-0.03em] text-brand-dark lg:text-[30px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </h3>
                <p className="mt-5 font-sans text-base leading-[1.5] text-brand-muted lg:text-[17px]">
                  {testimonial.body}
                </p>
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={testimonial.avatar ? assetPath(testimonial.avatar) : ""}
                  alt={`${testimonial.author} portrait`}
                  width={40}
                  height={40}
                  className="size-10 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0 font-sans">
                  <p className="text-base font-medium leading-5 text-brand-dark">
                    {testimonial.author}
                  </p>
                  <p className="mt-0.5 text-sm leading-5 text-brand-dark">
                    {testimonial.role}
                    {testimonial.company ? (
                      <>
                        {" "}
                        <span className="text-brand-primary">
                          {testimonial.company}
                        </span>
                      </>
                    ) : null}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => scrollCarousel("previous")}
            className="grid size-12 place-items-center rounded-xl border border-brand-dark/15 bg-white text-brand-dark transition-colors hover:bg-brand-dark/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            <ArrowLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => scrollCarousel("next")}
            className="grid size-12 place-items-center rounded-xl border border-brand-dark/15 bg-white text-brand-dark transition-colors hover:bg-brand-dark/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          >
            <ArrowRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
