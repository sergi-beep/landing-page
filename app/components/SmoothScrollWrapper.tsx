'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

/**
 * Wrapper component that provides smooth scroll physics to the entire page
 * Uses Lenis for momentum-based scrolling
 * Respects prefers-reduced-motion by disabling smooth scroll
 */
export function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Don't initialize smooth scroll if user prefers reduced motion
    if (prefersReducedMotion) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Scroll animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
