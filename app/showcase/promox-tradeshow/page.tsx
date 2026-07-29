import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "promox-tradeshow — Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

export default function PromoxTradeshowPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-brand-dark">
        <section aria-label="Promox 2024 Trade Show cover">
          <Image
            src={assetPath(
              "/assets/showcase/promox-tradeshow/untitled395-20241031165021.jpg",
            )}
            alt="Promox 2024 brochure displayed as a three-panel trade show mockup"
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
                Promox 2024 Trade Show
              </h1>
              <p className="mt-[6px] font-sans text-[18px] font-normal leading-normal">
                Brochures &amp; Ebooks
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[21px] font-semibold leading-tight">
                Brief
              </h2>
              <p className="mt-[6px] max-w-[516px] font-sans text-[16px] font-normal leading-[1.45]">
                Our team created an engaging, visually striking brochure for
                Promox 2024 to showcase its event highlights and attract
                exhibitors. The design blends dynamic layouts with bold imagery
                and concise copy, ensuring a seamless reader experience while
                emphasizing key event details.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Image
              src={assetPath(
                "/assets/showcase/promox-tradeshow/untitled392-20241031162746.jpg",
              )}
              alt="Promox brochure artwork featuring brand story, eco-friendly products, and tech essentials"
              width={1536}
              height={1024}
              sizes="(max-width: 1023px) calc(100vw - 40px), calc(100vw - 204px)"
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
