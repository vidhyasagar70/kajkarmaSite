import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/footer/footer-section";
import { MarketingHero } from "./hero";
import { Marketing } from "./marketing";
import { MarketingWhatWeDo } from "./what-we-do";
import { GrowthStrategy } from "./growth-strategy";
import { ComparisonSection } from "@/components/comparison/comparison-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";


export default function MarketingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <MarketingHero />
      <Marketing />
      <MarketingWhatWeDo />
      <GrowthStrategy />
      <ComparisonSection/>
      <AILampHero/>
       <FooterSection />
    </main>
  );
}
