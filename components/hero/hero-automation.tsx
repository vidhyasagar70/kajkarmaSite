'use client';

import Image from 'next/image';

export function HeroAutomation() {
  return (
    <section className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] xl:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero2.svg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">
            {/* Main Heading */}
            <h1 className="text-black font-clash font-medium text-[28px] leading-[1.2] sm:text-[40px] md:text-[52px] lg:text-[60px] xl:text-[68px] tracking-[0]">
              Still Doing Repetitive Work{' '}
              <span className="text-[#8B5CF6] font-bold">Manually?</span>
            </h1>

            {/* Subheading */}
            <p className="font-sans font-normal text-[14px] leading-[1.5] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] xl:leading-[1.6] tracking-[0] text-gray-600 max-w-2xl">
              Replace manual bottlenecks with automated AI agents. A complete solution for businesses ready to optimize efficiency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button className="bg-[#7921CF] hover:bg-[#7C3AED] text-white font-bold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full transition-colors duration-200 flex items-center gap-2 shadow-lg text-xs sm:text-sm w-full sm:w-auto justify-center">
                Get Your Free Audit
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button className="text-gray-900 font-bold px-3 sm:px-5 py-2.5 sm:py-3.5 hover:text-[#8B5CF6] transition-colors duration-200 underline underline-offset-4 text-xs sm:text-sm">
                Calculate ROI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
