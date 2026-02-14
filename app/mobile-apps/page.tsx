import { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { MobileAppsHero } from "./hero";
import { AppSolutionsGrid } from "@/components/mobile-apps/app-solutions-grid";
import { AppFeatureSection } from "@/components/mobile-apps/app-feature-section";
import { AppPricingTable } from "@/components/mobile-apps/app-pricing-table";
import { AppTimelineSection } from "@/components/mobile-apps/app-timeline-section";
import { AppProcessHorizontal } from "@/components/mobile-apps/app-process-horizontal";
import { AppSEOSection } from "@/components/mobile-apps/app-seo-section";
import { SplitFaqSection } from "@/components/ui/split-faq-section";
import { AppFinalCTA } from "@/components/mobile-apps/app-final-cta";
import { FooterSection } from "@/components/footer/footer-section";

const mobileAppFaqs = [
    {
        question: "What is the cost of developing a custom app?",
        answer: "Custom app development typically ranges from 5,000 to 50,000 USD depending on complexity, integrations, and scalability requirements.",
    },
    {
        question: "How long does it take to build an ecommerce application?",
        answer: "Most ecommerce applications take between 6 and 10 weeks, depending on features such as payment integration, inventory systems, and user dashboards.",
    },
    {
        question: "Can you build a multi-vendor marketplace platform?",
        answer: "Yes. We develop scalable marketplace platforms including vendor dashboards, commission systems, and secure transaction architecture.",
    },
    {
        question: "Do you provide SEO with app development?",
        answer: "Yes. Every application is built with SEO-ready architecture, technical optimization, and AI-driven keyword research alignment.",
    },
    {
        question: "Do you specialize in jewelry and diamond industry applications?",
        answer: "Yes. We develop custom diamond inventory systems, marketplace portals, and B2B trading applications tailored to the jewelry industry.",
    },
];

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
            <SplitFaqSection
                title="Frequently Asked Questions About App Development"
                items={mobileAppFaqs}
                imageSrc="/page15.png"
            />
            <AppFinalCTA />
            <FooterSection />
        </main>
    );
}
