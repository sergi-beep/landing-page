'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SolutionsDropdown } from "../components/solutions-dropdown";

const clientLogos = [
  { src: "/images/logos/clients/coldiq-large.svg", alt: "ColdIQ", w: "w-32" },
  { src: "/images/logos/clients/stack-optimize.png", alt: "Stack Optimize", w: "w-32" },
  { src: "/images/logos/clients/c17-large.avif", alt: "C17 Lab", w: "w-20" },
  { src: "/images/logos/clients/salesautomationsystems-large.png", alt: "Sales Automation Systems", w: "w-40" },
  { src: "/images/logos/clients/revenueboost.png", alt: "Revenue Boost", w: "w-28" },
  { src: "/images/logos/clients/hypergen.webp", alt: "Hypergen", w: "w-28" },
  { src: "/images/logos/clients/vangates-large.jpg", alt: "Vangates", w: "w-28" },
  { src: "/images/logos/clients/succession.png", alt: "Succession", w: "w-28" }
];

export default function AboutPage() {
  // Scroll reveal
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
              <Link href="/#services" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/#case-studies" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Client Success
              </Link>
              <Link href="/about" className="text-[15px] font-medium text-white transition-colors">
                About
              </Link>
              <Link href="/#faq" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                FAQs
              </Link>
              <SolutionsDropdown />
              <Link href="/history" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                Our History
              </Link>
            </div>

            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-brand-black rounded-full font-medium text-[15px] hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          OPERATING PHILOSOPHY — The Lemons (Dark)
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="max-w-[1000px] mx-auto relative reveal-section">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">How we think</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Our operating philosophy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500">
              <p className="text-6xl font-extrabold text-white/[0.06] mb-4 tracking-tighter">01</p>
              <p className="text-xl font-bold text-white tracking-tight mb-3">You give us lemons</p>
              <p className="text-white/40 leading-relaxed text-[15px]">
                Your systems are breaking. Tools don&apos;t talk to each other. Data lives in 11 different places. Nothing works the way it should.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500">
              <p className="text-6xl font-extrabold text-white/[0.06] mb-4 tracking-tighter">02</p>
              <p className="text-xl font-bold text-white tracking-tight mb-3">We make lemonade</p>
              <p className="text-white/40 leading-relaxed text-[15px]">
                Take only the data you already have. Create the correct data schema around it. Build a custom solution that actually fits your business.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500">
              <p className="text-6xl font-extrabold text-white/[0.06] mb-4 tracking-tighter">03</p>
              <p className="text-xl font-bold text-white tracking-tight mb-3">Put it in the fridge</p>
              <p className="text-white/40 leading-relaxed text-[15px]">
                Optimize. Harden. Make it production-grade. The kind of infrastructure that doesn&apos;t break at 2 AM when you&apos;re scaling a campaign.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-8 rounded-2xl border border-brand-blue/20 bg-brand-blue/[0.04] hover:border-brand-blue/30 transition-all duration-500">
              <p className="text-6xl font-extrabold text-brand-blue/10 mb-4 tracking-tighter">04</p>
              <p className="text-xl font-bold text-white tracking-tight mb-3">Serve it cold on a hot summer day</p>
              <p className="text-white/40 leading-relaxed text-[15px]">
                Deliver a system that just works, when you need it most. Like giving ice-cold lemonade to someone who&apos;s never tasted anything other than water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE FOUNDERS — (White)
      ═══════════════════════════════════════════ */}
      <section className="relative py-32 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto reveal-section">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">The leadership</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              The Dream Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Rezi */}
            <div className="group">
              <a
                href="https://www.linkedin.com/in/revaz-dzidziguri-4a02941b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[5/4] mb-8 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/50 group-hover:border-brand-blue/30 group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src="/images/team/Rezi.jpeg"
                    alt="Rezi Dzidziguri - Co-Founder & CTO"
                    fill
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300 shadow-lg">
                        <svg className="w-5 h-5 text-brand-black group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg tracking-tight">Rezi Dzidziguri</p>
                        <p className="text-white/70 text-sm font-medium">Co-Founder & CTO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="px-1">
                <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">The architect</p>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Former solution architect at TBC Bank, where he designed systems handling millions of transactions. Now he builds the same enterprise-grade infrastructure&nbsp;&mdash; but for agencies that need it to actually work at scale. Backend engineering, complex data pipelines, the stuff that doesn&apos;t break at 2 AM.
                </p>
              </div>
            </div>

            {/* Sergi */}
            <div className="group">
              <a
                href="https://www.linkedin.com/in/sergi-cheishvili-9b3936164/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[5/4] mb-8 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/50 group-hover:border-brand-blue/30 group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src="/images/team/sergi.jpeg"
                    alt="Sergi Cheishvili - Co-Founder & CBO"
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300 shadow-lg">
                        <svg className="w-5 h-5 text-brand-black group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg tracking-tight">Sergi Cheishvili</p>
                        <p className="text-white/70 text-sm font-medium">Co-Founder & CBO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="px-1">
                <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">The operator</p>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Ran his own cold email agency. Lived the pain&nbsp;&mdash; the broken Zapier flows at midnight, the spreadsheet chaos, the $4k/mo tool stack that did half of what it should. Turned that frustration into Stimuli. He knows exactly what&apos;s breaking in your ops because he&apos;s been there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ENGINEERING TEAM — (White, continues)
      ═══════════════════════════════════════════ */}
      <section className="relative pt-8 pb-32 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto relative reveal-section">
          <div className="text-center mb-6">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">The engineering team</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-gray-900">
              The people who build your systems
            </h2>
          </div>

          {/* Soviet math school preamble */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-500 leading-relaxed font-light mb-4">
              Georgia was home to one of the strongest mathematics education systems in the Soviet Union. That legacy didn&apos;t disappear&nbsp;&mdash; it produced a generation of algorithmic thinkers who compete at the highest international levels.
            </p>
            <p className="text-gray-700 font-semibold text-[15px] italic leading-relaxed">
              &ldquo;Every day these guys come to office with a spark in their eyes with a single goal: to somehow satisfy the hunger of problem solving in their hearts.&rdquo;
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Luka */}
            <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-200/60 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src="/images/team/luka-liklikadze.jpeg" alt="Luka Liklikadze" width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-900 text-lg tracking-tight">Luka Liklikadze</p>
                    <a href="https://www.linkedin.com/in/luka-liklikadze-571bb4324/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-blue transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                </div>
              </div>
              <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">The competitor</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                3.85 GPA. Competed at IZhO, ICPC, and APIO&nbsp;&mdash; international-level algorithmic competitions where thousands enter and dozens survive. Previously built zero-knowledge crypto infrastructure at Hinkal (SF). Writes code the way he competes: fast, precise, no wasted moves.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Algorithms", "TypeScript", "Full-Stack", "zk-Proofs"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200/60 text-[11px] text-gray-400 font-medium">{tag}</span>
                ))}
              </div>
              <div className="pt-5 border-t border-gray-200/60">
                <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold mb-3">Worked with</p>
                <div className="flex items-center gap-5">
                  <Image src="/images/logos/clients/succession.png" alt="Succession" width={200} height={60} className="h-7 w-auto opacity-40 grayscale" />
                  <Image src="/images/logos/clients/coldiq-large.svg" alt="ColdIQ" width={200} height={60} className="h-7 w-auto opacity-40 grayscale" />
                </div>
              </div>
            </div>

            {/* Lasha */}
            <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-200/60 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src="/images/team/lasha-gorgodze.jpeg" alt="Lasha Gorgodze" width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-900 text-lg tracking-tight">Lasha Gorgodze</p>
                    <a href="https://www.linkedin.com/in/lasha-gorgodze/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-blue transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                </div>
              </div>
              <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-3">The builder</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Math teacher turned engineer. Two years of teaching mathematical thinking gave him the patience to design systems that actually make sense. Almost a year at Stimuli building the automation, infrastructure, and backend pipelines that power client systems daily. ML-certified. Design pattern obsessed.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Python", "Design Patterns", "ML", "Automation"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200/60 text-[11px] text-gray-400 font-medium">{tag}</span>
                ))}
              </div>
              <div className="pt-5 border-t border-gray-200/60">
                <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold mb-3">Worked with</p>
                <div className="flex items-center gap-5">
                  <Image src="/images/logos/clients/vangates-large.jpg" alt="Vangates" width={200} height={60} className="h-7 w-auto opacity-40 grayscale" />
                  <Image src="/images/logos/clients/stack-optimize.png" alt="Stack Optimize" width={200} height={60} className="h-7 w-auto opacity-40 grayscale" />
                </div>
              </div>
            </div>

            {/* Dimitri */}
            <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-200/60 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src="/images/team/dimitri-takavadze.jpeg" alt="Dimitri Takavadze" width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-900 text-lg tracking-tight">Dimitri Takavadze</p>
                    <a href="https://www.linkedin.com/in/dimitri-tkavadze/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-blue transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                </div>
              </div>
              <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-3">The algorithmist</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                3.85 GPA with algorithms as his favorite subject&nbsp;&mdash; and it shows. Free University CS &amp; Math. The kind of engineer who optimizes not just for correctness but for elegance. Almost a year at Stimuli writing the efficient, clean code that keeps systems running smoothly at scale.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Algorithms", "Python", "Git", "Data Structures"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200/60 text-[11px] text-gray-400 font-medium">{tag}</span>
                ))}
              </div>
              <div className="pt-5 border-t border-gray-200/60">
                <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold mb-3">Worked with</p>
                <div className="flex items-center gap-5">
                  <Image src="/images/logos/clients/coldiq-large.svg" alt="ColdIQ" width={200} height={60} className="h-7 w-auto opacity-40 grayscale" />
                  <Image src="/images/logos/clients/salesautomationsystems-large.png" alt="Sales Automation Systems" width={200} height={60} className="h-5 w-auto opacity-40 grayscale" />
                </div>
              </div>
            </div>
          </div>

          {/* Team stats */}
          <div className="mt-16 pt-10 border-t border-gray-200/60">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 tracking-tight">Every engineer is in-house. No outsourcing. Ever.</p>
                  <p className="text-sm text-gray-400">Competitive programmers and CS graduates from Free University of Tbilisi</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="font-semibold text-gray-900">40+</span> teams scaled
                <span className="text-gray-200">|</span>
                <span className="font-semibold text-gray-900">7+</span> mo. retention
                <span className="text-gray-200">|</span>
                <span className="font-semibold text-gray-900">6</span> clients max
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY US, NOT THEM — (Dark)
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/[0.04] rounded-full blur-[120px]"></div>

        <div className="max-w-[1100px] mx-auto relative">
          <div className="text-center mb-16 reveal-section">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">The difference</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Why us, not them
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Speed */}
            <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] reveal-section">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">Speed</h3>
              <p className="text-white/40 text-[15px] leading-relaxed mb-6">
                Results in week one. Not month three. Not &ldquo;after the discovery phase.&rdquo;
              </p>
              <div className="space-y-4 pt-6 border-t border-white/[0.06]">
                <div className="flex items-start gap-3">
                  <img src="/images/testimonials/enzo-carasso.jpg" alt="Enzo Carasso" className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/60 text-sm leading-relaxed italic">&ldquo;They did in 1 week what others took 4 months for.&rdquo;</p>
                    <p className="text-white/30 text-xs mt-1 font-medium">Enzo Carasso, CEO, C17 Lab</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src="/images/testimonials/naeem-alvi.jpg" alt="Naeem Alvi-Assinder" className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/60 text-sm leading-relaxed italic">&ldquo;The speed at which you guys work is remarkable.&rdquo;</p>
                    <p className="text-white/30 text-xs mt-1 font-medium">Naeem Alvi-Assinder, Founder, Avalanche</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Domain Knowledge */}
            <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] reveal-section">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">Domain Knowledge</h3>
              <p className="text-white/40 text-[15px] leading-relaxed mb-6">
                We ran cold email agencies. We know the pain firsthand&nbsp;&mdash; not from a case study.
              </p>
              <div className="space-y-4 pt-6 border-t border-white/[0.06]">
                <div className="flex items-start gap-3">
                  <img src="/images/testimonials/taylor-haren.jpg" alt="Taylor Haren" className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/60 text-sm leading-relaxed italic">&ldquo;Spent 6 figures with agencies over 6 months. Not one fucking thing got done. Stimuli built our lead database in week one.&rdquo;</p>
                    <p className="text-white/30 text-xs mt-1 font-medium">Taylor Haren, CEO, Sales Automation Systems</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality */}
            <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] reveal-section">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">Quality</h3>
              <p className="text-white/40 text-[15px] leading-relaxed mb-6">
                Enterprise-grade infrastructure built by competitive programmers. Not duct tape by freelancers.
              </p>
              <div className="space-y-4 pt-6 border-t border-white/[0.06]">
                <div className="flex items-start gap-3">
                  <img src="/images/testimonials/michael-ewald.jpg" alt="Michael Ewald" className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/60 text-sm leading-relaxed italic">&ldquo;I don&apos;t want other agencies to have you as a partner... charge them triple what you charge us.&rdquo;</p>
                    <p className="text-white/30 text-xs mt-1 font-medium">Michael Ewald, Co-Founder, Vangates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src="/images/testimonials/aleksander-ivanov.jpg" alt="Aleksander Ivanov" className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/60 text-sm leading-relaxed italic">&ldquo;Built our entire backend infrastructure with enterprise-grade quality in record time.&rdquo;</p>
                    <p className="text-white/30 text-xs mt-1 font-medium">Aleksander Ivanov, CEO, Hypergen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CULTURE — YouTube Embed (Dark)
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="max-w-[900px] mx-auto relative reveal-section">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">Culture</p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Here&apos;s what working with us sounds like
            </h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] aspect-video">
            <iframe
              src="https://www.youtube.com/embed/3Q9rewnLFYw?rel=0"
              title="Working with Stimuli"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOCIAL PROOF — Client Logos (White)
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 px-8 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[13px] text-gray-400 uppercase tracking-widest font-semibold mb-8 text-center">
            Engineering world class systems for:
          </p>
          <div className="relative overflow-hidden max-w-full">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="flex w-max animate-scroll">
              {[...Array(2)].map((_, setIndex) =>
                clientLogos.map((logo, index) => (
                  <div key={`logo-${setIndex}-${index}`} className="flex-shrink-0 mx-8">
                    <div className={`relative ${logo.w} h-14 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Social proof faces */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="flex -space-x-2">
              {[
                { src: "/images/testimonials/enzo-carasso.jpg", name: "Enzo" },
                { src: "/images/testimonials/taylor-haren.jpg", name: "Taylor" },
                { src: "/images/testimonials/michael-ewald.jpg", name: "Michael" },
                { src: "/images/testimonials/aj-cassata.jpg", name: "AJ" },
                { src: "/images/testimonials/naeem-alvi.jpg", name: "Naeem" },
                { src: "/images/testimonials/aleksander-ivanov.jpg", name: "Aleksander" },
              ].map((t, i) => (
                <img
                  key={i}
                  src={t.src}
                  alt={t.name}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-gray-400 font-medium">Trusted by 40+ B2B teams</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — Dark
      ═══════════════════════════════════════════ */}
      <section className="relative py-32 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative reveal-section">
          <h2 className="text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] mb-8 text-white text-balance">
            We only take 6 agencies at a time.<br />
            <span className="text-white/30">For a reason.</span>
          </h2>
          <p className="text-xl text-white/40 mb-14 max-w-2xl mx-auto leading-relaxed font-light tracking-tight">
            Every client gets our full attention. No B-team. No outsourcing. No cutting corners. If we can&apos;t give you 100%, we&apos;d rather say no.
          </p>

          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-black rounded-full font-bold text-[17px] tracking-tight overflow-hidden transition-all duration-500 hover:bg-brand-blue hover:text-white hover:shadow-[0_0_60px_rgba(0,102,255,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let&apos;s build yours
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
