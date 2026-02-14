"use client";

const steps = [
    {
        number: "01",
        title: "Discovery & Market Research",
        description: "We analyze competitors, validate demand, and define feature scope to align your product with market opportunities.",
    },
    {
        number: "02",
        title: "Architecture & UX Planning",
        description: "System architecture planning, database structure, API strategy, and user journey mapping.",
    },
    {
        number: "03",
        title: "Development & Integration",
        description: "Frontend and backend engineering, third-party integrations, payment gateways, security implementation.",
    },
    {
        number: "04",
        title: "Testing & Optimization",
        description: "Performance testing, device compatibility, security audits, and load optimization.",
    },
    {
        number: "05",
        title: "Launch & Scaling",
        description: "Cloud deployment, monitoring setup, analytics integration, and post-launch growth support.",
    },
];

export function AppProcessHorizontal() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Heading */}
                <div className="mb-10 sm:mb-12 md:mb-16">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31]">
                        Our App Development <span className="text-[#7C3AED]">Process</span>
                    </h2>
                </div>

                {/* Horizontal Steps Layout */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex-1 flex flex-col gap-6 relative group"
                        >
                            {/* Step Number & Line */}
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-[#F8F7FC] text-[#7C3AED] font-clash font-semibold text-lg flex items-center justify-center group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
                                    {step.number}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-6 left-[48px] w-full h-[1px] bg-gradient-to-r from-[#7C3AED]/30 to-transparent -z-10" />
                                )}
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-4">
                                <h3 className="font-clash font-medium text-xl sm:text-2xl text-[#0A0E31]">
                                    {step.title}
                                </h3>
                                <p className="font-geist font-light text-[15px] sm:text-[16px] leading-relaxed text-[#0A0E31]/70">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
