"use client";

import { CheckCircle2 } from "lucide-react";

const idealTargets = [
    "D2C ecommerce brands",
    "Jewelry & diamond businesses",
    "Fashion & lifestyle brands",
    "B2B ecommerce companies",
    "Marketplace startups",
    "Multi-brand ecommerce operators",
];

export function EcommerceIdealForGrid() {
    return (
        <section className="w-full bg-[#FBF9FE] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31] mb-6">
                        Ideal <span className="text-[#7C3AED]">For</span>
                    </h2>
                    <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70 max-w-[800px] mx-auto">
                        If you are serious about building a long-term ecommerce brand, this bundled ecosystem gives you a unified digital foundation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {idealTargets.map((target, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-[32px] border border-[#F0F0F0] flex items-center gap-4 hover:shadow-md transition-shadow group"
                        >
                            <div className="size-12 rounded-full bg-[#7C3AED]/5 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
                                <CheckCircle2 size={24} />
                            </div>
                            <span className="font-clash font-medium text-xl text-[#0A0E31]">
                                {target}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
