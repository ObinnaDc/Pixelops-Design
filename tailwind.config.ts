import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "rgb(var(--brand-primary) / <alpha-value>)",
        "brand-secondary": "rgb(var(--brand-secondary) / <alpha-value>)",
        "brand-dark": "rgb(var(--brand-dark) / <alpha-value>)",
        "brand-light": "rgb(var(--brand-light) / <alpha-value>)",
        "brand-muted": "rgb(var(--brand-muted) / <alpha-value>)",
        brand: {
          DEFAULT: "rgb(var(--brand-primary) / <alpha-value>)",
          coral: "rgb(var(--brand-coral) / <alpha-value>)",
          orange: "rgb(var(--brand-orange) / <alpha-value>)",
          blue: "rgb(var(--brand-secondary) / <alpha-value>)",
          navy: "rgb(var(--brand-navy) / <alpha-value>)",
          ink: "rgb(var(--brand-dark) / <alpha-value>)",
          muted: "rgb(var(--brand-muted) / <alpha-value>)",
          cream: "rgb(var(--brand-light) / <alpha-value>)",
          paper: "rgb(var(--brand-paper) / <alpha-value>)",
          surface: "rgb(var(--brand-surface) / <alpha-value>)",
          black: "rgb(var(--brand-black) / <alpha-value>)",
        },
        scraped: {
          slate: "rgb(53 65 82 / <alpha-value>)",
          steel: "rgb(71 84 102 / <alpha-value>)",
          graphite: "rgb(76 86 97 / <alpha-value>)",
          gray: "rgb(152 161 178 / <alpha-value>)",
          silver: "rgb(207 212 220 / <alpha-value>)",
          mist: "rgb(226 227 226 / <alpha-value>)",
          cloud: "rgb(234 234 234 / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
        hind: ["var(--font-hind)", "sans-serif"],
        serif: ["var(--font-times-new-roman)", "serif"],
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        20: "5rem",
        25: "6.25rem",
      },
      boxShadow: {
        control: "0 1px 2px rgb(0 0 0 / 0.1)",
        soft: "0 1px 2px rgb(26 28 33 / 0.15)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 600ms ease-out both",
        "accordion-down": "accordion-down 300ms ease-out",
        "accordion-up": "accordion-up 300ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
