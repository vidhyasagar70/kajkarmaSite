"use client";

import Image from "next/image";

export function PlainBannerHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA]">
      {/* Background Image */}
      <div className="relative w-full" style={{ aspectRatio: '1440 / 550' }}>
        <Image
          src="/banner/newbanner.jpeg"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
