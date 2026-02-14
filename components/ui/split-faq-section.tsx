"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
    question: string;
    answer: string;
}

interface SplitFaqSectionProps {
    title: string;
    items: FAQItem[];
    imageSrc: string;
}

export function SplitFaqSection({ title, items, imageSrc }: SplitFaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Heading - Center Top */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31]">
                        {title}
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    {/* Left Column - FAQ Accordion */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        {items.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className="border-b border-[#F0F0F0] last:border-0"
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className="w-full py-6 flex items-center justify-between text-left group"
                                    >
                                        <span className={cn(
                                            "font-clash font-medium text-lg sm:text-xl md:text-2xl transition-colors duration-300",
                                            isOpen ? "text-[#7C3AED]" : "text-[#0A0E31] group-hover:text-[#7C3AED]"
                                        )}>
                                            {item.question}
                                        </span>
                                        <div className={cn(
                                            "size-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                                            isOpen ? "bg-[#7C3AED] text-white" : "bg-[#F8F7FC] text-[#0A0E31]"
                                        )}>
                                            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                        </div>
                                    </button>

                                    <div className={cn(
                                        "overflow-hidden transition-all duration-300 ease-in-out",
                                        isOpen ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
                                    )}>
                                        <div className="flex flex-col gap-4">
                                            <p className="font-geist font-light text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                                                {item.answer}
                                            </p>
                                            <a href="#" className="flex items-center gap-2 text-[#7C3AED] font-medium group/link">
                                                Learn more <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column - Image Mockup */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-gradient-to-br from-[#1F0A3B] to-[#9220E1] p-1 shadow-2xl">
                            <div className="w-full h-full rounded-[38px] overflow-hidden bg-[#F8F7FC] relative">
                                <Image
                                    src={imageSrc}
                                    alt="FAQ Illustration"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        {/* Floating UI Elements or Decor can be added here */}
                        <div className="absolute -bottom-10 -left-10 size-40 bg-[#7C3AED] blur-[80px] opacity-20 -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
