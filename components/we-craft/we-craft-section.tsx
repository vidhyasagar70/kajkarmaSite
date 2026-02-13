"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
  services: string[];
  buttonText: string;
}

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    title: "AI\nAutomation",
    description:
      "We create intelligent AI solutions and automated workflows that simplify processes, enhance efficiency, and drive business growth.",
    image: "/ai.png",
    services: ["Whatsapp Automation", "Custom AI Solutions", "AI Workflows"],
    buttonText: "Automate your Workflows",
  },
  {
    id: 2,
    title: "Web\nDevelopment",
    description:
      "We build stunning, high-performance websites and web applications that deliver exceptional user experiences and drive conversions.",
    image: "/webuild.png",
    services: ["Custom Websites", "E-commerce Solutions", "Web Applications"],
    buttonText: "Build your Website",
  },
  {
    id: 3,
    title: "Brand\nStrategy",
    description:
      "We craft compelling brand identities and strategies that resonate with your audience and set you apart from the competition.",
    image: "/hero.png",
    services: ["Brand Identity", "Visual Design", "Brand Guidelines"],
    buttonText: "Transform your Brand",
  },
  {
    id: 4,
    title: "Digital\nMarketing",
    description:
      "We drive growth through data-driven marketing strategies, SEO optimization, and targeted campaigns that deliver measurable results.",
    image: "/we.png",
    services: ["SEO Optimization", "Social Media Marketing", "Content Strategy"],
    buttonText: "Grow your Business",
  },
];

