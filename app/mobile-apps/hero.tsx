"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function MobileAppsHero() {
    return (
        <ReusableHero
            title={
                <span className="font-clash">
                    Custom App Development Services for Scalable Digital Platforms
                </span>
            }
            description="We design and develop ecommerce applications, marketplace platforms, SaaS products, and custom business systems built for performance, scalability, and long-term revenue growth."
            backgroundImage="/hhero.jpg"
            backgroundAlt="Mobile Apps Background"
            titleStyles={{
                fontSize: "clamp(48px, 6vw, 100px)",
                lineHeight: "1.1",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                maxWidth: "1100px",
            }}
            buttons={[
                { text: "Start Your Project", variant: "primary" },
                { text: "View Our Work", variant: "outline" },
            ]}
            buttonSize="small"
        />
    );
}
