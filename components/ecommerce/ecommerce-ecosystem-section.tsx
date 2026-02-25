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
                            Complete Ecommerce Ecosystem: <span className="text-[#9220E1]">Website + Android App + iOS App</span>
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
                                        <CheckCircle2 size={18} className="text-[#9220E1] shrink-0" />
                                        <span className="font-geist text-[15px] sm:text-[16px] text-[#0A0E31]/80">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                            Whether you are building a D2C brand, multi-vendor marketplace, jewelry ecommerce platform, or B2B commerce system, this bundle provides everything required to operate and scale.
                        </p>

                        <button
                            className="w-fit bg-[#7C3AED] text-white rounded-full font-medium transition-all flex items-center gap-3 group shadow-md shadow-[#7C3AED]/10 hover:bg-[#9220E1]"
                            style={{
                                padding: "10px 22px",
                                fontSize: "14px",
                            }}
                        >
                            Start Your Ecommerce Bundle
                            <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>

                    {/* Visual Column - Image */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <div className="relative rounded-[48px] overflow-hidden shadow-xl border border-[#9220E1]/20 bg-white flex items-center justify-center" style={{ width: "100%", height: "100%", maxWidth: "600px", minHeight: "380px" }}>
                            <img
                                src="/others/Website-Android-App-iOS-App.jpg"
                                alt="Website + Android App + iOS App"
                                className="object-cover rounded-[48px]"
                                style={{ width: "100%", height: "100%", minHeight: "380px", maxWidth: "600px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
