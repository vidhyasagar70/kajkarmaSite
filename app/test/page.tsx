import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/footer/footer-section";
import { HeroSectionsCarousel } from "@/components/hero/hero-sections-carousel";

export default function TestPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <HeroSectionsCarousel />
      <FooterSection />
    </main>
  );
}
