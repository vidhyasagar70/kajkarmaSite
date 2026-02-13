"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function Hero() {
  return (
    <ReusableHero
      title={
        <>
          MVP & Product
          <br />
          Development
        </>
      }
      description="We help startups and businesses turn ideas into functional MVPs and scalable digital products—faster, leaner, and with clarity at every step."
      backgroundImage="/hhero.jpg"
      backgroundAlt="MVP & Product Development Background"
      titleStyles={{
        fontSize: "140px",
        lineHeight: "118px",
        fontWeight: 500,
        letterSpacing: "0%",
        maxWidth: "1119px",
      }}
      buttons={[
        { text: "Start Your MVP", variant: "primary" },
        { text: "Book a Consultation", variant: "outline" },
      ]}
    />
  );
}
