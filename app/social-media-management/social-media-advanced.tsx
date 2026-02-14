"use client";

import { motion } from "framer-motion";
import { PenTool, Layout, Layers, Smartphone } from "lucide-react";

export function SocialMediaAdvanced() {
    const features = [
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Consistent Visual Identity",
            description: "We ensure your brand remains visually cohesive across all platforms."
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            title: "Clean Modern Layouts",
            description: "Strategic design that prioritizes readability and brand authority."
        },
        {
            icon: <Layout className="w-6 h-6" />,
            title: "Messaging Hierarchy",
            description: "Structuring content for maximum impact and conversion."
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile-First Design",
            description: "Optimized for the way users actually consume social content."
        }
    ];

    return (
        <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FBF9FE] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-[#9220E1]/5 -rotate-6 blur-[100px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative aspect-square max-w-[500px] mx-auto lg:ml-0"
                        >
                            <div className="absolute inset-0 rounded-[48px] border border-[#9220E1]/20 bg-white overflow-hidden shadow-2xl">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center p-12">
                                    <div className="grid grid-cols-2 gap-4 w-full mb-8">
                                        {[1, 2, 3, 4].map(i => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="aspect-[4/5] bg-[#FBF9FE] rounded-2xl border border-[#9220E1]/5 overflow-hidden flex items-center justify-center"
                                            >
                                                <div className="w-[70%] h-1 bg-[#9220E1]/10 rounded-full" />
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <span className="font-clash font-bold text-[32px] sm:text-[42px] text-[#9220E1]">Premium Finish</span>
                                        <p className="font-geist text-[14px] text-[#0A0E31]/40 uppercase tracking-widest mt-1">Creative Production</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="font-clash font-semibold text-[#9220E1] text-[14px] uppercase tracking-widest mb-4 block">Creative Production</span>
                            <h2 className="font-clash font-medium text-[40px] sm:text-[54px] md:text-[64px] leading-[1.05] text-[#0A0E31] mb-8">
                                The Art of <br /> <span className="text-[#9220E1]">Brand Positioning</span>
                            </h2>
                            <p className="font-geist font-light text-[18px] sm:text-[20px] text-[#0A0E31]/70 mb-10 leading-relaxed max-w-xl">
                                We handle the strategy, design, and formatting of your social presence to ensure every post reinforces your market authority.
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
                                        <h3 className="font-clash font-medium text-[18px] text-[#0A0E31]">{feature.title}</h3>
                                        <p className="font-geist font-light text-[14px] text-[#0A0E31]/60">{feature.description}</p>
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
                                    Upgrade Your Social Presence
                                    <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
