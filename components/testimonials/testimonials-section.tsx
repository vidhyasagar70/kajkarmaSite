"use client";

import { motion } from "motion/react";

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



export function TestimonialsSection() {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 lg:py-20 relative overflow-hidden bg-white mt-0">
      <div className="container mx-auto px-0 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 md:mb-10 lg:mb-14 px-3">
          <div className="mb-2 sm:mb-3 md:mb-4">
            <div className="px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-full inline-block bg-gray-100 border border-gray-200">
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-black">Testimonials</span>
            </div>
          </div>

          <h2 className="font-clash font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] 2xl:text-[54px] leading-[1.2] md:leading-[1.1] tracking-[0%] text-center mb-2 sm:mb-3 md:mb-4">
            <span className="text-black">Trusted By Business Who</span>
            <br />
            <span className="text-black">Believe in </span>
            <span className="text-[#9220E1]">Innovation</span>
          </h2>

          <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm lg:text-base">
            We collaborate with growth-focused brands — here's what they think.
          </p>
        </div>

        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-4 sm:gap-5 md:gap-6 flex-none pr-4 sm:pr-5 md:pr-6"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div
                className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#F9FAFB] border border-gray-100 w-[280px] sm:w-[320px] md:w-[350px] flex-none"
                key={i}
              >
                <div className="text-black text-xs sm:text-sm leading-relaxed">"{testimonial.text}"</div>
                <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                  <img
                    width={40}
                    height={40}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="flex flex-col text-left">
                    <div className="font-medium tracking-tight leading-5 text-black text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="leading-5 text-gray-500 tracking-tight text-xs sm:text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
