import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "./hero";
import { WeCraftSection } from "@/components/we-craft/we-craft-section";
import { OurPackageSection } from "@/components/package/our-package-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";
import { FooterSection } from "@/components/footer/footer-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <WeCraftSection />
      <OurPackageSection />
      <AILampHero />
      <FooterSection />
    </main>
  );
}