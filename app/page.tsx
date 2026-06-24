import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
    </>
  );
}
