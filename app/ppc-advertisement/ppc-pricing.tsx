"use client";

import { motion } from "framer-motion";

const pricingModels = [
    {
        title: "Flat Monthly Management Fee",
        description: "Ideal for stable campaigns with predictable workloads and consistent maintenance requirements."
    },
    {
        title: "Percentage of Ad Spend",
        description: "A performance-aligned pricing model that scales with your growth and advertising investment."
    },
    {
        title: "Custom Growth Plans",
        description: "Bespoke strategies for scaling complex ecommerce or large-scale multi-platform ad campaigns."
    }
];

export function PPCPricing() {
    return (
        <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white text-[#0A0E31]">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[42px] md:text-[54px] mb-6 leading-tight">
                        PPC Pricing <span className="text-[#9220E1]">& Budget</span>
                    </h2>
                    <p className="font-geist font-light text-[17px] sm:text-[19px] text-[#0A0E31]/60">
                        We provide clear reporting and transparent budgeting based on campaign complexity and your specific goals.
                    </p>
                </div>

                <div className="grid gap-5 md:gap-6 w-full sm:grid-cols-2 lg:grid-cols-3">
                    {pricingModels.map((model, index) => (
                        <motion.div
                            key={model.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="p-8 rounded-[32px] border border-[#F0F0F0] bg-[#FBF9FE] transition-all duration-300 flex flex-col gap-4 group hover:shadow-lg hover:bg-white hover:border-[#9220E1]/15"
                        >
                            <div className="flex items-start gap-4">
                                <div className="size-1.5 rounded-full bg-[#9220E1] mt-2.5 shrink-0" />
                                <div>
                                    <h3 className="font-clash font-medium text-[20px] sm:text-[22px] mb-2">
                                        {model.title}
                                    </h3>
                                    <p className="font-geist font-light text-[15px] sm:text-[16px] leading-relaxed text-[#0A0E31]/70">
                                        {model.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12">
                    <button
                        className="font-geist flex items-center justify-center transition-all duration-200 active:scale-[0.97] bg-[#9220E1] text-white rounded-full font-medium hover:bg-[#7C3AED] shadow-md shadow-[#9220E1]/10"
                        style={{
                            padding: "10px 22px",
                            fontSize: "14px",
                        }}
                    >
                        Get a PPC Proposal
                        <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
