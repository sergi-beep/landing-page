'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TimelineCard {
  title: string;
  description: string;
}

interface TimelineMilestone {
  label: string;
  week: string;
  quickWin: TimelineCard;
  foundation: TimelineCard;
  scale: number; // 1 = smallest, 3 = largest
}

const milestones: TimelineMilestone[] = [
  {
    label: 'Week 1',
    week: 'Week 1',
    scale: 1,
    quickWin: {
      title: 'Stop the Bleeding',
      description: 'Fixed. Caught. Dead.',
    },
    foundation: {
      title: 'Map the Territory',
      description: 'Every system. Every gap.',
    },
  },
  {
    label: 'Week 2-3',
    week: 'Week 2-3',
    scale: 1.2,
    quickWin: {
      title: 'One Database Live',
      description: 'Every lead, one place.',
    },
    foundation: {
      title: 'Build the Backbone',
      description: "APIs built. Won't break.",
    },
  },
  {
    label: 'Month 1-2',
    week: 'Month 1-2',
    scale: 1.5,
    quickWin: {
      title: 'AI Wakes Up',
      description: 'Intelligence surfaces. Risk flagged.',
    },
    foundation: {
      title: 'Production Ready',
      description: 'Pipelines automated. System scales.',
    },
  },
  {
    label: 'Month 3-4',
    week: 'Month 3-4',
    scale: 1.8,
    quickWin: {
      title: 'Multiple Agencies Running',
      description: 'Same system. Scales clean.',
    },
    foundation: {
      title: 'Zero Manual Work',
      description: 'Automated end-to-end.',
    },
  },
];

function Card({ card, scale }: { card: TimelineCard; scale: number }) {
  const baseSize = 16; // Base font size
  const titleSize = Math.round(baseSize * scale);
  const padding = Math.round(24 * scale);

  return (
    <div
      className={`relative border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300`}
      style={{
        padding: `${padding}px`,
        borderRadius: `${Math.round(12 * scale)}px`,
      }}
    >
      <h3
        className="font-bold text-white mb-2"
        style={{ fontSize: `${titleSize}px` }}
      >
        {card.title}
      </h3>
      <p
        className="text-white/60"
        style={{ fontSize: `${Math.round(14 * scale)}px` }}
      >
        {card.description}
      </p>
    </div>
  );
}

function Milestone({ milestone }: { milestone: TimelineMilestone }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      {/* Week Label */}
      <div className="text-center mb-8">
        <span
          className="inline-block px-4 py-1 bg-brand-blue/10 text-brand-blue font-semibold"
          style={{
            fontSize: `${Math.round(12 * milestone.scale)}px`,
            borderRadius: `${Math.round(6 * milestone.scale)}px`,
          }}
        >
          {milestone.week}
        </span>
      </div>

      {/* Two Track Grid */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* LEFT TRACK: Quick Wins */}
        <div className="text-right">
          <div className="inline-block text-left max-w-sm ml-auto">
            <div className="text-xs font-semibold text-brand-blue/60 uppercase tracking-wider mb-2">
              Quick Wins
            </div>
            <Card card={milestone.quickWin} scale={milestone.scale} />
          </div>
        </div>

        {/* RIGHT TRACK: Foundation */}
        <div className="text-left">
          <div className="inline-block text-left max-w-sm">
            <div className="text-xs font-semibold text-brand-blue/60 uppercase tracking-wider mb-2">
              Foundation
            </div>
            <Card card={milestone.foundation} scale={milestone.scale} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Convergence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-32 mb-16"
    >
      {/* Visual Convergence */}
      <div className="relative max-w-4xl mx-auto">
        {/* Two tracks merging */}
        <svg
          className="w-full h-32 mb-8"
          viewBox="0 0 800 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left track (Quick Wins) converging */}
          <motion.path
            d="M 50 20 Q 200 20, 400 60"
            stroke="url(#gradient1)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/* Right track (Foundation) converging */}
          <motion.path
            d="M 750 20 Q 600 20, 400 60"
            stroke="url(#gradient2)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/* Merged single track going forward */}
          <motion.path
            d="M 400 60 L 400 100"
            stroke="#0066FF"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Convergence point */}
          <motion.circle
            cx="400"
            cy="60"
            r="6"
            fill="#0066FF"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.2, delay: 0.5 }}
          />

          <defs>
            <linearGradient id="gradient1" x1="50" y1="0" x2="400" y2="0">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="750" y1="0" x2="400" y2="0">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>

        {/* The Message */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            One Platform. Running Everything.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mb-8"
          >
            Quick wins merged into foundation. One system runs your data, insights, and actions. Built to scale with you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue/10 border border-brand-blue/30 rounded-lg"
          >
            <span className="text-brand-blue font-semibold">Month 5+</span>
            <span className="text-white/40">→</span>
            <span className="text-white font-semibold">Built to scale. Runs itself.</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TimelineSection() {
  return (
    <section className="relative py-32 bg-brand-black text-white">
      {/* Single, subtle background element */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/[0.02] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Two Tracks. Running <span className="text-gradient">Simultaneously.</span>
          </h2>
          <p className="text-xl text-white/60 mb-3">
            Results now. Foundation later.
          </p>
          <p className="text-brand-blue font-semibold text-lg">
            You see results before the first invoice.
          </p>
        </div>

        {/* Milestones */}
        <div className="space-y-16">
          {milestones.map((milestone) => (
            <Milestone key={milestone.label} milestone={milestone} />
          ))}
        </div>

        {/* THE CONVERGENCE - This is the moment */}
        <Convergence />
      </div>
    </section>
  );
}
