"use client";

import { WhatAutomationSection } from "@/components/automation/what-automation-section";

export function SalesOutreachSection() {
  return (
    <WhatAutomationSection
      image="/Rectangle 5242 (4).svg"
      imageAlt="Sales & Outreach"
      title="Sales & Outreach Services"
      descriptions={[
        "We help businesses build structured sales and outreach systems that generate qualified leads, start meaningful conversations, and improve conversion rates.",
        "By combining targeted prospecting, personalized messaging, and consistent follow-ups, we turn outreach efforts into reliable revenue opportunities.",
      ]}
      buttonText="Book a Strategy Call"
      cardBackgroundColor="bg-[#DEC5FF]"
    />
  );
}
