"use client";

import { motion } from "framer-motion";

interface PricingTierProps {
    title: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

function PricingTier({ title, description, features, isPopular }: PricingTierProps) {
    return (
        <div className={`p-8 sm:p-10 rounded-[40px] border transition-all duration-500 flex flex-col gap-8 h-full ${isPopular
            ? "bg-[#0A0E31] border-[#9220E1]/30 text-white shadow-xl shadow-[#9220E1]/10 relative"
            : "bg-white border-[#F0F0F0] text-[#0A0E31] hover:border-[#9220E1]/15 hover:shadow-md"
            }`}>
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-[#9220E1] text-white rounded-full font-clash font-medium text-xs">
                    Recommended
                </div>
            )}

            <div>
                <h3 className={`font-clash font-medium text-2xl sm:text-3xl mb-3 ${isPopular ? "text-white" : "text-[#0A0E31]"}`}>
                    {title}
                </h3>
                <p className={`font-geist font-light text-[15px] sm:text-[16px] ${isPopular ? "text-white/60" : "text-[#0A0E31]/60"}`}>
                    {description}
                </p>
            </div>

            <div className="flex flex-col gap-4 flex-grow">
                <p className="font-clash font-semibold text-[13px] uppercase tracking-wider text-[#9220E1]">
                    What's Included:
                </p>
                <div className="flex flex-col gap-3.5">
                    {features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                            <div className="size-1.5 rounded-full bg-[#9220E1] mt-2 shrink-0" />
                            <span className={`font-geist text-[15px] sm:text-[15.5px] leading-tight ${isPopular ? "text-white/80" : "text-[#0A0E31]/80"}`}>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className={`font-geist flex items-center justify-center transition-all duration-300 w-full rounded-[20px] font-medium py-4 text-base group ${isPopular
                    ? "bg-[#9220E1] text-white hover:bg-[#7C3AED]"
                    : "bg-[#FBF9FE] text-[#0A0E31] hover:bg-[#9220E1] hover:text-white"
                    }`}
            >
                Get Started
            </button>
        </div>
    );
}

export function AutomationPricing() {
    return (
        <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FBF9FE]">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[42px] md:text-[54px] text-[#0A0E31] mb-6 leading-tight">
                        AI Automation <span className="text-[#9220E1]">Pricing</span>
                    </h2>
                    <p className="font-geist font-light text-[17px] sm:text-[19px] text-[#0A0E31]/60">
                        Automation pricing depends on workflow complexity and integration depth. We provide customized proposals after workflow analysis.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                    <PricingTier
                        title="Basic Setup"
                        description="Ideal for single workflow systems."
                        features={[
                            "Single workflow system",
                            "Standard integrations",
                            "Basic logic flows",
                            "Error handling setup"
                        ]}
                    />
                    <PricingTier
                        isPopular
                        title="Advanced System"
                        description="Comprehensive multi-step workflows."
                        features={[
                            "Multi-step workflows",
                            "CRM integration",
                            "AI logic implementation",
                            "Custom API connections",
                            "Performance optimization"
                        ]}
                    />
                    <PricingTier
                        title="Enterprise"
                        description="Multi-department architecture."
                        features={[
                            "Scalable backend logic",
                            "Full system architecture",
                            "Multi-department sync",
                            "Custom dashboard setup",
                            "Priority logic monitoring"
                        ]}
                    />
                </div>

                <div className="mt-14 text-center">
                    <button
                        className="font-geist text-[#9220E1] font-semibold text-[17px] flex items-center mx-auto hover:underline transition-all"
                    >
                        Request Automation Proposal
                    </button>
                </div>
            </div>
        </section>
    );
}
