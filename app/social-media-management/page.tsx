"use client";

import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/footer/footer-section";

// Custom Social Media components (Separate files)
import { SocialMediaHero } from "./social-media-hero";
import { SocialMediaIntro } from "./social-media-intro";
import { SocialMediaPlatforms } from "./social-media-platforms";
import { SocialMediaAdvanced } from "./social-media-advanced";
import { SocialMediaProcess } from "./social-media-process";
import { SocialMediaBusinessTypes } from "./social-media-business-types";
import { SocialMediaIntegration } from "./social-media-integration";
import { SocialMediaWhyChoose } from "./social-media-why-choose";
import { SocialMediaPricing } from "./social-media-pricing";
import { SocialMediaFAQ } from "./social-media-faq";
import { SocialMediaCTA } from "./social-media-cta";

// Existing Sections
import { HowItWorksSection } from "@/components/how-it-works/how-it-works-section";
import { WhatWeDoSection } from "@/components/what-we-do/what-we-do-section";
import { ComparisonSection } from "@/components/comparison/comparison-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";

export default function SocialMediaPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />

          
            <SocialMediaHero />

            <SocialMediaIntro />

            <HowItWorksSection />

            <SocialMediaPlatforms />

            <WhatWeDoSection />

            <SocialMediaAdvanced />

            <SocialMediaIntegration />

            <ComparisonSection />

            <SocialMediaProcess />

            <SocialMediaBusinessTypes />

            <SocialMediaWhyChoose />

            <SocialMediaPricing />

            <SocialMediaFAQ />

            <SocialMediaCTA />

            <AILampHero />

            <FooterSection />
        </main>
    );
}
