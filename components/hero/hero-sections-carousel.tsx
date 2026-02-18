'use client';

import { useState, useEffect } from 'react';
import { PlainBannerHero } from './plain-banner-hero';
// import { WhiteLabelHero } from './white-label-hero';
import { AIAutomationHero } from './ai-automation-hero';
import { WhatsAppAutomationHero } from './whatsapp-automation-hero';
import { EvaluationBanner } from '../banner/evaluation-banner';

const heroSlides = [
  { id: 0, component: PlainBannerHero },
  // { id: 1, component: WhiteLabelHero },
  { id: 2, component: AIAutomationHero },
  { id: 3, component: WhatsAppAutomationHero },
];

export function HeroSectionsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Preload images using link tags for faster loading
    const preloadImages = ['/banner/newbanner.jpeg', '/heero.svg', '/robott.svg', '/whatsappp.svg'];
    
    preloadImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <EvaluationBanner currentSlide={currentSlide} />
      <div className="relative w-full">
        {/* Carousel Slides */}
        <div className="relative w-full overflow-hidden">
          {heroSlides.map((slide, index) => {
            const SlideComponent = slide.component;
            return (
              <div
                key={slide.id}
                className={`w-full transition-opacity duration-700 ${
                  currentSlide === index ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <SlideComponent />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
