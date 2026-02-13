"use client";

import { useEffect, useState, useRef } from "react";

// Faulty tube light flicker pattern
const FLICKER_PATTERN = [
  { opacity: 0.3, duration: 60 },
  { opacity: 0.8, duration: 40 },
  { opacity: 0.2, duration: 80 },
  { opacity: 1, duration: 50 },
  { opacity: 0, duration: 120 },
  { opacity: 0.6, duration: 30 },
  { opacity: 1, duration: 45 },
  { opacity: 0.4, duration: 70 },
  { opacity: 0, duration: 90 },
  { opacity: 0.7, duration: 35 },
  { opacity: 1, duration: 55 },
  { opacity: 0.3, duration: 60 },
  { opacity: 0, duration: 150 },
  { opacity: 0.5, duration: 40 },
  { opacity: 1, duration: 60 },
  { opacity: 0.8, duration: 30 },
  { opacity: 1, duration: 100 },
  { opacity: 0.9, duration: 80 },
  { opacity: 1, duration: 0 },
];

export function LampBackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [flickerIndex, setFlickerIndex] = useState(-1);
  const [currentOpacity, setCurrentOpacity] = useState(0);
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const [hasFlickered, setHasFlickered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const imageUrls = [
    "https://www.qubetics.com/images/bg-anim1.svg",
    "https://www.qubetics.com/images/bg-anim2.svg",
    "/ai.png",
  ];

  // Check for mobile and tablet
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Preload all images on mount
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imageUrls.length;
    const imageElements: HTMLImageElement[] = [];

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        requestAnimationFrame(() => {
          setImagesLoaded(true);
        });
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded;
      img.src = url;
      imageElements.push(img);
    });

    return () => {
      imageElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  // Intersection Observer
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5) {
            setIsFullyVisible(true);
          }
        });
      },
      {
        threshold: [0.5, 0.75, 1.0],
        rootMargin: "0px",
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Start flicker animation
  useEffect(() => {
    if (!imagesLoaded || !isFullyVisible || hasFlickered) return;

    const flickerStartTimer = setTimeout(() => {
      setFlickerIndex(0);
      setHasFlickered(true);
    }, 200);

    return () => clearTimeout(flickerStartTimer);
  }, [imagesLoaded, isFullyVisible, hasFlickered]);

  // Flicker effect
  useEffect(() => {
    if (flickerIndex < 0 || flickerIndex >= FLICKER_PATTERN.length) return;

    const step = FLICKER_PATTERN[flickerIndex];
    setCurrentOpacity(step.opacity);

    if (step.duration > 0) {
      const randomDelay = step.duration + (Math.random() * 30 - 15);
      const flickerTimer = setTimeout(() => {
        setFlickerIndex(prev => prev + 1);
      }, randomDelay);
      return () => clearTimeout(flickerTimer);
    }
  }, [flickerIndex]);

  const getThirdImageOpacity = () => {
    if (!isFullyVisible && !hasFlickered) return 0.15;
    if (flickerIndex < 0) return 0;
    if (flickerIndex >= FLICKER_PATTERN.length) return 1;
    return currentOpacity;
  };

  // Get margin for lamp (image 3)
  const getMarginTop = () => {
    if (isMobile) return '12%';
    if (isTablet) return '0';
    return '-8%';
  };

  // Get margin for effects (images 1 & 2)
  const getEffectMarginTop = () => {
    if (isMobile) return '12%';
    if (isTablet) return '0';
    return '-0.5%'; // Change this value for desktop effect position
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-[280px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-0" style={{ maxHeight: '32vw', overflow: 'hidden' }}>
      {/* Base layer - this image determines the container height */}
      <img
        src={imageUrls[2]}
        alt=""
        className="w-full h-auto object-contain invisible"
        style={{ marginTop: getMarginTop() }}
      />
      
      {/* Layer 1 - Effect base */}
      <div
        className="absolute inset-0"
        style={{
          opacity: imagesLoaded ? 1 : 0,
        }}
      >
        <img
          src={imageUrls[0]}
          alt=""
          className="w-full h-auto object-contain"
          style={{ marginTop: getEffectMarginTop() }}
        />
      </div>

      {/* Layer 2 - Effect glow */}
      <div
        className="absolute inset-0"
        style={{
          opacity: imagesLoaded ? 0.35 : 0,
        }}
      >
        <img
          src={imageUrls[1]}
          alt=""
          className="w-full h-auto object-contain"
          style={{ marginTop: getEffectMarginTop() }}
        />
      </div>

      {/* Layer 3 - Lamp with flicker */}
      <div
        className="absolute inset-0"
        style={{
          opacity: getThirdImageOpacity(),
          transition: !hasFlickered ? 'opacity 0.3s ease' : undefined,
        }}
      >
        <img
          src={imageUrls[2]}
          alt=""
          className="w-full h-auto object-contain"
          style={{ marginTop: getMarginTop() }}
        />
      </div>
    </div>
  );
}

