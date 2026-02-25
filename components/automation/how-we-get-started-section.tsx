"use client";

import Image from "next/image";

const steps = [
  {
    number: "1.",
    title: "Tell Us Your Process",
    description: "Tell us about your business, tools, and what you want to automate.",
    image: "/Ai-Automation/AI-Automation-Tell-Us-Your-Process.jpg",
  },
  {
    number: "2.",
    title: "We Plan the Automation",
    description: "We design the right workflows and automation strategy for your needs.",
    image: "/AI-Automation/AI-Automation-We-Plan-the-Automation.jpg",
  },
  {
    number: "3.",
    title: "Build, Test, and Go Live",
    description: "We build, test, and launch your automation quickly and smoothly.",
    image: "/AI-Automation/AI-Automation-Build-Test-and-Go-Live.jpg",
  },
];

export function HowWeGetStartedSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Heading */}
        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1] lg:leading-[54px] tracking-[0%] text-center text-[#0A0E31] mb-10 sm:mb-12 md:mb-16">
          How We Get Started
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image */}
              <div className="relative w-full max-w-[405px] aspect-[405/460] rounded-[24px] overflow-hidden mb-6 sm:mb-8">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Step Number and Title */}
              <h3 className="font-clash font-medium text-[28px] sm:text-[36px] md:text-[40px] lg:text-[49px] leading-[1.1] lg:leading-[54px] tracking-[0%] text-[#0A0E31] mb-3 sm:mb-4">
                {step.number} {step.title}
              </h3>
              
              {/* Description */}
              <p className="font-geist font-light text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[1.4] lg:leading-[32px] tracking-[0%] text-[#0A0E31]/80 max-w-[405px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}