import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "./hero";
import { WhatWeDoSection } from "@/components/what-we-do/what-we-do-section";
import { WhatAutomationSection } from "@/components/automation/what-automation-section";
import { ExploreAutomationsSection } from "@/components/automation/explore-automations-section";
import { WeBuildSection } from "@/components/automation/we-build-section";
import { HowWeGetStartedSection } from "@/components/automation/how-we-get-started-section";
import { FooterSection } from "@/components/footer/footer-section";
import { AILampHero } from "@/components/ai/ai-lamp-hero";

// New Components
import { AutomationFeatureSplit } from "@/components/automation/automation-feature-split";
import { AutomationSolutionsGrid } from "@/components/automation/automation-solutions-grid";
import { AutomationComparison } from "@/components/automation/automation-comparison";
import { AutomationProcess } from "@/components/automation/automation-process";
import { AutomationPricing } from "@/components/automation/automation-pricing";
import { AutomationFAQ } from "@/components/automation/automation-faq";
import { AutomationCTA } from "@/components/automation/automation-cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />

      {/* Segment 1: Intro */}
      <AutomationFeatureSplit
        title={<>AI Automation <span className="text-[#7C3AED]">& Workflow Engineering</span></>}
        description={
          <>
            Manual processes slow growth. Disconnected tools reduce efficiency. Repetitive tasks waste operational bandwidth.
            <br /><br />
            At Kajkarma Innovation, we design and implement AI-powered automation systems using tools like n8n, Zapier, custom APIs, and advanced workflow architecture to streamline operations, reduce manual effort, and increase business efficiency.
            <br /><br />
            We build automation systems that connect your tools, automate your workflows, and intelligently handle repetitive tasks — so your team can focus on growth.
          </>
        }
        imageSrc="/page9.png"
        ctaText="Automate Your Business Today"
      />

      {/* Existing Section 1 */}
      <WhatAutomationSection />

      {/* Segment 2: What is AI Automation? (New Content) */}
      <AutomationFeatureSplit
        reverse
        title={<>What is <span className="text-[#7C3AED]">AI Automation?</span></>}
        description={
          <>
            AI automation combines workflow automation tools with artificial intelligence to create intelligent business systems that operate without constant human intervention.
            <br /><br />
            Instead of manually transferring data, sending follow-ups, updating CRMs, managing leads, or processing repetitive tasks, automation systems handle these processes instantly and accurately.
            <br /><br />
            AI automation helps businesses:
          </>
        }
        points={[
          "Eliminate repetitive manual tasks",
          "Reduce operational errors",
          "Improve response time",
          "Scale operations without increasing size",
          "Increase productivity across departments"
        ]}
        imageSrc="/page10.png"
        ctaText="Book an Automation Strategy Call"
      />

      {/* Existing Section 2 */}
      <ExploreAutomationsSection />

      {/* Segment 3: Tools & Technologies We Use */}
      <AutomationSolutionsGrid
        title={<>Tools & <span className="text-[#7C3AED]">Technologies We Use</span></>}
        subtitle="We build automation ecosystems using industry-leading tools combined with custom engineering."
        items={[
          {
            title: "n8n Workflow Automation",
            description: "An advanced open-source automation platform that allows flexible, scalable, and fully customizable workflow systems."
          },
          {
            title: "Zapier Automation",
            description: "Cloud-based automation connecting thousands of apps with rapid implementation and scalable integrations."
          },
          {
            title: "Custom API Integrations",
            description: "We build API-based automation flows for businesses requiring advanced logic and system-level integrations."
          },
          {
            title: "AI Integrations",
            description: "We integrate AI models for automated content, smart emails, lead qualification, and data analysis."
          },
          {
            title: "CRM & Marketing Automation",
            description: "Automating lead capture, email sequences, sales pipelines, and reporting dashboards."
          },
          {
            title: "Intelligent Routing",
            description: "Developing custom logic for data analysis and smart decision routing within your business."
          }
        ]}
        ctaText="Discuss Your Automation Stack"
      />

      {/* Existing Section 3 */}
      <WeBuildSection />

      {/* Segment 4: Business Areas We Automate */}
      <AutomationFeatureSplit
        title={<>Business Areas <span className="text-[#7C3AED]">We Automate</span></>}
        description="Our automation systems are tailored to real business functions, not just simple triggers. We map your operations and automate them end-to-end."
        points={[
          "Sales: Lead capture to Reporting",
          "Marketing: Email sequences & AI responses",
          "Ecommerce: Order processing & Inventory",
          "Support: AI chat systems & Ticket routing",
          "Operations: Onboarding & Task systems",
          "Data Sync: Multi-platform synchronization"
        ]}
        imageSrc="/page11.png"
        ctaText="Streamline Your Operations Now"
      />

      {/* Existing Section 4 */}
      <WhatWeDoSection />

      {/* Segment 5: Comparison Section */}
      <AutomationComparison />

      {/* Existing Section 5 */}
      <HowWeGetStartedSection />

      {/* Segment 6: AI-Powered Workflows */}
      <AutomationFeatureSplit
        title={<>AI-Powered <span className="text-[#7C3AED]">Intelligent Workflows</span></>}
        description="Beyond traditional automation, we implement AI-powered workflow logic that makes systems smarter over time, transitioning your business from reactive to proactive."
        points={[
          "AI-driven lead scoring",
          "Automatic email personalization",
          "Smart customer segmentation",
          "AI-based support replies",
          "Predictive sales insights",
          "Intelligent routing of inquiries"
        ]}
        imageSrc="/page12.png"
        ctaText="Build AI-Powered Workflows"
      />

      {/* Segment 7: Custom Workflow Engineering */}
      <AutomationSolutionsGrid
        dark
        title={<>Custom Workflow <span className="text-[#7C3AED]">Engineering</span></>}
        subtitle="Many automation setups fail because they are built without architecture planning. We design for reliability and scale."
        items={[
          {
            title: "Process Mapping",
            description: "Visualizing entire business flows to identify every automation opportunity."
          },
          {
            title: "Scalable Logic Design",
            description: "Building systems that grow with your data and user volume seamlessly."
          },
          {
            title: "Error Handling",
            description: "Advanced mechanisms to capture and resolve workflow breaks automatically."
          }
        ]}
        columns={3}
        ctaText="Engineer Your Automation System"
      />

      {/* Segment 8: Ecommerce Automation */}
      <AutomationFeatureSplit
        reverse
        title={<>Automation for <span className="text-[#7C3AED]">Ecommerce & Marketplaces</span></>}
        description="For ecommerce and marketplace operators, automation is critical. We automate multi-vendor commissions, order routing, and more for jewelry and B2B."
        points={[
          "Multi-vendor commission automation",
          "Order routing & Payout systems",
          "Vendor onboarding workflows",
          "Inventory syncing & Inquiry systems",
          "Pricing updates & CRM workflows",
          "Analytics reporting automation"
        ]}
        imageSrc="/page9.png"
        ctaText="Automate Your Ecommerce Business"
      />

      {/* Segment 9: Benefits Grid */}
      <AutomationSolutionsGrid
        title={<>Benefits of <span className="text-[#7C3AED]">AI Automation</span></>}
        subtitle="Implementing AI automation provides measurable impact on your business growth and efficiency."
        items={[
          {
            title: "Reduced Operational Costs",
            description: "Lower overhead by automating resource-heavy manual processes."
          },
          {
            title: "Faster Response Times",
            description: "Instant engagement with leads and customers across all platforms."
          },
          {
            title: "Improved Data Accuracy",
            description: "Eliminate human error in data entry and system synchronization."
          },
          {
            title: "Scalable Business Processes",
            description: "Grow your volume without needing to scale your team size proportionally."
          },
          {
            title: "Higher Team Productivity",
            description: "Free up your core team to focus on strategic growth and creativity."
          },
          {
            title: "Better Customer Experience",
            description: "Provide seamless, instant interactions for both customers and staff."
          }
        ]}
        ctaText="Increase Efficiency Today"
      />

      {/* Segment 10: Process (Detailed) */}
      <AutomationProcess />

      {/* Segment 11: Pricing */}
      <AutomationPricing />

      {/* Segment 12: FAQ (Center Aligned) */}
      <AutomationFAQ />

      {/* Existing Section 6 (Lamp) */}
      <AILampHero />

      {/* Segment 13: Final CTA */}
      <AutomationCTA />

      <FooterSection />
    </main>
  );
}
