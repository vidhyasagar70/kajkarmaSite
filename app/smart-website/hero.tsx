"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function SmartWebsiteHero() {
    return (
        <ReusableHero
            title={
                <>
                    Smart Website
                    <br />
                    Solutions
                </>
            }
            description="Elevate your online presence with intelligent, responsive websites designed to convert visitors into loyal customers."
            backgroundImage="/hhero.jpg"
            backgroundAlt="Smart Website Background"
            titleStyles={{
                fontSize: "140px",
                lineHeight: "112px",
                fontWeight: 500,
                letterSpacing: "0%",
                maxWidth: "911px",
            }}
            buttons={[
                { text: "Connect With Us", variant: "primary" },
                { text: "Find Your Perfect Mix", variant: "outline" },
            ]}
        />
    );
}
