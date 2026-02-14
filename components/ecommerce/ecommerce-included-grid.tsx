"use client";

import { Monitor, Smartphone, Database, Check } from "lucide-react";

const websiteFeatures = [
    "Custom UI/UX design",
    "High-performance product pages",
    "Advanced product filtering & categories",
    "Secure checkout and payment gateway integration",
    "SEO-ready architecture",
    "Admin dashboard for product & order management",
];

const appFeatures = [
    "Native Android app development",
    "Native iOS app development",
    "Push notification integration",
    "Secure login & user account management",
    "Real-time order tracking",
    "Seamless sync with website database",
];

export function EcommerceIncludedGrid() {
    return (
        <section className="w-full bg-[#FBF9FE] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 sm:mb-16 md:mb-20">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31] mb-6">
                        What’s Included in the <span className="text-[#7C3AED]">Ecommerce Bundle</span>
                    </h2>
                    <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70 max-w-[800px]">
                        This is not a template package. It is a fully engineered ecommerce ecosystem. Everything is connected to one centralized backend system for simplified management.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Website Column */}
                    <div className="bg-white p-8 sm:p-12 rounded-[40px] border border-[#F0F0F0] shadow-sm flex flex-col gap-8">
                        <div className="flex items-center gap-6">
                            <div className="size-16 rounded-2xl bg-[#7C3AED]/5 flex items-center justify-center text-[#7C3AED]">
                                <Monitor size={32} />
                            </div>
                            <h3 className="font-clash font-medium text-2xl sm:text-3xl text-[#0A0E31]">
                                Your ecommerce website includes:
                            </h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            {websiteFeatures.map((feature, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 size-5 rounded-full bg-[#7C3AED] flex items-center justify-center shrink-0">
                                        <Check size={12} className="text-white" />
                                    </div>
                                    <span className="font-geist text-[16px] sm:text-[18px] text-[#0A0E31]/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Apps Column */}
                    <div className="bg-white p-8 sm:p-12 rounded-[40px] border border-[#F0F0F0] shadow-sm flex flex-col gap-8">
                        <div className="flex items-center gap-6">
                            <div className="size-16 rounded-2xl bg-[#9220E1]/5 flex items-center justify-center text-[#9220E1]">
                                <Smartphone size={32} />
                            </div>
                            <h3 className="font-clash font-medium text-2xl sm:text-3xl text-[#0A0E31]">
                                Your mobile applications include:
                            </h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            {appFeatures.map((feature, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 size-5 rounded-full bg-[#9220E1] flex items-center justify-center shrink-0">
                                        <Check size={12} className="text-white" />
                                    </div>
                                    <span className="font-geist text-[16px] sm:text-[18px] text-[#0A0E31]/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center flex flex-col items-center">
                    <button className="px-10 py-5 bg-[#0A0E31] text-white rounded-full font-semibold text-lg hover:bg-[#130624] transition-all flex items-center gap-3 group">
                        Request Full Bundle Breakdown
                        <Database size={20} className="text-[#9220E1]" />
                    </button>
                </div>
            </div>
        </section>
    );
}
