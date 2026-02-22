'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MockStep1, MockStep2, MockStep3, MockOutput, HeroPipeline } from "./mock-ui";
import { SolutionsDropdown } from "../../components/solutions-dropdown";

const steps = [
  {
    number: "01",
    label: "Scrape",
    title: "Built target lists from real directories",
    description:
      "Pulled companies from Clutch, Capterra, Indeed, Wellfound — filtered by industry, location, size, budget. No CSV uploads. No guessing.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Find contacts",
    title: "Found the decision-makers automatically",
    description:
      "Select management level, title, max contacts per company. We pulled verified contacts from Apollo — names, titles, cities, all matched to the target list.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Enrich",
    title: "Added every data point needed for personalization",
    description:
      "Clutch reviews, tech stack, SEO data, annual revenue, social profiles, company descriptions — pick what matters for the campaign. Every row became a personalized pitch.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

const killedTools = [
  "Clutch scraper",
  "Apollo",
  "Clearbit",
  "Google Sheets",
  "Clay",
  "Your VA",
];

export default function DataSaasPage() {
  const [activeStep, setActiveStep] = useState(0);

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

  // Auto-cycle steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
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
        {/* Ambient layers */}
        <div className="absolute inset-0 hero-grid opacity-40"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-brand-blue/[0.07] rounded-full blur-[160px] animate-pulse-slower"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-sky/[0.04] rounded-full blur-[100px]"></div>

        <div className="max-w-[1100px] mx-auto relative">
          <div className="text-center max-w-[900px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8 hero-fade-up hero-fade-up-1">
              <span className="w-2 h-2 rounded-full bg-white/30"></span>
              <span className="text-sm text-white/60 font-medium tracking-wide uppercase">
                Product Archive
              </span>
            </div>

            <h1 className="text-5xl lg:text-[4.8rem] font-extrabold tracking-[-0.03em] leading-[0.92] mb-8 text-white hero-fade-up hero-fade-up-2">
              We built Clay<br />
              <span className="text-gradient">before Clay was cool.</span>
            </h1>

            <p className="text-xl text-white/40 leading-relaxed max-w-3xl mx-auto font-light tracking-tight mb-6 hero-fade-up hero-fade-up-3">
              In 2023, two engineers built a full data aggregation platform from scratch. Python backend. Next.js frontend. Three months. It scraped business directories, found decision-makers, and enriched every row with personalization data.
            </p>

            <p className="text-[15px] text-white/20 max-w-2xl mx-auto leading-relaxed hero-fade-up hero-fade-up-4">
              The product worked. The business didn&apos;t. We almost went bankrupt&nbsp;&mdash; not because the tech was wrong, but because we were engineers who didn&apos;t know how to sell. This is its story.
            </p>

            {/* Tech stack badges */}
            <div className="flex items-center justify-center gap-3 mt-10 hero-fade-up hero-fade-up-5">
              <span className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 text-sm font-semibold tracking-tight">
                Python
              </span>
              <span className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 text-sm font-semibold tracking-tight">
                Next.js
              </span>
              <span className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 text-sm font-semibold tracking-tight">
                Apollo API
              </span>
              <span className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 text-sm font-semibold tracking-tight">
                Web Scraping
              </span>
            </div>
          </div>

          {/* Hero — pipeline flow visualization */}
          <div className="relative hero-fade-up hero-fade-up-6">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/10 via-brand-sky/5 to-brand-blue/10 rounded-3xl blur-2xl opacity-60"></div>
            <div className="relative">
              <HeroPipeline />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BUILD STATS
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center reveal-section">
            {[
              { value: "3 months", label: "Build time" },
              { value: "2", label: "Engineers" },
              { value: "15+", label: "Data enrichment points" },
            ].map((stat, i) => (
              <div key={stat.label} className="relative">
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/[0.08] to-transparent"></div>
                )}
                <p className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gradient">
                  {stat.value}
                </p>
                <p className="text-white/30 text-sm font-medium mt-2 tracking-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PROBLEM — Tool Graveyard
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="reveal-section">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-6">The problem we solved</p>
            <h2 className="text-3xl lg:text-[2.8rem] font-extrabold tracking-[-0.02em] leading-tight mb-6 text-gray-900">
              Agencies were paying for 6 tools<br />
              <span className="text-gray-300">to do one job.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-light tracking-tight mb-14">
              Clutch for scraping. Apollo for contacts. Clearbit for enrichment. Google Sheets for formatting. Clay for connecting them. And a VA to babysit all of it. We replaced all of them with one workflow.
            </p>
          </div>

          {/* Crossed-out tools → replaced */}
          <div className="reveal-section">
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {killedTools.map((tool) => (
                <div
                  key={tool}
                  className="relative px-5 py-2.5 rounded-lg bg-gray-100 border border-gray-200/80"
                >
                  <span className="text-sm font-semibold text-gray-400">{tool}</span>
                  <div className="absolute left-2 right-2 top-1/2 h-[2px] bg-red-400/70 -translate-y-1/2"></div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-brand-blue font-bold text-lg tracking-tight">One workflow. One platform.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3-STEP PROCESS
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-36 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-blue/[0.04] rounded-full blur-[140px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-sky/[0.03] rounded-full blur-[100px]"></div>

        <div className="max-w-[1100px] mx-auto relative">
          <div className="text-center mb-20 reveal-section">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">How it worked</p>
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-[-0.02em] text-white">
              Three steps. One workflow.
            </h2>
          </div>

          {/* Step selector — vertical on left, content on right */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start reveal-section">
            {/* Step tabs */}
            <div className="relative">
              {/* Vertical progress line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/[0.06]"></div>
              <div
                className="absolute left-[19px] top-0 w-px bg-brand-blue transition-all duration-500 ease-out"
                style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>

              <div className="space-y-2">
                {steps.map((step, i) => (
                  <button
                    key={step.label}
                    onClick={() => setActiveStep(i)}
                    className={`relative w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                      activeStep === i
                        ? "bg-white/[0.05]"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    {/* Node */}
                    <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      activeStep === i
                        ? "bg-brand-blue text-white shadow-[0_0_20px_rgba(0,102,255,0.4)]"
                        : i < activeStep
                          ? "bg-brand-blue/20 text-brand-blue"
                          : "bg-white/[0.06] text-white/30"
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-widest mb-1 transition-colors ${
                        activeStep === i ? "text-brand-blue" : "text-white/20"
                      }`}>
                        Step {step.number}
                      </p>
                      <p className={`font-bold tracking-tight transition-colors ${
                        activeStep === i ? "text-white" : "text-white/40"
                      }`}>
                        {step.label}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active step content */}
            <div>
              <div key={`text-${activeStep}`} className="mb-6 mock-step-enter">
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-3">
                  {steps[activeStep].title}
                </h3>
                <p className="text-white/40 text-[16px] leading-relaxed font-light max-w-xl">
                  {steps[activeStep].description}
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-3 bg-brand-blue/[0.06] rounded-2xl blur-2xl"></div>
                <div key={`mock-${activeStep}`} className="relative mock-step-enter">
                  {activeStep === 0 && <MockStep1 />}
                  {activeStep === 1 && <MockStep2 />}
                  {activeStep === 2 && <MockStep3 />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OUTPUT — The final result
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center reveal-section">
            <div className="relative">
              <MockOutput />
            </div>
            <div>
              <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">The output</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
                Clean, enriched,<br />ready to send.
              </h2>
              <p className="text-gray-500 text-[16px] leading-relaxed font-light mb-8">
                Every row was a potential client — with company info, decision-maker contacts, Clutch ratings, tech stack, SEO data, and any personalization point selected. One click to export as CSV.
              </p>
              <div className="space-y-4">
                {[
                  { text: "Verified emails for every contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  { text: "15+ personalization data points per lead", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                  { text: "Export to CSV — plug into any outreach tool", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-[15px]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
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
            We built this in 2023.
          </h2>
          <p className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white/25 mb-10">
            Before Clay raised their Series B.
          </p>

          <div className="space-y-6 text-left max-w-xl mx-auto">
            <p className="text-white/40 text-[16px] leading-relaxed">
              Data aggregation and enrichment for B2B outreach — scrape from real directories, find decision-makers, enrich with every data point that matters. Python backend handling the scraping and data processing. Next.js frontend for the UI you see above. Built the whole thing from scratch. Three months. Two engineers.
            </p>
            <p className="text-white/40 text-[16px] leading-relaxed">
              The product worked. The business didn&apos;t. We were engineers — we knew how to build, but not how to sell. We spent 150K GEL and almost went bankrupt.
            </p>
            <div className="p-6 rounded-xl border border-brand-blue/20 bg-brand-blue/[0.04]">
              <p className="text-white/70 text-lg leading-relaxed font-semibold">
                So we went back to agency work, learned the business side the hard way, and turned the pain into expertise. Every tool we build now comes from that experience&nbsp;&mdash; engineering rigor backed by hard-won commercial instincts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DEMO VIDEO
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="max-w-[800px] mx-auto relative reveal-section">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">See it in action</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
              The full walkthrough
            </h2>
          </div>
          <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden shadow-xl">
            <div className="absolute -inset-4 bg-brand-blue/[0.04] rounded-3xl blur-2xl"></div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.loom.com/embed/c99a99278d49485d9c410bc2771de081"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
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
            We still build things like this.
          </h2>
          <p className="text-xl text-white/35 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-tight">
            Data SaaS didn&apos;t survive as a business, but the engineering did. Everything we learned went into building better systems for our clients.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-black rounded-full font-bold text-[16px] tracking-tight hover:bg-brand-blue hover:text-white transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,102,255,0.4)]"
            >
              See our solutions
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.1] text-white/50 rounded-full font-bold text-[16px] tracking-tight hover:border-brand-blue/30 hover:text-white transition-all duration-300"
            >
              Read our story
            </Link>
          </div>
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
