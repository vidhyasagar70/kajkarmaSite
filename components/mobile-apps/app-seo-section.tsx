"use client";

import { CheckIcon } from "lucide-react";

const seoFeatures = [
    "Technical SEO optimization",
    "Core Web Vitals performance",
    "Structured data implementation",
    "Search-intent-driven content structure",
    "AI-powered market research",
];

export function AppSEOSection() {
    return (
        <section className="w-full bg-[#1F0A3B] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED] blur-[150px] opacity-20 -mr-[250px] -mt-[250px] rounded-full" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Left Column - Content */}
                    <div className="w-full lg:w-3/5 flex flex-col gap-6 sm:gap-8 text-white">
                        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight">
                            Built with <span className="text-[#9220E1]">SEO-First Architecture</span>
                        </h2>
                        <p className="font-geist font-light text-[18px] sm:text-[20px] leading-relaxed text-white/80">
                            Every application we build follows technical SEO best practices, structured data implementation, and scalable content architecture. We combine AI-driven keyword research, competitor analysis, and search intent mapping to ensure your application ranks for high-value search terms.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {seoFeatures.map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="size-6 rounded-full bg-[#7C3AED] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <CheckIcon size={14} className="text-white" />
                                    </div>
                                    <span className="font-geist text-[16px] sm:text-[18px] text-white/90">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Visual/Image placeholder */}
                    <div className="w-full lg:w-2/5 aspect-square relative rounded-[40px] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        {/* Some abstract SVG for SEO/Growth */}
                        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[60%] h-[60%]">
                            <rect x="40" y="140" width="40" height="60" rx="4" fill="#7C3AED" />
                            <rect x="100" y="80" width="40" height="120" rx="4" fill="#9220E1" />
                            <rect x="160" y="40" width="40" height="160" rx="4" fill="#7C3AED" />
                            <path d="M40 200L200 40" stroke="white" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
