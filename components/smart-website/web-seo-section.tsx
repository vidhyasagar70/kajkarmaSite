"use client";

import { CheckIcon, Magnet } from "lucide-react";

const seoFeatures = [
    "High-volume keyword research",
    "Long-tail keyword targeting",
    "Technical on-page optimization",
    "Structured schema implementation",
    "Content hierarchy planning",
    "Competitor gap analysis",
];

export function WebSEOSection() {
    return (
        <section className="w-full bg-[#1F0A3B] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9220E1] blur-[160px] opacity-10 rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Visual Side */}
                    <div className="w-full lg:w-2/5 aspect-square relative bg-white/5 backdrop-blur-md rounded-[48px] border border-white/10 flex items-center justify-center p-12">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Magnet size={120} className="text-[#9220E1] opacity-50 absolute animate-pulse rotate-12" />
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="px-6 py-4 bg-white/10 rounded-2xl border border-white/20 font-geist text-white text-sm font-medium">
                                        {i === 1 ? "Keyword A" : i === 2 ? "ROI Tracking" : i === 3 ? "Schema" : "Technical Audit"}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-3/5 flex flex-col gap-6 sm:gap-8">
                        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-white">
                            Built with <span className="text-[#9220E1]">SEO & AI-Driven Market Research</span>
                        </h2>
                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-white/70">
                            A website without traffic is an underperforming asset. We integrate technical SEO and AI-powered keyword research directly into your website development process. From structured URL architecture to search-intent mapping, your website is built to rank.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                            {seoFeatures.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="size-5 rounded-full bg-[#9220E1] flex items-center justify-center shrink-0">
                                        <CheckIcon size={12} className="text-white" />
                                    </div>
                                    <span className="font-geist text-[16px] text-white/90">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-white/70 mt-2">
                            Your website is engineered not only to look premium but to dominate relevant search queries in your niche.
                        </p>

                        <button className="w-fit px-8 py-4 bg-white text-[#130624] rounded-full font-semibold text-lg hover:bg-[#9220E1] hover:text-white transition-all shadow-xl">
                            Improve Your Search Visibility
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
