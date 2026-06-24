import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "primary" | "muted";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-brand-dark text-white",
  primary: "bg-brand-primary/15 text-brand-coral",
  muted: "bg-brand-dark/5 text-brand-muted",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-6 items-center rounded-full px-3 py-1 font-sans text-xs font-semibold leading-none",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
