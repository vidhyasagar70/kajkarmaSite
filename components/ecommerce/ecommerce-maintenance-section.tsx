"use client";

import { ShieldCheck, MessageCircle, Clock } from "lucide-react";

const maintenanceItems = [
    "Technical support",
    "Bug fixes",
    "Performance monitoring",
    "Minor feature adjustments",
    "Security updates",
    "System monitoring",
    "Basic SEO monitoring",
];

export function EcommerceMaintenanceSection() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-[#130624] rounded-[48px] p-8 sm:p-12 lg:p-20 overflow-hidden relative">
                    {/* Background Highlight */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9220E1] blur-[160px] opacity-10 rounded-full" />

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
                        {/* Left Column */}
                        <div className="w-full lg:w-3/5 flex flex-col gap-6 sm:gap-8">
                            <div className="flex items-center gap-4 text-[#9220E1]">
                                <Clock size={24} />
                                <span className="font-clash font-medium text-xl uppercase tracking-widest">Peace of Mind Guaranteed</span>
                            </div>
                            <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-white">
                                6 Months Free <span className="text-[#9220E1]">Maintenance & Support</span>
                            </h2>
                            <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-white/70">
                                We include six months of structured maintenance to ensure stability and long-term performance. This ensures your ecommerce ecosystem remains optimized and secure after launch.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 my-2">
                                {maintenanceItems.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <ShieldCheck size={20} className="text-[#9220E1]" />
                                        <span className="font-geist text-[16px] text-white/80">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-white/70">
                                Extended maintenance plans are available for ongoing growth.
                            </p>

                            <button className="w-fit px-10 py-5 bg-white text-[#130624] rounded-full font-semibold text-lg hover:bg-[#9220E1] hover:text-white transition-all shadow-xl flex items-center gap-3 group">
                                Secure Your 6-Month Support Plan
                                <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>

                        {/* Right Column / Visual */}
                        <div className="w-full lg:w-2/5 flex items-center justify-center">
                            <div className="size-64 sm:size-80 rounded-full border border-white/10 flex items-center justify-center relative bg-white/5 backdrop-blur-sm">
                                <div className="size-48 sm:size-60 rounded-full border border-white/20 flex items-center justify-center">
                                    <div className="size-32 sm:size-40 rounded-full bg-[#9220E1] flex items-center justify-center text-white shadow-[0_0_60px_rgba(146,32,225,0.4)]">
                                        <ShieldCheck size={64} />
                                    </div>
                                </div>
                                {/* Floating Tags */}
                                <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white text-xs font-semibold">Security Active</div>
                                <div className="absolute bottom-10 -left-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white text-xs font-semibold">24/7 Monitoring</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
