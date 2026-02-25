"use client";

import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/footer/footer-section";

// Custom MVP components
import { MVPHero } from "./mvp-hero";
import { MVPFeatureSplit } from "@/components/mvp/mvp-feature-split";
import { MVPGrid } from "@/components/mvp/mvp-grid";
import { MVPProcess } from "@/components/mvp/mvp-process";
import { MVPFAQ } from "@/components/mvp/mvp-faq";
import { MVPCTA } from "@/components/mvp/mvp-cta";

// Existing Sections
import { HowItWorksSection } from "@/components/how-it-works/how-it-works-section";
import { WhatWeDoSection } from "@/components/what-we-do/what-we-do-section";
import { ComparisonSection } from "@/components/comparison/comparison-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";
import { ProductApproach } from "./product-approach";

export default function MVPPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* 1. Hero */}
      <MVPHero />

      {/* 2. Intro Split */}
      <MVPFeatureSplit
        title={<>What Is <span className="text-[#9220E1]">an MVP?</span></>}
        description={
          <>
            An MVP (Minimum Viable Product) is a streamlined version of your product built with core features required to validate your idea in the real market.
            <br /><br />
            Instead of spending months building a full-scale product, we help you:
          </>
        }
        points={[
          "Define essential features",
          "Reduce unnecessary development costs",
          "Test market demand",
          "Collect user feedback",
          "Iterate faster",
          "Prepare for investor presentations"
        ]}
        imageSrc="/mvp/MVPDevelopmen-What-is-MVPDevelopment.jpg"
        ctaText="Validate Your Product Idea"
      />

      {/* 3. Existing: How It Works */}
      <HowItWorksSection />

      {/* 4. Grid: Who is it for? */}
      <MVPGrid
        title={<>Who Is MVP Development <span className="text-[#9220E1]">For?</span></>}
        subtitle="If you have an idea but need structured execution, our MVP model reduces risk and accelerates time to market."
        items={[
          { title: "Startup founders launching SaaS platforms" },
          { title: "Marketplace founders testing multi-vendor concepts" },
          { title: "Ecommerce startups launching product ecosystems" },
          { title: "Agencies building internal tools" },
          { title: "Businesses launching new digital products" },
          { title: "Non-technical founders seeking technical execution" }
        ]}
        columns={3}
        ctaText="Discuss Your Startup Vision"
      />

      {/* 5. Existing: What We Do */}
      <WhatWeDoSection />

      {/* 6. Grid: What We Build */}
      <MVPGrid
        dark
        title={<>What We Build as <span className="text-[#9220E1]">MVPs</span></>}
        subtitle="We build MVPs across industries and business models, designed to scale beyond version one."
        items={[
          {
            title: "SaaS Platforms",
            description: "Subscription-based systems with user dashboards and admin panels."
          },
          {
            title: "Marketplace Platforms",
            description: "Multi-vendor marketplaces with onboarding, listing management, and transactions."
          },
          {
            title: "Ecommerce MVPs",
            description: "Online stores with optimized checkout and product management systems."
          },
          {
            title: "Mobile App MVPs",
            description: "Android and iOS applications with backend integration."
          },
          {
            title: "AI & Automation MVPs",
            description: "Workflow systems using n8n, Zapier, and AI-driven integrations."
          },
          {
            title: "Custom Web Applications",
            description: "Internal business tools, booking systems, CRM platforms."
          }
        ]}
        ctaText="Build Your MVP Now"
      />

      {/* 7. Process */}
      {/* <MVPProcess /> */}

      <ProductApproach/>

      {/* 8. Existing: Comparison */}
      {/* <ComparisonSection /> */}

      {/* 9. Grid: Timeline & Cost */}
      <MVPGrid
        title={<>Timeline & <span className="text-[#9220E1]">Investment</span></>}
        subtitle="Most MVP projects are completed within 4 to 8 weeks depending on complexity."
        items={[
          {
            title: "Basic SaaS MVP (4–6 weeks)",
            description: "5,000 – 10,000 USD typical range."
          },
          {
            title: "Marketplace MVP (6–10 weeks)",
            description: "10,000 – 25,000 USD typical range."
          },
          {
            title: "Mobile App MVP (6–10 weeks)",
            description: "8,000 – 20,000 USD typical range."
          }
        ]}
        columns={3}
        ctaText="Get a Custom Timeline"
      />

      {/* 10. Split: Why Choose */}
      <MVPFeatureSplit
        reverse
        title={<>Why Choose Kajkarma for <span className="text-[#9220E1]">MVP Development?</span></>}
        description="Startups choose us because we combine technical expertise with startup-focused strategy and scalable architecture."
        points={[
          "Technical expertise",
          "Startup-focused strategy",
          "Scalable architecture",
          "AI-driven market research",
          "Speed-to-market mindset",
          "Long-term growth planning"
        ]}
        imageSrc="/page14.png"
        ctaText="Work With an MVP-Focused Team"
      />

      {/* 11. Split: Built for Scaling */}
      <MVPFeatureSplit
        title={<>Built for <span className="text-[#9220E1]">Future Scaling</span></>}
        description={
          <>
            Many MVPs fail because they are built as throwaway prototypes. We architect MVPs with scalability in mind.
            <br /><br />
            Your MVP becomes your product foundation. We plan for:
          </>
        }
        points={[
          "Database scalability",
          "API extensibility",
          "Feature expansion",
          "User growth",
          "Cloud infrastructure scaling"
        ]}
        imageSrc="/page15.png"
        ctaText="Build for Long-Term Growth"
      />

      {/* 12. FAQ */}
      <MVPFAQ />


      <MVPCTA />
       <AILampHero />

      <FooterSection />
    </main>
  );
}
