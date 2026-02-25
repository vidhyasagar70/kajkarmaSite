"use client";

import { MessageCircle, CheckCircle2 } from "lucide-react";

const performanceFeatures = [
    "Conversion-focused UI/UX structure",
    "SEO-ready page architecture",
    "Mobile-first responsive design",
    "Optimized Core Web Vitals performance",
    "Structured call-to-action funnels",
    "Analytics and tracking integration",
];

export function WebPerformanceSection() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Left Column - Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
                        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31]">
                            Websites Built for <span className="text-[#9220E1]">Performance, Conversion & Growth</span>
                        </h2>
                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                            A high-performing website requires more than clean design. It requires structure, speed, and strategy.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 my-4">
                            {performanceFeatures.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 size={20} className="text-[#9220E1] shrink-0" />
                                    <span className="font-geist text-[16px] text-[#0A0E31]/80">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                            We design websites that guide users toward action, reduce bounce rates, and improve lead generation.
                        </p>

                        <button
                            className="w-fit bg-[#7C3AED] text-white rounded-full font-medium transition-all flex items-center gap-2 group shadow-md shadow-[#9220E1]/10 hover:bg-[#9220E1]"
                            style={{
                                padding: "10px 22px",
                                fontSize: "14px",
                            }}
                        >
                            Schedule a Strategy Call
                            <MessageCircle size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Column - Image */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <div className="relative rounded-[40px] overflow-hidden shadow-xl border border-[#9220E1]/20 bg-white flex items-center justify-center" style={{ width: "100%", height: "100%", maxWidth: "600px", minHeight: "380px" }}>
                            <img
                                src="/others/Websites-Built-for-Performance-Conversion-Growth.jpg"
                                alt="Websites Built for Performance, Conversion & Growth"
                                className="object-cover rounded-[40px]"
                                style={{ width: "100%", height: "100%", minHeight: "380px", maxWidth: "600px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
