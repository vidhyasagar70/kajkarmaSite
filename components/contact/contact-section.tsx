"use client";

import { useState } from "react";
import { ContactPopup } from "./contact-popup";

export function ContactSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="w-full py-8 sm:py-10 md:py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2
              className="text-[#110B3B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[1.2] mb-2 sm:mb-3 md:mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              className="text-[#110B3B]/70 max-w-[500px] text-[10px] sm:text-xs md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 lg:mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
              }}
            >
              Have a project in mind? Let's discuss how we can help bring your
              vision to life.
            </p>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-full text-white font-medium text-xs sm:text-sm md:text-base hover:opacity-90 transition-opacity"
              style={{
                background: "linear-gradient(135deg, #6450F0 0%, #39208F 100%)",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
