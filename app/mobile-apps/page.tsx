import { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { MobileAppsHero } from "./hero";
import { AppSolutionsGrid } from "@/components/mobile-apps/app-solutions-grid";
import { AppFeatureSection } from "@/components/mobile-apps/app-feature-section";
import { AppPricingTable } from "@/components/mobile-apps/app-pricing-table";
import { AppTimelineSection } from "@/components/mobile-apps/app-timeline-section";
import { AppProcessHorizontal } from "@/components/mobile-apps/app-process-horizontal";
import { AppSEOSection } from "@/components/mobile-apps/app-seo-section";
import { AppFAQ } from "./app-faq";
import { AppFinalCTA } from "@/components/mobile-apps/app-final-cta";
import { FooterSection } from "@/components/footer/footer-section";

export const metadata: Metadata = {
    title: "Mobile App Development | KajKarma",
    description: "Custom App Development Services for Scalable Digital Platforms. We build ecommerce apps, marketplaces, and SaaS products.",
};

export default function MobileAppsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <MobileAppsHero />
            <AppSolutionsGrid />
            <AppFeatureSection />
            <AppPricingTable />
            <AppTimelineSection />
            <AppProcessHorizontal />
            <AppSEOSection />
            <AppFAQ />
            <AppFinalCTA />
            <FooterSection />
        </main>
    );
}
