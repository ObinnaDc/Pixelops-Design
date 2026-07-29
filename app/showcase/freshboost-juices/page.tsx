import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "FreshBoost Juices — Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

const showcaseImages = [
  {
    src: "/assets/showcase/freshboost-juices/untitled450-20241119184001.png",
    alt: "FreshBoost orange juice Refresh Naturally campaign",
  },
  {
    src: "/assets/showcase/freshboost-juices/untitled451-20241119193727.png",
    alt: "FreshBoost Fuel Your Day orange juice campaign",
  },
  {
    src: "/assets/showcase/freshboost-juices/untitled452-20241119194356.png",
    alt: "FreshBoost promotional sale campaign",
  },
] as const;

export default function FreshBoostJuicesPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-brand-dark">
        <section aria-label="FreshBoost Juices cover">
          <Image
            src={assetPath(
              "/assets/showcase/freshboost-juices/untitled454-20241119210206.png",
            )}
            alt="FreshBoost green and orange juice packaging"
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
                FreshBoost Juices
              </h1>
              <p className="mt-[6px] font-sans text-[18px] font-normal leading-normal">
                Packaging design, Logos and branding, Social media graphics
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[21px] font-semibold leading-tight">
                Brief
              </h2>
              <p className="mt-[6px] max-w-[516px] font-sans text-[16px] font-normal leading-[1.45]">
                Our social media campaign for FreshBoost Juices features vibrant
                visuals that capture the essence of health and refreshment. Each
                graphic combines bold typography with juicy imagery of fruits
                and smoothies, paired with catchy taglines like &quot;Sip the
                Good Life!&quot; and &quot;Fuel Your Day, the Fresh Way.&quot;
                These designs were tailored to engage health-conscious
                audiences, drive interaction, and elevate the brand&apos;s online
                presence. This project reflects our expertise in crafting
                eye-catching digital content for the modern consumer.
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
