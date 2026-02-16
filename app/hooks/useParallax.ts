'use client';

import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface ParallaxOptions {
  speed?: number; // 0.3 = slow (background), 1.0 = normal, 1.2 = fast (foreground)
  direction?: 'vertical' | 'horizontal';
}

interface ParallaxResult {
  y?: MotionValue<string>;
  x?: MotionValue<string>;
}

/**
 * Hook for creating parallax scroll effects
 * @param ref - Element reference to track
 * @param options - Parallax configuration
 * @returns Transform values for parallax effect
 */
export function useParallax(
  ref: RefObject<HTMLElement>,
  options: ParallaxOptions = {}
): ParallaxResult {
  const { speed = 0.5, direction = 'vertical' } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  if (direction === 'vertical') {
    // Calculate parallax movement
    // Speed < 1.0 = slower than scroll (background)
    // Speed > 1.0 = faster than scroll (foreground)
    const range = 100 * (1 - speed);
    const y = useTransform(scrollYProgress, [0, 1], [`${-range / 2}%`, `${range / 2}%`]);

    return { y };
  } else {
    const range = 50 * (1 - speed);
    const x = useTransform(scrollYProgress, [0, 1], [`${-range / 2}%`, `${range / 2}%`]);

    return { x };
  }
}
