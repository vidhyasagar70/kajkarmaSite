"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function CustomMarketSolutionHero() {
    return (
        <ReusableHero
            title={
                <>
                    Custom Market
                    <br />
                    Solutions
                </>
            }
            description="Tailored strategies designed to help your brand stand out and achieve sustainable growth in a competitive market."
            backgroundImage="/hhero.jpg"
            backgroundAlt="Custom Market Solution Background"
            titleStyles={{
                fontSize: "140px",
                lineHeight: "112px",
                fontWeight: 500,
                letterSpacing: "0%",
                maxWidth: "911px",
            }}
            buttons={[
                { text: "Connect With Us", variant: "primary", className: "bg-[#7C3AED] hover:bg-white hover:text-[#7C3AED] transition-all" },
                { text: "Find Your Perfect Mix", variant: "outline" },
            ]}
            buttonSize="small"
        />
    );
}
