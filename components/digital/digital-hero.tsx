"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function DigitalHero() {
  return (
    <ReusableHero
      title={
        <>
          Build Powerful
          <br />
          Digital Products
        </>
      }
      description="Kajkarma designs and develops high-performance websites and mobile applications that are fast, secure, and built to scale with your business needs."
      backgroundImage="/hhero.jpg"
      backgroundAlt="Digital Products Background"
      buttons={[
        { text: "Book a Meeting", variant: "primary" },
        { text: "Explore Services", variant: "outline" },
      ]}
    />
  );
}
