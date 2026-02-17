"use client";

import { ShieldCheck, ArrowRight } from "lucide-react";

const maintenanceFeatures = [
    "Security monitoring and updates",
    "Plugin and system updates",
    "Performance optimization",
    "Technical SEO monitoring",
    "Minor design adjustments",
    "Bug resolution",
];

export function MaintenanceSection() {
    return (
        <section className="w-full bg-[#f8f7fc] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
                        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31]">
                            Website Maintenance & <span className="text-[#9220E1]">1-Year Support</span>
                        </h2>
                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                            Your website must remain secure, updated, and optimized. We provide structured maintenance and support including:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                            {maintenanceFeatures.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <ShieldCheck size={20} className="text-[#9220E1]" />
                                    <span className="font-geist text-[16px] text-[#0A0E31]/80">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                            We ensure your website continues to perform long after launch.
                        </p>

                        <button
                            className="w-fit bg-[#7C3AED] text-white rounded-full font-medium hover:bg-[#7C3AED] transition-all flex items-center gap-2 group shadow-md shadow-[#9220E1]/10"
                            style={{
                                padding: "10px 22px",
                                fontSize: "14px",
                            }}
                        >
                            Protect & Maintain Your Website
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[40px] overflow-hidden bg-white shadow-xl flex items-center justify-center p-12">
                        {/* Visual for Maintenance/Support */}
                        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[60%] h-[60%] text-[#9220E1] opacity-20">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1" />
                            <path d="M12 6L12 12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center">
                            <div className="bg-white px-6 py-4 rounded-2xl shadow-lg border border-[#F0F0F0] flex items-center gap-4">
                                <div className="size-3 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-geist text-sm font-semibold text-[#0A0E31]">Systems Optimized & Secure</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
