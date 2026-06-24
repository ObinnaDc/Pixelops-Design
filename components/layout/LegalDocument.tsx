import type { ReactNode } from "react";

interface LegalDocumentProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function LegalDocument({
  title,
  subtitle,
  children,
}: LegalDocumentProps) {
  return (
    <article className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[920px] px-5 sm:px-8">
        <h1 className="text-center font-display text-4xl font-semibold tracking-[-0.04em] text-brand-dark sm:text-5xl">
          {title}
        </h1>
        <h2 className="mt-8 font-display text-xl font-semibold text-brand-dark">
          {subtitle}
        </h2>
        <p className="mt-5 font-sans text-sm text-brand-muted">
          Effective Date: 4 April 2024
        </p>
        <div className="mt-6 space-y-8 font-sans text-[15px] leading-7 text-brand-dark [&_a]:text-brand-coral [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-[-0.025em] [&_h3]:mt-5 [&_h3]:font-sans [&_h3]:font-semibold [&_p]:mt-3">
          {children}
        </div>
      </div>
    </article>
  );
}
