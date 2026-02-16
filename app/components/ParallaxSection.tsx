'use client';

import { ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // 0.3 = slow (background), 1.0 = normal, 1.2 = fast (foreground)
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

/**
 * Reusable parallax container component
 * Wraps content with scroll-driven parallax effect
 * Automatically disables for reduced motion preference
 */
export function ParallaxSection({
  children,
  speed = 0.5,
  className = '',
  direction = 'vertical',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { y, x } = useParallax(ref, { speed, direction });

  // Disable parallax if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={direction === 'vertical' ? { y } : { x }}>
        {children}
      </motion.div>
    </div>
  );
}
