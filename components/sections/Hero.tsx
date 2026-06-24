"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { assetPath } from "@/lib/paths";

const showcaseItems = [
  {
    src: "/assets/3af007187342321.65861e72bc975-copy-d7380a09.png",
    alt: "Apex Technology brand identity on an abstract blue and purple background",
  },
  {
    src: "/assets/c8a047194427819.65fbd02861d9c-cff74cc0.png",
    alt: "HighLine Cleaning Services branded blue van",
  },
  {
    src: "/assets/54dcc3188376631.659b961f4d5d2-copy-7cc80898.png",
    alt: "Purple Glaimor branded apparel",
  },
  {
    src: "/assets/lightbox-sign-mockup-85a7f17c.png",
    alt: "Aetherium illuminated exterior sign",
  },
  {
    src: "/assets/mockup-aecb1a5a.png",
    alt: "Aetherium outdoor advertising display",
  },
  {
    src: "/assets/54dcc3188376631.659b961f4d5d2-copy-2-c85bd8a9.png",
    alt: "Purple Glaimor branded takeaway cups",
  },
  {
    src: "/assets/joju-treats-brand-mockup.png",
    alt: "Orange and green Joju Treats business card branding",
  },
] as const;

const entrance = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-9 pt-10 sm:pt-14 lg:pb-0 lg:pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-top opacity-70"
        style={{
          backgroundImage: `url(${assetPath("/assets/background-pattern-5610124a.svg")})`,
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center px-5 text-center sm:px-8 lg:px-10 xl:px-[60px]">
        <motion.div
          variants={entrance}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Link
            href="/#pricing"
            className="inline-flex min-h-9 items-center gap-2 rounded-full bg-brand-coral/10 px-4 py-1.5 font-sans text-sm font-medium text-brand-dark transition hover:bg-brand-coral/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
          >
            Get a $50 1-week trial
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </motion.div>

        <motion.h1
          variants={entrance}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-[1080px] text-balance font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.12] tracking-[-0.045em] text-brand-dark"
        >
          Unlimited graphic design
          <br className="hidden sm:block" /> for your business
        </motion.h1>

        <motion.p
          variants={entrance}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.18, duration: 0.55, ease: "easeOut" }}
          className="mt-5 max-w-[820px] text-balance font-hind text-lg font-medium leading-[1.35] text-scraped-steel sm:text-xl lg:text-2xl"
        >
          Our team of designers &amp; dedicated account managers create a
          seamless extension to your marketing team or project.
        </motion.p>

        <motion.div
          variants={entrance}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.28, duration: 0.55, ease: "easeOut" }}
          className="mt-7 flex w-full flex-col-reverse items-stretch justify-center gap-3 min-[380px]:w-auto min-[380px]:flex-row min-[380px]:items-center"
        >
          <Link
            href="/#pricing"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-brand-coral bg-brand-coral px-5 font-sans text-base font-medium text-white shadow-control transition hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 active:translate-y-px"
          >
            See plans
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
          <a
            href="https://cal.com/pixelops/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-black px-5 font-sans text-base font-medium text-white shadow-control transition hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 active:translate-y-px"
          >
            Schedule demo
          </a>
        </motion.div>
      </div>

      <motion.div
        aria-label="Featured design projects"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.7, ease: "easeOut" }}
        className="relative mt-16 flex snap-x snap-mandatory gap-1.5 overflow-x-auto px-2 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-3 lg:mt-24"
      >
        {showcaseItems.map((item, index) => (
          <div
            key={item.src}
            className="relative aspect-[1.25/1] w-[82vw] max-w-[520px] shrink-0 snap-center overflow-hidden rounded-xl bg-scraped-mist sm:w-[48vw] lg:w-[31vw] xl:w-[24vw]"
          >
            <Image
              src={assetPath(item.src)}
              alt={item.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 639px) 82vw, (max-width: 1023px) 48vw, (max-width: 1279px) 31vw, 24vw"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
