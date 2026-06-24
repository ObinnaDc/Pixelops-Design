export interface NavLink {
  label: string;
  href: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  cadence: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  body: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
}

export interface PortfolioItem {
  title: string;
  image: string;
  categories: string[];
  href?: string;
  alt?: string;
}

export interface ServiceItem {
  title: string;
  description?: string;
  icon?: string;
}
