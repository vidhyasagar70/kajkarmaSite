"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface VisionCard {
    id: number;
    tag: string;
    title: string;
    description: string;
    image: string;
    linkText: string;
    linkHref: string;
}

const visionCards: VisionCard[] = [
    {
        id: 1,
        tag: "Ecommerce Solutions",
        title: "High-Converting Ecommerce Platforms",
        description: "Custom ecommerce applications and Shopify stores engineered for speed, conversion, and seamless user experience. We build revenue-driven systems — not just online stores.",
        image: "/page11.png",
        linkText: "Build Your Ecommerce",
        linkHref: "#",
    },
    {
        id: 2,
        tag: "Marketplace Development",
        title: "Marketplace & Multi-Vendor Development",
        description: "Launch powerful marketplace platforms with vendor dashboards, commission systems, and scalable backend infrastructure — built to support rapid expansion and secure transactions.",
        image: "/page7.png",
        linkText: "Launch Your Marketplace",
        linkHref: "#",
    },
    {
        id: 3,
        tag: "Product Engineering",
        title: "Build Scalable Digital Products",
        description: "We design and develop custom web applications, SaaS platforms, and enterprise systems built for long-term scalability. From architecture planning to deployment, we engineer digital products that perform under growth.",
        image: "/page10.png",
        linkText: "Explore Product Development",
        linkHref: "#",
    },
    {
        id: 4,
        tag: "Growth Strategy",
        title: "AI-Driven SEO & Market Research",
        description: "We combine technical SEO, competitor intelligence, and AI-powered keyword research to ensure every website and application is built for organic growth from day one.",
        image: "/page14.png",
        linkText: "Unlock Growth Strategy",
        linkHref: "#",
    },
];

export function VisionSection() {
    return (
        <section className="w-full bg-white relative py-20 lg:py-32">
            {/* Header Section */}
            <div className="container mx-auto px-4 md:px-8 lg:px-20 mb-8 text-center">
                <div className="flex flex-col items-center gap-6">
                    <div
                        className="px-4 py-1.5 rounded-full inline-block mt-0"
                        style={{ backgroundColor: "#EBE5FF" }}
                    >
                        <span className="text-sm font-medium" style={{ color: "#6366F1" }}>
                            Build and launch
                        </span>
                    </div>
                    <h2
                        className="font-clash font-medium text-black max-w-[900px]"
                        style={{
                            fontSize: "clamp(36px, 6vw, 84px)",
                            lineHeight: "1.05",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        From idea to online, quicker and slicker
                    </h2>
                </div>
            </div>

            {/* Stacking Cards Container - 100% Width */}
            <div className="relative w-full">
                <div className="w-full">
                    {visionCards.map((card, index) => (
                        <VisionStackingCard
                            key={card.id}
                            card={card}
                            index={index}
                            totalCards={visionCards.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface VisionStackingCardProps {
    card: VisionCard;
    index: number;
    totalCards: number;
}

function VisionStackingCard({ card, index, totalCards }: VisionStackingCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isCardHovered, setIsCardHovered] = useState(false);
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

            const cardCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            const isNearCenter = Math.abs(cardCenter - viewportCenter) < windowHeight * 0.4;
            setIsInView(isNearCenter);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [index, isMobile]);

    return (
        <div
            ref={cardRef}
            className="sticky mb-0"
            style={{
                top: "40px",
                zIndex: index + 1,
                paddingBottom: "0px",
            }}
        >
            <div
                className="w-full bg-white transition-all duration-500"
                onMouseEnter={() => !isMobile && setIsCardHovered(true)}
                onMouseLeave={() => !isMobile && setIsCardHovered(false)}
            >
                <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 p-4 lg:p-12 min-h-[600px]">
                    {/* Left Column - Image Square */}
                    <div
                        className="w-full lg:w-[400px] xl:w-[450px] aspect-square relative flex-shrink-0 transition-transform duration-700 ease-out"
                        style={{
                            background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                            transform: (isMobile ? isInView : isCardHovered) ? "scale(1.02)" : "scale(1)",
                        }}
                    >
                        <div className="absolute inset-0 p-8 lg:p-12 flex items-center justify-center">
                            <div
                                className="relative w-full h-full transition-all duration-700"
                                style={{
                                    transform: (isMobile ? isInView : isCardHovered) ? "translateY(-10px)" : "translateY(0)",
                                }}
                            >
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div
                            className="px-4 py-1 rounded-full bg-[#f3f4f6] w-fit"
                        >
                            <span className="text-sm font-medium text-gray-500 font-geist">
                                {card.tag}
                            </span>
                        </div>

                        <h3
                            className="font-clash font-medium text-black leading-tight"
                            style={{
                                fontSize: "clamp(32px, 4.5vw, 72px)",
                            }}
                        >
                            {card.title}
                        </h3>

                        <p
                            className="font-geist font-light text-gray-600 max-w-[600px]"
                            style={{
                                fontSize: "clamp(16px, 1.3vw, 20px)",
                                lineHeight: "1.5",
                            }}
                        >
                            {card.description}
                        </p>

                        <div className="mt-8">
                            <a
                                href={card.linkHref}
                                className="group flex items-center justify-between w-full text-black font-medium font-geist relative py-4"
                                style={{ fontSize: "22px" }}
                            >
                                <span className="transition-all">
                                    {card.linkText}
                                </span>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="transform transition-transform group-hover:translate-x-2"
                                >
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {/* Bottom Line reaching 100% width of the container */}
                                <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
