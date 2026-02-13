"use client";

import { WhatWeDoSection } from "@/components/what-we-do/what-we-do-section";

const followUpBenefits = [
  {
    title: "Right Timing",
    description: "Follow-ups are sent at the right intervals to stay top-of-mind without overwhelming prospects.",
  },
  {
    title: "Automation",
    description: "Smart automation ensures no lead is missed while keeping communication consistent.",
  },
  {
    title: "Relevance",
    description: "Each follow-up aligns with previous interactions, making messages feel relevant and natural.",
  },
  {
    title: "Adaptive Paths",
    description: "Follow-up flows adjust automatically based on responses and engagement levels.",
  },
];

export function ConsistentFollowupsSection() {
  return (
    <WhatWeDoSection
      heading="Consistent Follow-Ups"
      benefits={followUpBenefits}
    />
  );
}
