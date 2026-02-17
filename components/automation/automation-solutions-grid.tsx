"use client";

import { motion } from "framer-motion";

interface GridItem {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface AutomationSolutionsGridProps {
    title: string | React.ReactNode;
    subtitle?: string;
    items: GridItem[];
    ctaText?: string;
    ctaHref?: string;
    columns?: 2 | 3;
    dark?: boolean;
}

export function AutomationSolutionsGrid({
    title,
    subtitle,
    items,
    ctaText,
    ctaHref = "#",
    columns = 3,
    dark = false
}: AutomationSolutionsGridProps) {
    return (
        <section className={`w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 ${dark ? "bg-[#0A0E31] text-white" : "bg-white text-[#0A0E31]"}`}>
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-16">
                    <h2 className="font-clash font-medium text-[32px] md:text-[42px] lg:text-[48px] leading-tight mb-4">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className={`font-geist font-light text-[16px] sm:text-[18px] max-w-2xl ${dark ? "text-white/60" : "text-[#0A0E31]/60"}`}>
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className={`grid gap-5 md:gap-6 ${columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
                    {items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className={`p-8 rounded-[32px] border transition-all duration-300 flex flex-col gap-5 group hover:shadow-lg ${dark
                                ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                                : "bg-[#FBF9FE] border-[#F0F0F0] hover:bg-white hover:border-[#7C3AED]/15"
                                }`}
                        >
                            <div>
                                <h3 className="font-clash font-medium text-[20px] sm:text-[22px] mb-2 transition-colors">
                                    {item.title}
                                </h3>
                                <p className={`font-geist font-light text-[15px] sm:text-[16px] leading-relaxed ${dark ? "text-white/60" : "text-[#0A0E31]/70"}`}>
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {ctaText && (
                    <div className="mt-12">
                        <button
                            className="font-geist flex items-center justify-center transition-all duration-200 active:scale-[0.97] bg-[#7C3AED] text-white rounded-full font-medium hover:bg-[#9220E1] shadow-md shadow-[#7C3AED]/10"
                            style={{
                                padding: "10px 22px",
                                fontSize: "14px",
                            }}
                        >
                            {ctaText}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
