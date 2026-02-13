"use client";

import { WhatWeDoSection } from "@/components/what-we-do/what-we-do-section";

const howItWorksBenefits = [
  {
    title: "Requirement Analysis",
    description: "We analyze your business goals, users, and core technical needs.",
  },
  {
    title: "Experience Design",
    description: "Clean, user-focused UI/UX aligned closely with your brand identity.",
  },
  {
    title: "Development & Testing",
    description: "Secure, scalable development with thorough testing and optimization.",
  },
  {
    title: "Launch & Scale",
    description: "Smooth deployment with ongoing support and future enhancements.",
  },
];

export function HowItWorks() {
  return (
    <WhatWeDoSection
      heading="How It Works"
      benefits={howItWorksBenefits}
    />
  );
}
