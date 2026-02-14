import { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { EcommerceHero } from "./hero";
import { EcommerceEcosystemSection } from "@/components/ecommerce/ecommerce-ecosystem-section";
import { EcommerceIncludedGrid } from "@/components/ecommerce/ecommerce-included-grid";
import { EcommerceArchitectureSplit } from "@/components/ecommerce/ecommerce-architecture-split";
import { EcommercePerformanceGrid } from "@/components/ecommerce/ecommerce-performance-grid";
import { EcommerceIdealForGrid } from "@/components/ecommerce/ecommerce-ideal-for-grid";
import { EcommerceMaintenanceSection } from "@/components/ecommerce/ecommerce-maintenance-section";
import { EcommerceTimelineProject } from "@/components/ecommerce/ecommerce-timeline-project";
import { EcommerceProcessHorizontal } from "@/components/ecommerce/ecommerce-process-horizontal";
import { EcommerceWhyChooseList } from "@/components/ecommerce/ecommerce-why-choose-list";
import { EcommerceFinalCTA } from "@/components/ecommerce/ecommerce-final-cta";
import { FooterSection } from "@/components/footer/footer-section";


export const metadata: Metadata = {
    title: "Complete Ecommerce Ecosystem | KajKarma",
    description: "Launch a fully integrated ecommerce ecosystem with Website, Android App, and iOS App — built under one unified architecture.",
};

export default function EcommercePage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <EcommerceHero />

            <EcommerceEcosystemSection />
            <EcommerceIncludedGrid />
            <EcommerceArchitectureSplit />
            <EcommercePerformanceGrid />
            <EcommerceIdealForGrid />
            <EcommerceMaintenanceSection />
            <EcommerceTimelineProject />
            <EcommerceProcessHorizontal />
            <EcommerceWhyChooseList />
            <EcommerceFinalCTA />

            <FooterSection />
        </main>
    );
}
