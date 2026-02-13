"use client";

interface BenefitItem {
  title: string;
  description: string;
}

interface WhatWeDoSectionProps {
  heading?: string;
  benefits?: BenefitItem[];
  backgroundColor?: string;
}

const defaultBenefits: BenefitItem[] = [
  {
    title: "Saves Time",
    description: "Automates repetitive tasks so your team can focus on important work.",
  },
  {
    title: "Reduces Errors",
    description: "Consistent workflows minimize manual mistakes.",
  },
  {
    title: "Cuts Costs",
    description: "Scale operations without increasing staff or overhead.",
  },
  {
    title: "Boosts Growth",
    description: "Faster processes lead to better customer experience and higher conversions.",
  },
];

export function WhatWeDoSection({
  heading = "What We Do For You",
  benefits = defaultBenefits,
  backgroundColor = "bg-white",
}: WhatWeDoSectionProps) {
  return (
    <section className={`w-full ${backgroundColor} py-12 sm:py-16 md:py-20 lg:py-24`}>
      {/* Section Heading */}
      <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1] lg:leading-[54px] tracking-[0%] text-center text-[#0C1B33] mb-10 sm:mb-12 md:mb-16 px-4">
        {heading}
      </h2>

      {/* Benefits List - Full width, no side padding */}
      <div className="flex flex-col w-full">
        {benefits.map((benefit, index) => (
          <div key={index}>
            {/* Top border for first item */}
            {index === 0 && (
              <div className="w-full h-[1px] bg-[#0C1B33]/20" />
            )}
            
            <div className="flex flex-col md:flex-row md:items-center py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 gap-6 md:gap-16 lg:gap-24 xl:gap-45">
              {/* Title - Clash Grotesk Medium 52px */}
              <h3 
                className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.2] tracking-[0%] text-[#0C1B33] md:w-[40%] lg:w-[35%]"
                style={{ fontFamily: "'Clash Grotesk Variable', sans-serif", fontWeight: 500 }}
              >
                {benefit.title}
              </h3>
              
              {/* Description - Geist Light 28px */}
              <p 
                className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[32px] lg:leading-[36px] tracking-[0%] text-[#0A0E31]/80 md:w-[60%] lg:w-[65%]"
                style={{ fontFamily: "'Geist', sans-serif", fontWeight: 300 }}
              >
                {benefit.description}
              </p>
            </div>
            
            {/* Divider line - after each item */}
            <div className="w-full h-[1px] bg-[#0C1B33]/20" />
          </div>
        ))}
      </div>
    </section>
  );
}
