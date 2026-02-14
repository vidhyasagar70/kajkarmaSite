"use client";

import { MessageCircle } from "lucide-react";

export function AppFinalCTA() {
    return (
        <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 relative overflow-hidden">
            {/* Background with Dark Purple Theme */}
            <div className="absolute inset-0 bg-[#130624]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.15),transparent_70%)]" />

            <div className="max-w-[1000px] mx-auto relative z-10 text-center flex flex-col items-center">
                <h2 className="font-clash font-medium text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] text-white mb-6 sm:mb-8">
                    Ready to Build a <span className="text-[#9220E1]">Scalable Application?</span>
                </h2>

                <p className="font-geist font-light text-[18px] sm:text-[22px] md:text-[24px] leading-relaxed text-white/70 mb-10 sm:mb-12 max-w-[800px]">
                    Whether you need an ecommerce app, marketplace platform, SaaS product, or custom business system, we design and develop applications engineered for growth, performance, and long-term scalability.
                </p>

                <button
                    className="group relative bg-[#9220E1] text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(146,32,225,0.3)] hover:bg-[#7C3AED]"
                    style={{
                        padding: "10px 22px",
                        fontSize: "14px",
                    }}
                >
                    <span className="relative z-10 flex items-center gap-3">
                        Schedule a Strategy Consultation
                        <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-[#7C3AED]/20 blur-[100px]" />
            <div className="absolute -top-20 -right-20 size-80 rounded-full bg-[#9220E1]/20 blur-[100px]" />
        </section>
    );
}
