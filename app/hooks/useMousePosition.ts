'use client';

import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

/**
 * Hook to track mouse/cursor position
 * Used for magnetic cursor effects and 3D card tilts
 * Returns { x: 0, y: 0 } on mobile/touch devices
 */
export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    // Only track on desktop (not touch devices)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
}
