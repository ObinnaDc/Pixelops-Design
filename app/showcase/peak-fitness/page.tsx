import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Peak-Fitness — Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

const showcaseImages = [
  {
    src: "/assets/showcase/peak-fitness/untitled400-20241103171650.jpg",
    alt: "Peak Fitness lime logo on a black background",
  },
  {
    src: "/assets/showcase/peak-fitness/untitled401-20241102093511.jpg",
    alt: "Peak Fitness brand rationale over an outdoor workout photograph",
  },
  {
    src: "/assets/showcase/peak-fitness/untitled411-20241104160131.jpg",
    alt: "Alternative Peak Fitness logo in teal and pink",
  },
  {
    src: "/assets/showcase/peak-fitness/untitled407-20241103211907.jpg",
    alt: "Peak Fitness Elevate Everyday jacket campaign",
  },
  {
    src: "/assets/showcase/peak-fitness/untitled406-restored-20241103214219.jpg",
    alt: "Peak Fitness black and lime branded T-shirts",
  },
] as const;

export default function PeakFitnessPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-brand-dark">
        <section aria-label="Peak Fitness cover">
          <Image
            src={assetPath(
              "/assets/showcase/peak-fitness/untitled400-20241103171114.jpg",
            )}
            alt="Peak Fitness logo on a bright lime background"
            width={1440}
            height={960}
            priority
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </section>

        <section className="w-full px-5 pb-20 pt-[70px] sm:px-8 sm:pb-24 lg:px-[102px]">
          <div className="grid gap-9 md:grid-cols-2 md:gap-12">
            <div>
              <h1 className="font-sans text-[24px] font-semibold leading-tight">
                Branded Apparel for Peak Fitness
              </h1>
              <p className="mt-[6px] font-sans text-[18px] font-normal leading-normal">
                Logos and branding, Branded Apparel
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[21px] font-semibold leading-tight">
                Brief
              </h2>
              <p className="mt-[6px] max-w-[516px] font-sans text-[16px] font-normal leading-[1.45]">
                We rebranded peak fitness. This included logo change and
                designing a sleek and dynamic apparel collection for the brand,
                capturing the energy and resilience of its members. With bold
                typography, minimalist icons, and performance-driven materials,
                the designs seamlessly blend style and functionality. From gym
                tees to hoodies, each piece embodies the brand&apos;s commitment
                to empowering fitness enthusiasts.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-8 sm:space-y-10">
            {showcaseImages.map((image) => (
              <Image
                key={image.src}
                src={assetPath(image.src)}
                alt={image.alt}
                width={1536}
                height={1024}
                sizes="(max-width: 1023px) calc(100vw - 40px), calc(100vw - 204px)"
                className="h-auto w-full rounded-2xl"
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
