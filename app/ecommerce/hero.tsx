"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function EcommerceHero() {
    return (
        <ReusableHero
            title={
                <>
                    Ecommerce
                    <br />
                    Solutions
                </>
            }
            description="Powerful ecommerce solutions tailored to your business needs, helping you sell more and reach a wider audience."
            backgroundImage="/hhero.jpg"
            backgroundAlt="Ecommerce Background"
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
            buttonSize="small"
        />
    );
}
