'use client';

import Image from 'next/image';

interface Logo {
  src: string;
  alt: string;
  w: string;
}

interface ClientLogosTickerProps {
  logos: Logo[];
}

export function ClientLogosTicker({ logos }: ClientLogosTickerProps) {
  return (
    <section className="relative py-16 px-8 lg:px-12 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <p className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-10 text-center">
          Clients we&apos;ve worked with
        </p>

        <div className="relative overflow-hidden">
          <div className="flex w-max" style={{ animation: 'scroll 40s linear infinite' }}>
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 mx-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={50}
                  className={`${logo.w} h-auto object-contain opacity-40 hover:opacity-100 transition-opacity`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
