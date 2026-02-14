"use client";

import { ArrowRight } from "lucide-react";

const phases = [
    {
        number: "Phase 1",
        title: "Strategy & Architecture Planning",
        description: "Business model validation, feature definition, and system design.",
    },
    {
        number: "Phase 2",
        title: "UI/UX & Wireframing",
        description: "Designing seamless ecommerce and mobile experiences.",
    },
    {
        number: "Phase 3",
        title: "Website & App Development",
        description: "Simultaneous web and mobile development under unified backend.",
    },
    {
        number: "Phase 4",
        title: "Testing & Optimization",
        description: "Performance testing, security audits, device compatibility checks.",
    },
    {
        number: "Phase 5",
        title: "Launch & Monitoring",
        description: "Deployment, app store publishing, analytics setup, and monitoring.",
    },
];

export function EcommerceProcessHorizontal() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31] mb-12">
                    Our Development <span className="text-[#9220E1]">Process</span>
                </h2>

                <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70 mb-16 max-w-[800px]">
                    We follow a structured development approach to ensure efficiency and clarity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 relative">
                    {phases.map((phase, index) => (
                        <div key={index} className="flex flex-col gap-6 relative group">
                            <div className="flex items-center gap-4">
                                <div className="size-16 rounded-2xl bg-[#F8F7FC] border border-[#F0F0F0] flex flex-col items-center justify-center font-clash shadow-sm group-hover:border-[#9220E1] transition-colors">
                                    <span className="text-[10px] text-[#9220E1] font-bold uppercase tracking-wider">Step</span>
                                    <span className="text-xl font-bold text-[#0A0E31]">{index + 1}</span>
                                </div>
                                {index < phases.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-[64px] w-[calc(100%-64px+48px)] h-[1px] bg-gradient-to-r from-[#9220E1]/20 to-transparent z-0" />
                                )}
                            </div>
                            <div className="flex flex-col gap-4 relative z-10">
                                <h3 className="font-clash font-medium text-xl text-[#0A0E31] min-h-[56px] lg:min-h-0">
                                    {phase.title}
                                </h3>
                                <p className="font-geist font-light text-[14px] sm:text-[15px] leading-relaxed text-[#0A0E31]/70">
                                    {phase.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="mt-16 bg-[#9220E1] text-white rounded-full font-medium transition-all flex items-center gap-3 shadow-md shadow-[#9220E1]/10 hover:bg-[#7C3AED]"
                    style={{
                        padding: "10px 22px",
                        fontSize: "14px",
                    }}
                >
                    Start Your Development Journey
                    <ArrowRight size={18} />
                </button>
            </div>
        </section>
    );
}
