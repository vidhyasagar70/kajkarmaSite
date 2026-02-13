"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function MarketingHero() {
  return (
    <ReusableHero
      title={
        <>
          Marketing &
          <br />
          Growth Solutions
        </>
      }
      description="We help businesses attract the right audience, generate quality leads, and scale growth through data-driven marketing strategies and performance-focused execution."
      backgroundImage="/hhero.jpg"
      backgroundAlt="Marketing & Growth Background"
      titleStyles={{
        fontSize: "140px",
        lineHeight: "118px",
        fontWeight: 500,
        letterSpacing: "0%",
        maxWidth: "1119px",
      }}
      buttons={[
        { text: "Book a Meeting", variant: "primary" },
        { text: "Explore Services", variant: "outline" },
      ]}
    />
  );
}
