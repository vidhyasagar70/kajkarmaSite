"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01.",
    title: "Audience Research",
    description: "Understand market, users, and growth opportunities deeply.",
  },
  {
    number: "02.",
    title: "Channel Strategy",
    description: "Prioritize platforms and channels with highest impact.",
  },
  {
    number: "03.",
    title: "Campaign Execution",
    description: "Launch focused campaigns with clear goals and metrics.",
  },
  {
    number: "04.",
    title: "Performance Optimization",
    description: "Track performance, optimize strategies, scale what works.",
  },
];

// Responsive positions using vw/vh units and percentages
const getResponsivePositions = () => ({
  circles: [
    { top: "25%", left: "2%" },
    { top: "2%", left: "32%" },
    { top: "30%", left: "66%" },
    { top: "64%", left: "88%" },
  ],
  textOffsets: [
    { top: "clamp(100px, 12vw, 160px)", left: "0" },
    { top: "clamp(100px, 12vw, 160px)", left: "0" },
    { top: "clamp(100px, 12vw, 160px)", left: "clamp(-100px, -10vw, -144px)" },
    { top: "clamp(-220px, -24vw, -320px)", left: "0" },
  ],
});

export function GrowthStrategy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    let rafId: number;
    
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const windowHeight = window.innerHeight;
        const containerOffsetTop = container.offsetTop;
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollIntoContainer = scrollY - containerOffsetTop;
        const scrollableDistance = container.offsetHeight - windowHeight;
        const progress = Math.max(0, Math.min(1, scrollIntoContainer / scrollableDistance));

        const newVisibleSteps: number[] = [];
        if (progress >= 0.05) newVisibleSteps.push(0);
        if (progress >= 0.30) newVisibleSteps.push(1);
        if (progress >= 0.55) newVisibleSteps.push(2);
        if (progress >= 0.80) newVisibleSteps.push(3);
        
        setVisibleSteps(newVisibleSteps);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const positions = getResponsivePositions();

  // Mobile layout - vertical stack
  if (isMobile) {
    return (
      <section className="w-full bg-[#FBF9FE] py-12 px-4">
        <h2 className="font-clash font-medium text-[32px] leading-[1] text-[#0A0E31] mb-10">
          Growth <span className="text-[#9220E1]">Strategy</span>
        </h2>
        
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="relative w-[60px] h-[60px] flex-shrink-0">
                <Image
                  src="/Ellipse 65.svg"
                  alt="Step circle"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="font-clash font-medium text-[28px] leading-[1] text-[#0A0E31]">
                  {step.number}
                </p>
                <h3 className="font-clash font-medium text-[24px] leading-[1.1] text-[#9220E1] mb-1">
                  {step.title}
                </h3>
                <p className="font-geist font-normal text-[14px] leading-[1.3] text-[#0A0E31]/80">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full bg-[#FBF9FE] overflow-hidden">
        <div className="h-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[72px]">
          {/* Heading */}
          <h2 
            className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1] lg:leading-[54px] tracking-[0%] text-[#0A0E31] mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          >
            Growth <span className="text-[#9220E1]">Strategy</span>
          </h2>

          {/* Road Map Container */}
          <div className="relative w-full mx-auto h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] max-h-[700px]">
            {/* Road Path SVG */}
            <div 
              className="absolute h-full"
              style={{ 
                width: "calc(100% + 10vw)", 
                left: "-5vw",
                top: "-1vw" 
              }}
            >
              <Image
                src="/Group 6356198 (1).svg"
                alt="Growth Strategy Path"
                fill
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Step Items */}
            {steps.map((step, index) => (
              <div
                key={index}
                className={`absolute flex flex-col items-start transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  visibleSteps.includes(index) 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-75"
                }`}
                style={{
                  top: positions.circles[index].top,
                  left: positions.circles[index].left,
                }}
              >
                {/* Circle */}
                <div 
                  className={`relative transition-all duration-[1400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    visibleSteps.includes(index) ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                  style={{
                    width: "clamp(80px, 10vw, 152px)",
                    height: "clamp(80px, 10vw, 150px)",
                  }}
                >
                  <Image
                    src="/Ellipse 65.svg"
                    alt="Step circle"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Text Content */}
                <div 
                  className={`absolute transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    visibleSteps.includes(index) 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    width: "clamp(150px, 16vw, 224px)",
                    top: positions.textOffsets[index].top,
                    left: positions.textOffsets[index].left,
                    transitionDelay: visibleSteps.includes(index) ? "400ms" : "0ms",
                  }}
                >
                  {/* Number */}
                  <p 
                    className="font-clash font-medium leading-[1] text-[#0A0E31] mb-1"
                    style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
                  >
                    {step.number}
                  </p>
                  
                  {/* Title */}
                  <h3 
                    className="font-clash font-medium leading-[1.1] text-[#9220E1] mb-2"
                    style={{ fontSize: "clamp(20px, 2.8vw, 40px)" }}
                  >
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="font-geist font-normal leading-[1.3] text-[#0A0E31]/80"
                    style={{ fontSize: "clamp(12px, 1.2vw, 18px)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
