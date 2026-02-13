'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { EvaluationBanner } from '../banner/evaluation-banner';
import { ArrowRight, Linkedin } from 'lucide-react';
import { HeroSectionsCarousel } from './hero-sections-carousel';

const bannerImages = [
  '/hero-image-2.jpeg',
  '/hero-image-1.jpeg',
  '/hero-image-3.jpeg',
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    
      
      <HeroSectionsCarousel />
    </>
  );
}
