import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Metro Luxe Real Estate — Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

const showcaseImages = [
  {
    src: "/assets/showcase/metro-luxe-realestate/business-card-back.jpg",
    alt: "Metro Luxe real estate agent business card",
  },
  {
    src: "/assets/showcase/metro-luxe-realestate/wristband-mockup.png",
    alt: "Metro Luxe branded navy and gold wristbands",
  },
  {
    src: "/assets/showcase/metro-luxe-realestate/stationery-mockup.jpg",
    alt: "Metro Luxe branded stationery collection",
  },
] as const;

export default function MetroLuxeRealEstatePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-brand-dark">
        <section aria-label="Metro Luxe Real Estate cover">
          <Image
            src={assetPath(
              "/assets/showcase/metro-luxe-realestate/business-card-front.jpg",
            )}
            alt="Metro Luxe logo in gold on a deep navy background"
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
                Metro Luxe Real Estate
              </h1>
              <p className="mt-[6px] font-sans text-[18px] font-normal leading-normal">
                Logos and branding
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[21px] font-semibold leading-tight">
                Brief
              </h2>
              <p className="mt-[6px] max-w-[516px] font-sans text-[16px] font-normal leading-[1.45]">
                Metro Luxe Real Estate needed a brand identity that exudes
                elegance and trust for their upscale clientele. We developed a
                sleek logo incorporating geometric forms to symbolize structure
                and stability. The brand palette of deep navy and gold enhances
                the premium feel, while modern typography reflects innovation.
                Complementary materials, such as business cards and letterheads,
                tie the visual identity together. This project highlights our
                capability to deliver cohesive branding solutions that resonate
                with high-end markets.
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
