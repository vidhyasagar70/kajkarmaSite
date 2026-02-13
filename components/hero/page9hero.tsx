'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full mt-4 sm:mt-6 md:mt-8 lg:mt-0 overflow-hidden font-sans">
      {/* Background Image */}
      <div className="relative w-full">
        <Image
          src="/page9 hero.png"
          alt="Hero Background"
          width={1920}
          height={800}
          className="w-full h-auto object-contain"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}
