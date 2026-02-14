"use client";

import Image from "next/image";

export function AppFeatureSection() {
    return (
        <section className="w-full bg-[#f8f7fc] py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                    {/* Left Column - Image */}
                    <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
                        <Image
                            src="/page10.png" // Placeholder, I can update this to a generated image if needed
                            alt="Ecommerce & Marketplace Engineering"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Column - Text */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
                        <h2 className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-[#0A0E31]">
                            High-Performance Ecommerce & <span className="text-[#9220E1]">Marketplace Engineering</span>
                        </h2>

                        <div className="flex flex-col gap-6">
                            <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                                Our ecommerce and marketplace applications are built with performance-first architecture. We focus on conversion rate optimization, fast load speeds, secure payment integration, and seamless user flows. Every system is designed to handle growth, traffic spikes, and long-term operational complexity.
                            </p>

                            <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-relaxed text-[#0A0E31]/70">
                                We integrate with payment gateways, inventory systems, ERP software, CRM tools, and third-party APIs to ensure your application becomes a complete business ecosystem.
                            </p>
                        </div>

                        {/* Optional Small Features List */}
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {["Payment Gateways", "Inventory Systems", "ERP Software", "CRM Tools"].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="size-2 rounded-full bg-[#9220E1]" />
                                    <span className="font-geist text-sm text-[#0A0E31]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
