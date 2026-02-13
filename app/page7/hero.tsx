"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function Hero() {
  return (
    <ReusableHero
      title={
        <>
          Solutions That
          <br />
          Drive Growth
        </>
      }
      description="Kajkarma blends design, development, and digital marketing to create solutions that grow your business and define your brand's identity."
      backgroundImage="/hhero.jpg"
      backgroundAlt="Solutions That Drive Growth Background"
      titleStyles={{
        fontSize: "140px",
        lineHeight: "112px",
        fontWeight: 500,
        letterSpacing: "0%",
        maxWidth: "911px",
      }}
      buttons={[
        { text: "Connect With Us", variant: "primary" },
        { text: "Find Your Perfect Mix", variant: "outline" },
      ]}
    />
  );
}
