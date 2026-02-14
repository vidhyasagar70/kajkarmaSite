"use client";

import { motion } from "framer-motion";

interface GridItem {
    title: string;
    description?: string;
}

interface MVPGridProps {
    title: string | React.ReactNode;
    subtitle?: string;
    items: GridItem[];
    ctaText?: string;
    dark?: boolean;
    columns?: 2 | 3;
}

export function MVPGrid({
    title,
    subtitle,
    items,
    ctaText,
    dark = false,
    columns = 3
}: MVPGridProps) {
    return (
        <section className={`w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 ${dark ? "bg-[#0A0E31] text-white" : "bg-white text-[#0A0E31]"}`}>
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[42px] md:text-[54px] mb-6 leading-tight">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className={`font-geist font-light text-[17px] sm:text-[19px] ${dark ? "text-white/60" : "text-[#0A0E31]/60"}`}>
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className={`grid gap-5 md:gap-6 w-full ${columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
                    {items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className={`p-8 rounded-[32px] border transition-all duration-300 flex flex-col gap-4 group hover:shadow-lg ${dark
                                ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                                : "bg-[#FBF9FE] border-[#F0F0F0] hover:bg-white hover:border-[#9220E1]/15"
                                }`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="size-1.5 rounded-full bg-[#9220E1] mt-2.5 shrink-0" />
                                <div>
                                    <h3 className="font-clash font-medium text-[20px] sm:text-[22px] mb-2 transition-colors">
                                        {item.title}
                                    </h3>
                                    {item.description && (
                                        <p className={`font-geist font-light text-[15px] sm:text-[16px] leading-relaxed ${dark ? "text-white/60" : "text-[#0A0E31]/70"}`}>
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {ctaText && (
                    <div className="mt-12">
                        <button
                            className="font-geist flex items-center justify-center transition-all duration-200 active:scale-[0.97] bg-[#9220E1] text-white rounded-full font-medium hover:bg-[#7C3AED] shadow-md shadow-[#9220E1]/10"
                            style={{
                                padding: "10px 22px",
                                fontSize: "14px",
                            }}
                        >
                            {ctaText}
                            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
