"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SocialMediaIntegration() {
    return (
        <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 font-clash">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2 relative aspect-[16/10] rounded-[32px] overflow-hidden"
                    >
                        <Image
                            src="/page20.png"
                            alt="Content + Ads Integration"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2 flex flex-col gap-6"
                    >
                        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1] text-[#0A0E31]">
                            Content + <span className="text-[#9220E1]">Ads Integration</span>
                        </h2>

                        <p className="font-geist font-light text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed text-[#0A0E31]/70">
                            Social media works best when organic strategy and paid ads align. By integrating management with PPC campaigns, we create a unified growth ecosystem.
                            <br /><br />
                            We ensure your content:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                "Supports paid campaigns",
                                "Builds retargeting audiences",
                                "Strengthens conversion funnels",
                                "Increases ad effectiveness"
                            ].map((point) => (
                                <div key={point} className="flex items-center gap-3">
                                    <div className="size-2 rounded-full bg-[#9220E1]" />
                                    <span className="font-geist text-[15px] font-medium text-[#0A0E31]/80">{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4">
                            <button
                                className="font-geist flex items-center justify-center transition-all duration-200 active:scale-[0.97] bg-[#9220E1] text-white rounded-full font-medium hover:bg-[#7C3AED] shadow-md"
                                style={{
                                    padding: "10px 22px",
                                    fontSize: "14px",
                                }}
                            >
                                Combine Social & Paid Growth
                                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
