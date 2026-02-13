"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function MobileAppsHero() {
    return (
        <ReusableHero
            title={
                <>
                    Mobile App
                    <br />
                    Solutions
                </>
            }
            description="We build high-performance mobile applications tailored to your business needs and user expectations."
            backgroundImage="/hhero.jpg"
            backgroundAlt="Mobile Apps Background"
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
