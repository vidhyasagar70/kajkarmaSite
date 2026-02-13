"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function Hero() {
  return (
    <ReusableHero
      title={
        <>
          Automation for
          <br />
          Your Business
        </>
      }
      description="Kajkarma blends design, development, and digital marketing to create solutions that grow your business and define your brand's identity."
      backgroundImage="/hhero.jpg"
      backgroundAlt="Automation for Your Business Background"
      titleStyles={{
        fontSize: "140px",
        lineHeight: "116px",
        fontWeight: 500,
        letterSpacing: "0%",
        maxWidth: "948px",
      }}
      buttons={[
        { text: "Connect With Us", variant: "primary" },
        { text: "Find Your Perfect Mix", variant: "outline" },
      ]}
    />
  );
}
