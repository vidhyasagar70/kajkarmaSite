"use client";

import { WhatAutomationSection } from "@/components/automation/what-automation-section";

export function WhatIsWhiteLabel() {
  return (
    <WhatAutomationSection
      image="/page10.svg"
      imageAlt="White Label Solutions"
      title="What is White-Label Service?"
      descriptions={[
        "Our white-label service enables you to offer fully branded digital solutions to your clients while we handle the technology, automation, and infrastructure in the background. You focus on selling, relationships, and growth — we take care of execution and maintenance.",
        "This allows you to expand your service offerings quickly without investing time, money, or resources into building systems from scratch."
      ]}
      buttonText="Book a Strategy Call"
      cardBackgroundColor="bg-[#DEC5FF]"
    />
  );
}
