import { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { CustomMarketSolutionHero } from "./hero";
import { WeCraftSection } from "@/components/we-craft/we-craft-section";
import { OurPackageSection } from "@/components/package/our-package-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";
import { FooterSection } from "@/components/footer/footer-section";

import { CustomMarketSolutionFAQ } from "./custom-faq";

export const metadata: Metadata = {
    title: "Custom Market Solution | KajKarma",
    description: "Tailored market strategies for sustainable growth.",
};

export default function CustomMarketSolutionPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <CustomMarketSolutionHero />
            <WeCraftSection />
            <OurPackageSection />
            <CustomMarketSolutionFAQ />
            <AILampHero />
            <FooterSection />
        </main>
    );
}
