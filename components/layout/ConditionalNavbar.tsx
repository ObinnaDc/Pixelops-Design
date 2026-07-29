"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  if (pathname?.startsWith("/showcase/hawthorn-brewery")) return null;

  return <Navbar />;
}
