"use client";

import { motion } from "framer-motion";

interface ComparisonCardProps {
    title: string;
    description: string;
    points: string[];
    isPrimary?: boolean;
}

function ComparisonCard({ title, description, points, isPrimary }: ComparisonCardProps) {
    return (
        <div className={`p-8 sm:p-10 rounded-[40px] border transition-all duration-500 flex flex-col gap-6 h-full ${isPrimary
            ? "bg-[#0A0E31] border-[#9220E1]/20 text-white shadow-xl shadow-[#9220E1]/5"
            : "bg-white border-[#F0F0F0] text-[#0A0E31] hover:border-[#9220E1]/10 hover:shadow-lg"
            }`}>
            <div>
                <h3 className={`font-clash font-medium text-2xl sm:text-3xl mb-3 ${isPrimary ? "text-white" : "text-[#0A0E31]"}`}>
                    {title}
                </h3>
                <p className={`font-geist font-light text-[16px] sm:text-[17px] ${isPrimary ? "text-white/70" : "text-[#0A0E31]/60"}`}>
                    {description}
                </p>
            </div>

            <div className="flex flex-col gap-4 flex-grow">
                <p className={`font-clash font-semibold text-[13px] uppercase tracking-wider ${isPrimary ? "text-[#9220E1]" : "text-[#9220E1]"}`}>
                    Ideal for:
                </p>
                <div className="flex flex-col gap-3.5">
                    {points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                            <div className="size-1.5 rounded-full bg-[#9220E1] mt-2.5 shrink-0" />
                            <span className={`font-geist text-[15px] sm:text-[16px] ${isPrimary ? "text-white/80" : "text-[#0A0E31]/80"}`}>{point}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function AutomationComparison() {
    return (
        <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF9FE]">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[42px] md:text-[54px] text-[#0A0E31] mb-6 leading-tight">
                        n8n vs Zapier – <span className="text-[#9220E1]">What’s Right for You?</span>
                    </h2>
                    <p className="font-geist font-light text-[17px] sm:text-[19px] text-[#0A0E31]/60">
                        We don’t push tools. We build the right system for your scale and complexity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ComparisonCard
                            title="Zapier Automation"
                            description="Cloud-based automation for rapid deployment and standard integrations."
                            points={[
                                "Small to mid-sized businesses",
                                "Rapid deployment",
                                "Standard app integrations",
                                "Cloud-based workflows"
                            ]}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <ComparisonCard
                            isPrimary
                            title="n8n Workflow Automation"
                            description="Advanced open-source platform for flexible, scalable, and fully customizable systems."
                            points={[
                                "Advanced workflow logic",
                                "Self-hosted automation systems",
                                "Multi-step conditional flows",
                                "Enterprise-grade scalability",
                                "Full backend customization"
                            ]}
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center bg-white p-8 md:p-12 rounded-[40px] border border-[#F0F0F0] shadow-sm flex flex-col items-center max-w-5xl mx-auto"
                >
                    <p className="font-geist font-normal text-[18px] sm:text-[20px] text-[#0A0E31]/70 italic mb-8 leading-relaxed">
                        "We evaluate your business model and implement the automation architecture that fits your long-term growth."
                    </p>
                    <button
                        className="font-geist flex items-center justify-center transition-all duration-200 active:scale-[0.97] bg-[#0A0E31] text-white rounded-full font-medium hover:bg-black shadow-lg"
                        style={{
                            padding: "12px 26px",
                            fontSize: "15px",
                        }}
                    >
                        Find the Right Automation Platform
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
