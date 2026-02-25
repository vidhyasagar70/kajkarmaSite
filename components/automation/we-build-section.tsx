"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function WeBuildSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.6, // Trigger when 60% of section is visible (user fully arrives)
        rootMargin: '0px', // No margin offset
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Column - We Build & Automate */}
          <div 
            className={`flex-1 flex flex-col transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Heading */}
            <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1] lg:leading-[54px] tracking-[0%] text-[#0A0E31] mb-4 sm:mb-5 md:mb-6">
              We Build & Automate
            </h2>
            
            {/* Description */}
           <p className=" font-geist font-light text-[16px] sm:text-[17px] md:text-[19px] lg:text-[21px] leading-[1.5] lg:leading-[32px] text-[#4A5568] mb-6 sm:mb-8 md:mb-10 max-w-[620px] ">
              We design and set up smart  workflows, integrations, and AI 
              systems tailored to your business.
            </p>
            
            {/* Image */}
            <div className="relative w-full max-w-[566px] aspect-[620/500] rounded-[26px] overflow-hidden">
              <Image
                src="/Ai-Automation/AI_Automation_We_Build&Automate.jpg"
                alt="We Build & Automate"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column - You Run & Scale */}
          <div 
            className={`flex-1 flex flex-col transition-all duration-700 ease-out delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Image first on right */}
            <div className="relative w-full max-w-[566px] aspect-[620/408] rounded-[26px] overflow-hidden mb-6 sm:mb-8 md:mb-10">
              <Image
                src="/Ai-Automation/AI_Automation_You Run&Scale.jpg"
                alt="You Run & Scale"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Heading */}
            <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1] lg:leading-[54px] tracking-[0%] text-[#0A0E31] mb-4 sm:mb-5 md:mb-6">
              You Run & Scale
            </h2>
            
            {/* Description */}
            <p className=" font-geist font-light text-[16px] sm:text-[17px] md:text-[19px] lg:text-[21px] leading-[1.5] lg:leading-[32px] text-[#4A5568] mb-6 sm:mb-8 md:mb-10 max-w-[580px] ">
              Your automation runs 24/7 in the background while you focus on growth and customers.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
