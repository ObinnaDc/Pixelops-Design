import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "AfroVibes Festival — Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

const showcaseImages = [
  {
    src: "/assets/showcase/afrovibes-festival/afro01.png",
    alt: "AfroVibes tropical dance festival sticker",
  },
  {
    src: "/assets/showcase/afrovibes-festival/afro03.png",
    alt: "Afro Summer Vibes beach festival sticker",
  },
  {
    src: "/assets/showcase/afrovibes-festival/afro04.png",
    alt: "Colorful guitar and palm tree festival sticker",
  },
] as const;

export default function AfroVibesFestivalPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-brand-dark">
        <section aria-label="AfroVibes Festival cover">
          <Image
            src={assetPath("/assets/showcase/afrovibes-festival/afro0.png")}
            alt="Afro Summer Vibes guitar sticker artwork"
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
                AfroVibes Festival
              </h1>
              <p className="mt-[6px] font-sans text-[18px] font-normal leading-normal">
                Stickers &amp; badges
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[21px] font-semibold leading-tight">
                Brief
              </h2>
              <p className="mt-[6px] max-w-[516px] font-sans text-[16px] font-normal leading-[1.45]">
                This collection was created for the &quot;AfroVibes
                Festival,&quot; a vibrant celebration of Afrocentric music,
                dance, and culture. The stickers and badges feature bold
                typography, rich patterns, and icons inspired by African motifs,
                including drums, tribal masks, and abstract designs. Each piece
                is a perfect memento for attendees, showcasing the festival&apos;s
                energy and cultural essence. These designs highlight our ability
                to create culturally resonant and visually captivating branding
                for events.
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
