import { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { MobileAppsHero } from "./hero";
import { WeCraftSection } from "@/components/we-craft/we-craft-section";
import { OurPackageSection } from "@/components/package/our-package-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";
import { FooterSection } from "@/components/footer/footer-section";

export const metadata: Metadata = {
    title: "Mobile Apps | KajKarma",
    description: "High-performance mobile applications tailored to your business.",
};

export default function MobileAppsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <MobileAppsHero />
            
        </main>
    );
}
