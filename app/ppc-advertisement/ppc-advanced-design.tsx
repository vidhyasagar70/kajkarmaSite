"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, BarChart3, Target } from "lucide-react";

export function PPCAdvancedDesign() {
    const features = [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Contextual Targeting",
            description: "We bypass generic traffic to find users with immediate purchase intent."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "ROAS Engineering",
            description: "Our systems are built to squeeze every dollar for maximum revenue."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Data Attribution",
            description: "Full-funnel tracking from first click to final conversion."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Audience Bio-Profiling",
            description: "Targeting based on behavior, psychology, and real-time intent."
        }
    ];

    return (
        <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-[#9220E1]/5 -rotate-6 blur-[100px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="font-clash font-semibold text-[#9220E1] text-[14px] uppercase tracking-widest mb-4 block">The Advanced Edge</span>
                            <h2 className="font-clash font-medium text-[40px] sm:text-[54px] md:text-[64px] leading-[1.05] text-[#0A0E31] mb-8">
                                The Science of <br /> <span className="text-[#9220E1]">Performance Marketing</span>
                            </h2>
                            <p className="font-geist font-light text-[18px] sm:text-[20px] text-[#0A0E31]/70 mb-10 leading-relaxed max-w-xl">
                                We don't just "set and forget." We engineer data-driven loops that continuously refine your targeting to drive cost-per-acquisition down while scaling volume up.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                        className="flex flex-col gap-3"
                                    >
                                        <div className="text-[#9220E1]">{feature.icon}</div>
                                        <h3 className="font-clash font-medium text-[20px] text-[#0A0E31]">{feature.title}</h3>
                                        <p className="font-geist font-light text-[15px] text-[#0A0E31]/60">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative aspect-square max-w-[500px] mx-auto lg:ml-auto"
                        >
                            {/* Visual "Advanced" Visualization */}
                            <div className="absolute inset-0 rounded-[48px] border border-[#9220E1]/20 bg-[#FBF9FE] overflow-hidden">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center p-12">
                                    <div className="w-full h-2 bg-[#F0F0F0] rounded-full overflow-hidden mb-6">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            transition={{ duration: 2, delay: 0.5 }}
                                            className="h-full bg-gradient-to-r from-[#9220E1] to-[#7C3AED]"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-3 w-full mb-8">
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: i * 0.1 + 0.3 }}
                                                transition={{ delay: i * 0.1 + 0.5 }}
                                                className="h-20 bg-[#9220E1]/5 rounded-2xl border border-[#9220E1]/10"
                                            />
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <span className="font-clash font-bold text-[48px] text-[#9220E1]">+ 420%</span>
                                        <p className="font-geist text-[14px] text-[#0A0E31]/40">Average ROAS Increase</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Element */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 p-6 bg-white rounded-3xl shadow-xl border border-[#F0F0F0] z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="size-3 rounded-full bg-[#10B981] animate-pulse" />
                                    <span className="font-geist font-medium text-[14px] text-[#0A0E31]">Campaign Scaling live</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
