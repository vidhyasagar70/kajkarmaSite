import { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { SmartWebsiteHero } from "./hero";
import { WeCraftSection } from "@/components/we-craft/we-craft-section";
import { OurPackageSection } from "@/components/package/our-package-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";
import { FooterSection } from "@/components/footer/footer-section";

export const metadata: Metadata = {
    title: "Smart Website | KajKarma",
    description: "Intelligent, responsive websites designed to convert.",
};

export default function SmartWebsitePage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <SmartWebsiteHero />
        </main>
    );
}
