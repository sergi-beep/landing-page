'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const solutions = [
  {
    name: "RevCode",
    tagline: "Data tool for post-Clay GTM teams.",
    status: "Live",
    statusColor: "text-emerald-400 bg-emerald-500/10",
    href: "https://revcode.app",
  },
  {
    name: "Slaygent",
    tagline: "Claygent's power. Without Clay's baggage.",
    status: "Live",
    statusColor: "text-emerald-400 bg-emerald-500/10",
    href: "https://slaygent.co/",
  },
  {
    name: "Outfound",
    tagline: "Cold email infrastructure for agencies.",
    status: "Live",
    statusColor: "text-emerald-400 bg-emerald-500/10",
    href: "https://www.outfound.io/",
  },
  {
    name: "Spintaxer",
    tagline: "Cold email spintax that actually works.",
    status: "Archive",
    statusColor: "text-white/40 bg-white/[0.06]",
    href: "/solutions/spintaxer",
  },
  {
    name: "Data SaaS",
    tagline: "B2B data aggregation from scratch.",
    status: "Archive",
    statusColor: "text-white/40 bg-white/[0.06]",
    href: "/solutions/data-saas",
  },
];

export function SolutionsDropdown({ active = false }: { active?: boolean }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <Link
        href="/solutions"
        className={`text-[15px] font-medium transition-colors flex items-center gap-1 ${
          active ? 'text-white' : 'text-white/50 hover:text-white'
        }`}
      >
        Solutions
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {/* Dropdown */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 transition-all duration-200 ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
      >
        <div className="w-[280px] rounded-xl border border-realm-orchid/[0.08] bg-realm-night/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
          {solutions.map((solution) => {
            const inner = (
              <div className="flex items-start justify-between gap-3 px-4 py-3 hover:bg-white/[0.04] transition-colors">
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-white tracking-tight">{solution.name}</p>
                  <p className="text-[11px] text-white/30 mt-0.5 leading-snug">{solution.tagline}</p>
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${solution.statusColor}`}>
                  {solution.status}
                </span>
              </div>
            );

            if (solution.href.startsWith('http')) {
              return (
                <a key={solution.name} href={solution.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              );
            }
            return (
              <Link key={solution.name} href={solution.href}>
                {inner}
              </Link>
            );
          })}

          <div className="border-t border-realm-orchid/[0.06]">
            <Link
              href="/solutions"
              className="flex items-center justify-between px-4 py-2.5 hover:bg-white/[0.04] transition-colors"
            >
              <span className="text-[12px] text-white/40 font-medium">View all solutions</span>
              <svg className="w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
