"use client";

import Image from "next/image";
import { useState } from "react";

export function OurPackageSection() {
  const [businessPlan, setBusinessPlan] = useState<"basic" | "premium">("basic");
  const [brandingPlan, setBrandingPlan] = useState<"basic" | "premium">("basic");

  const businessFeatures = [
    "Full Production Cycle – Complete process from concept to delivery, every month.",
    "Professional Editing Team – Expert editors enhancing your visuals with cinematic precision.",
    "Strategic Content Planning – Tailored video roadmap designed to boost brand engagement.",
  ];

  const allFeaturesCovered = [
    "Monthly Video Delivery",
    "Premium Visual Quality",
    "Fast Turnaround Time",
    "Dedicated Creative Team",
    "Brand-Focused Approach",
    "Ongoing Project Support",
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Top white background - 12% */}
      <div className="absolute top-0 left-0 right-0 h-[8%] sm:h-[12%] bg-white z-0" />
      
      {/* Bottom gradient background - 88% */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[92%] sm:h-[88%] z-0"
        style={{
          background: "linear-gradient(180deg, #1F0A3B 22%, #601A91 64%, #9220E1 94%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
        {/* Heading - Using Mask group.svg */}
        <div className="flex justify-center mb-2 sm:mb-4">
          <Image
            src="/Mask group.svg"
            alt="Our Package"
            width={600}
            height={120}
            className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-auto h-auto"
            priority
          />
        </div>

        {/* Subtitle */}
        <p 
          className="text-center mt-2 sm:mt-4 text-white/70 text-sm sm:text-base md:text-lg lg:text-2xl px-4"
          style={{
            fontFamily: "'Geist', sans-serif",
            fontWeight: 400,
            lineHeight: "1.4",
          }}
        >
          Rotation, throttling, A/B tests, schedules & tracking.
        </p>

        {/* Cards Container */}
        <div className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8">
          {/* First Row - For Business */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center">
            {/* Left Card - For Business */}
            <div 
              className="bg-white flex-1 max-w-[856px] flex flex-col rounded-2xl sm:rounded-3xl border border-gray-200 p-5 sm:p-6 md:p-8"
            >
              <h3 
                className="text-black font-clash font-medium text-2xl sm:text-3xl md:text-4xl leading-tight"
              >
                For Business
              </h3>
              <div className="w-full h-[1px] bg-black/40 my-3 sm:my-4" />

              {/* Price and Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span 
                  className="text-black font-clash font-medium text-2xl sm:text-3xl md:text-4xl"
                >
                  $999
                </span>
                
                {/* Toggle - Purple outline style */}
                <div 
                  className="flex items-center rounded-full p-[3px] w-fit"
                  style={{
                    border: "1.5px solid #9220E1",
                    background: "#fff",
                  }}
                >
                  <button
                    onClick={() => setBusinessPlan("basic")}
                    className="px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all"
                    style={{
                      background: businessPlan === "basic" ? "#9220E1" : "transparent",
                      color: businessPlan === "basic" ? "#fff" : "#333",
                    }}
                  >
                    Basic
                  </button>
                  <button
                    onClick={() => setBusinessPlan("premium")}
                    className="px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all"
                    style={{
                      background: businessPlan === "premium" ? "#9220E1" : "transparent",
                      color: businessPlan === "premium" ? "#fff" : "#333",
                    }}
                  >
                    Premium
                  </button>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4 flex-1">
                {businessFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <Image
                      src="/check_circle_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 1 (1).svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0 w-5 h-5 sm:w-[22px] sm:h-[22px]"
                    />
                    <span className="text-black text-sm sm:text-base leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full h-[1px] bg-black/20 my-3 sm:my-4" />

              {/* CTA Button */}
              <button
                className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-full text-white font-medium transition-all hover:opacity-90 mt-auto text-sm sm:text-base"
                style={{
                  background: "#9220E1",
                }}
              >
                Automate your Workflows →
              </button>
            </div>

            {/* Right Card - All Features Covered (Business) */}
            <div 
              className="bg-white w-full lg:w-[380px] flex-shrink-0 flex flex-col rounded-2xl sm:rounded-3xl border border-gray-200 p-5 sm:p-6 md:p-8"
            >
              <h3 
                className="text-black font-clash font-medium text-xl sm:text-2xl leading-tight"
              >
                All Features Covered
              </h3>

              <div className="w-full h-[1px] bg-black/20 mt-3 sm:mt-4 mb-4 sm:mb-6" />

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4 flex-1">
                {allFeaturesCovered.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <Image
                      src="/check_circle_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 1 (1).svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="flex-shrink-0 w-5 h-5 sm:w-[22px] sm:h-[22px]"
                    />
                    <span className="text-black text-sm sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full h-[1px] bg-black/20 mt-4 sm:mt-6 mb-3 sm:mb-4" />

              <p className="text-gray-500 text-xs sm:text-sm">
                Connect with us for more details
              </p>
            </div>
          </div>

          {/* Second Row - For Branding */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center">
            {/* Left Card - For Branding */}
            <div 
              className="bg-white flex-1 max-w-[856px] flex flex-col rounded-2xl sm:rounded-3xl border border-gray-200 p-5 sm:p-6 md:p-8"
            >
              {/* Header with logos */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <h3 
                  className="text-black font-clash font-medium text-2xl sm:text-3xl md:text-4xl leading-tight"
                >
                  For Branding
                </h3>
                <div className="flex items-center">
                  <Image
                    src="/logo2.png"
                    alt="Kajkarma"
                    width={280}
                    height={28}
                    className="object-contain w-[180px] sm:w-[220px] md:w-[280px]"
                  />
                </div>
              </div>

              <div className="w-full h-[1px] bg-black/20 my-3 sm:my-4" />

              {/* Price and Toggle - Green */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span 
                  className="text-black font-clash font-medium text-2xl sm:text-3xl md:text-4xl"
                >
                  $999
                </span>
                
                {/* Toggle - Green outline style */}
                <div 
                  className="flex items-center rounded-full p-[3px] w-fit"
                  style={{
                    border: "1.5px solid #2AB24B",
                    background: "#fff",
                  }}
                >
                  <button
                    onClick={() => setBrandingPlan("basic")}
                    className="px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all"
                    style={{
                      background: brandingPlan === "basic" ? "#2AB24B" : "transparent",
                      color: brandingPlan === "basic" ? "#fff" : "#333",
                    }}
                  >
                    Basic
                  </button>
                  <button
                    onClick={() => setBrandingPlan("premium")}
                    className="px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all"
                    style={{
                      background: brandingPlan === "premium" ? "#2AB24B" : "transparent",
                      color: brandingPlan === "premium" ? "#fff" : "#333",
                    }}
                  >
                    Premium
                  </button>
                </div>
              </div>

              {/* Features List - Green ticks */}
              <div className="space-y-3 sm:space-y-4 flex-1">
                {businessFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <Image
                      src="/check_circle_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 1.svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="mt-0.5 flex-shrink-0 w-5 h-5 sm:w-[22px] sm:h-[22px]"
                    />
                    <span className="text-black text-sm sm:text-base leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full h-[1px] bg-black/20 my-3 sm:my-4" />

              {/* CTA Button - Green */}
              <button
                className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-full text-white font-medium transition-all hover:opacity-90 mt-auto text-sm sm:text-base"
                style={{
                  background: "#2AB24B",
                }}
              >
                Automate your Workflows →
              </button>
            </div>

            {/* Right Card - All Features Covered (Branding) */}
            <div 
              className="bg-white w-full lg:w-[380px] flex-shrink-0 flex flex-col rounded-2xl sm:rounded-3xl border border-gray-200 p-5 sm:p-6 md:p-8"
            >
              <h3 
                className="text-black font-clash font-medium text-xl sm:text-2xl leading-tight"
              >
                All Features Covered
              </h3>

              <div className="w-full h-[1px] bg-black/20 mt-3 sm:mt-4 mb-4 sm:mb-6" />

              {/* Features List - Green ticks */}
              <div className="space-y-3 sm:space-y-4 flex-1">
                {allFeaturesCovered.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <Image
                      src="/check_circle_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 1.svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="flex-shrink-0 w-5 h-5 sm:w-[22px] sm:h-[22px]"
                    />
                    <span className="text-black text-sm sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full h-[1px] bg-black/20 mt-4 sm:mt-6 mb-3 sm:mb-4" />

              <p className="text-gray-500 text-xs sm:text-sm">
                7-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
