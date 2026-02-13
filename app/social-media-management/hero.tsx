"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function SocialMediaHero() {
    return (
        <ReusableHero
            title={
                <>
                    Social Media
                    <br />
                    Management
                </>
            }
            description="Build a powerful community and boost your brand's presence with our expert social media management and growth strategies."
            backgroundImage="/hhero.jpg"
            backgroundAlt="Social Media Management Background"
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
