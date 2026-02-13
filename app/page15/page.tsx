import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "./hero";
import { AILampHero } from "@/components/ai/ai-lamp-hero";
import { BlogsSection } from "@/components/blogs/blogs-section";
import { FooterSection } from "@/components/footer/footer-section";

export default function Page15() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar/>
      <Hero />
            <BlogsSection/>
      <AILampHero/>

      <FooterSection/>
    </main>
  );
}
