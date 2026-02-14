"use client";

import { MessageCircle, FileText } from "lucide-react";

export function WebFinalCTA() {
    return (
        <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 relative overflow-hidden bg-[#130624]">
            {/* Glow Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9220E1] blur-[180px] opacity-10 rounded-full" />

            <div className="max-w-[1000px] mx-auto relative z-10 text-center flex flex-col items-center">
                <h2 className="font-clash font-medium text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] text-white mb-8">
                    Ready to Build a Website <span className="text-[#9220E1]">That Converts?</span>
                </h2>

                <p className="font-geist font-light text-[18px] sm:text-[22px] md:text-[24px] leading-relaxed text-white/70 mb-12 max-w-[850px]">
                    Whether you need a business website, ecommerce store, jewelry platform, or fully custom digital system, we design and develop websites engineered for performance, visibility, and long-term growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <button
                        className="bg-[#9220E1] text-white rounded-full font-medium transition-all flex items-center gap-3 group shadow-[0_0_30px_rgba(146,32,225,0.2)] hover:bg-[#7C3AED]"
                        style={{
                            padding: "10px 22px",
                            fontSize: "14px",
                        }}
                    >
                        Book Your Strategy Consultation
                        <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                    </button>

                    <button
                        className="bg-white/10 text-white border border-white/20 rounded-full font-medium transition-all flex items-center gap-3"
                        style={{
                            padding: "10px 22px",
                            fontSize: "14px",
                        }}
                    >
                        Get a Free Project Estimate
                        <FileText size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
