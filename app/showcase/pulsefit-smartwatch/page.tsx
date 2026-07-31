import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Pulsefit — Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

export default function PulsefitPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-brand-dark">
        <section aria-label="Pulsefit cover">
          <Image
            src={assetPath(
              "/assets/showcase/pulsefit-smartwatch/pulsefit-cover.png",
            )}
            alt="Pulsefit smartwatch displaying activity and heart rate data"
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
                Pulsefit
              </h1>
              <p className="mt-[6px] font-sans text-[18px] font-normal leading-normal">
                Signage, And much more
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[21px] font-semibold leading-tight">
                Brief
              </h2>
              <p className="mt-[6px] max-w-[516px] font-sans text-[16px] font-normal leading-[1.45]">
                Our client, PulseFit Smartwatches, requested a roll-up banner
                design with the header &quot;PulseFit Smartwatches: Stay
                Connected, Stay Active.&quot; The banner was to showcase
                features like heart rate monitoring, GPS, and notifications.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Image
              src={assetPath(
                "/assets/showcase/pulsefit-smartwatch/pulsefit-artwork.png",
              )}
              alt="Pulsefit smartwatch promotional banner artwork"
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
