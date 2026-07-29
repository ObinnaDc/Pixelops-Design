import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Hawthorn Brewery — Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

const showcaseImages = [
  {
    src: "/assets/showcase/hawthorn-brewery/design-1-2.png",
    alt: "Hawthorn Brewery campaign showing three raised beer glasses",
  },
  {
    src: "/assets/showcase/hawthorn-brewery/screenshot-2024-11-18-024813-1.jpg",
    alt: "Hawthorn Brewery logo on a tan background",
  },
  {
    src: "/assets/showcase/hawthorn-brewery/design-2-1.png",
    alt: "Hawthorn Brewery canned beer campaign",
  },
] as const;

export default function HawthornBreweryPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-brand-dark">
        <section aria-label="Hawthorn Brewery cover">
          <Image
            src={assetPath(
              "/assets/showcase/hawthorn-brewery/sign-board-mockup-1.jpg",
          )}
          alt="Hawthorn Brewery billboard design featuring two raised beer glasses"
          width={2048}
          height={1365}
          priority
          sizes="100vw"
          className="h-auto w-full object-cover"
        />
      </section>

        <section className="mx-auto w-full max-w-[1140px] px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-[68px] lg:px-10">
          <div className="grid gap-9 md:grid-cols-2 md:gap-[30px]">
            <div>
              <h1 className="font-sans text-[24px] font-semibold leading-tight">
                Hawthorn Brewery
              </h1>
              <p className="mt-1 font-sans text-sm leading-6 sm:text-[15px]">
                Logos and branding, Packaging design
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[21px] font-semibold leading-tight">
                Brief
              </h2>
              <p className="mt-1 max-w-[510px] font-sans text-sm leading-6 sm:text-[15px] sm:leading-[1.45]">
                For Hawthorn Brewery, we crafted a rustic, timeless logo that
                captures the essence of craft brewing. The design features a
                modern yet earthy aesthetic, appealing to both casual beer
                lovers and craft connoisseurs. Supporting brand elements unify
                the brewery&apos;s identity across merchandise and promotional
                materials.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
            {showcaseImages.map((image) => (
              <Image
                key={image.src}
                src={assetPath(image.src)}
                alt={image.alt}
                width={1536}
                height={1024}
                sizes="(max-width: 1199px) calc(100vw - 40px), 1060px"
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
