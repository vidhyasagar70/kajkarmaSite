"use client";

import Image from "next/image";

interface SolutionCard {
    title: string;
    description: string;
    image: string;
}

const solutions: SolutionCard[] = [
    {
        title: "Ecommerce Application Development",
        description: "Custom ecommerce platforms, Shopify integrations, headless commerce systems, subscription models, and B2B portals designed for conversion and operational efficiency.",
        image: "/kajkarmaimages/ecomsolution.jpg ",
    },
    {
        title: "Marketplace Platform Development",
        description: "Multi-vendor marketplaces with seller dashboards, commission engines, role-based access control, and secure payment architecture built for expansion.",
        image: "/kajkarmaimages/marketplaceplatformdevelopment.jpg",
    },
    {
        title: "Jewelry & Diamond Industry Applications",
        description: "Inventory search systems, real-time pricing tools, B2B trading portals, RapNet integrations, and buyer management systems tailored for the diamond and jewelry industry.",
        image: "/kajkarmaimages/jimages.jpg",
    },
    {
        title: "Custom Business & SaaS Applications",
        description: "CRM systems, internal dashboards, booking platforms, automation tools, and scalable SaaS products designed for operational growth.",
        image: "/kajkarmaimages/cwd.jpg",
    },
];

export function AppSolutionsGrid() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Heading */}
                <div className="mb-10 sm:mb-12 md:mb-16">
                    <h2
                        className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31] mb-6"
                    >
                        Application Solutions Built for <span className="text-[#9220E1]">Real Business Growth</span>
                    </h2>
                    <p
                        className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70 max-w-[800px]"
                    >
                        We build high-performance web applications tailored to your industry, growth stage, and operational requirements. Every solution is engineered with scalable architecture and SEO-ready infrastructure.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-6 group"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-[16/9] rounded-[0px] overflow-hidden bg-[#F8F7FC]">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-3">
                                <h3
                                    className="font-clash font-medium text-[24px] sm:text-[28px] md:text-[32px] leading-tight text-[#0A0E31]"
                                >
                                    {solution.title}
                                </h3>
                                <p
                                    className="font-geist font-light text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/80"
                                >
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
