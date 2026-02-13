"use client";

import { WhatWeDoSection } from "@/components/what-we-do/what-we-do-section";

const mvpBenefits = [
  {
    title: "MVP Development",
    description: "Build a lean, functional MVP focused on essential features and quick validation.",
  },
  {
    title: "Product Design",
    description: "Create intuitive UI/UX that delivers a smooth and engaging user experience.",
  },
  {
    title: "Agile Development",
    description: "Develop scalable products using modern technologies and agile practices.",
  },
  {
    title: "Testing & Iteration",
    description: "Continuously test, gather feedback, and refine the product.",
  },
];

export function MVPWhatWeDoSection() {
  return (
    <WhatWeDoSection
      heading="What We Do"
      benefits={mvpBenefits}
    />
  );
}
