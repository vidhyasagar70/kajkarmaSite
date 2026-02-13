"use client";

import Image from "next/image";

const otherPlatformFeatures = [
  "Fewer Leads Available",
  "No Decision-Maker Emails",
  "Basic or Limited Filters",
  "Incomplete Business Data",
  "No AI Personalization",
  "Restricted Outreach Limits",
];

const kajkarmaFeatures = [
  "More Leads, Every Time",
  "Decision-Maker Contacts Included",
  "Advanced Data & Filters",
  "Real-Time Business Coverage",
  "AI-Powered Personalization",
  "Unlimited Outreach System",
];

export function ComparisonSection() {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/comparision.svg"
          alt="Background"
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 md:mb-10 lg:mb-14">
          <div className="mb-2 sm:mb-3 md:mb-4">
            <div 
              className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-full inline-block bg-white"
              style={{
                border: '0.8px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(45deg, #6C219F 24.46%, #9220E1 50.07%, #6C219F 75.67%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-700">Why 40K Trust LeadSwift</span>
            </div>
          </div>

          <h2 className="font-clash font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] 2xl:text-[54px] leading-[1.2] md:leading-[1.1] tracking-[0%] text-center mb-2 sm:mb-3 md:mb-4">
            <span className="text-gray-900">Not All Lead Gen Tools Are</span>
            <br />
            <span className="text-[#7C3AED]">Created Equal</span>
          </h2>

          <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm lg:text-base">
            Here's exactly why LeadSwift dominates:
          </p>
        </div>

        {/* Comparison Cards */}
        <div 
          className="flex flex-col md:flex-row justify-center mx-auto gap-4 md:gap-6"
          style={{
            maxWidth: '984px',
          }}
        >
          {/* Other Platforms Card */}
          <div 
            className="flex-1 rounded-2xl bg-white p-5 sm:p-6 md:p-8"
            style={{
              minHeight: 'auto',
              border: '1.4px solid transparent',
              backgroundImage: 'linear-gradient(white, white), linear-gradient(45deg, rgba(85, 68, 202, 0.4) 24.46%, rgba(162, 148, 255, 0.4) 50.07%, rgba(85, 68, 202, 0.4) 75.67%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
          >
            {/* Platform Badge */}
            <div className="flex justify-center mb-4 md:mb-6 mt-2 md:mt-4">
              <div className="px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-[#191151] rounded-full">
                <span className="text-white font-semibold text-xs sm:text-sm md:text-base tracking-wider uppercase">
                  Other Platforms
                </span>
              </div>
            </div>

            {/* Support Type with SVG decorations */}
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-10">
              <Image 
                src="/Frame 6356772.svg" 
                alt="decoration" 
                width={120} 
                height={24}
                className="hidden sm:block w-16 md:w-24 lg:w-[120px]"
                style={{ filter: 'brightness(0) saturate(100%)' }}
              />
              <div className="px-4 py-2 md:px-5 md:py-2.5 bg-[#191151] rounded-full">
                <span className="text-white font-semibold text-xs md:text-sm">Generic Support</span>
              </div>
              <Image 
                src="/Frame 6356698.svg" 
                alt="decoration" 
                width={120} 
                height={24}
                className="hidden sm:block w-16 md:w-24 lg:w-[120px]"
                style={{ filter: 'brightness(0) saturate(100%)' }}
              />
            </div>

            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5 mt-4 md:mt-6">
              {otherPlatformFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <Image 
                    src="/x-circle (1) 1.svg" 
                    alt="x" 
                    width={24} 
                    height={24}
                    className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6"
                  />
                  <span 
                    className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-[22px]"
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontWeight: 400,
                      lineHeight: '1.3',
                      letterSpacing: '0%',
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kajkarma Card */}
          <div 
            className="flex-1 rounded-2xl p-5 sm:p-6 md:p-8 text-white"
            style={{
              minHeight: 'auto',
              background: 'linear-gradient(180deg, #1F0A3B 17.42%, #601A91 75.2%, #9220E1 113.76%)',
            }}
          >
            {/* Logo with border */}
            <div className="flex justify-center mb-4 md:mb-6 mt-2 md:mt-4">
              <div 
                className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full"
                style={{
                  border: '1px solid rgba(255,255,255,0.3)',
                }}
              >
                <Image 
                  src="/Logo-13 1 (1).svg" 
                  alt="Kajkarma" 
                  width={150} 
                  height={40}
                  className="h-6 sm:h-7 md:h-8 w-auto"
                />
              </div>
            </div>

            {/* Support Type with SVG decorations */}
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-10">
              <Image 
                src="/Frame 6356772.svg" 
                alt="decoration" 
                width={120} 
                height={24}
                className="hidden sm:block w-16 md:w-24 lg:w-[120px]"
                style={{ filter: 'brightness(0) invert(1) opacity(0.6)' }}
              />
              <div className="px-4 py-2 md:px-5 md:py-2.5 bg-[#9220E1] rounded-full">
                <span className="text-white text-xs md:text-sm font-semibold">Tailored Support</span>
              </div>
              <Image 
                src="/Frame 6356698.svg" 
                alt="decoration" 
                width={120} 
                height={24}
                className="hidden sm:block w-16 md:w-24 lg:w-[120px]"
                style={{ filter: 'brightness(0) invert(1) opacity(0.6)' }}
              />
            </div>

            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5 mt-4 md:mt-6">
              {kajkarmaFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <Image 
                    src="/check_circle_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24 1.png" 
                    alt="check" 
                    width={24} 
                    height={24}
                    className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6"
                  />
                  <span 
                    className="text-white/90 text-sm sm:text-base md:text-lg lg:text-[22px]"
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontWeight: 400,
                      lineHeight: '1.3',
                      letterSpacing: '0%',
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Comparison Link */}
        <div className="flex justify-center mt-8">
          <a 
            href="#" 
            className="flex items-center gap-2 text-gray-700 hover:text-[#7C3AED] transition-colors font-medium"
          >
            Full comparison
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
