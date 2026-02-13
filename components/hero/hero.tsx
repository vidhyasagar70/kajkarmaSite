'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] xl:h-[700px] overflow-hidden font-sans">
      {/* Background Image with Person */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br ">

          <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          className="object-cover object-center "
          priority
          quality={100}
        />

      
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 h-full flex items-center">
          <div className="max-w-xl lg:max-w-2xl w-full">
            {/* Left Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {/* Main Heading and Subheading */}
              <div>
                <h1 className="text-white font-clash font-medium text-[24px] leading-[1.2] sm:text-[32px] md:text-[42px] lg:text-[52px] xl:text-[60px] tracking-[0]">
                  Searching For Reliable White Label Partner?
                </h1>

                <p className="text-white/90 font-sans font-normal text-[12px] leading-[1.5] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] tracking-[0] mt-2 md:mt-3 lg:mt-4 max-w-lg">
                  Deliver high-quality digital solutions under your own brand while we handle everything behind the scenes.
                </p>
              </div>

              {/* Why Us Section */}
              <div className="w-full max-w-lg border border-dashed border-white/30 rounded-[12px] md:rounded-[16px] lg:rounded-[20px] p-2.5 sm:p-3 lg:p-4 bg-white/5 backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
                  <div className="flex items-center gap-2 bg-transparent text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full shrink-0">
                    <span className="font-medium text-[11px] sm:text-xs lg:text-sm">Why Us?</span>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
                      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 lg:gap-x-6 gap-y-2 w-full">
                    {[
                      "Easy Scaling",
                      "Brand Ready",
                      "Smart Automation",
                      "Fully Managed"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-[#8B5CF6] flex items-center justify-center shrink-0">
                          <svg width="8" height="8" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3">
                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-[10px] sm:text-[11px] lg:text-xs whitespace-nowrap">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Bar */}
              <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center bg-[#2A1B54]/90 backdrop-blur-md rounded-xl sm:rounded-full px-2 py-2 border border-white/10 w-full sm:w-auto">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-2 border-b sm:border-b-0 sm:border-r border-white/10">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0A66C2] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white sm:w-3.5 sm:h-3.5">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="text-white text-[10px] sm:text-[11px] font-medium">Kajkarma</span>
                </div>

                <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-2 border-b sm:border-b-0 sm:border-r border-white/10">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white sm:w-3.5 sm:h-3.5">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.297.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <span className="text-white text-[10px] sm:text-[11px] font-medium">8461452466</span>
                </div>

                <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#8B5CF6] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white sm:w-3.5 sm:h-3.5">
                      <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.85C8.77382 17.2436 6.72159 15.1913 5.115 12.775C3.42576 10.1633 2.37424 7.20755 2.04 4.13C2.01473 3.85257 2.04791 3.57313 2.13708 3.30926C2.22626 3.0454 2.36942 2.80315 2.55768 2.5979C2.74594 2.39266 2.9751 2.22904 3.23028 2.11746C3.48547 2.00589 3.76104 1.94884 4.04 1.95H7.04C7.54556 1.94597 8.03378 2.13531 8.40693 2.48003C8.78007 2.82474 8.99596 3.2989 9.012 3.809C9.027 4.7708 9.264 5.7148 9.712 6.59C9.84931 6.86249 9.87878 7.17293 9.79632 7.46603C9.71387 7.75913 9.524 8.01633 9.26 8.19L7.99 9.46C9.40879 11.9567 11.4983 14.0462 13.995 15.465L15.265 14.195C15.4387 14.026 15.6959 13.8361 15.989 13.7537C16.2821 13.6712 16.5925 13.7007 16.865 13.838C17.7402 14.286 18.6842 14.523 19.646 14.538C20.1571 14.5543 20.6322 14.7711 20.9772 15.1451C21.3221 15.5191 21.5113 16.0084 21.505 16.515" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-white text-[10px] sm:text-[11px] font-medium">8461452466</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
