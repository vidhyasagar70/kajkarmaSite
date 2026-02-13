import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "./hero";
import { WhatWeDoSection } from "@/components/what-we-do/what-we-do-section";
import { WhatAutomationSection } from "@/components/automation/what-automation-section";
import { ExploreAutomationsSection } from "@/components/automation/explore-automations-section";
import { WeBuildSection } from "@/components/automation/we-build-section";
import { HowWeGetStartedSection } from "@/components/automation/how-we-get-started-section";
// import { ContactSection } from "@/components/contact/contact-section";
import { FooterSection } from "@/components/footer/footer-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <WhatAutomationSection />
      <ExploreAutomationsSection />
      <WeBuildSection />
      <WhatWeDoSection />
      <HowWeGetStartedSection />
      <AILampHero />
      {/* <ContactSection /> */}
      <FooterSection />
    </main>
  );
}
