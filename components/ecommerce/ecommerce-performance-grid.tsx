"use client";

import { ShieldCheck, Zap, Maximize, Check } from "lucide-react";

const performanceFeatures = [
    "High-speed backend architecture",
    "Secure payment processing",
    "API-first integrations",
    "Cloud-ready deployment",
    "Mobile-first responsive design",
    "Advanced database structuring",
];

export function EcommercePerformanceGrid() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
                        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31]">
                            Built for <span className="text-[#7C3AED]">Performance, Security & Scalability</span>
                        </h2>
                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                            Every ecommerce bundle is developed with technical precision. We optimize performance across devices to ensure smooth checkout experiences, reduced cart abandonment, and higher customer retention.
                        </p>
                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                            Our ecommerce systems are built to handle traffic growth, product expansion, and operational complexity without compromising performance.
                        </p>

                        <button className="w-fit px-8 py-4 bg-[#7C3AED] text-white rounded-full font-semibold text-lg hover:bg-[#6D28D9] transition-all shadow-lg">
                            Build a Scalable Ecommerce System
                        </button>
                    </div>

                    {/* Right Side: Features Grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {performanceFeatures.map((feature, i) => (
                            <div key={i} className="p-6 bg-[#F8F7FC] rounded-3xl border border-[#F0F0F0] flex flex-col gap-4 group hover:border-[#7C3AED]/30 transition-all">
                                <div className="size-10 rounded-xl bg-white flex items-center justify-center text-[#7C3AED] shadow-sm">
                                    {i === 0 ? <Zap size={20} /> : i === 1 ? <ShieldCheck size={20} /> : <Check size={20} />}
                                </div>
                                <span className="font-clash font-medium text-lg text-[#0A0E31]">
                                    {feature}
                                </span>
                            </div>
                        ))}
                        {/* Large Scalability Box */}
                        <div className="sm:col-span-2 p-8 bg-[#0A0E31] rounded-[32px] flex items-center justify-between text-white overflow-hidden relative">
                            <div className="flex flex-col gap-2 relative z-10">
                                <span className="text-[#9220E1] font-clash text-lg font-medium">Ready for Growth</span>
                                <h4 className="font-clash text-2xl sm:text-3xl">Infinite Enterprise Scalability</h4>
                            </div>
                            <Maximize size={80} className="text-white/5 absolute -right-4 -bottom-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
