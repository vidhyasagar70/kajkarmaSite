"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function Hero() {
  return (
    <ReusableHero
      title={
        <>
          Sales & Outreach
          <br />
          Services
        </>
      }
      description="We help businesses reach the right prospects, start meaningful conversations, and convert outreach into consistent revenue through structured, data-driven sales systems."
      backgroundImage="/hhero.jpg"
      backgroundAlt="Sales & Outreach Services Background"
      titleStyles={{
        fontSize: "140px",
        lineHeight: "118px",
        fontWeight: 500,
        letterSpacing: "0%",
        maxWidth: "1119px",
      }}
      buttons={[
        { text: "Book a Meeting", variant: "primary" },
        { text: "Start Outreach", variant: "outline" },
      ]}
    />
  );
}
