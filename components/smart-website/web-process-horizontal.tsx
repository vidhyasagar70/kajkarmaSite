"use client";

const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "Market research, competitor analysis, keyword planning, and site architecture mapping.",
    },
    {
        number: "02",
        title: "UI/UX Design",
        description: "Wireframes, conversion-focused design, and responsive layouts.",
    },
    {
        number: "03",
        title: "Development",
        description: "Frontend and backend implementation, integrations, performance optimization.",
    },
    {
        number: "04",
        title: "Testing & Optimization",
        description: "Speed testing, device compatibility, security audits, SEO validation.",
    },
    {
        number: "05",
        title: "Launch & Growth",
        description: "Deployment, analytics setup, monitoring, and scaling support.",
    },
];

export function WebProcessHorizontal() {
    return (
        <section className="w-full bg-[#f8f7fc] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31] mb-12">
                    Our Website Development <span className="text-[#9220E1]">Process</span>
                </h2>

                <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70 mb-12 max-w-[800px]">
                    A structured process ensures consistent delivery and measurable outcomes.
                </p>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative overflow-hidden">
                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 flex flex-col gap-6 relative group">
                            <div className="flex items-center gap-6">
                                <div className="size-14 rounded-full border border-[#9220E1]/20 bg-white flex items-center justify-center font-clash font-semibold text-xl text-[#9220E1] group-hover:bg-[#9220E1] group-hover:text-white transition-all duration-300">
                                    {step.number}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-[27px] left-[56px] w-full h-[1px] bg-gradient-to-r from-[#9220E1]/30 to-transparent" />
                                )}
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="font-clash font-medium text-xl sm:text-2xl text-[#0A0E31]">{step.title}</h3>
                                <p className="font-geist font-light text-[15px] sm:text-[16px] leading-relaxed text-[#0A0E31]/70">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="mt-16 bg-[#9220E1] text-white rounded-full font-medium transition-all shadow-lg shadow-[#9220E1]/10 hover:bg-[#7C3AED]"
                    style={{
                        padding: "10px 22px",
                        fontSize: "14px",
                    }}
                >
                    Start the Process Today
                </button>
            </div>
        </section>
    );
}
