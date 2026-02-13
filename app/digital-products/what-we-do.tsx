"use client";

import Image from "next/image";

interface ServiceCard {
  image: string;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    image: "/what.png",
    title: "Website Development",
    description: "Responsive, SEO-friendly websites optimized for speed, performance, and conversions across all devices.",
  },
  {
    image: "/Rectangle 5243 (3).svg",
    title: "Web Application Development",
    description: "Custom web applications designed around your processes, users, and data requirements.",
  },
  {
    image: "/do.svg",
    title: "Mobile App Development",
    description: "High-performance Android and iOS applications built for usability, scalability, and reliability.",
  },
];

export function WhatWeDo() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 
            className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1] lg:leading-[54px] tracking-[0%] text-[#0A0E31] mb-4"
          >
            What We <span className="text-[#7C3AED]">Do</span>
          </h2>
          <p 
            className="font-geist font-normal text-[14px] leading-[22px] tracking-[0%] text-[#191151]/80 max-w-[524px] mx-auto"
          >
            Custom development tailored to your goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-15">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col gap-[40px] w-full max-w-[405px] mx-auto lg:mx-0"
            >
              {/* Image */}
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[460px] rounded-[24px] overflow-hidden bg-[#F8F7FC]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-[20px]">
                <h3 
                  className="font-clash font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1] lg:leading-[54px] tracking-[0%] text-[#0A0E31]"
                >
                  {service.title}
                </h3>
                <p 
                  className="font-geist font-light text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] lg:leading-[32px] tracking-[0%] text-[#0A0E31]/80"
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
