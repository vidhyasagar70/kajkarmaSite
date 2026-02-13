"use client";

import { useEffect, useState } from "react";

export function AIAutomationHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA]">
      {/* Background Image */}
      <div className="relative w-full" style={{ aspectRatio: '1440 / 550' }}>
        <img
          src="/robott.svg"
          alt="AI Robot Background"
          className="absolute inset-0 w-full h-full object-cover object-right"
          style={{ objectFit: 'cover', objectPosition: 'right' }}
        />
        
        {/* Content Overlay */}
        <div 
          className="absolute inset-0 z-10 flex items-center"
          style={{ padding: '0 5vw' }}
        >
          <div style={{ maxWidth: '45vw' }}>
            {/* Heading */}
            <h1
              className="font-clash transition-all duration-700 ease-out"
              style={{
                fontSize: '4.4vw',
                lineHeight: '1.06',
                fontWeight: 500,
                color: '#0A0E31',
                marginBottom: '1.5vw',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              Still Doing Repetitive<br />
              Work <span style={{ color: '#7C3AED' }}>Manually?</span>
            </h1>

            {/* Description */}
            <p
              className="transition-all duration-700 ease-out"
              style={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 300,
                fontSize: '1.6vw',
                lineHeight: '1.25',
                color: '#0A0E31CC',
                marginBottom: '2vw',
                maxWidth: '45vw',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '150ms',
              }}
            >
              Replace manual bottlenecks with automated AI agents. A<br />
              complete solution for businesses ready to optimize efficiency.
            </p>

            {/* Buttons */}
            <div 
              className="flex items-center transition-all duration-700 ease-out"
              style={{ 
                gap: '1.5vw',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '300ms',
              }}
            >
              {/* Primary Button */}
              <a
                href="/contact"
                className="inline-flex items-center text-white font-medium hover:opacity-90 transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
                  padding: '1vw 2vw',
                  borderRadius: '2vw',
                  fontSize: '1.1vw',
                  gap: '0.5vw',
                }}
              >
                Get Your Free Audit
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ width: '1.2vw', height: '1.2vw' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>

              {/* Secondary Button */}
              <a
                href="#roi"
                className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity"
                style={{
                  color: '#0A0E31',
                  fontSize: '1.1vw',
                  textDecoration: 'underline',
                  textUnderlineOffset: '0.3vw',
                }}
              >
                Calculate ROI
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
