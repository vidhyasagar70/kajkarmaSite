import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "./hero";
import { SalesOutreachSection } from "./sales-outreach-section";
import { ConsistentFollowupsSection } from "./consistent-followups-section";
import { OutreachFlow } from "./outreach-flow";
import { ComparisonSection } from "@/components/comparison/comparison-section";
import { FooterSection } from "@/components/footer/footer-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";

export default function Page12() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <SalesOutreachSection />
      <ConsistentFollowupsSection />
      <OutreachFlow />
      <ComparisonSection />
      <AILampHero />
      <FooterSection />
    </main>
  );
}
