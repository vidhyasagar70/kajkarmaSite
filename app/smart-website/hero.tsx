"use client";

import { ReusableHero } from "@/components/hero/reusable-hero";

export function SmartWebsiteHero() {
    return (
        <ReusableHero
            title={
                <span className="font-clash">
                    High-Converting Website Development Services
                </span>
            }

            description="Your website is not a design project. It is a growth asset. At Kajkarma Innovation, we develop high-converting business websites, ecommerce platforms, jewelry websites, and fully custom digital systems engineered for performance, SEO visibility, and long-term scalability. We combine technical architecture, conversion psychology, AI-driven keyword research, and strategic content planning to ensure your website becomes your most powerful sales engine."
            backgroundImage="/hhero.jpg"
            backgroundAlt="Smart Website Background"
            titleStyles={{
                fontSize: "clamp(48px, 6vw, 100px)",
                lineHeight: "1.1",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                maxWidth: "1100px",
            }}
            buttons={[
                { text: "Start Your Website Project Today", variant: "primary" },
            ]}
            buttonSize="small"
        />
    );
}
