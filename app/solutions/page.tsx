'use client';

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SolutionsDropdown } from "../components/solutions-dropdown";

const solutions = [
  {
    name: "Outfound",
    tagline: "Find your next client before they find you.",
    description: "Outbound prospecting infrastructure built for B2B lead generation agencies. The system that does the finding so your team can do the closing.",
    status: "Coming Soon",
    statusColor: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
    link: "/solutions/outfound",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    name: "Spintaxer",
    tagline: "Cold email personalization at scale.",
    description: "The tool that started it all. Generate spintax variations for cold email campaigns, making every message unique while sending thousands. Used by hundreds of agencies worldwide.",
    status: "Live",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    link: "/solutions/spintaxer",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Data SaaS",
    tagline: "We built Clay before Clay was cool.",
    description: "Outreach-ready lists from real business directories. Scrape, find contacts, enrich with personalization data, all in one workflow. Built for B2B lead gen agencies.",
    status: "Coming Soon",
    statusColor: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
    link: "/solutions/data-saas",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

export default function SolutionsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-brand-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-glass border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/logo-full.svg"
                  alt="Stimuli Digital"
                  width={160}
                  height={42}
                  className="h-10 w-auto cursor-pointer brightness-0 invert"
                  priority
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-10">
              <Link href="/#services" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Services</Link>
              <Link href="/case-studies" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Video Case Studies</Link>
              <Link href="/about" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Why Us</Link>
              <SolutionsDropdown />
              <Link href="/#pricing" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Pricing</Link>
              <Link href="/#faq" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Q&amp;A</Link>
              <Link href="/history" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">Our Purpose</Link>
            </div>

            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-brand-black rounded-full font-medium text-[15px] hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              Challenge Us
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative pt-40 pb-20 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/[0.06] rounded-full blur-[120px]"></div>

        <div className="max-w-[900px] mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
            <span className="text-sm text-white/60 font-medium tracking-wide uppercase">Solutions</span>
          </div>

          <h1 className="text-5xl lg:text-[4.5rem] font-extrabold tracking-[-0.03em] leading-[0.95] mb-8 text-white">
            Tools we built.<br />
            <span className="text-brand-blue">Now we&apos;re sharing them.</span>
          </h1>

          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto font-light tracking-tight">
            Everything we build for clients eventually becomes a solution. These are the systems born from real campaign pain, now available to everyone.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOLUTIONS GRID
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.name}
                className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-brand-blue/30 hover:bg-white/[0.04] transition-all duration-500 reveal-section flex flex-col"
              >
                {/* Status badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-brand-blue bg-brand-blue/10`}>
                    {solution.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${solution.statusColor}`}>
                    {solution.status}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                  {solution.name}
                </h3>

                {/* Tagline */}
                <p className="text-white/60 font-semibold text-[15px] tracking-tight mb-4">
                  {solution.tagline}
                </p>

                {/* Description */}
                <p className="text-white/30 text-[14px] leading-relaxed mb-8 flex-1">
                  {solution.description}
                </p>

                {/* CTA */}
                {solution.link ? (
                  solution.link.startsWith("/") ? (
                    <Link
                      href={solution.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-black rounded-full font-semibold text-sm hover:bg-brand-blue hover:text-white transition-all duration-300 w-fit"
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <a
                      href={solution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-black rounded-full font-semibold text-sm hover:bg-brand-blue hover:text-white transition-all duration-300 w-fit"
                    >
                      Try it
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )
                ) : (
                  <div className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.08] text-white/30 rounded-full font-semibold text-sm w-fit">
                    Coming soon
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <section className="relative py-32 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-blue/[0.05] rounded-full blur-[120px]"></div>

        <div className="max-w-3xl mx-auto text-center relative reveal-section">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] mb-8 text-white">
            Need something custom?<br />
            <span className="text-white/30">That&apos;s what we do best.</span>
          </h2>
          <p className="text-xl text-white/40 mb-14 max-w-2xl mx-auto leading-relaxed font-light tracking-tight">
            Every solution started as a client problem. If you don&apos;t see what you need, we&apos;ll build it.
          </p>

          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-black rounded-full font-bold text-[17px] tracking-tight overflow-hidden transition-all duration-500 hover:bg-brand-blue hover:text-white hover:shadow-[0_0_60px_rgba(0,102,255,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Challenge Us
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <p className="text-white/30 text-[15px] mt-10 font-medium tracking-tight">
            30-minute call · No pitch deck · No bullshit
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 lg:px-12 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <Image
                src="/images/logo-full.svg"
                alt="Stimuli Digital"
                width={160}
                height={42}
                className="h-11 w-auto brightness-0 invert"
              />
            </div>
            <div className="text-sm text-center md:text-right">
              <p className="text-white/40 font-medium tracking-tight">&copy; 2025 Stimuli Digital. All rights reserved.</p>
              <p className="mt-2 text-white/25 tracking-tight">
                Fractional CTO for B2B sales & marketing teams and agencies
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
