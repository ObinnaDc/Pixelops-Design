"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/layout/Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  if (
    pathname?.startsWith("/webinar") ||
    pathname?.startsWith("/showcase/hawthorn-brewery")
  ) {
    return null;
  }

  return <Footer />;
}
