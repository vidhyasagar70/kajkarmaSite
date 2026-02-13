"use client";

import { WhatAutomationSection } from "@/components/automation/what-automation-section";

export function Marketing() {
  return (
    <WhatAutomationSection
      image="/marketing.svg"
      imageAlt="White Label Solutions"
      title="Marketing & Growth Solutions"
      descriptions={[
        "We help businesses move beyond vanity metrics and focus on marketing strategies that drive real growth. By combining audience insights, performance marketing, and continuous optimization, we create systems that consistently generate leads, improve conversions, and increase revenue.",
        "Our approach is practical and data-driven—designed to support your business goals today while building a strong foundation for long-term growth."
      ]}
      buttonText="Book a Strategy Call"
      cardBackgroundColor="bg-[#DEC5FF]"
    />
  );
}
