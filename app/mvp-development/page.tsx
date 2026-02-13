import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "./hero";
import { FromIdeaSection } from "./from-idea-section";
import { MVPWhatWeDoSection } from "./what-we-do";
import { FooterSection } from "@/components/footer/footer-section";
import { ProductApproach } from "./product-approach";
import { ComparisonSection } from "@/components/comparison/comparison-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";

export default function Page14() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <FromIdeaSection />
      <MVPWhatWeDoSection />
      <ProductApproach/>
      <ComparisonSection/>
      <AILampHero/>
      <FooterSection />
    </main>
  );
}
