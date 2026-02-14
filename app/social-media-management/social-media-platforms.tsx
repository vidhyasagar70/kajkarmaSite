"use client";

import { motion } from "framer-motion";

const platforms = [
    {
        title: "Instagram",
        description: "Content strategy, grid planning, reels optimization, engagement growth, and premium brand positioning."
    },
    {
        title: "Facebook",
        description: "Community management, organic engagement strategies, brand storytelling, and ad integration support."
    },
    {
        title: "LinkedIn",
        description: "Professional positioning for B2B companies, founders, consultants, and enterprise brands."
    },
    {
        title: "YouTube",
        description: "Video optimization, SEO-driven descriptions, and structured content growth."
    }
];

export function SocialMediaPlatforms() {
    return (
        <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white text-[#0A0E31]">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[42px] md:text-[54px] mb-6 leading-tight">
                        Platforms We <span className="text-[#9220E1]">Manage</span>
                    </h2>
                    <p className="font-geist font-light text-[17px] sm:text-[19px] text-[#0A0E31]/60">
                        We manage and optimize content across major social platforms based on your target audience and business model.
                    </p>
                </div>

                <div className="grid gap-5 md:gap-6 w-full sm:grid-cols-2">
                    {platforms.map((platform, index) => (
                        <motion.div
                            key={platform.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="p-8 rounded-[32px] border border-[#F0F0F0] bg-[#FBF9FE] transition-all duration-300 flex flex-col gap-2 group hover:shadow-lg hover:bg-white hover:border-[#9220E1]/15"
                        >
                            <div className="flex items-start gap-4">
                                <div className="size-1.5 rounded-full bg-[#9220E1] mt-2.5 shrink-0" />
                                <div>
                                    <h3 className="font-clash font-medium text-[20px] sm:text-[22px] mb-1">
                                        {platform.title}
                                    </h3>
                                    <p className="font-geist font-light text-[15px] sm:text-[16px] leading-relaxed text-[#0A0E31]/70">
                                        {platform.description}
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
                        Choose Your Platform Strategy
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
