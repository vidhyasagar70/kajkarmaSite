"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    text: "Booked 17 additional sales calls for one of my Nurse staffing agency. My killer appointment setters started booking warmed up calls with decision makers.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Abhinab Gogoi",
    role: "Owner, PlacementSync",
  },
  {
    text: "LeadSwift is the only tool that allows unlimited outreach + unlimited Leads without additional costs. That sealed the deal for me.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Christopher Turban",
    role: "DE",
  },
  {
    text: "This results in massively better reply rates in cold email campaigns, as it taps into unsaturated leads.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Andrew Kopac",
    role: "Marketing Lead",
  },
  {
    text: "LeadSwift is the only tool that allows unlimited outreach + unlimited Leads without additional costs. That sealed the deal for me.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Lead Gen Jay",
    role: "Otter PR",
  },
  {
    text: "Booked 17 additional sales calls for one of my Nurse staffing agency. My killer appointment setters started booking warmed up calls with decision makers.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Abhinab Gogoi",
    role: "Owner, PlacementSync",
  },
  {
    text: "LeadSwift is the only tool that allows unlimited outreach + unlimited Leads without additional costs. That sealed the deal for me.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Christopher Turban",
    role: "DE",
  },
  {
    text: "Booked 17 additional sales calls for one of my Nurse staffing agency. My killer appointment setters started booking warmed up calls with decision makers.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Abhinab Gogoi",
    role: "Owner, PlacementSync",
  },
  {
    text: "LeadSwift is the only tool that allows unlimited outreach + unlimited Leads without additional costs. That sealed the deal for me.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Christopher Turban",
    role: "DE",
  },
  {
    text: "LeadSwift is the only tool that allows unlimited outreach + unlimited Leads without additional costs. That sealed the deal for me.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Lead Gen Jay",
    role: "Otter PR",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section
      className="w-full py-8 sm:py-10 md:py-14 lg:py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #1F0A3B 17.42%, #601A91 75.2%, #9220E1 113.76%)",
      }}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 md:mb-10 lg:mb-14">
          <div className="mb-2 sm:mb-3 md:mb-4">
            <div 
              className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-full inline-block"
              style={{
                border: '0.8px solid transparent',
                backgroundImage: 'linear-gradient(#1F0A3B, #1F0A3B), linear-gradient(45deg, #6C219F 24.46%, #9220E1 50.07%, #6C219F 75.67%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white">Social Proof</span>
            </div>
          </div>

          <h2 className="font-clash font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] 2xl:text-[54px] leading-[1.2] md:leading-[1.1] tracking-[0%] text-center mb-2 sm:mb-3 md:mb-4">
            <span className="text-white">Trusted By Business Who</span>
            <br />
            <span className="text-white">Believe in </span>
            <span className="text-[#9220E1]">Innovation</span>
          </h2>

          <p className="text-white/70 text-[10px] sm:text-xs md:text-sm lg:text-base">
            We collaborate with growth-focused brands — here's what they think.
          </p>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[350px] sm:max-h-[450px] md:max-h-[550px] lg:max-h-[650px] xl:max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
