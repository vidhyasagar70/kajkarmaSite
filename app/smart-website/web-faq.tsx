"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqItems = [
    {
        question: "What does a high-converting website include?",
        answer: "A high-converting website includes optimized user flow, clear CTAs, fast load speed, SEO architecture, and structured content built around user intent.",
    },
    {
        question: "How much does ecommerce website development cost?",
        answer: "Ecommerce website development typically ranges between 5,000 and 20,000 USD depending on complexity, integrations, and customization level.",
    },
    {
        question: "Do you provide website maintenance after launch?",
        answer: "Yes. We offer structured maintenance plans and include ongoing support to ensure your website remains secure and optimized.",
    },
    {
        question: "Can you build a jewelry ecommerce website?",
        answer: "Yes. We specialize in jewelry and diamond platforms with advanced filtering, inventory integration, and premium UI design.",
    },
    {
        question: "How long does website development take?",
        answer: "Business websites usually take 3–6 weeks, while ecommerce and advanced builds may take 6–10 weeks.",
    },
];

export function WebFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[42px] md:text-[54px] text-[#0A0E31] mb-5">
                        Frequently Asked <span className="text-[#9220E1]">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border rounded-[24px] overflow-hidden transition-all duration-300",
                                openIndex === index ? "border-[#9220E1]/20 bg-[#FBF9FE]" : "border-[#F0F0F0] bg-white hover:border-[#9220E1]/10"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4"
                            >
                                <span className="font-clash font-medium text-[18px] sm:text-[20px] md:text-[22px] text-[#0A0E31]">
                                    {item.question}
                                </span>
                                <div className={cn(
                                    "size-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                    openIndex === index ? "bg-[#9220E1] text-white" : "bg-[#F0F0F0] text-[#0A0E31]/40"
                                )}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 sm:px-8 pb-8 pt-0 font-geist font-light text-[15px] sm:text-[17px] leading-relaxed text-[#0A0E31]/60">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        className="font-geist flex items-center mx-auto text-[#9220E1] font-semibold text-[17px] hover:underline transition-all"
                    >
                        Have More Questions About Our Website Services?
                    </button>
                </div>
            </div>
        </section>
    );
}
