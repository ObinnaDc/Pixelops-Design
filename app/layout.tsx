import type { Metadata } from "next";

import ConditionalFooter from "@/components/layout/ConditionalFooter";
import Navbar from "@/components/layout/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelops.design"),
  title: "Pixelops | Unlimited Graphic Design for Your Business",
  description:
    "Pixelops provides unlimited graphic design through a seamless extension of your marketing team, supported by dedicated designers and account managers.",
  openGraph: {
    title: "Pixelops | Unlimited Graphic Design for Your Business",
    description:
      "Unlimited graphic design for your business, delivered by dedicated designers and account managers.",
    url: "https://pixelops.design",
    siteName: "Pixelops",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/3af007187342321.65861e72bc975-copy-d7380a09.png",
        alt: "Pixelops graphic design work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelops | Unlimited Graphic Design for Your Business",
    description:
      "Unlimited graphic design for your business, delivered by dedicated designers and account managers.",
    images: ["/assets/3af007187342321.65861e72bc975-copy-d7380a09.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Fonts extracted from scrape/fonts.txt. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@500;600&family=Inter:wght@300;400;500;600;700;900&family=Sora:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
