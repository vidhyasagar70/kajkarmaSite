"use client";

import { useState } from "react";
import Image from "next/image";

const automations = [
  { id: 1, title: "AI Chatbot", image: "/robot.svg" },
  { id: 2, title: "Lead Generation", image: "/ai.png" },
  { id: 3, title: "Email Marketing", image: "/ai.png" },
  { id: 4, title: "Website Development", image: "/robot.svg" },
  { id: 5, title: "Analytics Dashboard", image: "/ai.png" },
  { id: 6, title: "Social Media", image: "/ai.png" },
  { id: 7, title: "CRM Integration", image: "/ai.png" },
];

export function ExploreAutomationsSection() {
  const [activeIndex, setActiveIndex] = useState(3);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? automations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === automations.length - 1 ? 0 : prev + 1));
  };

  // Get visible items centered around active index
  const getVisibleItems = () => {
    const items = [];
    for (let i = -3; i <= 3; i++) {
      let index = activeIndex + i;
      if (index < 0) index = automations.length + index;
      if (index >= automations.length) index = index - automations.length;
      items.push({ ...automations[index], position: i, originalIndex: index });
    }
    return items;
  };

  return (
    <section className="w-full bg-[#130624] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-0">
        {/* Heading */}
        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1] lg:leading-[54px] tracking-[0%] text-center text-white mb-10 sm:mb-12 md:mb-16 px-4">
          Explore All Our Automations
        </h2>

        {/* Carousel Container */}
        <div className="relative flex items-center w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
          {/* Left Arrow - Fixed at left edge */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] flex items-center justify-center text-white hover:scale-105 transition-transform"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Carousel Items - Centered */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full px-[80px] sm:px-[100px] md:px-[120px] lg:px-[140px]">
            {getVisibleItems().map((item) => {
              const isActive = item.position === 0;
              const isAdjacent = Math.abs(item.position) === 1;
              const isOuter = Math.abs(item.position) >= 2;
              
              return (
                <div
                  key={`${item.id}-${item.position}`}
                  onClick={() => setActiveIndex(item.originalIndex)}
                  className={`flex-shrink-0 cursor-pointer transition-all duration-500 ease-out ${
                    isActive 
                      ? "w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] z-10" 
                      : isAdjacent
                        ? "w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]"
                        : "w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]"
                  } ${isOuter ? "hidden sm:block" : ""}`}
                >
                  <div className="relative w-full h-full rounded-[20px] overflow-hidden transition-all duration-500 border border-[#3D2A5C]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E8E0F0] to-[#D0C4E0]" />
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 bg-[#FFFFFF38] backdrop-blur-lg py-3 px-3">
                        <p className="font-clash font-medium text-sm sm:text-base md:text-lg text-[#130624] text-center">
                          {item.title}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow - Fixed at right edge */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-20 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] flex items-center justify-center text-white hover:scale-105 transition-transform"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
