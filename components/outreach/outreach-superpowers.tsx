'use client';

import { useState, useRef, useCallback } from 'react';

interface OutreachCard {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const outreachCards: OutreachCard[] = [
  {
    number: "01",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Ecommerce Application Development",
    description: "We build custom ecommerce applications with scalable architecture, secure payments, and conversion-optimized product flows designed for high-growth digital businesses.",
  },
  {
    number: "02",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Shopify & Shopify Plus Development",
    description: "Custom Shopify and Shopify Plus stores built for speed, flexibility, and revenue — from advanced theme development to complex ecommerce integrations.",
  },
  {
    number: "03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Marketplace Platform Development",
    description: "End-to-end multi-vendor marketplace development, including seller dashboards, commission systems, admin controls, and scalable backend infrastructure.",
  },
  {
    number: "04",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Custom Web Application Development",
    description: "We develop custom web applications and SaaS platforms with clean architecture, API integrations, automation workflows, and long-term scalability in mind.",
  },
  {
    number: "05",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "High-Converting Website Development",
    description: "Performance-driven websites engineered for user experience, speed, and conversion, turning visitors into qualified leads and paying customers.",
  },
  {
    number: "06",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M22 7L12 13L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "SEO, Market Research & AI-Driven Growth",
    description: "We deliver SEO-first growth strategy powered by market research, competitor analysis, and AI-driven keyword intelligence — ensuring every build is aligned with real search demand.",
  },
];

export function OutreachSuperpowers() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Add a small delay before switching to prevent rapid flickering
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(index);
    }, 120); // 150ms delay for smoother switching
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Add delay before resetting to default
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 100);
  }, []);

  const getCardStyle = (index: number) => {
    const isActive = hoveredIndex === null ? index === 0 : hoveredIndex === index;
    
    if (isActive) {
      return {
        background: 'linear-gradient(180deg, #1F0A3B 17.42%, #601A91 75.2%, #9220E1 113.76%)',
        color: 'white',
      };
    }
    return {
      background: '#F8F8FC',
      color: '#191151',
    };
  };

  return (
    <section className="w-full pt-4 pb-6 sm:py-10 md:py-14 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-3 sm:mb-8 md:mb-10 lg:mb-14">
          <div className="mb-2 sm:mb-3 md:mb-4">
            <div className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 border border-gray-400 rounded-full inline-block">
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-700">Outreach superpowers</span>
            </div>
          </div>

          <h2 className="font-clash font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] 2xl:text-[54px] leading-[1.2] md:leading-[1.1] tracking-[0%] text-center mb-2 sm:mb-3 md:mb-4">
            <span className="text-gray-900">All the email automation</span>
            <br />
            <span className="text-gray-900">you </span>
            <span className="text-[#9220E1]">actually need</span>
          </h2>

          <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm lg:text-base">
            Rotation, throttling, A/B tests, schedules & tracking.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-[10px] max-w-[1140px] mx-auto">
          {outreachCards.map((card, index) => {
            const cardStyle = getCardStyle(index);
            const isActive = hoveredIndex === null ? index === 0 : hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="rounded-[12px] md:rounded-[16px] transition-all duration-700 ease-in-out cursor-pointer p-5 sm:p-6 md:p-[30px_28px]"
                style={{
                  width: '100%',
                  minHeight: '180px',
                  ...cardStyle,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Top Row - Icon and Number */}
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div 
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-white/20' : 'bg-[#7C3AED]/10'
                    }`}
                  >
                    <span className={`${isActive ? 'text-white' : 'text-[#7C3AED]'} [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6`}>
                      {card.icon}
                    </span>
                  </div>
                  <span 
                    className={`text-xs md:text-sm font-medium px-2.5 py-0.5 md:px-3 md:py-1 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#7C3AED]/10 text-[#7C3AED]'
                    }`}
                  >
                    {card.number}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className={`font-clash font-semibold text-base md:text-lg mb-1.5 md:mb-2 ${
                    isActive ? 'text-white' : 'text-[#191151]'
                  }`}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p 
                  className={`text-xs md:text-sm leading-relaxed ${
                    isActive ? 'text-white/80' : 'text-gray-500'
                  }`}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12">
          <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-[#7C3AED] text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-[#6D28D9] transition-colors flex items-center justify-center gap-2">
            Get Started Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 border border-[#7C3AED] text-[#7C3AED] rounded-full font-semibold text-xs sm:text-sm hover:bg-[#7C3AED]/5 transition-colors flex items-center justify-center gap-2">
            Watch demo video
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
              <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
