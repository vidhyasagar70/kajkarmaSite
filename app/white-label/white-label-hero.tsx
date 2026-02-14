"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function WhiteLabelHero() {
    return (
        <ReusableHero
            title={
                <>
                    White Label
                    <br />
                    Development Services
                </>
            }
            description="At Kajkarma Innovation, we provide fully confidential white-label development for agencies, consultants, marketing firms, and tech partners who need reliable backend execution under their own brand."
            backgroundImage="/hhero.jpg"
            backgroundAlt="White Label Development Services"
            titleStyles={{
                fontSize: "100px",
                lineHeight: "105px",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                maxWidth: "900px",
            }}
            descriptionStyles={{
                fontSize: "16px",
                lineHeight: "1.5",
                maxWidth: "850px",
            }}
            buttons={[
                { text: "Become a White Label Partner", variant: "primary" },
            ]}
            buttonSize="small"
        />
    );
}
