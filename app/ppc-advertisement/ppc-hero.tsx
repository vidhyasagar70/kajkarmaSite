"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function PPCHero() {
    return (
        <ReusableHero
            title={
                <>
                    PPC Marketing
                    <br />
                    Services
                </>
            }
            
            description="We combine audience research, keyword strategy, ad copy engineering, and conversion tracking to maximize return on ad spend."
            backgroundImage="/hhero.jpg"
            backgroundAlt="PPC Marketing Services"
            titleStyles={{
                fontSize: "110px",
                lineHeight: "100px",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                maxWidth: "900px",
            }}
            descriptionStyles={{
                fontSize: "16px",
                lineHeight: "1.6",
                maxWidth: "700px",
            }}
            buttons={[
                { text: "Launch Your PPC Campaign", variant: "primary" },
            ]}
            buttonSize="small"
        />
    );
}
