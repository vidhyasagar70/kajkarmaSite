"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface SplitServiceSectionProps {
    title: string;
    subtitle?: string;
    description: string;
    features: string[];
    ctaText: string;
    imageSrc: string;
    imageOnRight?: boolean;
    theme?: "light" | "dark";
}

export function SplitServiceSection({
    title,
    subtitle,
    description,
    features,
    ctaText,
    imageSrc,
    imageOnRight = true,
    theme = "light",
}: SplitServiceSectionProps) {
    const isDark = theme === "dark";

    return (
        <section className={`w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-[#130624] text-white" : "bg-white text-[#0A0E31]"}`}>
            <div className="max-w-[1400px] mx-auto">
                <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${!imageOnRight ? "lg:flex-row-reverse" : ""}`}>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
                        <div className="flex flex-col gap-2">
                            <h2 className={`font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight ${isDark ? "text-white" : "text-[#0A0E31]"}`}>
                                {title}
                            </h2>
                            {subtitle && (
                                <p className={`font-clash text-xl sm:text-2xl text-[#9220E1]`}>
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        <p className={`font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed ${isDark ? "text-white/70" : "text-[#0A0E31]/70"}`}>
                            {description}
                        </p>

                        <div className="grid grid-cols-1 gap-y-3 my-2">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-[#9220E1]" strokeWidth={3} />
                                    <span className={`font-geist text-[16px] ${isDark ? "text-white/80" : "text-[#0A0E31]/80"}`}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            className={`w-fit mt-4 rounded-full font-medium transition-all flex items-center gap-2 group ${isDark
                                ? "bg-[#9220E1] text-white hover:bg-[#7C3AED]"
                                : "bg-[#7C3AED] text-white border border-[#F0F0F0] hover:bg-[#9220E1] hover:text-white"
                                }`}
                            style={{
                                padding: "10px 22px",
                                fontSize: "14px",
                            }}
                        >
                            {ctaText}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
