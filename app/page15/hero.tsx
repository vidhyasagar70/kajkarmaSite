"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function Hero() {
  return (
    <ReusableHero
      title={<>Insights That<br />Drive Real Growth</>}
      description="Practical ideas, proven strategies, and real-world learnings across marketing, sales, product development, and technology—designed to help you build and scale with confidence."
      backgroundImage="/hhero.jpg"
      backgroundAlt="Insights Hero Background"
      buttons={[
        { text: "Explore Blogs", variant: "primary" },
        { text: "View Topics", variant: "outline" },
      ]}
      titleStyles={{
        fontSize: "140px",
        lineHeight: "118px",
        fontWeight: 500,
        maxWidth: "1135px",
      }}
      descriptionStyles={{
        fontSize: "20px",
        lineHeight: "1.5",
        maxWidth: "800px",
      }}
    />
  );
}
