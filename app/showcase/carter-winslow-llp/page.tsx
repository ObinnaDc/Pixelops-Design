import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Carter & Winslow LLP — Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

const showcaseImages = [
  {
    src: "/assets/showcase/carter-winslow-llp/sample-1.jpg",
    alt: "Carter and Winslow branded letterhead folder",
  },
  {
    src: "/assets/showcase/carter-winslow-llp/sample-2.jpg",
    alt: "Carter and Winslow stationery presentation",
  },
] as const;

export default function CarterWinslowLlpPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-brand-dark">
        <section aria-label="Carter and Winslow LLP cover">
          <Image
            src={assetPath(
              "/assets/showcase/carter-winslow-llp/mockup-1.png",
            )}
            alt="Carter and Winslow LLP stationery and business card collection"
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
                Carter &amp; Winslow LLP
              </h1>
              <p className="mt-[6px] font-sans text-[18px] font-normal leading-normal">
                Business cards, Logos and branding
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[21px] font-semibold leading-tight">
                Brief
              </h2>
              <p className="mt-[6px] max-w-[516px] font-sans text-[16px] font-normal leading-[1.45]">
                Our client, Carter &amp; Winslow LLP, a prestigious law firm
                requested a clean, modern, and professional letterhead and
                business cards. The design should convey trust, integrity, and
                sophistication, with a minimalist yet elegant style, reflecting
                the firm&apos;s expertise in corporate, real estate, and
                intellectual property law.
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
