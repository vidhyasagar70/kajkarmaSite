"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SocialMediaWhyChoose() {
    return (
        <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0E31] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9220E1]/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2 relative aspect-[16/10] rounded-[32px] overflow-hidden"
                    >
                        <Image
                            src="/page21.png"
                            alt="Why Choose Kajkarma?"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2 flex flex-col gap-6"
                    >
                        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1]">
                            Why Choose Kajkarma for <span className="text-[#9220E1]">Social Management?</span>
                        </h2>

                        <p className="font-geist font-light text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed text-white/70">
                            We combine brand strategy with technical growth understanding. We understand how social connects with websites, ecommerce, and automation.
                            <br /><br />
                            Our advantage includes:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-2">
                            {[
                                "Strategic positioning focus",
                                "SEO-aligned content themes",
                                "AI-assisted content research",
                                "Professional design execution",
                                "Data-driven optimization",
                                "Integrated growth systems"
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
                                Work With a Strategic Growth Partner
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
