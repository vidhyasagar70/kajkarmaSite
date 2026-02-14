import { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { SmartWebsiteHero } from "./hero";
import { WebPerformanceSection } from "@/components/smart-website/web-performance-section";
import { SplitServiceSection } from "@/components/smart-website/split-service-section";
import { PlatformGrid } from "@/components/smart-website/platform-grid";
import { WebSEOSection } from "@/components/smart-website/web-seo-section";
import { MaintenanceSection } from "@/components/smart-website/maintenance-section";
import { WebPricingTable } from "@/components/smart-website/web-pricing-table";
import { WebProcessHorizontal } from "@/components/smart-website/web-process-horizontal";
import { WebFAQ } from "./web-faq";
import { WebFinalCTA } from "@/components/smart-website/web-final-cta";
import { FooterSection } from "@/components/footer/footer-section";

export const metadata: Metadata = {
    title: "High-Converting Website Development Services | KajKarma",
    description: "Build Websites That Generate Revenue — Not Just Traffic. We develop ecommerce, jewelry, and custom digital systems.",
};

export default function SmartWebsitePage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <SmartWebsiteHero />

            <WebPerformanceSection />

            <SplitServiceSection
                title="Ecommerce Website Development"
                subtitle="Scalable Ecommerce Systems Built to Sell"
                description="We develop ecommerce websites that are engineered for revenue growth. From product architecture to checkout optimization, every detail is built around increasing average order value and improving conversion rates."
                features={[
                    "Custom Shopify development",
                    "Advanced product filtering systems",
                    "Secure payment gateway integration",
                    "Inventory management systems",
                    "Optimized checkout flow",
                    "SEO-friendly product structure",
                    "High-speed performance optimization"
                ]}
                ctaText="Build Your Ecommerce Website"
                imageSrc="/page13.png"
                imageOnRight={true}
            />

            <SplitServiceSection
                title="Jewelry & Luxury Brand Website Development"
                subtitle="Luxury brands demand precision, trust, and performance."
                description="We specialize in jewelry and diamond website development, building platforms tailored for retailers, wholesalers, and B2B trading businesses."
                features={[
                    "Advanced diamond filtering (cut, clarity, carat, color)",
                    "Inventory display systems",
                    "Secure inquiry and lead management",
                    "High-resolution product galleries",
                    "Premium UI design aesthetics",
                    "Structured SEO for luxury keywords"
                ]}
                ctaText="Launch Your Jewelry Website"
                imageSrc="/page3 (1).png"
                imageOnRight={false}
                theme="light"
            />

            <SplitServiceSection
                title="Custom Website Development"
                subtitle="Not every business fits into a template."
                description="We develop fully customized websites and web systems for companies that require unique workflows, booking engines, dashboards, portals, or integrated platforms."
                features={[
                    "CRM-integrated platforms",
                    "Booking and scheduling systems",
                    "Membership portals",
                    "Custom dashboards",
                    "API integrations",
                    "SaaS-style website builds"
                ]}
                ctaText="Discuss Your Custom Project"
                imageSrc="/page12.png"
                imageOnRight={true}
            />

            <PlatformGrid />
            <WebSEOSection />
            <MaintenanceSection />
            <WebPricingTable />
            <WebProcessHorizontal />

            <WebFAQ />

            <WebFinalCTA />

            <FooterSection />
        </main>
    );
}
