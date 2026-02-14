"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PPCWhyChoose() {
    return (
        <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0E31] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9220E1]/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-2xl border border-white/5"
                    >
                        <Image
                            src="/page18.png"
                            alt="Why Choose Kajkarma for PPC?"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#9220E1]/20 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex flex-col gap-6"
                    >
                        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1]">
                            Why Choose Kajkarma for <span className="text-[#9220E1]">PPC Marketing?</span>
                        </h2>

                        <div className="flex flex-col gap-5">
                            <p className="font-geist font-light text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed text-white/70">
                                We combine performance marketing with deep technical understanding. Most agencies stop at the ad platform — we optimize the entire funnel.
                                <br /><br />
                                Our advantage includes:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-2">
                                {[
                                    "Advanced conversion tracking setup",
                                    "Full funnel strategy",
                                    "Data-driven optimization",
                                    "Transparent reporting",
                                    "ROI-focused campaign scaling",
                                    "Architecture integration"
                                ].map((point) => (
                                    <div key={point} className="flex items-start gap-2.5">
                                        <div className="size-1.5 rounded-full bg-[#9220E1] mt-2.5 shrink-0" />
                                        <span className="font-geist text-[15px] text-white/80 font-medium leading-tight">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4">
                                <button
                                    className="font-geist flex items-center justify-center transition-all duration-200 active:scale-[0.97] bg-[#9220E1] text-white rounded-full font-medium hover:bg-[#7C3AED] shadow-md shadow-[#9220E1]/10"
                                    style={{
                                        padding: "10px 22px",
                                        fontSize: "14px",
                                    }}
                                >
                                    Work With Performance Experts
                                    <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
