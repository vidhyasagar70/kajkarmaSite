"use client";

import Image from "next/image";
import { CheckCircle2, ShoppingBag } from "lucide-react";

const bundleFeatures = [
    "Custom ecommerce website",
    "Android ecommerce application",
    "iOS ecommerce application",
    "Admin dashboard & backend control panel",
    "6 months of free maintenance & technical support",
    "Multi-tenant or single-tenant architecture options",
];

export function EcommerceEcosystemSection() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
                        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31]">
                            Complete Ecommerce Ecosystem: <span className="text-[#7C3AED]">Website + Android App + iOS App</span>
                        </h2>
                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                            Launch a fully integrated ecommerce ecosystem with a high-converting website, Android application, and iOS application — built under one unified architecture.
                        </p>
                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                            At Kajkarma Innovation, we deliver complete ecommerce bundles designed for brands that want serious growth. Instead of managing separate vendors for website and mobile app development, we build your entire digital commerce infrastructure in one streamlined system.
                        </p>

                        <div className="flex flex-col gap-1 mb-2">
                            <p className="font-clash font-medium text-lg text-[#0A0E31]">This bundle includes:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-4">
                                {bundleFeatures.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-[#7C3AED] shrink-0" />
                                        <span className="font-geist text-[15px] sm:text-[16px] text-[#0A0E31]/80">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                            Whether you are building a D2C brand, multi-vendor marketplace, jewelry ecommerce platform, or B2B commerce system, this bundle provides everything required to operate and scale.
                        </p>

                        <button className="w-fit px-8 py-4 bg-[#7C3AED] text-white rounded-full font-semibold text-lg hover:bg-[#6D28D9] transition-all flex items-center gap-3 group shadow-lg">
                            Start Your Ecommerce Bundle
                            <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>

                    {/* Visual Column */}
                    <div className="w-full lg:w-1/2 relative aspect-square rounded-[48px] overflow-hidden bg-[#F8F7FC] flex items-center justify-center p-8 lg:p-16">
                        <div className="relative w-full h-full">
                            {/* Visual showing Web/Android/iOS together */}
                            <div className="absolute top-0 right-0 w-[80%] aspect-[16/10] bg-white rounded-2xl shadow-2xl border border-[#F0F0F0] overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                                <div className="h-4 w-full bg-[#f8f7fc] border-b border-[#F0F0F0]" />
                                <div className="p-4 flex flex-col gap-2">
                                    <div className="h-6 w-1/3 bg-[#7C3AED]/10 rounded" />
                                    <div className="grid grid-cols-3 gap-2 mt-2">
                                        <div className="aspect-square bg-[#F8F7FC] rounded" />
                                        <div className="aspect-square bg-[#F8F7FC] rounded" />
                                        <div className="aspect-square bg-[#F8F7FC] rounded" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-[40%] aspect-[9/19] bg-white rounded-[2rem] shadow-2xl border-4 border-[#0A0E31] overflow-hidden transform hover:-translate-y-4 transition-transform duration-500 delay-100">
                                <div className="w-full h-full p-3 flex flex-col gap-3">
                                    <div className="h-4 w-1/2 bg-[#7C3AED]/10 rounded-full" />
                                    <div className="aspect-square w-full bg-[#F8F7FC] rounded-xl" />
                                    <div className="flex-1 bg-[#F8F7FC] rounded-xl" />
                                </div>
                            </div>
                            <div className="absolute bottom-10 right-10 w-[35%] aspect-[9/19] bg-[#0A0E31] rounded-[2rem] shadow-2xl overflow-hidden transform hover:-translate-y-6 transition-transform duration-500 delay-200">
                                <div className="w-full h-full p-3 flex flex-col gap-3">
                                    <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                                    <div className="aspect-square w-full bg-white/5 rounded-xl" />
                                    <div className="flex-1 bg-white/5 rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
