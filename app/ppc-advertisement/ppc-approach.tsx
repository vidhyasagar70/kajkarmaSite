"use client";

import { motion } from "framer-motion";

const steps = [
    {
        phase: "Phase 1",
        title: "Market & Competitor Research",
        description: "We analyze competitor ad strategy, keyword competition, audience targeting gaps, and industry CPC benchmarks to ensure data-backed precision."
    },
    {
        phase: "Phase 2",
        title: "Funnel & Landing Page Optimization",
        description: "We optimize ad-to-landing page alignment, conversion rates, CTA clarity, and performance because traffic without conversion is wasted spend."
    },
    {
        phase: "Phase 3",
        title: "Campaign Launch & Optimization",
        description: "Continuous monitoring of CTR, CPC, CPA, and ROAS. We optimize creatives, targeting, bids, and funnels to improve overall profitability."
    }
];

export function PPCApproach() {
    return (
        <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FBF9FE] overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[42px] md:text-[54px] text-[#0A0E31] mb-5">
                        Our PPC Strategy <span className="text-[#9220E1]">Framework</span>
                    </h2>
                    <p className="font-geist font-light text-[17px] sm:text-[19px] text-[#0A0E31]/60 max-w-3xl mx-auto">
                        We do not run random ads. We build high-performance advertising systems designed for growth.
                    </p>
                </div>

                <div className="relative">
                    {/* Desktop Progress Line */}
                    <div className="absolute top-[40px] left-0 w-full h-[1px] bg-[#E0E0E0] hidden lg:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5 group"
                            >
                                <div className="relative z-10 size-12 rounded-[16px] bg-white border border-[#EEEEEE] flex items-center justify-center text-[#9220E1] font-clash font-semibold text-base transition-all duration-300 group-hover:bg-[#9220E1] group-hover:text-white group-hover:border-[#9220E1] shadow-sm">
                                    {index + 1}
                                </div>

                                <div className="space-y-3">
                                    <div className="flex flex-col">
                                        <span className="font-clash font-semibold text-[#9220E1] text-[12px] uppercase tracking-widest mb-1">{step.phase}</span>
                                        <h3 className="font-clash font-medium text-[20px] sm:text-[22px] text-[#0A0E31]">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="font-geist font-light text-[15px] sm:text-[16px] text-[#0A0E31]/60 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-4">
                    <button
                        className="font-geist flex items-center justify-center transition-all duration-200 active:scale-[0.97] bg-[#9220E1] text-white rounded-full font-medium hover:bg-[#7C3AED] shadow-md shadow-[#9220E1]/10"
                        style={{
                            padding: "10px 22px",
                            fontSize: "14px",
                        }}
                    >
                        Build Data-Driven Campaigns
                        <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                    <button
                        className="font-geist flex items-center justify-center transition-all duration-200 active:scale-[0.97] bg-white text-[#9220E1] border border-[#9220E1]/20 rounded-full font-medium hover:bg-[#FBF9FE]"
                        style={{
                            padding: "10px 22px",
                            fontSize: "14px",
                        }}
                    >
                        Scale Your Paid Campaigns
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
