import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "T-shirt Inscriptions — Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

const showcaseImages = [
  {
    src: "/assets/showcase/branded-tshirts/artwork-1.jpg",
    alt: "One Step at a Time typographic T-shirt inscription",
  },
  {
    src: "/assets/showcase/branded-tshirts/artwork-2.jpg",
    alt: "One Step at a Time branded T-shirt mockup",
  },
  {
    src: "/assets/showcase/branded-tshirts/artwork-3.jpg",
    alt: "Made of Stars branded T-shirt mockup",
  },
  {
    src: "/assets/showcase/branded-tshirts/artwork-4.jpg",
    alt: "Made of Stars T-shirt inscription artwork",
  },
  {
    src: "/assets/showcase/branded-tshirts/artwork-5.jpg",
    alt: "Stay Curious T-shirt inscription artwork",
  },
  {
    src: "/assets/showcase/branded-tshirts/artwork-6.jpg",
    alt: "Stay Curious branded T-shirt mockup",
  },
] as const;

export default function BrandedTshirtsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-brand-dark">
        <section aria-label="T-shirt Inscriptions cover">
          <Image
            src={assetPath(
              "/assets/showcase/branded-tshirts/branded-tshirts-cover.jpg",
            )}
            alt="Think Outside the Box branded T-shirt mockup"
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
                T-shirt Inscriptions
              </h1>
              <p className="mt-[6px] font-sans text-[18px] font-normal leading-normal">
                Branded Apparel, Custom illustrations
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[21px] font-semibold leading-tight">
                Brief
              </h2>
              <p className="mt-[6px] max-w-[516px] font-sans text-[16px] font-normal leading-[1.45]">
                A soon-to-be-launched clothing line asked that we help give
                creative expressions to their quote-based collection.
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
