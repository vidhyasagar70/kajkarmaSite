"use client";

import { ArrowRight } from "lucide-react";

const pricingTiers = [
    {
        name: "Business Website",
        timeline: "3–6 weeks",
        investment: "2,500 – 8,000 USD",
    },
    {
        name: "Ecommerce Website",
        timeline: "4–8 weeks",
        investment: "5,000 – 20,000 USD",
    },
    {
        name: "Jewelry / Premium Ecommerce",
        timeline: "6–10 weeks",
        investment: "8,000 – 25,000 USD",
        featured: true,
    },
    {
        name: "Advanced Custom Website",
        timeline: "6–12 weeks",
        investment: "Custom Quote",
    },
];

export function WebPricingTable() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31] mb-6">
                        Website Development <span className="text-[#7C3AED]">Cost & Investment</span>
                    </h2>
                    <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70 max-w-[700px] mx-auto">
                        Investment depends on complexity, features, integrations, and scale. We provide detailed proposals with transparent scope breakdowns.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pricingTiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-[32px] border-2 transition-all duration-300 flex flex-col ${tier.featured
                                ? "bg-[#1F0A3B] border-[#7C3AED] text-white shadow-xl"
                                : "bg-white border-[#F0F0F0] text-[#0A0E31]"
                                }`}
                        >
                            <h3 className="font-clash font-medium text-2xl mb-6">{tier.name}</h3>

                            <div className="flex flex-col gap-1 mb-4">
                                <span className="text-xs uppercase tracking-widest opacity-60">Timeline</span>
                                <span className="text-lg font-medium">{tier.timeline}</span>
                            </div>

                            <div className="flex flex-col gap-1 mb-8">
                                <span className="text-xs uppercase tracking-widest opacity-60">Investment</span>
                                <span className="text-xl md:text-2xl font-semibold">{tier.investment}</span>
                            </div>

                            <button
                                className={`mt-auto rounded-full font-medium transition-all flex items-center justify-center gap-2 ${tier.featured
                                    ? "bg-[#7C3AED] text-white hover:bg-[#9220E1]"
                                    : "bg-[#F8F7FC] text-[#0A0E31] border border-[#F0F0F0] hover:bg-[#7C3AED] hover:text-white"
                                    }`}
                                style={{
                                    padding: "10px 22px",
                                    fontSize: "14px",
                                }}
                            >
                                Request a Custom Proposal
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
