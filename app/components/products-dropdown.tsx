'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const products = [
  {
    name: "Outfound",
    tagline: "Find your next client before they find you.",
    status: "Coming Soon",
    statusColor: "text-brand-blue bg-brand-blue/10",
    href: "/products/outfound",
  },
  {
    name: "Spintaxer",
    tagline: "Cold email personalization at scale.",
    status: "Live",
    statusColor: "text-emerald-400 bg-emerald-500/10",
    href: "/products/spintaxer",
  },
  {
    name: "Data SaaS",
    tagline: "We built Clay before Clay was cool.",
    status: "Archive",
    statusColor: "text-white/40 bg-white/[0.06]",
    href: "/products/data-saas",
  },
];

export function ProductsDropdown({ active = false }: { active?: boolean }) {
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
        href="/products"
        className={`text-[15px] font-medium transition-colors flex items-center gap-1 ${
          active ? 'text-white' : 'text-white/50 hover:text-white'
        }`}
      >
        Products
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
        <div className="w-[280px] rounded-xl border border-white/[0.08] bg-[#0c1425]/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
          {products.map((product) => {
            const inner = (
              <div className="flex items-start justify-between gap-3 px-4 py-3 hover:bg-white/[0.04] transition-colors">
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-white tracking-tight">{product.name}</p>
                  <p className="text-[11px] text-white/30 mt-0.5 leading-snug">{product.tagline}</p>
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${product.statusColor}`}>
                  {product.status}
                </span>
              </div>
            );

            return (
              <Link key={product.name} href={product.href}>
                {inner}
              </Link>
            );
          })}

          <div className="border-t border-white/[0.06]">
            <Link
              href="/products"
              className="flex items-center justify-between px-4 py-2.5 hover:bg-white/[0.04] transition-colors"
            >
              <span className="text-[12px] text-white/40 font-medium">View all products</span>
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
