import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Deploy — Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

const showcaseImages = [
  {
    src: "/assets/showcase/deploy/artwork-1.jpg",
    alt: "Deploy primary logo",
  },
  {
    src: "/assets/showcase/deploy/artwork-2.jpg",
    alt: "Deploy standalone brand mark",
  },
  {
    src: "/assets/showcase/deploy/artwork-3.jpg",
    alt: "Deploy why we rebranded social graphic",
  },
] as const;

export default function DeployPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-brand-dark">
        <section aria-label="Deploy rebranding cover">
          <Image
            src={assetPath("/assets/showcase/deploy/deploy-cover.jpg")}
            alt="Deploy brand identity cover"
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
                Rebranding For Nocode Agency
              </h1>
              <p className="mt-[6px] font-sans text-[18px] font-normal leading-normal">
                Logos and branding, Social media graphics
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[21px] font-semibold leading-tight">
                Brief
              </h2>
              <p className="mt-[6px] max-w-[516px] font-sans text-[16px] font-normal leading-[1.45]">
                Rebranding for a nocode agency from it&apos;s current identity
                (NCI) to a new identity thee captures it&apos;s current direction
                and focus.
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
