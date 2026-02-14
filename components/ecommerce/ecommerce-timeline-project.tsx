"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Target, CheckCircle2 } from "lucide-react";

const bundles = [
    {
        title: "Standard Ecommerce Bundle",
        time: "8–14 weeks",
        icon: <Target className="text-[#9220E1]" size={24} />
    },
    {
        title: "Advanced Multi-Tenant Marketplace Bundle",
        time: "12–20 weeks",
        icon: <Clock className="text-[#9220E1]" size={24} />
    }
];

const investmentFactors = [
    "Feature complexity",
    "Vendor management requirements",
    "Custom integrations",
    "App functionality depth",
    "Scalability requirements",
];

export function EcommerceTimelineProject() {
    return (
        <section className="w-full bg-[#FBF9FE] py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-clash font-semibold text-[38px] md:text-[54px] text-[#0A0E31] mb-6"
                    >
                        Timeline & <span className="text-[#9220E1]">Investment</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-geist text-xl text-[#0A0E31]/60"
                    >
                        Timeline typically depends on complexity and architecture selection.
                    </motion.p>
                </div>

                {/* Bundle Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {bundles.map((bundle, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="bg-white border border-[#F0F0F0] p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:border-[#9220E1]/20 transition-all duration-500 flex items-center gap-8 group"
                        >
                            <div className="size-16 bg-[#9220E1]/5 rounded-[24px] flex items-center justify-center shrink-0 group-hover:bg-[#9220E1]/10 transition-colors">
                                {bundle.icon}
                            </div>
                            <div>
                                <h3 className="font-clash font-semibold text-2xl text-[#0A0E31] mb-2">{bundle.title}</h3>
                                <p className="font-geist font-semibold text-[#9220E1] text-[15px] uppercase tracking-wide">
                                    Estimated timeline: {bundle.time}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Investment Insights */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white border border-[#F0F0F0] p-12 md:p-16 rounded-[48px] shadow-sm relative z-10"
                >
                    <div className="max-w-4xl mx-auto">
                        <h4 className="font-clash font-semibold text-2xl md:text-3xl text-[#0A0E31] mb-12 text-center md:text-left">
                            Investment range varies based on:
                        </h4>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 mb-16">
                            {investmentFactors.map((factor, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="flex items-center gap-4 bg-[#FBF9FE] p-5 rounded-2xl border border-transparent hover:border-[#9220E1]/10 hover:bg-white transition-all shadow-sm"
                                >
                                    <CheckCircle2 className="text-[#9220E1]/40 shrink-0" size={20} />
                                    <span className="font-geist text-[16px] text-[#0A0E31]/80 font-medium leading-tight">{factor}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col items-center pt-12 border-t border-[#F5F5F7]">
                            <p className="font-geist text-[17px] text-[#0A0E31]/50 text-center mb-10 max-w-2xl italic leading-relaxed">
                                We provide a detailed technical roadmap and investment breakdown before starting development.
                            </p>
                            <button className="px-14 py-5 bg-[#0A0E31] text-white rounded-2xl font-clash font-semibold text-xl hover:bg-[#111] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-4 group shadow-2xl shadow-[#04071A]/20">
                                Get a Custom Quote
                                <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={22} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
