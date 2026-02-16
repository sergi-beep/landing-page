'use client';

import { useScroll, useVelocity, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ScrollPhysics {
  scrollY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
  scrollVelocity: MotionValue<number>;
  scrollDirection: 'up' | 'down' | 'idle';
}

/**
 * Hook for tracking scroll position, velocity, and direction
 * Used for creating velocity-reactive animations
 */
export function useScrollPhysics(): ScrollPhysics {
  const { scrollY, scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'idle'>('idle');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      if (latest > lastScrollY + 10) {
        setScrollDirection('down');
      } else if (latest < lastScrollY - 10) {
        setScrollDirection('up');
      } else if (Math.abs(latest - lastScrollY) < 5) {
        setScrollDirection('idle');
      }
      setLastScrollY(latest);
    });

    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  return {
    scrollY,
    scrollYProgress,
    scrollVelocity,
    scrollDirection,
  };
}
