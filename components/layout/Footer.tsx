import { Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const logoSrc = "/assets/vector-stroke-503a1128.svg";

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-white text-brand-dark">
      <div className="w-full px-5 pb-5 pt-12 sm:px-8 sm:pt-14 lg:px-12 xl:px-20">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.8fr] lg:gap-12">
          <div className="max-w-[285px]">
            <Link
              href="/#home"
              aria-label="Pixelops home"
              className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
            >
              <Image
                src={logoSrc}
                alt=""
                width={44}
                height={44}
                className="size-11"
              />
              <span className="font-display text-[25px] font-bold tracking-[-0.03em]">
                Pixelops
              </span>
            </Link>

            <p className="mt-3 font-sans text-sm leading-6 text-brand-muted">
              Pixelops handles all of your business graphics &amp; web design
              needs.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/pixelops-design"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="grid size-9 place-items-center rounded-full border border-brand-dark/10 text-brand-dark transition-colors hover:border-brand-coral hover:text-brand-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
              >
                <Linkedin aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-hind text-lg font-semibold">Contact us</h2>
            <a
              href="mailto:hello@pixelops.design"
              className="mt-2 inline-block rounded-sm font-sans text-sm text-brand-muted transition-colors hover:text-brand-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
            >
              hello@pixelops.design
            </a>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 lg:justify-self-end">
            <h2 className="font-sans text-base font-semibold">
              Let&apos;s work together
            </h2>
            <a
              href="https://cal.com/pixelops/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-coral px-6 font-sans text-sm font-medium text-white shadow-control transition hover:bg-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 active:translate-y-px"
            >
              Start today
              <Phone aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-scraped-silver/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-scraped-steel">
            Pixelops Design Limited © 2026
          </p>

          <nav
            aria-label="Legal links"
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm font-hind text-sm font-medium text-brand-dark transition-colors hover:text-brand-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
