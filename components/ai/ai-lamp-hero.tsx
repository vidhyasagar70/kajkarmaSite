"use client";

import { LampBackgroundAnimation } from "./lamp-background-animation";

export function AILampHero() {
  return (
    <div className="w-full bg-white py-3 sm:py-4 md:py-6 lg:py-8 px-3 sm:px-4 md:px-10 lg:px-20 xl:px-28">
      <section 
        className="relative w-full overflow-hidden mx-auto bg-[#0C081E] rounded-2xl md:rounded-3xl max-w-[1400px]"
      >
        {/* Background images - these determine the height */}
        <LampBackgroundAnimation />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-5 md:px-6 py-8 sm:py-10 md:py-12 lg:py-[50px]">
          {/* Badge */}
          <div 
            className="font-inter font-medium text-[10px] sm:text-[11px] md:text-xs leading-5 text-center text-white/85 py-1 px-3 sm:px-4 md:px-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-[10px] mb-4 sm:mb-5 md:mb-6"
          >
            Less than a coffee per day
          </div>

          {/* Heading lines */}
          <h1 className="font-clash font-medium text-[15px] sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[52px] leading-[1.2] sm:leading-[1.15] md:leading-[1.1] tracking-normal text-center text-white px-2">
            Confused about the best service
          </h1>
          <h1 className="font-clash font-medium text-[15px] sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[52px] leading-[1.2] sm:leading-[1.15] md:leading-[1.1] tracking-normal text-center text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2">
            and the costing Find it out with our
          </h1>

          {/* AI Assistant gradient text */}
          <h2
            className="font-clash font-medium text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[100px] leading-none tracking-tight text-center bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(180deg, #9333EA 0%, #C084FC 40%, #E9D5FF 75%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(147, 51, 234, 0.5)) drop-shadow(0 0 80px rgba(192, 132, 252, 0.3))',
            }}
          >
            AI Assistant
          </h2>

          {/* CTA Button */}
          <button className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 inline-flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 md:py-3.5 px-5 sm:px-6 md:px-7 text-white font-inter font-semibold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] border-none rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-gradient-to-br from-[#9333EA] via-[#A855F7] to-[#9333EA] shadow-[0_4px_20px_rgba(147,51,234,0.4),0_0_40px_rgba(147,51,234,0.2)] hover:translate-y-[-3px] hover:shadow-[0_8px_30px_rgba(147,51,234,0.5),0_0_60px_rgba(147,51,234,0.3)] active:scale-[0.98]">
            Get Your Answers now
            <span className="text-sm">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}
