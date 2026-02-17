"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqItems = [
    {
        question: "What is a custom market solution?",
        answer: "A custom market solution is a tailored strategy and digital infrastructure built to solve specific business challenges, automate workflows, or launch unique product offerings.",
    },
    {
        question: "How long does it take to deploy a custom solution?",
        answer: "Timelines vary by complexity, but most initial custom solutions are deployed within 6 to 12 weeks, following a structured agile process.",
    },
    {
        question: "Do you integrate with existing CRM and ERP systems?",
        answer: "Yes. We specialize in building custom adapters and API integrations to connect your new solution with existing tools like Salesforce, SAP, or custom legacy systems.",
    },
    {
        question: "Can you help with market validation for a new idea?",
        answer: "Absolutely. We often start with an MVP approach to validate your core market hypothesis before scaling into a full custom ecosystem.",
    },
    {
        question: "What industries do you provide custom solutions for?",
        answer: "We work across various sectors, with deep expertise in Jewelry, Ecommerce, Manufacturing, and Service-based agencies.",
    },
];

export function CustomMarketSolutionFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[42px] md:text-[54px] text-[#0A0E31] mb-5">
                        Frequently Asked <span className="text-[#7C3AED]">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border rounded-[24px] overflow-hidden transition-all duration-300",
                                openIndex === index ? "border-[#7C3AED]/20 bg-[#FBF9FE]" : "border-[#F0F0F0] bg-white hover:border-[#7C3AED]/10"
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
                                    openIndex === index ? "bg-[#7C3AED] text-white" : "bg-[#F0F0F0] text-[#0A0E31]/40"
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
                        Have More Questions About Our Custom Solutions?
                    </button>
                </div>
            </div>
        </section>
    );
}
