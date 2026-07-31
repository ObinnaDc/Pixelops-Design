import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Swiftmove Logistics — Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

export default function SwiftmoveLogisticsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-brand-dark">
        <section aria-label="Swiftmove Logistics cover">
          <Image
            src={assetPath(
              "/assets/showcase/swiftmove-logistics/swiftmove-logistics-flyer.jpg",
            )}
            alt="Swiftmove Logistics delivery service flyer"
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
                Swiftmove Logistics
              </h1>
              <p className="mt-[6px] font-sans text-[18px] font-normal leading-normal">
                Flyers
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[21px] font-semibold leading-tight">
                Brief
              </h2>
              <p className="mt-[6px] max-w-[516px] font-sans text-[16px] font-normal leading-[1.45]">
                Swiftmove logistics flyer design
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
