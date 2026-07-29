import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Focus Flow - Productivity app — Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

const showcaseImages = [
  {
    src: "/assets/showcase/focus-flow/instagram-post-9.png",
    alt: "FocusFlow tip to track your progress",
  },
  {
    src: "/assets/showcase/focus-flow/instagram-post-8.png",
    alt: "FocusFlow tip to take short breaks",
  },
  {
    src: "/assets/showcase/focus-flow/instagram-post-7.png",
    alt: "FocusFlow tip to minimize distractions",
  },
  {
    src: "/assets/showcase/focus-flow/instagram-post-4.png",
    alt: "FocusFlow productivity tips campaign",
  },
  {
    src: "/assets/showcase/focus-flow/instagram-post-2.png",
    alt: "FocusFlow productivity app feature campaign",
  },
] as const;

export default function FocusFlowPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-brand-dark">
        <section aria-label="Focus Flow cover">
          <Image
            src={assetPath(
              "/assets/showcase/focus-flow/instagram-post-17.png",
            )}
            alt="FocusFlow productivity app displayed on three phones"
            width={2048}
            height={1365}
            priority
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </section>

        <section className="w-full px-5 pb-20 pt-[70px] sm:px-8 sm:pb-24 lg:px-[102px]">
          <div className="grid gap-9 md:grid-cols-2 md:gap-12">
            <div>
              <h1 className="font-sans text-[24px] font-semibold leading-tight">
                Focus Flow - Productivity app
              </h1>
              <p className="mt-[6px] font-sans text-[18px] font-normal leading-normal">
                Social media graphics
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[21px] font-semibold leading-tight">
                Brief
              </h2>
              <p className="mt-[6px] max-w-[516px] font-sans text-[16px] font-normal leading-[1.45]">
                Our Client asked for an engaging series of posts for Instagram
                to promote the launch of Focusflow, a productivity app. We used
                clean, modern visuals, highlighted key features, and emphasized
                how the app helps users stay focused, organized, and efficient.
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
