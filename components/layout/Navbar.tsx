"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "Webinar", href: "/webinar" },
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#how" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const;

const logoSrc = "/assets/vector-stroke-f145bb4a.svg";
const ctaHref = "https://cal.com/pixelops/15min";

function getHash(href: string) {
  return href.includes("#") ? `#${href.split("#")[1]}` : "";
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    const updateHash = () => setActiveHash(window.location.hash);

    updateScrollState();
    updateHash();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  function isActive(href: string) {
    const hash = getHash(href);

    if (hash) return pathname === "/" && activeHash === hash;

    return pathname === href;
  }

  function handleAnchorClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMenu = false,
  ) {
    const hash = getHash(href);

    if (closeMenu) setIsMenuOpen(false);
    if (!hash || pathname !== "/") return;

    const target = document.querySelector(hash);
    if (!target) return;

    event.preventDefault();
    setActiveHash(hash);
    window.history.pushState(null, "", hash);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        isScrolled
          ? "border-brand-dark/5 bg-white/85 shadow-control backdrop-blur-xl"
          : "border-transparent bg-white/95",
      )}
      initial={false}
      animate={{ height: isScrolled ? 76 : 96 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="flex h-full w-full items-center justify-between gap-3 px-4 min-[360px]:px-5 sm:px-8 lg:px-12 xl:px-20">
        <Link
          href="/#home"
          onClick={(event) => handleAnchorClick(event, "/#home")}
          aria-label="Pixelops home"
          className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
        >
          <Image
            src={logoSrc}
            alt=""
            width={44}
            height={44}
            priority
            className="size-9 sm:size-11"
          />
          <span className="truncate font-display text-xl font-bold tracking-[-0.03em] text-brand-dark sm:text-[25px]">
            Pixelops
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "whitespace-nowrap rounded-full px-2.5 py-2 font-sans text-[13px] font-medium transition-colors xl:px-3 xl:text-sm",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2",
                isActive(link.href)
                  ? "bg-brand-primary/10 text-brand-coral"
                  : "text-brand-dark hover:bg-brand-dark/5 hover:text-brand-coral",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-coral px-5 font-sans text-sm font-medium text-white shadow-control transition hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 active:translate-y-px lg:inline-flex"
        >
          Let&apos;s chat
          <ArrowRight aria-hidden="true" className="size-5" strokeWidth={2} />
        </Link>

        <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Open navigation menu"
              className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-dark/10 bg-white text-brand-dark shadow-control transition hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 lg:hidden"
            >
              <Menu aria-hidden="true" className="size-5" />
            </button>
          </Dialog.Trigger>

          <AnimatePresence>
            {isMenuOpen && (
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild>
                  <motion.div
                    className="fixed inset-0 z-[60] bg-brand-dark/35 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </Dialog.Overlay>

                <Dialog.Content asChild>
                  <motion.div
                    className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-[400px] flex-col bg-brand-light px-5 pb-7 pt-5 shadow-2xl min-[360px]:px-7"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <Dialog.Title className="flex min-w-0 items-center gap-2.5 font-display text-xl font-bold tracking-[-0.03em]">
                        <Image
                          src={logoSrc}
                          alt=""
                          width={38}
                          height={38}
                          className="size-9"
                        />
                        Pixelops
                      </Dialog.Title>
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label="Close navigation menu"
                          className="grid size-11 place-items-center rounded-full bg-white text-brand-dark shadow-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
                        >
                          <X aria-hidden="true" className="size-5" />
                        </button>
                      </Dialog.Close>
                    </div>

                    <nav
                      aria-label="Mobile navigation"
                      className="mt-10 flex flex-1 flex-col"
                    >
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.04 * index }}
                        >
                          <Link
                            href={link.href}
                            onClick={(event) =>
                              handleAnchorClick(event, link.href, true)
                            }
                            aria-current={
                              isActive(link.href) ? "page" : undefined
                            }
                            className={cn(
                              "flex min-h-14 items-center border-b border-brand-dark/10 font-display text-xl font-semibold transition-colors",
                              "focus-visible:outline-none focus-visible:text-brand-coral",
                              isActive(link.href)
                                ? "text-brand-coral"
                                : "text-brand-dark hover:text-brand-coral",
                            )}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>

                    <Link
                      href={ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="mt-8 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-brand-coral px-5 font-sans text-base font-semibold text-white shadow-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light"
                    >
                      Let&apos;s chat
                      <ArrowRight
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={2}
                      />
                    </Link>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            )}
          </AnimatePresence>
        </Dialog.Root>
      </div>
    </motion.header>
  );
}
