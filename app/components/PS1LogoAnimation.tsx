'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface PS1LogoAnimationProps {
  onComplete: () => void;
}

export function PS1LogoAnimation({ onComplete }: PS1LogoAnimationProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [phase, setPhase] = useState<'black' | 'assemble' | 'glow' | 'text' | 'hold' | 'fadeout'>('black');
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Play audio
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.8;
      audioRef.current.play().catch(() => {});
    }

    // Phase timing
    timers.push(setTimeout(() => setPhase('assemble'), 500));
    timers.push(setTimeout(() => setPhase('glow'), 2800));
    timers.push(setTimeout(() => setPhase('text'), 3500));
    timers.push(setTimeout(() => setPhase('hold'), 5000));
    timers.push(setTimeout(() => {
      setPhase('fadeout');
      if (audioRef.current) {
        const audio = audioRef.current;
        let vol = audio.volume;
        const fadeOut = setInterval(() => {
          vol = Math.max(vol - 0.1, 0);
          audio.volume = vol;
          if (vol <= 0) {
            clearInterval(fadeOut);
            audio.pause();
          }
        }, 80);
      }
    }, 6500));
    timers.push(setTimeout(() => onCompleteRef.current(), 7500));

    return () => timers.forEach(clearTimeout);
  }, []);

  const showPieces = phase !== 'black';
  const showGlow = phase === 'glow' || phase === 'text' || phase === 'hold' || phase === 'fadeout';
  const showText = phase === 'text' || phase === 'hold' || phase === 'fadeout';
  const isFading = phase === 'fadeout';

  return (
    <div className={`fixed inset-0 z-[100] bg-brand-black flex items-center justify-center transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <audio ref={audioRef} src="/ps1-boot.mp3" preload="auto" />

      <div className="relative flex flex-col items-center">
        {/* Logo symbol - 3 pieces */}
        <svg
          viewBox="0 0 547.87 294.33"
          className="w-[200px] sm:w-[300px] lg:w-[400px] h-auto"
          fill="none"
        >
          {/* Center O - scales up from center */}
          <motion.path
            d="M274.57,294.33c-81.15,0-147.17-45.68-147.17-147.16S193.42,0,274.57,0s147.16,45.67,147.16,147.17-66.02,147.16-147.16,147.16ZM274.57,82.81c-35.49,0-64.35,19.97-64.35,64.35s28.87,64.35,64.35,64.35,64.35-19.97,64.35-64.35-28.87-64.35-64.35-64.35Z"
            fill="white"
            initial={{ scale: 0, opacity: 0 }}
            animate={showPieces ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ transformOrigin: '274px 147px', filter: showGlow ? 'drop-shadow(0 0 20px rgba(255,255,255,0.5))' : 'none' }}
          />

          {/* Left C - slides from left */}
          <motion.path
            d="M147.16,294.33C66.02,294.33,0,248.66,0,147.17S66.02,0,147.16,0v82.81c-35.48,0-70.08,19.97-70.08,64.35s34.6,64.35,70.08,64.35v82.81Z"
            fill="white"
            initial={{ x: -400, opacity: 0 }}
            animate={showPieces ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ filter: showGlow ? 'drop-shadow(0 0 20px rgba(255,255,255,0.5))' : 'none' }}
          />

          {/* Right reversed C - slides from right */}
          <motion.path
            d="M400.7,294.33v-82.81c35.49,0,70.08-19.97,70.08-64.35s-34.6-64.35-70.08-64.35V0c81.15,0,147.17,45.67,147.17,147.17s-66.02,147.16-147.17,147.16Z"
            fill="white"
            initial={{ x: 400, opacity: 0 }}
            animate={showPieces ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ filter: showGlow ? 'drop-shadow(0 0 20px rgba(255,255,255,0.5))' : 'none' }}
          />

          {/* Glow sweep */}
          {showGlow && (
            <motion.rect
              x={0}
              y={0}
              width={548}
              height={295}
              fill="url(#glowSweep)"
              initial={{ x: -600 }}
              animate={{ x: 600 }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
              style={{ mixBlendMode: 'overlay' }}
            />
          )}

          <defs>
            <linearGradient id="glowSweep" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="white" stopOpacity="0" />
              <stop offset="0.3" stopColor="white" stopOpacity="0.5" />
              <stop offset="0.5" stopColor="white" stopOpacity="0.7" />
              <stop offset="0.7" stopColor="white" stopOpacity="0.5" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* "stimuli" text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={showText ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.2em] mt-8"
        >
          stimuli
        </motion.p>
      </div>
    </div>
  );
}
