'use client';

import { ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SpringCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number; // Default: 1.02
  magneticStrength?: number; // 0-1, how much card follows cursor. Default: 0
  tiltStrength?: number; // 0-20, how much 3D tilt on hover. Default: 0
}

/**
 * Reusable card component with spring physics
 * Supports:
 * - Spring-based hover scale
 * - Magnetic cursor effect (card follows mouse)
 * - 3D tilt effect based on mouse position
 */
export function SpringCard({
  children,
  className = '',
  hoverScale = 1.02,
  magneticStrength = 0,
  tiltStrength = 0,
}: SpringCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // Spring animation config
  const spring = {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  };

  // Calculate transforms
  const scale = isHovered && !prefersReducedMotion ? hoverScale : 1;
  const magneticX = magneticStrength > 0 && !prefersReducedMotion ? mousePosition.x * magneticStrength * 10 : 0;
  const magneticY = magneticStrength > 0 && !prefersReducedMotion ? mousePosition.y * magneticStrength * 10 : 0;
  const rotateX = tiltStrength > 0 && !prefersReducedMotion ? -mousePosition.y * tiltStrength : 0;
  const rotateY = tiltStrength > 0 && !prefersReducedMotion ? mousePosition.x * tiltStrength : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale,
        x: magneticX,
        y: magneticY,
        rotateX,
        rotateY,
      }}
      transition={spring}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
