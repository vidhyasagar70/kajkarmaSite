"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function MVPHero() {
    return (
        <ReusableHero
            title={
                <>
                    MVP Development
                    <br />
                    Services
                </>
            }
            description="Every successful startup begins with one thing: a validated Minimum Viable Product. We don't just build prototypes. We build scalable MVPs with real architecture, real usability, and real growth potential."
            backgroundImage="/hhero.jpg"
            backgroundAlt="MVP Development Services"
            titleStyles={{
                fontSize: "110px",
                lineHeight: "100px",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                maxWidth: "850px",
            }}
            descriptionStyles={{
                fontSize: "16px",
                lineHeight: "1.6",
                maxWidth: "700px",
            }}
            buttons={[
                { text: "Launch Your MVP", variant: "primary" },
            ]}
            buttonSize="small"
        />
    );
}
