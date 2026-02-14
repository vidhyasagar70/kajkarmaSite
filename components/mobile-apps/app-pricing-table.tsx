"use client";

import { ArrowRight } from "lucide-react";

const pricingTiers = [
    {
        name: "MVP Application",
        timeline: "4–6 Weeks",
        investment: "5,000 – 12,000 USD",
        description: "Launch your core idea quickly to test market demand and gather user feedback.",
    },
    {
        name: "Ecommerce Application",
        timeline: "6–10 Weeks",
        investment: "8,000 – 25,000 USD",
        description: "Full-featured shopping experience with secure payments and inventory sync.",
    },
    {
        name: "Marketplace Platform",
        timeline: "8–16 Weeks",
        investment: "15,000 – 50,000 USD",
        description: "Complex multi-vendor ecosystems with seller dashboards and commission tools.",
        featured: true,
    },
    {
        name: "Enterprise-Level Custom",
        timeline: "3–6 Months",
        investment: "Custom Quote",
        description: "Large-scale systems built for millions of users and enterprise workflows.",
    },
];

export function AppPricingTable() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31] mb-6">
                        App Development <span className="text-[#7C3AED]">Cost & Investment Range</span>
                    </h2>
                    <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70 max-w-[700px] mx-auto">
                        The cost of custom app development depends on complexity, integrations, scalability requirements, and feature depth. Below is a general investment range.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {pricingTiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`flex flex-col p-8 rounded-[32px] transition-all duration-300 border-2 ${tier.featured
                                ? "bg-[#1F0A3B] border-[#7C3AED] shadow-[0_0_40px_rgba(124,58,237,0.2)]"
                                : "bg-white border-[#F0F0F0] hover:border-[#7C3AED]/30"
                                }`}
                        >
                            <h3 className={`font-clash font-medium text-2xl mb-2 ${tier.featured ? "text-white" : "text-[#0A0E31]"}`}>
                                {tier.name}
                            </h3>

                            <div className="flex flex-col gap-1 mb-6">
                                <p className={`text-sm tracking-wider uppercase opacity-60 ${tier.featured ? "text-white" : "text-gray-500"}`}>
                                    Timeline
                                </p>
                                <p className={`text-lg font-medium ${tier.featured ? "text-[#7C3AED]" : "text-[#7C3AED]"}`}>
                                    {tier.timeline}
                                </p>
                            </div>

                            <div className="flex flex-col gap-1 mb-8">
                                <p className={`text-sm tracking-wider uppercase opacity-60 ${tier.featured ? "text-white" : "text-gray-500"}`}>
                                    Investment
                                </p>
                                <p className={`text-xl md:text-2xl font-semibold ${tier.featured ? "text-white" : "text-[#0A0E31]"}`}>
                                    {tier.investment}
                                </p>
                            </div>

                            <p className={`font-geist font-light text-sm leading-relaxed mb-auto ${tier.featured ? "text-white/80" : "text-gray-600"}`}>
                                {tier.description}
                            </p>

                            <button
                                className={`mt-10 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 ${tier.featured
                                    ? "bg-[#9220E1] text-white hover:bg-[#7C3AED]"
                                    : "bg-[#F8F7FC] text-[#0A0E31] border border-[#F0F0F0] hover:bg-[#9220E1] hover:text-white"
                                    }`}
                                style={{
                                    padding: "10px 22px",
                                    fontSize: "14px",
                                }}
                            >
                                Get Details
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* CTA Below Table */}
                <div className="text-center mt-12 sm:mt-16">
                    <button
                        className="bg-[#9220E1] text-white rounded-full font-medium transition-all shadow-lg shadow-[#9220E1]/10 hover:bg-[#7C3AED]"
                        style={{
                            padding: "10px 22px",
                            fontSize: "14px",
                        }}
                    >
                        Request Detailed Proposal
                    </button>
                </div>
            </div>
        </section>
    );
}
