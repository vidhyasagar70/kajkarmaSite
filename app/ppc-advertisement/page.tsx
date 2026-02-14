"use client";

import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/footer/footer-section";

// Custom PPC components (Separate files)
import { PPCHero } from "./ppc-hero";
import { PPCIntro } from "./ppc-intro";
import { PPCPlatforms } from "./ppc-platforms";
import { PPCEcommerce } from "./ppc-ecommerce";
import { PPCApproach } from "./ppc-approach";
import { PPCBusinessTypes } from "./ppc-business-types";
import { PPCWhyChoose } from "./ppc-why-choose";
import { PPCPricing } from "./ppc-pricing";
import { PPCFAQ } from "./ppc-faq";
import { PPCCTA } from "./ppc-cta";
import { PPCAdvancedDesign } from "./ppc-advanced-design";

// Existing Sections
import { HowItWorksSection } from "@/components/how-it-works/how-it-works-section";
import { WhatWeDoSection } from "@/components/what-we-do/what-we-do-section";
import { ComparisonSection } from "@/components/comparison/comparison-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";

export default function MarketingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      
      <PPCHero />

      
      <PPCIntro />

      
      <HowItWorksSection />


      <PPCPlatforms />

      
      <WhatWeDoSection />

      
      <PPCAdvancedDesign />

      
      <PPCEcommerce />

     
      <ComparisonSection />

      
      <PPCApproach />

      
      <PPCBusinessTypes />

      
      <PPCWhyChoose />

    
      <PPCPricing />


      <PPCFAQ />

      
      <PPCCTA />

      
      <AILampHero />

      <FooterSection />
    </main>
  );
}
