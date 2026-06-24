import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white shadow-control hover:bg-brand-coral active:translate-y-px",
  secondary:
    "bg-brand-dark text-white shadow-control hover:bg-brand-dark/90 active:translate-y-px",
  ghost:
    "bg-transparent text-brand-dark hover:bg-brand-dark/5 active:bg-brand-dark/10",
  outline:
    "border border-brand-dark/20 bg-transparent text-brand-dark shadow-control hover:border-brand-dark/40 hover:bg-white/70 active:translate-y-px",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-sans font-semibold transition duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = "Button";
