"use client";

import { motion } from "framer-motion";

interface ProcessStep {
    phase: string;
    title: string;
    description: string;
}

const steps: ProcessStep[] = [
    {
        phase: "Phase 1",
        title: "Process Audit",
        description: "We analyze your current workflows, identify inefficiencies, and map automation opportunities."
    },
    {
        phase: "Phase 2",
        title: "Workflow Design",
        description: "We design structured automation systems aligned with your tools and business model."
    },
    {
        phase: "Phase 3",
        title: "Implementation",
        description: "Integration with n8n, Zapier, CRM systems, ecommerce platforms, APIs, and AI tools."
    },
    {
        phase: "Phase 4",
        title: "Testing & Optimization",
        description: "Load testing, performance validation, error handling setup, and logic refinement."
    },
    {
        phase: "Phase 5",
        title: "Monitoring & Scaling",
        description: "Ongoing optimization and advanced workflow expansion."
    }
];

export function AutomationProcess() {
    return (
        <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[42px] md:text-[54px] text-[#0A0E31] mb-5">
                        Our Automation <span className="text-[#9220E1]">Implementation Process</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Desktop Progress Line */}
                    <div className="absolute top-[40px] left-0 w-full h-[1px] bg-[#F0F0F0] hidden lg:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5 group"
                            >
                                <div className="relative z-10 size-12 rounded-[16px] bg-[#FBF9FE] border border-[#F0F0F0] flex items-center justify-center text-[#9220E1] font-clash font-semibold text-base transition-all duration-300 group-hover:bg-[#9220E1] group-hover:text-white group-hover:border-[#9220E1] shadow-sm">
                                    {index + 1}
                                </div>

                                <div className="space-y-2.5">
                                    <div className="flex flex-col">
                                        <span className="font-clash font-semibold text-[#9220E1] text-[12px] uppercase tracking-widest mb-1">{step.phase}</span>
                                        <h3 className="font-clash font-medium text-[20px] sm:text-[22px] text-[#0A0E31]">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="font-geist font-light text-[15px] sm:text-[16px] text-[#0A0E31]/60 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-center">
                    <button
                        className="font-geist flex items-center justify-center transition-all duration-200 active:scale-[0.97] bg-[#9220E1] text-white rounded-full font-medium hover:bg-[#7C3AED] shadow-md shadow-[#9220E1]/10 px-6 py-3.5 text-sm"
                    >
                        Start Your Automation Roadmap
                    </button>
                </div>
            </div>
        </section>
    );
}
