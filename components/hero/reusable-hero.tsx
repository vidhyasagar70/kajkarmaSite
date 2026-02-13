"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroButton {
  text: string;
  variant: "primary" | "outline";
  onClick?: () => void;
  href?: string;
}

interface TitleStyles {
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
  letterSpacing?: string;
  maxWidth?: string;
}

interface DescriptionStyles {
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
  maxWidth?: string;
}

interface ReusableHeroProps {
  title: string | React.ReactNode;
  description: string;
  backgroundImage: string;
  backgroundAlt?: string;
  buttons?: HeroButton[];
  titleStyles?: TitleStyles;
  descriptionStyles?: DescriptionStyles;
  marginLeft?: string;
}

export function ReusableHero({
  title,
  description,
  backgroundImage,
  backgroundAlt = "Hero Background",
  buttons = [],
  titleStyles = {},
  descriptionStyles = {},
  marginLeft = "61px",
}: ReusableHeroProps) {
  const defaultTitleStyles: TitleStyles = {
    fontSize: "154px",
    lineHeight: "0.85",
    fontWeight: 500,
    letterSpacing: "0%",
    maxWidth: "1094px",
  };

  const defaultDescriptionStyles: DescriptionStyles = {
    fontSize: "24px",
    lineHeight: "100%",
    fontWeight: 400,
    maxWidth: "1082px",
  };

  const mergedTitleStyles = { ...defaultTitleStyles, ...titleStyles };
  const mergedDescriptionStyles = { ...defaultDescriptionStyles, ...descriptionStyles };
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const getResponsiveFontSize = (desktopSize: string) => {
    const size = parseInt(desktopSize);
    if (isMobile) {
      return `${Math.max(38, size * 0.32)}px`;
    }
    return desktopSize;
  };

  const getResponsiveLineHeight = (desktopLineHeight: string) => {
    if (isMobile) {
      return "1";
    }
    return desktopLineHeight;
  };

  return (
    <section className="w-full">
      <div className="relative mx-auto overflow-hidden w-full">
        {/* Background Image */}
        <div className="relative w-full min-h-[520px] sm:min-h-[480px] md:min-h-0 md:aspect-[1440/620]">
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Content Overlay */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-center"
          style={{ 
            paddingLeft: isMobile ? "24px" : `calc(${marginLeft} + 16px)`,
            paddingRight: isMobile ? "24px" : "16px"
          }}
        >
          {/* Heading */}
          <h1
            className="font-clash"
            style={{
              fontFamily: "'Clash Grotesk Variable', sans-serif",
              fontWeight: mergedTitleStyles.fontWeight,
              fontSize: getResponsiveFontSize(mergedTitleStyles.fontSize || "154px"),
              lineHeight: getResponsiveLineHeight(mergedTitleStyles.lineHeight || "0.85"),
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              maxWidth: isMobile ? "100%" : mergedTitleStyles.maxWidth,
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className="font-geist"
            style={{
              marginTop: isMobile ? "20px" : "32px",
              fontWeight: mergedDescriptionStyles.fontWeight,
              fontSize: isMobile ? "15px" : mergedDescriptionStyles.fontSize,
              lineHeight: isMobile ? "1.5" : mergedDescriptionStyles.lineHeight,
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: isMobile ? "100%" : mergedDescriptionStyles.maxWidth,
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
            }}
          >
            {description}
          </p>

          {/* Buttons */}
          {buttons.length > 0 && (
            <div
              className="flex flex-row gap-3 sm:gap-4"
              style={{
                marginTop: isMobile ? "28px" : "40px",
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
              }}
            >
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.onClick}
                  className="font-geist flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.97]"
                  style={{
                    padding: isMobile ? "12px 18px" : "14px 24px",
                    borderRadius: "100px",
                    backgroundColor:
                      button.variant === "primary"
                        ? "#9220E1"
                        : "#EBEEFF",
                    color:
                      button.variant === "primary"
                        ? "#FFFFFF"
                        : "#9220E1",
                    fontWeight: 500,
                    fontSize: isMobile ? "14px" : "16px",
                    border: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {button.text}
                  {button.variant === "primary" && (
                    <svg
                      width={isMobile ? "14" : "16"}
                      height={isMobile ? "14" : "16"}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