export function WeCraftSection() {
  return (
    <section className="w-full bg-[#0C081E] relative">
      {/* Header Section */}
      <div className="bg-[#0C081E] pt-12 md:pt-16 lg:pt-24 pb-6 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-20 xl:px-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-16">
            <h2
              className="font-clash font-medium text-white"
              style={{
                fontSize: "clamp(28px, 5vw, 56px)",
                lineHeight: "1.1",
                letterSpacing: "0%",
                maxWidth: "574px",
              }}
            >
              We Craft Services That Turn Brands
            </h2>
            <p
              className="font-geist font-light text-white"
              style={{
                fontSize: "clamp(16px, 2vw, 24px)",
                lineHeight: "1.5",
                letterSpacing: "0%",
                maxWidth: "581px",
              }}
            >
              From strategy to execution, we provide complete digital and tech
              solutions—helping businesses streamline operations, build powerful
              brands, and achieve sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Stacking Cards Container */}
      <div className="relative px-4 md:px-8 lg:px-20 xl:px-32 pb-12 lg:pb-16">
        <div className="max-w-[1400px] mx-auto">
          {serviceCards.map((card, index) => (
            <StackingCard
              key={card.id}
              card={card}
              index={index}
              totalCards={serviceCards.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StackingCardProps {
  card: ServiceCard;
  index: number;
  totalCards: number;
}

function StackingCard({ card, index, totalCards }: StackingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // For mobile: check if card is in center of viewport
      if (isMobile) {
        const cardCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const isNearCenter = Math.abs(cardCenter - viewportCenter) < windowHeight * 0.3;
        setIsInView(isNearCenter);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [index, isMobile]);

  // On mobile, use scroll-based activation; on desktop, use hover
  const isActive = isMobile ? isInView : isCardHovered;
  const showBorder = isMobile ? isInView : isImageHovered;

  return (
    <div
      ref={cardRef}
      className="sticky mb-0"
      style={{
        top: "40px",
        zIndex: index + 1,
        paddingBottom: "120px",
      }}
    >
      <div
        className="rounded-xl lg:rounded-2xl overflow-visible cursor-pointer relative"
        style={{
          backgroundColor: "#0C081E",
          transition: "transform 0.4s ease-out, opacity 0.4s ease-out",
        }}
        onMouseEnter={() => !isMobile && setIsCardHovered(true)}
        onMouseLeave={() => !isMobile && setIsCardHovered(false)}
      >
        {/* Hover gradient tint */}
        <div
          className="absolute inset-0 rounded-xl lg:rounded-2xl pointer-events-none transition-opacity duration-500 ease-in-out"
          style={{
            opacity: isActive ? 1 : 0,
            background: "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(255, 255, 255, 0.02) 75%, rgba(255, 255, 255, 0.04) 100%)",
          }}
        />
        
        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden p-5 md:p-6 relative z-10 gap-6">
          {/* Title */}
          <h3
            className="font-clash font-medium whitespace-pre-line transition-colors duration-300"
            style={{
              fontSize: "36px",
              lineHeight: "1.15",
              color: isActive ? "#a78bfa" : "#ffffff",
            }}
          >
            {card.title}
          </h3>

          {/* Image */}
          <div 
            className="self-center relative"
            onTouchStart={() => setIsImageHovered(true)}
            onTouchEnd={() => setIsImageHovered(false)}
          >
            {/* L-shaped border - flush with image edge */}
            <div 
              className="absolute pointer-events-none"
              style={{
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                transform: isActive ? "rotate(0deg)" : "rotate(15deg)",
                transition: "transform 0.3s ease-out",
                zIndex: 10,
              }}
            >
              <div
                className="absolute top-0 left-0 h-[4px] bg-[#E85A3C]"
                style={{
                  width: showBorder ? "100%" : "0%",
                  transition: "width 0.3s ease-out",
                }}
              />
              <div
                className="absolute top-0 left-0 w-[4px] bg-[#E85A3C]"
                style={{
                  height: showBorder ? "100%" : "0%",
                  transition: "height 0.3s ease-out",
                }}
              />
            </div>
            
            <div
              className="relative overflow-hidden"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "0px",
                transform: isActive ? "rotate(0deg)" : "rotate(15deg)",
                transition: "transform 0.3s ease-out",
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                style={{
                  transform: isActive ? "rotate(0deg) scale(1)" : "rotate(-15deg) scale(1.2)",
                  transition: "transform 0.3s ease-out",
                }}
              />
            </div>
          </div>

          {/* Description */}
          <p
            className="font-geist font-light text-white/80"
            style={{
              fontSize: "14px",
              lineHeight: "24px",
            }}
          >
            {card.description}
          </p>

          {/* Services */}
          <div className="flex flex-col gap-1">
            {card.services.map((service, idx) => (
              <span
                key={idx}
                className="font-geist font-medium text-white"
                style={{ fontSize: "16px", lineHeight: "28px" }}
              >
                {service}
              </span>
            ))}
          </div>

          {/* Button */}
          <button
            className="relative flex items-center justify-center font-geist font-medium border border-white/30 overflow-hidden self-start"
            style={{
              height: "40px",
              borderRadius: "1000px",
              paddingLeft: "20px",
              paddingRight: "20px",
              fontSize: "13px",
              backgroundColor: isButtonHovered ? "#E85A3C" : "transparent",
              transition: "background-color 0.3s ease-out",
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            <div className="relative overflow-hidden" style={{ height: "18px" }}>
              <div
                className="flex flex-col"
                style={{
                  transform: isButtonHovered ? "translateY(-50%)" : "translateY(0%)",
                  transition: "transform 0.4s ease-out",
                }}
              >
                <span className="flex items-center gap-2 text-white whitespace-nowrap" style={{ height: "18px" }}>
                  {card.buttonText} →
                </span>
                <span className="flex items-center gap-2 text-white whitespace-nowrap" style={{ height: "18px" }}>
                  {card.buttonText} →
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row items-start justify-between gap-10 p-12 lg:p-14 relative z-10">
          {/* Left Column */}
          <div className="flex flex-col w-[320px] flex-shrink-0">
            <h3
              className="font-clash font-medium whitespace-pre-line transition-colors duration-300"
              style={{
                fontSize: "68px",
                lineHeight: "1.15",
                color: isCardHovered ? "#a78bfa" : "#ffffff",
                marginBottom: "44px",
              }}
            >
              {card.title}
            </h3>
            <p
              className="font-geist font-light text-white/80"
              style={{
                fontSize: "17px",
                lineHeight: "28px",
                maxWidth: "300px",
              }}
            >
              {card.description}
            </p>
          </div>

          {/* Center - Image */}
          <div 
            className="flex-shrink-0 self-center relative"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            {/* L-shaped border - flush with image edge */}
            <div 
              className="absolute pointer-events-none"
              style={{
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                transform: isCardHovered ? "rotate(0deg)" : "rotate(15deg)",
                transition: "transform 0.3s ease-out",
                zIndex: 10,
              }}
            >
              <div
                className="absolute top-0 left-0 h-[4px] bg-[#E85A3C]"
                style={{
                  width: isImageHovered ? "100%" : "0%",
                  transition: "width 0.3s ease-out",
                }}
              />
              <div
                className="absolute top-0 left-0 w-[4px] bg-[#E85A3C]"
                style={{
                  height: isImageHovered ? "100%" : "0%",
                  transition: "height 0.3s ease-out",
                }}
              />
            </div>
            
            <div
              className="relative overflow-hidden"
              style={{
                width: "380px",
                height: "380px",
                borderRadius: "0px",
                transform: isCardHovered ? "rotate(0deg)" : "rotate(15deg)",
                transition: "transform 0.3s ease-out",
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                style={{
                  transform: isCardHovered ? "rotate(0deg) scale(1)" : "rotate(-15deg) scale(1.2)",
                  transition: "transform 0.3s ease-out",
                }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-[260px] flex-shrink-0">
            <div className="flex flex-col gap-2 mb-10">
              {card.services.map((service, idx) => (
                <span
                  key={idx}
                  className="font-geist font-medium text-white"
                  style={{ fontSize: "19px", lineHeight: "34px" }}
                >
                  {service}
                </span>
              ))}
            </div>

            <button
              className="relative flex items-center justify-center font-geist font-medium border border-white/30 overflow-hidden"
              style={{
                height: "48px",
                borderRadius: "1000px",
                paddingLeft: "28px",
                paddingRight: "28px",
                fontSize: "15px",
                backgroundColor: isButtonHovered ? "#E85A3C" : "transparent",
                transition: "background-color 0.3s ease-out",
                minWidth: "240px",
              }}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              <div className="relative overflow-hidden" style={{ height: "20px" }}>
                <div
                  className="flex flex-col"
                  style={{
                    transform: isButtonHovered ? "translateY(-50%)" : "translateY(0%)",
                    transition: "transform 0.4s ease-out",
                  }}
                >
                  <span className="flex items-center gap-2 text-white whitespace-nowrap" style={{ height: "20px" }}>
                    {card.buttonText} →
                  </span>
                  <span className="flex items-center gap-2 text-white whitespace-nowrap" style={{ height: "20px" }}>
                    {card.buttonText} →
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
