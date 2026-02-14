"use client";

import { CheckCircle2 } from "lucide-react";

const reasons = [
    "Unified website + Android + iOS system",
    "Multi-tenant & single-tenant flexibility",
    "High-converting ecommerce architecture",
    "SEO-ready infrastructure",
    "Jewelry & marketplace specialization",
    "Structured 6-month maintenance included",
    "Scalable cloud-ready deployment",
];

export function EcommerceWhyChooseList() {
    return (
        <section className="w-full bg-[#FBF9FE] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-white rounded-[40px] border border-[#F0F0F0] p-8 sm:p-12 lg:p-16 shadow-sm">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* Header Side */}
                        <div className="w-full lg:w-2/5">
                            <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31] mb-6">
                                Why Choose Our <span className="text-[#7C3AED]">Ecommerce Bundle?</span>
                            </h2>
                            <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                                This bundle eliminates fragmented development and provides a single, powerful ecommerce ecosystem designed for serious brands.
                            </p>
                        </div>

                        {/* List Side */}
                        <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                            {reasons.map((reason, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="size-6 rounded-full bg-[#7C3AED] flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={16} className="text-white" />
                                    </div>
                                    <span className="font-clash font-medium text-lg text-[#0A0E31] leading-tight">
                                        {reason}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
