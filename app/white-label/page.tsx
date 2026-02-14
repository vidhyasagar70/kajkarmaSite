"use client";

import { Navbar } from "@/components/navbar/navbar";
import { FooterSection } from "@/components/footer/footer-section";

// Custom White Label components
import { WhiteLabelHero } from "./white-label-hero";
import { WhiteLabelFeatureSplit } from "@/components/white-label/white-label-feature-split";
import { WhiteLabelGrid } from "@/components/white-label/white-label-grid";
import { WhiteLabelProcess } from "@/components/white-label/white-label-process";
import { WhiteLabelFAQ } from "@/components/white-label/white-label-faq";
import { WhiteLabelCTA } from "@/components/white-label/white-label-cta";

// Existing Sections
import { HowItWorksSection } from "@/components/how-it-works/how-it-works-section";
import { WhatWeDoSection } from "@/components/what-we-do/what-we-do-section";
import { ComparisonSection } from "@/components/comparison/comparison-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* 1. Hero */}
      <WhiteLabelHero />

      {/* 2. Intro Split */}
      <WhiteLabelFeatureSplit
        title={<>Your Backend Technology Team — <span className="text-[#9220E1]">Fully Invisible</span></>}
        description={
          <>
            At Kajkarma Innovation, we provide fully confidential white-label development services for agencies, consultants, marketing firms, and technology partners who need reliable backend execution under their brand.
            <br /><br />
            We operate as your invisible technical partner — handling development, delivery, and support while you maintain full client ownership.
            <br /><br />
            Our white-label services include:
          </>
        }
        points={[
          "Website development (WordPress, Shopify, custom builds)",
          "Ecommerce development (multi-vendor, single-tenant systems)",
          "Mobile app development (Android & iOS)",
          "Marketplace platform development",
          "AI automation & workflow engineering",
          "Custom web applications & SaaS systems",
          "Ongoing maintenance & support"
        ]}
        imageSrc="/page9.png"
        ctaText="Request White Label Details"
      />

      {/* 3. Existing: How It Works */}
      <HowItWorksSection />

      {/* 4. Grid: Ideal for Scale */}
      <WhiteLabelGrid
        title={<>Built for Agencies That <span className="text-[#9220E1]">Want to Scale</span></>}
        subtitle="If you are turning down projects due to technical limitations, or outsourcing to unreliable freelancers, our structured white-label partnership gives you a dependable backend team."
        items={[
          { title: "Digital marketing agencies" },
          { title: "SEO agencies" },
          { title: "Branding firms" },
          { title: "UI/UX design studios" },
          { title: "Business consultants" },
          { title: "Startup incubators" },
          { title: "Freelancers scaling operations" }
        ]}
        ctaText="Scale Without Hiring"
      />

      {/* 5. Existing: What We Do */}
      <WhatWeDoSection />

      {/* 6. Split: Different, reverse */}
      <WhiteLabelFeatureSplit
        reverse
        title={<>What Makes Our White Label <span className="text-[#9220E1]">Model Different</span></>}
        description={
          <>
            Not all white-label partners are equal. We operate with structured delivery systems, milestone tracking, and scalable engineering standards.
            <br /><br />
            We function as an extension of your internal team — not just an outsourced vendor.
          </>
        }
        points={[
          "Dedicated project managers",
          "Transparent milestone tracking",
          "Scalable team capacity",
          "Enterprise-level architecture planning",
          "NDA-backed confidentiality",
          "Flexible pricing models",
          "Long-term partnership structure"
        ]}
        imageSrc="/page10.png"
        ctaText="Partner With a Reliable Tech Team"
      />

      {/* 7. Existing: Comparison */}
      <ComparisonSection />

      {/* 8. Grid: Full Capabilities (dark) */}
      <WhiteLabelGrid
        dark
        title={<>Full-Service White Label <span className="text-[#9220E1]">Capabilities</span></>}
        subtitle="Every project is delivered under structured timelines and professional documentation."
        items={[
          {
            title: "High-Converting Website Development",
            description: "SEO-ready business websites, ecommerce stores, and luxury brand platforms."
          },
          {
            title: "Ecommerce & Marketplace Systems",
            description: "Multi-tenant, single-tenant, and custom ecommerce architectures."
          },
          {
            title: "Mobile Applications",
            description: "Android and iOS apps integrated with web systems."
          },
          {
            title: "AI Automation & Workflow Engineering",
            description: "n8n, Zapier, CRM automation, and custom API workflows."
          },
          {
            title: "Custom Web Applications",
            description: "Dashboards, SaaS products, booking systems, internal portals."
          },
          {
            title: "Ongoing Maintenance & Support",
            description: "Security updates, monitoring, feature scaling."
          }
        ]}
        ctaText="Offer More Services to Your Clients"
      />

      {/* 9. Grid: Models */}
      <WhiteLabelGrid
        title={<>Flexible White Label <span className="text-[#9220E1]">Engagement Models</span></>}
        subtitle="You choose the engagement model that aligns with your business growth strategy."
        items={[
          {
            title: "Project-Based White Label",
            description: "Per-project collaboration with defined scope and timeline."
          },
          {
            title: "Dedicated Team Model",
            description: "Monthly retainer-based access to development resources."
          },
          {
            title: "Revenue Share Model",
            description: "Long-term collaborative projects with shared upside potential."
          }
        ]}
        columns={3}
        ctaText="Choose Your Partnership Model"
      />

     
      <WhiteLabelFeatureSplit
        title={<>Confidentiality & <span className="text-[#9220E1]">Client Protection</span></>}
        description={
          <>
            Trust is critical in white-label partnerships. Your clients remain yours — permanently.
            <br /><br />
            We provide:
          </>
        }
        points={[
          "Non-disclosure agreements",
          "Non-compete assurances",
          "No direct client contact without permission",
          "Branded documentation if required",
          "Private communication channels"
        ]}
        imageSrc="/page11.png"
        ctaText="Protect Your Client Relationships"
      />

      <WhiteLabelFeatureSplit
        reverse
        title={<>Why Agencies <span className="text-[#9220E1]">Partner With Us</span></>}
        description={
          <>
            Agencies choose us because we provide reliable project execution, consistent quality control, and scalable development capacity.
            <br /><br />
            We help agencies increase profit margins while reducing operational stress.
            Instead of expanding payroll, office space, and HR management, you gain instant technical infrastructure.
          </>
        }
        points={[
          "Reliable project execution",
          "Consistent quality control",
          "Scalable development capacity",
          "Technical depth across industries",
          "Clear communication structure",
          "Long-term partnership mindset"
        ]}
        imageSrc="/page12.png"
        ctaText="Increase Your Agency Profitability"
      />

     
      <WhiteLabelGrid
        dark
        title={<>White Label <span className="text-[#9220E1]">Pricing & Margins</span></>}
        subtitle="We provide transparent backend pricing so you can structure your offers strategically."
        items={[
          {
            title: "Mark up services confidently",
            description: "Our rates allow for healthy profit margins."
          },
          {
            title: "Offer premium positioning",
            description: "Deliver high-end solutions under your brand."
          },
          {
            title: "Maintain strong margins",
            description: "Scale your revenue without scaling your overhead."
          },
          {
            title: "Upsell maintenance & support",
            description: "Create recurring revenue streams effortlessly."
          }
        ]}
        columns={2}
        ctaText="Get Backend Pricing Sheet"
      />

  
      <WhiteLabelProcess />

   
      <WhiteLabelFAQ />

       <WhiteLabelCTA />
      <AILampHero />

    
     

      <FooterSection />
    </main>
  );
}
