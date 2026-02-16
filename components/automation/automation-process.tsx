"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
    {
        number: "01.",
        title: "Process Audit & Strategy",
        description:
            "We assess workflows, identify gaps, and define automation opportunities.",
    },
    {
        number: "02.",
        title: "Workflow Design & Architecture",
        description:
            "Structured automation systems aligned with your tools and business model.",
    },
    {
        number: "03.",
        title: "Implementation & Integration",
        description:
            "Integration with n8n, Zapier, CRM systems, APIs, and AI tools.",
    },
    {
        number: "04.",
        title: "Testing & Scaling",
        description:
            "Performance validation, monitoring setup, and continuous optimization.",
    },
];


const getResponsivePositions = () => ({
    circles: [
        { top: "20%", left: "7%" },
        { top: "39%", left: "32%" },
        { top: "27%", left: "61%" },
        { top: "-24%", left: "86%" },
    ],
    textOffsets: [
        { top: "clamp(100px, 12vw, 160px)", left: "0" },
        { top: "clamp(-220px, -23vw, -320px)", left: "clamp(0px, 0.3vw, 3px)" },
        { top: "clamp(100px, 12vw, 160px)", left: "0" },
        { top: "clamp(100px, 12vw, 160px)", left: "0" },
    ],
});

export function AutomationProcess() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    /* -------------------------
       Mobile Detection
    -------------------------- */
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    /* -------------------------
       Scroll Animation Logic
    -------------------------- */
    useEffect(() => {
        let rafId: number;

        const handleScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                if (!containerRef.current) return;

                const container = containerRef.current;
                const windowHeight = window.innerHeight;
                const containerOffsetTop = container.offsetTop;
                const scrollY = window.scrollY || window.pageYOffset;

                const scrollIntoContainer = scrollY - containerOffsetTop;
                const scrollableDistance = container.offsetHeight - windowHeight;

                if (scrollableDistance <= 0) return;

                const progress = Math.max(
                    0,
                    Math.min(1, scrollIntoContainer / scrollableDistance)
                );

                const newVisibleSteps: number[] = [];

                if (progress >= 0.05) newVisibleSteps.push(0);
                if (progress >= 0.30) newVisibleSteps.push(1);
                if (progress >= 0.55) newVisibleSteps.push(2);
                if (progress >= 0.80) newVisibleSteps.push(3);

                setVisibleSteps(newVisibleSteps);
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    const positions = getResponsivePositions();

    /* -------------------------
       MOBILE LAYOUT
    -------------------------- */
    if (isMobile) {
        return (
            <section className="w-full bg-[#FBF9FE] py-12 px-4">
                <h2 className="font-clash font-medium text-[32px] leading-[1] text-[#0A0E31] mb-10">
                    Product <span className="text-[#9220E1]">Approach</span>
                </h2>

                <div className="flex flex-col gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-4 items-start">
                            <div className="relative w-[60px] h-[60px] flex-shrink-0">
                                <Image
                                    src="/Ellipse 65.svg"
                                    alt="Step circle"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex-1">
                                <p className="font-clash font-medium text-[28px] leading-[1] text-[#0A0E31]">
                                    {step.number}
                                </p>

                                <h3 className="font-clash font-medium text-[24px] leading-[1.1] text-[#9220E1] mb-1">
                                    {step.title}
                                </h3>

                                <p className="font-geist font-normal text-[14px] leading-[1.3] text-[#0A0E31]/80">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    /* -------------------------
       DESKTOP LAYOUT
    -------------------------- */
    return (
        <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
            <div className="sticky top-0 h-[800px] w-full bg-[#FBF9FE] overflow-hidden">
                <div className="h-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[72px]">
                    {/* Heading */}
                    <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1] lg:leading-[54px] text-[#0A0E31] mb-20">
                        Product <span className="text-[#9220E1]">Approach</span>
                    </h2>

                    {/* Roadmap Container */}
                    <div className="relative w-full mx-auto h-[65vh] max-h-[700px]">
                        {/* Path SVG */}
                        <div
                            className="absolute h-full"
                            style={{
                                width: "calc(100% + 10vw)",
                                left: "-5vw",
                                top: "-11vw",
                            }}
                        >
                            <Image
                                src="/Group 6356198.svg"
                                alt="Product Approach Path"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>

                        {/* Steps */}
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`absolute flex flex-col items-start transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${visibleSteps.includes(index)
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-75"
                                    }`}
                                style={{
                                    top: positions.circles[index].top,
                                    left: positions.circles[index].left,
                                }}
                            >
                                {/* Circle */}
                                <div
                                    className={`relative transition-all duration-[1400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${visibleSteps.includes(index)
                                            ? "scale-100 opacity-100"
                                            : "scale-0 opacity-0"
                                        }`}
                                    style={{
                                        width: "clamp(80px, 10vw, 152px)",
                                        height: "clamp(80px, 10vw, 150px)",
                                    }}
                                >
                                    <Image
                                        src="/Ellipse 65.svg"
                                        alt="Step circle"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Text */}
                                <div
                                    className={`absolute transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${visibleSteps.includes(index)
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-8"
                                        }`}
                                    style={{
                                        width: "clamp(150px, 16vw, 224px)",
                                        top: positions.textOffsets[index].top,
                                        left: positions.textOffsets[index].left,
                                        transitionDelay: visibleSteps.includes(index)
                                            ? "400ms"
                                            : "0ms",
                                    }}
                                >
                                    <p
                                        className="font-clash font-medium text-[#0A0E31] mb-1"
                                        style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
                                    >
                                        {step.number}
                                    </p>

                                    <h3
                                        className="font-clash font-medium text-[#9220E1] mb-2"
                                        style={{ fontSize: "clamp(10px, 2.3vw, 40px)" }}
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        className="font-geist font-normal text-[#0A0E31]/80"
                                        style={{ fontSize: "clamp(12px, 1.2vw, 18px)" }}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
