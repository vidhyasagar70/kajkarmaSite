'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

interface ServiceCard {
  title: string;
  image: string;
  gradient: string;
  isWide?: boolean;
}

const services: ServiceCard[] = [
  {
    title: "Intelligent AI and Automation Systems",
    image: "/services/ai-automation.png",
    gradient: "from-purple-900 via-purple-700 to-purple-500",
    isWide: true,
  },
  {
    title: "Complete Marketing Ecosystem",
    image: "/services/marketing.png",
    gradient: "from-purple-400 via-pink-300 to-purple-500",
  },
  {
    title: "Creative Design & Branding",
    image: "/services/branding.png",
    gradient: "from-gray-100 via-purple-100 to-gray-200",
  },
  {
    title: "Web & App Development",
    image: "/services/development.png",
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
  },
  {
    title: "SEO & Content Strategy",
    image: "/services/seo.png",
    gradient: "from-green-500 via-teal-400 to-cyan-500",
  },
];

export function OurServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [sectionHeight, setSectionHeight] = useState(2500);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only run sticky scroll logic on desktop
    if (isMobile) {
      setSectionHeight(0); // Auto height on mobile
      return;
    }

    const calculateHeight = () => {
      if (cardsContainerRef.current) {
        const containerScrollWidth = cardsContainerRef.current.scrollWidth;
        const containerClientWidth = cardsContainerRef.current.clientWidth;
        const scrollableWidth = containerScrollWidth - containerClientWidth;
        setSectionHeight(window.innerHeight + scrollableWidth * 1.5);
      }
    };

    calculateHeight();

    const handleScroll = () => {
      if (!sectionRef.current || !cardsContainerRef.current) return;

      const section = sectionRef.current;
      const container = cardsContainerRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const sectionStart = -rect.top;
      const scrollableDistance = sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, sectionStart / scrollableDistance));
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      container.scrollLeft = progress * maxScrollLeft;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateHeight);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateHeight);
    };
  }, [isMobile]);

  // Mobile: Simple section with horizontal scroll
  if (isMobile) {
    return (
      <section className="bg-white pt-4 pb-2 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-3">
            <div className="mb-2">
              <div className="px-3 py-1 border border-gray-400 rounded-full inline-block">
                <span className="text-[10px] sm:text-xs font-medium text-gray-700">Our Services</span>
              </div>
            </div>

            <h2 className="font-clash font-medium text-xl sm:text-2xl leading-[1.2] text-center mb-2">
              <span className="text-gray-900">Everything Your Brand Needs to</span>
              <br />
              <span className="linear-gradient(180deg, #1F0A3B 17.42%, #601A91 75.2%, #9220E1 113.76%)">Grow and Succeed</span>
            </h2>

            <p className="text-gray-500 text-[10px] sm:text-xs max-w-lg px-2">
              We deliver design, development, and marketing solutions
              that move your business forward.
            </p>
          </div>

          {/* Horizontal scrollable cards on mobile */}
          <div 
            className="flex gap-3 pb-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start"
                style={{ width: service.isWide ? '280px' : '200px' }}
              >
                <div className="group cursor-pointer">
                  <div 
                    className={`relative overflow-hidden bg-gradient-to-br ${service.gradient} rounded-xl`}
                    style={{ height: '180px' }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  <div className="mt-3 text-gray-900">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-clash font-medium text-xs">
                        {service.title}
                      </h3>
                      <svg 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="w-3 h-3 flex-shrink-0"
                      >
                        <path 
                          d="M7 17L17 7M17 7H7M17 7V17" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="h-[1px] w-full bg-gray-900 mt-2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: Sticky scroll behavior
  return (
    <section 
      ref={sectionRef}
      className="relative bg-white z-0"
      style={{ height: `${sectionHeight}px` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-6 md:pt-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-6 md:mb-8 lg:mb-12 relative">
            <div className="mb-3 md:mb-4">
              <div className="px-4 py-1.5 md:px-5 md:py-2 border border-gray-400 rounded-full inline-block">
                <span className="text-xs md:text-sm font-medium text-gray-700">Our Services</span>
              </div>
            </div>

            <h2 className="font-clash font-medium text-2xl md:text-3xl lg:text-4xl xl:text-[48px] 2xl:text-[54px] leading-[1.2] md:leading-[1.1] tracking-[0%] text-center mb-3 md:mb-4">
              <span className="text-gray-900">Everything Your Brand Needs to</span>
              <br />
              <span className="text-[#7921CF]">Grow and Succeed</span>
            </h2>

            <p className="text-gray-500 text-sm lg:text-base max-w-lg">
              We deliver design, development, and marketing solutions
              <br className="hidden sm:block" />
              that move your business forward.
            </p>
          </div>

          <div 
            ref={cardsContainerRef}
            className="flex gap-3 md:gap-[10px] pb-3 md:pb-4 scrollbar-hide overflow-x-hidden"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: service.isWide 
                    ? 'clamp(280px, 45vw, 620px)' 
                    : 'clamp(200px, 32vw, 420px)',
                }}
              >
                <div className="group cursor-pointer">
                  <div 
                    className={`relative overflow-hidden bg-gradient-to-br ${service.gradient} rounded-xl md:rounded-2xl lg:rounded-[20px]`}
                    style={{
                      height: 'clamp(200px, 30vw, 420px)',
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  <div className="mt-3 md:mt-4 text-gray-900 group-hover:text-[#7921CF] transition-colors">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-clash font-medium text-sm lg:text-base xl:text-lg">
                        {service.title}
                      </h3>
                      <div className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 flex items-center justify-center flex-shrink-0">
                        <svg 
                          width="12" 
                          height="12" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5"
                        >
                          <path 
                            d="M7 17L17 7M17 7H7M17 7V17" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-gray-900 group-hover:bg-[#7921CF] transition-colors mt-2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
