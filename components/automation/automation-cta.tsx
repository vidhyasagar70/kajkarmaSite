"use client";

import { motion } from "framer-motion";

export function AutomationCTA() {
    return (
        <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0A0E31] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 size-[400px] bg-[#7C3AED] blur-[150px] opacity-15 -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 size-[400px] bg-[#9220E1] blur-[150px] opacity-15 -ml-48 -mb-48" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="font-clash font-medium text-[36px] md:text-[54px] lg:text-[64px] text-white leading-tight mb-5">
                            Turn Your Business into an <span className="text-[#9220E1]">Intelligent Automation System</span>
                        </h2>
                        <p className="font-geist font-light text-[17px] sm:text-[20px] text-white/70 max-w-3xl mx-auto leading-relaxed">
                            Stop wasting time on repetitive tasks. Build intelligent workflows that operate 24/7 and scale with your growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="flex flex-col sm:flex-row items-center gap-5"
                    >
                        <button
                            className="font-geist flex items-center justify-center transition-all duration-300 bg-[#7C3AED] text-white rounded-full font-medium shadow-xl shadow-[#7C3AED]/15 hover:bg-[#9220E1] hover:scale-[1.03] active:scale-[0.98] group"
                            style={{
                                padding: "10px 24px",
                                fontSize: "14px",
                            }}
                        >
                            Book an AI Automation Consultation
                        </button>

                        <button
                            className="font-geist flex items-center justify-center transition-all duration-300 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98] backdrop-blur-md border border-white/10"
                            style={{
                                padding: "10px 24px",
                                fontSize: "14px",
                            }}
                        >
                            Get a Custom Automation Plan
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
