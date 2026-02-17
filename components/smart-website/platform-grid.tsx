"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";

const platforms = [
    {
        name: "WordPress Development",
        description: "Ideal for service businesses, agencies, content-heavy websites, and SEO-driven platforms. We build lightweight, optimized WordPress websites designed for speed and flexibility.",
        features: ["Lightweight & Optimized", "SEO-Driven", "Highly Flexible"],
    },
    {
        name: "Shopify Development",
        description: "Perfect for ecommerce brands that require secure checkout systems, scalable product catalogs, and streamlined store management.",
        features: ["Secure Checkout", "Scalable Catalogs", "Easy Management"],
    },
    {
        name: "Custom Framework Builds",
        description: "For advanced requirements, we develop websites using modern frameworks that ensure higher performance and customization capabilities.",
        features: ["Modern Stack (Next.js/React)", "Maximum Performance", "Full Customization"],
    },
];

export function PlatformGrid() {
    return (
        <section className="w-full bg-[#f8f7fc] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-10 sm:mb-12 md:mb-16">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31]">
                        WordPress & <span className="text-[#7C3AED]">Shopify Development</span>
                    </h2>
                    <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70 mt-4 max-w-[800px]">
                        We work with the most powerful platforms to match your business model.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-[32px] border border-[#F0F0F0] flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="font-clash font-medium text-2xl text-[#0A0E31]">
                                {platform.name}
                            </h3>
                            <p className="font-geist font-light text-[15px] sm:text-[16px] leading-relaxed text-[#0A0E31]/70">
                                {platform.description}
                            </p>

                            <div className="flex flex-col gap-2 mt-auto">
                                {platform.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#7C3AED]" />
                                        <span className="font-geist text-sm text-[#0A0E31]/80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="w-fit mt-4 bg-[#7C3AED] text-white text-white rounded-full font-medium transition-all flex items-center gap-2 group shadow-md shadow-[#9220E1]/10 hover:bg-[#9220E1]"
                                style={{
                                    padding: "10px 22px",
                                    fontSize: "14px",
                                }}
                            >
                                Get Recommendation
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
