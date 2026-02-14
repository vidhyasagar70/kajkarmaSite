"use client";

import { motion } from "framer-motion";

export function MVPCTA() {
    return (
        <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0E31] overflow-hidden relative">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9220E1]/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9220E1]/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h2 className="font-clash font-medium text-[36px] sm:text-[48px] md:text-[68px] leading-[1.05] text-white mb-8">
                        Turn Your Idea Into a <span className="text-[#9220E1]">Market-Ready Product</span>
                    </h2>

                    <p className="font-geist font-light text-[17px] sm:text-[20px] md:text-[22px] text-white/60 mb-12 leading-relaxed">
                        If you are ready to validate your idea, attract early users, and build a scalable digital product, our MVP development services provide the structured execution you need.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5"
                    >
                        <button
                            className="font-geist flex items-center justify-center transition-all duration-300 bg-[#9220E1] text-white rounded-full font-medium shadow-xl shadow-[#9220E1]/15 hover:bg-[#7C3AED] hover:scale-[1.03] active:scale-[0.98]"
                            style={{
                                padding: "10px 22px",
                                fontSize: "14px",
                            }}
                        >
                            Start Your MVP Journey
                            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>

                        <button
                            className="font-geist flex items-center justify-center transition-all duration-300 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98] backdrop-blur-md border border-white/10"
                            style={{
                                padding: "10px 22px",
                                fontSize: "14px",
                            }}
                        >
                            Schedule a Founder Consultation
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
