import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/footer/footer-section";
import { DigitalHero } from "@/components/digital/digital-hero";
import { BuildingFast } from "./buildingfast";
import { HowItWorks } from "./how-it-works";
import { WhatWeDo } from "./what-we-do";
import { ComparisonSection } from "@/components/comparison/comparison-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";


export default function DigitalPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <DigitalHero />
      <BuildingFast />
      <WhatWeDo />
      <HowItWorks />
      <ComparisonSection/>
      <AILampHero/>
       <FooterSection />
      
    </main>
  );
}
