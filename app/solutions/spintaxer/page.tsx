'use client';

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSpintax, MockSpintaxerApp, MockBeforeAfter, MockVariantPreview } from "./mock-ui";
import { SolutionsDropdown } from "../../components/solutions-dropdown";

export default function SpintaxerPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    document
      .querySelectorAll(".reveal-section, .reveal-card")
      .forEach((el) => observer.observe(el));
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
              <Link href="/about" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
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
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative pt-40 pb-28 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-brand-blue/[0.07] rounded-full blur-[160px] animate-pulse-slower"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-sky/[0.04] rounded-full blur-[100px]"></div>

        <div className="max-w-[1100px] mx-auto relative">
          <div className="text-center max-w-[900px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8 hero-fade-up hero-fade-up-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-sm text-white/60 font-medium tracking-wide uppercase">
                Product &middot; Live
              </span>
            </div>

            <h1 className="text-5xl lg:text-[4.8rem] font-extrabold tracking-[-0.03em] leading-[0.92] mb-8 text-white hero-fade-up hero-fade-up-2">
              Cold email spintax<br />
              <span className="text-gradient">that actually works.</span>
            </h1>

            <p className="text-xl text-white/40 leading-relaxed max-w-3xl mx-auto font-light tracking-tight mb-6 hero-fade-up hero-fade-up-3">
              The tool that started it all. Generate spintax with millions of variations&nbsp;&mdash; not just synonym swaps, but entire sentence structures rewritten. Every email unique. Every message sounds human.
            </p>

            <p className="text-[15px] text-white/20 max-w-2xl mx-auto leading-relaxed hero-fade-up hero-fade-up-4">
              Used by hundreds of cold email agencies worldwide. Built because we couldn&apos;t find anything that actually got the job done.
            </p>

            {/* Tech badges */}
            <div className="flex items-center justify-center gap-3 mt-10 hero-fade-up hero-fade-up-5">
              <span className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 text-sm font-semibold tracking-tight">
                Smartlead
              </span>
              <span className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 text-sm font-semibold tracking-tight">
                Instantly
              </span>
              <span className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 text-sm font-semibold tracking-tight">
                Cold Email
              </span>
              <span className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 text-sm font-semibold tracking-tight">
                Deliverability
              </span>
            </div>
          </div>

          {/* Hero visual — branching variations */}
          <div className="relative hero-fade-up hero-fade-up-6 max-w-[500px] mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/10 via-brand-sky/5 to-brand-blue/10 rounded-3xl blur-2xl opacity-60"></div>
            <div className="relative">
              <HeroSpintax />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PROBLEM — Why spintax is hard
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16 reveal-section">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-6">The problem</p>
            <h2 className="text-3xl lg:text-[2.8rem] font-extrabold tracking-[-0.02em] leading-tight mb-6 text-gray-900">
              Spintax seems easy.<br />
              <span className="text-gray-300">It&apos;s not.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-light tracking-tight">
              Most people either under-spintax and create obvious patterns that destroy deliverability, or they go overboard and the emails end up&nbsp;&mdash; kinda embarrassing to read.
            </p>
          </div>

          {/* Before / After comparison */}
          <div className="reveal-section">
            <MockBeforeAfter />
          </div>

          {/* Pain points */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 reveal-section">
            {[
              {
                title: "Under-spintax",
                description: "Swap 3 words and call it a day. ESPs see the pattern instantly. Straight to spam.",
                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                color: "text-amber-500 bg-amber-50",
              },
              {
                title: "Over-spintax",
                description: "\"I {wanted|desired|craved} to {reach out|extend my hand|connect}...\" Nobody talks like that.",
                icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
                color: "text-red-500 bg-red-50",
              },
              {
                title: "GPT prompting",
                description: "We tried. Dozens of prompts. The output always sounds robotic or loses the original intent.",
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                color: "text-gray-500 bg-gray-50",
              },
            ].map((pain) => (
              <div key={pain.title} className="p-6 rounded-xl border border-gray-100 bg-gray-50/50">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${pain.color}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pain.icon} />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-bold text-[16px] tracking-tight mb-2">{pain.title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE SOLUTION — What Spintaxer does
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-36 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-blue/[0.04] rounded-full blur-[140px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-sky/[0.03] rounded-full blur-[100px]"></div>

        <div className="max-w-[1100px] mx-auto relative">
          <div className="text-center mb-20 reveal-section">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">The solution</p>
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-[-0.02em] text-white mb-6">
              R&D that actually paid off.
            </h2>
            <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto font-light tracking-tight">
              After trying every automation option with no success, we invested serious time in R&D and built a tool that really gets the job done with high accuracy.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20 reveal-section">
            {[
              {
                title: "Millions of variations",
                description: "Not just word swaps. Entire sentence structures get rewritten. Your 100-word email generates millions of unique combinations.",
                metric: "2.8M+",
                metricLabel: "avg. variations per email",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                title: "Review & edit",
                description: "User-friendly interface to review, edit, or delete any sentence variation. Full control over what goes out.",
                metric: "100%",
                metricLabel: "control over output",
                icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
              },
              {
                title: "Instant previews",
                description: "Generate example variants for quick previews. See exactly what your recipients will read before you send.",
                metric: "< 3s",
                metricLabel: "generation time",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-brand-blue/30 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">{feature.title}</h3>
                <p className="text-white/30 text-[14px] leading-relaxed mb-6">{feature.description}</p>
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-2xl font-extrabold text-gradient">{feature.metric}</p>
                  <p className="text-white/20 text-[12px] font-medium mt-1">{feature.metricLabel}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Variant preview */}
          <div className="max-w-[700px] mx-auto reveal-section">
            <p className="text-center text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-6">Example output</p>
            <MockVariantPreview />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LIVE APP DEMO — Full mock UI
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-14 reveal-section">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">The interface</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
              Paste your copy. Get spintax.
            </h2>
            <p className="text-gray-500 text-[16px] leading-relaxed max-w-xl mx-auto font-light">
              Choose your sequencer format. Paste your original cold email. Hit spintax. Done. Review, edit, and export.
            </p>
          </div>

          <div className="relative reveal-section">
            <MockSpintaxerApp />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE BACKSTORY
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/[0.06] rounded-full blur-[160px]"></div>

        <div className="max-w-[700px] mx-auto relative text-center reveal-section">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-6">The backstory</p>

          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">
            The tool that started it all.
          </h2>
          <p className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white/25 mb-10">
            Born from agency pain.
          </p>

          <div className="space-y-6 text-left max-w-xl mx-auto">
            <p className="text-white/40 text-[16px] leading-relaxed">
              We were running a cold email agency. Sending thousands of emails a day. And the spintax problem was killing us&nbsp;&mdash; every variation had to be unique enough to pass spam filters, but natural enough to sound human.
            </p>
            <p className="text-white/40 text-[16px] leading-relaxed">
              We tried GPT prompting. We tried manual writing. We tried every tool on the market. Nothing worked at the quality and scale we needed. So we built our own.
            </p>
            <div className="p-6 rounded-xl border border-brand-blue/20 bg-brand-blue/[0.04]">
              <p className="text-white/70 text-lg leading-relaxed font-semibold">
                Shared it on LinkedIn. Agencies started using it. Hundreds of them. Spintaxer became the first product we ever shipped&nbsp;&mdash; and the proof that building tools from real pain creates things people actually want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — Soft redirect
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-blue/[0.05] rounded-full blur-[120px]"></div>

        <div className="max-w-3xl mx-auto text-center relative reveal-section">
          <h2 className="text-3xl lg:text-[2.8rem] font-extrabold tracking-[-0.02em] leading-tight mb-6 text-white">
            Need better cold email infrastructure?
          </h2>
          <p className="text-xl text-white/35 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-tight">
            Spintaxer is one piece of the puzzle. We build complete outbound systems for B2B agencies&nbsp;&mdash; from prospecting to deliverability to closing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://calendly.com/sergi-feq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-black rounded-full font-bold text-[16px] tracking-tight hover:bg-brand-blue hover:text-white transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,102,255,0.4)]"
            >
              Let&apos;s talk
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.1] text-white/50 rounded-full font-bold text-[16px] tracking-tight hover:border-brand-blue/30 hover:text-white transition-all duration-300"
            >
              See all solutions
            </Link>
          </div>

          <p className="text-white/30 text-[15px] mt-10 font-medium tracking-tight">
            30-minute call &middot; No pitch deck &middot; No bullshit
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
