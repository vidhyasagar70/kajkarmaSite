"use client";

import { WhatAutomationSection } from "@/components/automation/what-automation-section";

export function BuildingFast() {
  return (
    <WhatAutomationSection
      image="/buildingfast.svg"
      imageAlt="White Label Solutions"
      title="Building fast, scalable digital products"
      descriptions={[
        "We design and develop high-performance websites and mobile applications that are secure, reliable, and built to grow with your business. Our approach focuses on clean code, intuitive user experiences, and scalable architecture to ensure long-term performance.",
        "From business websites to complex web and mobile applications, we create solutions that are easy to manage, fast to launch, and ready to scale as your needs evolve."
      ]}
      buttonText="Book a Strategy Call"
      cardBackgroundColor="bg-[#DEC5FF]"
    />
  );
}
