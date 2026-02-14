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
          
            description="At Kajkarma Innovation, we provide strategic social media management services designed to build brand authority, generate qualified leads, and support long-term business growth."
            backgroundImage="/hhero.jpg"
            backgroundAlt="Social Media Management Services"
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
                maxWidth: "750px",
            }}
            buttons={[
                { text: "Elevate Your Social Media Strategy", variant: "primary" },
            ]}
            buttonSize="small"
        />
    );
}
