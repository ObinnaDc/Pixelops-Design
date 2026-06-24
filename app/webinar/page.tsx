import type { Metadata } from "next";

import WebinarHero from "@/components/sections/webinar/WebinarHero";
import WebinarProblem from "@/components/sections/webinar/WebinarProblem";
import WebinarSolution from "@/components/sections/webinar/WebinarSolution";
import WebinarSuite from "@/components/sections/webinar/WebinarSuite";
import WebinarComparison from "@/components/sections/webinar/WebinarComparison";
import WebinarUseCases from "@/components/sections/webinar/WebinarUseCases";
import WebinarHowItWorks from "@/components/sections/webinar/WebinarHowItWorks";
import WebinarPricing from "@/components/sections/webinar/WebinarPricing";
import WebinarFAQ from "@/components/sections/webinar/WebinarFAQ";
import WebinarFreeTrial from "@/components/sections/webinar/WebinarFreeTrial";
import WebinarGuarantee from "@/components/sections/webinar/WebinarGuarantee";
import WebinarWhyChoose from "@/components/sections/webinar/WebinarWhyChoose";
import WebinarFooterCTA from "@/components/sections/webinar/WebinarFooterCTA";

export const metadata: Metadata = {
  title: "Webinar Content Repurposing - Pixelops",
  description:
    "Get unlimited access to our vetted team of graphic design experts. We turn businesses into unstoppable marketing machines.",
};

export default function WebinarPage() {
  return (
    <main className="overflow-x-hidden">
      <WebinarHero />
      <WebinarProblem />
      <WebinarSolution />
      <WebinarSuite />
      <WebinarComparison />
      <WebinarUseCases />
      <WebinarHowItWorks />
      <WebinarPricing />
      <WebinarFAQ />
      <WebinarFreeTrial />
      <WebinarGuarantee />
      <WebinarWhyChoose />
      <WebinarFooterCTA />
    </main>
  );
}
