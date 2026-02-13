"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What industries does Kajkarma work with?",
    answer: "We collaborate with startups, small businesses, and established brands across tech, education, retail, and more — customizing every solution to fit your goals",
  },
  {
    question: "Can you handle projects from start to finish?",
    answer: "Yes, we provide end-to-end project management, from initial concept and design through development, testing, and deployment. Our team ensures seamless execution at every stage.",
  },
  {
    question: "Do you offer white label or partnership services?",
    answer: "Absolutely! We offer white label solutions that allow you to deliver high-quality digital products under your own brand. Our partnership programs are designed to help agencies and businesses scale efficiently.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on scope and complexity. Typically, smaller projects take 2-4 weeks, while larger enterprise solutions may take 2-3 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on scope and complexity. Typically, smaller projects take 2-4 weeks, while larger enterprise solutions may take 2-3 months. We provide detailed timelines during our initial consultation.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      className="w-full py-8 sm:py-10 md:py-14 lg:py-20"
      style={{
        background: "linear-gradient(180deg, #1F0A3B 22%, #601A91 64%, #9220E1 93%)",
      }}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6 sm:mb-8 md:mb-10 lg:mb-14 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <h2
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] 2xl:text-[64px] leading-[1.2] lg:leading-[1.15]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              letterSpacing: "0%",
            }}
          >
            Frequently
            <br />
            Asked Questions
          </h2>

          <p
            className="text-white max-w-[400px] lg:text-left text-[10px] sm:text-xs md:text-sm lg:text-base leading-[1.5]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              letterSpacing: "0%",
            }}
          >
            We've compiled a few common questions to help you understand how Kajkarma works, delivers, and supports your digital growth.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="border-t border-white/20"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 sm:py-5 md:py-6 flex items-start justify-between text-left gap-3 sm:gap-4"
                >
                  <div className="flex-1 " >
                    <span
                      className="text-white block font-medium text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[28px] leading-[1.4]"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 500,
                        letterSpacing: "0%",
                      }}
                    >
                      {item.question}
                    </span>
                    
                    {/* Answer - shown when open */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p
                        className="text-white max-w-xl text-xs sm:text-sm lg:text-[15px] leading-[1.6]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 400,
                          letterSpacing: "0%",
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                  
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? "bg-white" 
                        : "bg-transparent border border-white/40"
                    }`}
                  >
                    {/* Arrow icon - points right by default, rotates to point up when open */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] ${
                        isOpen ? "-rotate-45" : "rotate-0"
                      }`}
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke={isOpen ? "#6450F0" : "white"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            );
          })}
          {/* Bottom border */}
          <div className="border-t border-white/20"></div>
        </div>
      </div>
    </section>
  );
}
