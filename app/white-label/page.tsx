import { Navbar } from "@/components/navbar/navbar";
import { Hero} from "@/components/hero/page10hero";
import { WhatWeDoSection } from "@/components/what-we-do/what-we-do-section";
import { WhatAutomationSection } from "@/components/automation/what-automation-section";
import { ExploreAutomationsSection } from "@/components/automation/explore-automations-section";
import { WeBuildSection } from "@/components/automation/we-build-section";
import { HowWeGetStartedSection } from "@/components/automation/how-we-get-started-section";
import { OurServices } from "@/components/services/our-services";
import { OutreachSuperpowers } from "@/components/outreach/outreach-superpowers";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import { ComparisonSection } from "@/components/comparison/comparison-section";
import { FAQSection } from "@/components/faq/faq-section";
// import { ContactSection } from "@/components/contact/contact-section";
import { FooterSection } from "@/components/footer/footer-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";
import {HowItWorksSection} from "@/components/how-it-works/how-it-works-section"
import {WhatIsWhiteLabel} from "./whatiswhitelabel"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
  
      <Hero/>
      <WhatIsWhiteLabel/>
      <HowItWorksSection/>
      <WhatWeDoSection />
      <ComparisonSection />
      {/* <FAQSection /> */}
      <AILampHero />
      {/* <ContactSection /> */}
      <FooterSection />
      
    </main>
  );
}
