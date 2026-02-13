"use client";

import Image from "next/image";

const productLinks = [
  { label: "Overview", href: "#" },
  { label: "Comparison", href: "#" },
  { label: "Outreach", href: "#" },
  { label: "Pricing", href: "#" },
];

const resourceLinks = [
  { label: "Helpdesk", href: "#" },
  { label: "FAQ's", href: "#" },
  { label: "Live Chat", href: "#" },
  { label: "Contact", href: "#" },
];

const otherLinks = [
  { label: "Partners", href: "#" },
  { label: "Affiliate Program $", href: "#" },
  { label: "Reviews", href: "#" },
];

export function FooterSection() {
  return (
    <footer
      className="w-full pt-8 sm:pt-10 md:pt-14 lg:pt-20 pb-4 sm:pb-6 md:pb-8"
      style={{ backgroundColor: "#130624" }}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div
          className="w-full max-w-[1240px] mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-14"
          style={{
            backgroundColor: "#F7F6FF",
            borderRadius: "16px",
            padding: "12px",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            <div className="flex-1 p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-center">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[72px] leading-[1.1] lg:leading-[1.05]"
                style={{
                  fontFamily: "Clash Grotesk, sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0%",
                }}
              >
                <span className="text-[#130624]">Start Your</span>
                <br />
                <span className="text-[#130624]">Success </span>
                <span className="text-[#7C3AED]">Journey</span>
              </h2>
              
              <p
                className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-gray-600 max-w-md text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg leading-[1.4]"
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0%",
                }}
              >
                Take the first step toward transformation — where clarity, strategy, and growth come together to shape your success.
              </p>
            </div>

            <div
              className="lg:w-[450px] p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded-lg sm:rounded-xl lg:rounded-2xl self-start"
              style={{ backgroundColor: "rgba(111, 92, 243, 0.12)" }}
            >
              <h3
                className="text-[#130624] mb-1.5 sm:mb-2 md:mb-3 text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[35px] leading-[1.1]"
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0%",
                }}
              >
                Contact Information
              </h3>
              
              <p
                className="text-gray-500 mb-3 sm:mb-4 md:mb-5 text-[10px] sm:text-xs md:text-[13px] leading-[1.5]"
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontWeight: 400,
                }}
              >
                Let's connect and explore how we can bring your ideas to life with the right strategy, creativity, and support.
              </p>

              {/* Contact Details */}
              <div className="space-y-2.5 sm:space-y-3">
                {/* Email */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[14px] sm:h-[14px]">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#130624" strokeWidth="2"/>
                      <path d="M22 7L12 13L2 7" stroke="#130624" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span
                    className="text-[#130624] text-xs sm:text-[13px]"
                    style={{
                      fontFamily: "Geist, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Email: support@diamondelite.com
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[14px] sm:h-[14px]">
                      <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.85C8.77382 17.2436 6.72159 15.1913 5.115 12.775C3.42576 10.1633 2.37424 7.20755 2.04 4.13C2.01473 3.85257 2.04791 3.57313 2.13708 3.30926C2.22626 3.0454 2.36942 2.80315 2.55768 2.5979C2.74594 2.39266 2.9751 2.22904 3.23028 2.11746C3.48547 2.00589 3.76104 1.94884 4.04 1.95H7.04C7.54556 1.94597 8.03378 2.13531 8.40693 2.48003C8.78007 2.82474 8.99596 3.2989 9.012 3.809C9.027 4.7708 9.264 5.7148 9.712 6.59C9.84931 6.86249 9.87878 7.17293 9.79632 7.46603C9.71387 7.75913 9.524 8.01633 9.26 8.19L7.99 9.46C9.40879 11.9567 11.4983 14.0462 13.995 15.465L15.265 14.195C15.4387 14.026 15.6959 13.8361 15.989 13.7537C16.2821 13.6712 16.5925 13.7007 16.865 13.838C17.7402 14.286 18.6842 14.523 19.646 14.538C20.1571 14.5543 20.6322 14.7711 20.9772 15.1451C21.3221 15.5191 21.5113 16.0084 21.505 16.515" stroke="#130624" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span
                    className="text-[#130624] text-xs sm:text-[13px]"
                    style={{
                      fontFamily: "Geist, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Phone: +1 234 567 890
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[14px] sm:h-[14px]">
                      <circle cx="12" cy="10" r="3" stroke="#130624" strokeWidth="2"/>
                      <path d="M12 2C7.58172 2 4 5.58172 4 10C4 14.4183 12 22 12 22C12 22 20 14.4183 20 10C20 5.58172 16.4183 2 12 2Z" stroke="#130624" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span
                    className="text-[#130624] text-xs sm:text-[13px]"
                    style={{
                      fontFamily: "Geist, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Address: 123 Elite Lane, Jewelry District, New York, NY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 px-2 sm:px-4 max-w-[1240px] mx-auto">
          {/* Logo and Description - Takes 2 columns */}
          <div className="col-span-2 lg:col-span-2">
            <Image
              src="/Logo-13 1 (1).svg"
              alt="Kajkarma"
              width={180}
              height={50}
              className="mb-3 sm:mb-4 w-32 sm:w-40 md:w-[180px]"
            />
            <p
              className="text-white/70 max-w-[280px] text-sm sm:text-base leading-[1.5] sm:leading-[26px]"
              style={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 400,
                letterSpacing: "0%",
              }}
            >
              Stay updated with industry insights, product updates, and exclusive tips.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4
              className="text-white/60 font-bold mb-2 text-base sm:text-lg md:text-xl"
              style={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 600,
              }}
            >
              Product
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm"
                    style={{
                      fontFamily: "Geist, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="text-white/60 font-bold mb-2 text-base sm:text-lg md:text-xl"
              style={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 600,
              }}
            >
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm"
                    style={{
                      fontFamily: "Geist, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div className="col-span-2 sm:col-span-1">
            <h4
              className="text-white/60 font-bold mb-2 text-base sm:text-lg md:text-xl"
              style={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 600,
              }}
            >
              Other
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm"
                    style={{
                      fontFamily: "Geist, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
