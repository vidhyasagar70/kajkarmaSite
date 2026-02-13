"use client";

import { WhatAutomationSection } from "@/components/automation/what-automation-section";

export function FromIdeaSection() {
  return (
    <WhatAutomationSection
      image="/mvp.png"
      imageAlt="MVP"
      title="From Idea to Product"
      descriptions={[
        "We work with you to transform concepts into real, usable products by focusing on core features, fast development, and early validation. Our goal is to reduce risk, save time, and help you launch with confidence.",
        "Whether you're testing a new idea or building your first product, we ensure every step supports long-term growth.",
      ]}
      buttonText="Book a Strategy Call"
      cardBackgroundColor="bg-[#DEC5FF]"
    />
  );
}
