"use client";

import React from "react";
import { motion } from "motion/react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 sm:gap-5 md:gap-6 pb-4 sm:pb-5 md:pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 max-w-[280px] sm:max-w-xs w-full"
                  key={i}
                >
                  <div className="text-white/90 text-xs sm:text-sm leading-relaxed">"{text}"</div>
                  <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-white/30"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-white text-sm sm:text-base">
                        {name}
                      </div>
                      <div className="leading-5 text-white/60 tracking-tight text-xs sm:text-sm">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
