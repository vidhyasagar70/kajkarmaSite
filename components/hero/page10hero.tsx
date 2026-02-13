"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function Hero() {
  return (
    <ReusableHero
      title={
        <>
          White Label
          <br />
          Your Project
        </>
      }
      description="Kajkarma blends design, development, and digital marketing to create solutions that grow your business and define your brand's identity."
      backgroundImage="/hhero.jpg"
      backgroundAlt="Digital Products Background"
      titleStyles={{
        fontSize: "155px",
        lineHeight: "122px",
        fontWeight: 500,
        maxWidth: "900px",
      }}
      buttons={[
        { text: "Book a Meeting", variant: "primary" },
        { text: "Explore Services", variant: "outline" },
      ]}
    />
  );
}
