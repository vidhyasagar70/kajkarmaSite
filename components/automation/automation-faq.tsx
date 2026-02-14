"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What is AI workflow automation?",
        answer: "AI workflow automation uses automation tools and artificial intelligence to handle repetitive business processes without manual intervention."
    },
    {
        question: "Is n8n better than Zapier?",
        answer: "n8n is more flexible and customizable, ideal for advanced workflows. Zapier is easier for quick, cloud-based integrations."
    },
    {
        question: "Can you automate ecommerce operations?",
        answer: "Yes, we automate order processing, vendor management, marketing workflows, CRM integration, and analytics systems."
    },
    {
        question: "How long does automation implementation take?",
        answer: "Basic workflows can be implemented within 1–2 weeks, while advanced systems may take 3–6 weeks depending on complexity."
    },
    {
        question: "Do you provide maintenance and support?",
        answer: "Yes, we offer monitoring, optimization, and workflow scaling support."
    }
];

export function AutomationFAQ() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[42px] md:text-[54px] leading-tight text-[#0A0E31] mb-5">
                        Frequently <span className="text-[#9220E1]">Asked Questions</span>
                    </h2>
                    <p className="font-geist font-light text-[17px] sm:text-[19px] text-[#0A0E31]/60">
                        Everything you need to know about our automation services.
                    </p>
                </div>

                <div className="space-y-3.5">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={cn(
                                    "rounded-[28px] border transition-all duration-300",
                                    isOpen
                                        ? "bg-[#FBF9FE] border-[#9220E1]/20 shadow-md shadow-[#9220E1]/5"
                                        : "bg-white border-[#F0F0F0] hover:border-[#9220E1]/10"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full py-6 px-7 sm:px-9 flex items-center justify-between text-left group"
                                >
                                    <span className={cn(
                                        "font-clash font-medium text-[17px] sm:text-[19px] md:text-[21px] transition-colors duration-300",
                                        isOpen ? "text-[#9220E1]" : "text-[#0A0E31] group-hover:text-[#9220E1]"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <div className={cn(
                                        "size-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                                        isOpen ? "bg-[#9220E1] text-white rotate-180" : "bg-[#FBF9FE] text-[#0A0E31]"
                                    )}>
                                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-7 sm:px-9 pb-8">
                                                <p className="font-geist font-light text-[15px] sm:text-[16px] leading-relaxed text-[#0A0E31]/70">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <button
                        className="font-geist flex items-center mx-auto text-[#9220E1] font-semibold text-[17px] hover:underline transition-all"
                    >
                        Have More Questions? Speak With Our Team
                    </button>
                </div>
            </div>
        </section>
    );
}
