"use client";

import { WhatWeDoSection } from "@/components/what-we-do/what-we-do-section";

const marketingBenefits = [
  {
    title: "Paid Campaigns",
    description: "Run targeted advertising campaigns focused on leads, conversions, and returns.",
  },
  {
    title: "Organic Growth",
    description: "Build long-term visibility and traffic through SEO-driven strategies.",
  },
  {
    title: "Content Strategy",
    description: "Develop clear messaging and content that strengthens brand positioning.",
  },
  {
    title: "Lead Generation",
    description: "Create funnels that attract, capture, and qualify high-intent prospects.",
  },
  {
    title: "Conversion Optimization",
    description: "Improve user journeys to increase conversions and reduce drop-offs.",
  },
];

export function MarketingWhatWeDo() {
  return (
    <WhatWeDoSection
      heading="What We Do"
      benefits={marketingBenefits}
    />
  );
}
