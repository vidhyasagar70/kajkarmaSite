"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface WhatAutomationSectionProps {
  image?: string;
  imageAlt?: string;
  title?: string;
  descriptions?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  backgroundColor?: string;
  cardBackgroundColor?: string;
}

export function WhatAutomationSection({
  image = "/robot.svg",
  imageAlt = "Section Image",
  title = "What Automation Is This?",
  descriptions = [
    "This is end-to-end business automation built to eliminate repetitive tasks and simplify everyday operations across your business. We connect your tools, workflows, and systems so work happens automatically — reducing manual effort, errors, and delays.",
    "From lead capture and instant follow-ups to internal workflows, reporting, and customer communication, everything runs smoothly in the background.",
    "Your processes stay organized, your team stays focused, and your business scales faster without adding complexity."
  ],
  buttonText = "Start Automating",
  onButtonClick,
  backgroundColor = "bg-white",
  cardBackgroundColor = "bg-[#7C3AED]/10",
}: WhatAutomationSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full ${backgroundColor} py-12 sm:py-16 md:py-20 lg:py-24 px-2 sm:px-4 md:px-6 lg:px-8`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[93px]">
          {/* Left - Image with Background Card */}
          <div
            className={`relative w-full max-w-[500px] lg:w-[500px] flex-shrink-0 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
          >
            <div className="relative">
              {/* Background card behind image */}
              <div
                className={`absolute top-[20px] left-0 w-[calc(100%-20px)] sm:w-[calc(100%-30px)] h-full rounded-[24px] ${cardBackgroundColor}`}
              />

              {/* Main Image container */}
              <div
                className="relative w-[calc(100%-20px)] sm:w-[calc(100%-30px)] aspect-[460/540] rounded-[24px] overflow-hidden ml-[20px] sm:ml-[30px] z-10 bg-white"
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`flex-1 w-full lg:w-[710px] lg:max-w-[710px] transition-all duration-700 ease-out delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
          >
            {/* Heading */}
            <h2 className="font-clash font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[54px] leading-[1.1] lg:leading-[54px] tracking-[0%] text-[#0A0E31] mb-6 sm:mb-8 lg:mb-[40px]">
              {title}
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-5 sm:space-y-6 lg:space-y-[40px] mb-8 sm:mb-10 lg:mb-[40px]">
              {descriptions.map((desc, index) => (
                <p
                  key={index}
                  className={`font-geist font-light ${index === 0
                      ? "text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px]"
                      : "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px]"
                    } leading-[1.4] lg:leading-[32px] tracking-[0%] text-[#4A5568] transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {desc}
                </p>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={onButtonClick}
              className={`inline-flex items-center justify-center gap-[10px] px-6 py-2.5 rounded-[1000px] border border-[#7C3AED] bg-[#7C3AED] text-white font-medium text-sm hover:bg-[#9220E1] transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{
                minWidth: "180px",
                height: "40px",
                transitionDelay: isVisible ? "600ms" : "0ms",
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
