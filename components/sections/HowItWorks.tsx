"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    icon: "/assets/programming-script-2-streamline-flex-2326cc8a.svg",
    title: "Subscribe to a plan",
    description: "Request as many designs as you’d like.",
    alt: "A request sheet with a lime green tab",
  },
  {
    icon: "/assets/image-picture-landscape-1-streamline-flex-cceb0673.svg",
    title: "Receive your design",
    description: "Within two business days or less.",
    alt: "A design preview with lime green shapes",
  },
  {
    icon: "/assets/interface-time-alarm-streamline-flex-0306d465.svg",
    title: "Refine until it’s right",
    description: "We’ll revise the designs until you’re 100% satisfied.",
    alt: "A lime green clock",
  },
] as const;

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-[60px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-[60px]">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={fadeInUp}
        >
          <p className="font-display text-base font-normal text-brand-dark sm:text-lg lg:text-xl">
            Our process
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.15] tracking-[-0.035em] text-brand-dark sm:text-4xl lg:text-[60px] lg:leading-[1.15]"
          >
            3 Simple steps to limitless graphic design services
          </h2>
        </motion.div>

        <motion.ol
          className="mx-auto mt-12 grid max-w-5xl gap-10 sm:mt-[60px] md:grid-cols-3 md:gap-6 lg:gap-[25px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              variants={fadeInUp}
              className="relative mx-auto flex w-full max-w-[300px] flex-col items-center text-center"
            >
              <span className="sr-only">Step {index + 1}</span>
              <div className="relative size-24 sm:size-[100px]">
                <Image
                  src={step.icon}
                  alt={step.alt}
                  fill
                  sizes="100px"
                  className="object-contain"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-medium leading-[1.25] tracking-[-0.02em] text-brand-dark sm:text-2xl lg:text-[26px]">
                {step.title}
              </h3>
              <p className="mt-1.5 text-balance font-display text-lg font-normal leading-[1.3] text-brand-dark sm:text-xl lg:text-[22px]">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
