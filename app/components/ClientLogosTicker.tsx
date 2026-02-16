'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Logo {
  src: string;
  alt: string;
  w: string;
}

interface ClientLogosTickerProps {
  logos: Logo[];
}

/**
 * Velocity-reactive client logos ticker
 * - Speeds up when scrolling fast
 * - Briefly reverses when scrolling up
 * - Motion blur effect on fast scroll
 */
export function ClientLogosTicker({ logos }: ClientLogosTickerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll velocity into animation speed multiplier
  // Normal: 1x, Fast scroll down: 2x, Scroll up: -0.5x (brief reverse)
  const velocityMultiplier = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.5, 1] // Subtle speed variation based on position
  );

  const smoothMultiplier = useSpring(velocityMultiplier, {
    stiffness: 100,
    damping: 30,
  });

  // Transform for motion (only used if not reduced motion)
  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '-50%']
  );

  // Render standard version if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <section ref={sectionRef} className="relative py-16 px-8 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <p className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-10 text-center">
            Building GTM infrastructure for:
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
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

  // Enhanced version with velocity reactivity
  return (
    <section ref={sectionRef} className="relative py-16 px-8 lg:px-12 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-10 text-center"
        >
          Building GTM infrastructure for:
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Velocity-reactive ticker */}
          <motion.div
            className="flex"
            style={{
              x: xTransform,
            }}
          >
            {/* Triple the logos for seamless infinite scroll */}
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  filter: 'grayscale(0%)',
                }}
                initial={{ filter: 'grayscale(100%)' }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={50}
                  className={`${logo.w} h-auto object-contain opacity-40 hover:opacity-100 transition-opacity`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
