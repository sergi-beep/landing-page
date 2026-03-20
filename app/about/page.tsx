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

const engineers = [
  { name: "Giorgi Nadareishvili", photo: "/images/team/giorgi-nadareishvili.png", headline: "IOI Bronze Medalist", sub: "EJOI Silver \u00b7 RMI Silver \u00b7 5 International Medals", linkedin: "https://www.linkedin.com/in/giorgi-nadareishvili-661794187/", profiles: [{ label: "CPHOF", url: "https://cphof.org/profile/codeforces:binpaw" }, { label: "IOI Stats", url: "https://stats.ioinformatics.org/people/7457" }, { label: "CLIST", url: "https://clist.by/coder/%E2%88%A83884967/" }] },
  { name: "Gega Abashidze", photo: "/images/team/gega-abashidze.png", headline: "6 Olympiad Wins", sub: "ICPC Semifinalist \u00b7 Millennium Innovation Award", linkedin: "https://www.linkedin.com/in/gega-abashidze-1168b728b/" },
  { name: "Luka Liklikadze", photo: "/images/team/luka-liklikadze.jpeg", headline: "#1 National Talent of 2023", sub: "Highest grade in National university entrance exams", linkedin: "https://www.linkedin.com/in/luka-liklikadze-571bb4324/", profiles: [{ label: "TV Final", url: "https://www.youtube.com/watch?v=T5l27Jsgb2M" }] },
  { name: "Lasha Gorgodze", photo: "/images/team/lasha-gorgodze.jpeg", headline: "Math Teacher \u2192 Engineer", sub: "ML Certified \u00b7 Automation Architect \u00b7 Backend Pipelines", linkedin: "https://www.linkedin.com/in/lasha-gorgodze/" },
  { name: "Dimitri Takavadze", photo: "/images/team/dimitri-takavadze.jpeg", headline: "The Algorithmist", sub: "Algorithms Specialist \u00b7 Free University CS & Math", linkedin: "https://www.linkedin.com/in/dimitri-tkavadze/" },
  { name: "Ketevan Arevadze", photo: "/images/team/ketevan-arevadze.png", headline: "Technovation Girls Winner", sub: "Teaching math since 15 \u00b7 Builds robots for fun", linkedin: "https://www.linkedin.com/in/ketevan-arevadze-1a60b2339/" },
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
          WHY STIMULI — TEAM & ENGINEERS
      ═══════════════════════════════════════════ */}
      <section className="relative pt-32 py-24 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto reveal-section">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Marketing + Sales + Engineering.<br /><span className="text-brand-blue">All Under One Roof.</span>
            </h2>
          </div>

          {/* ── CHAPTER 1: THE OPERATORS ── */}
          <div className="mb-20">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              We&apos;ve Done Your Job Before
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-3xl text-[15px]">
              Childhood best friends turned co-founders. One from the revenue ops side, the other from engineering. Together we built a B2B lead gen agency from scratch. The technical walls kept showing up, so we built the fixes ourselves. Then started shipping them to every revenue team and agency that needed them.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                <img src="/images/team/sergi.jpeg" alt="Sergi Cheishvili" className="w-16 h-16 rounded-xl object-cover shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-900">Sergi Cheishvili</p>
                    <a href="https://www.linkedin.com/in/sergi-cheishvili-9b3936164/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-blue transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                  <p className="text-sm text-gray-500">Co-Founder &amp; CBO</p>
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">4 years in B2B data ops. RevOps at N.Rich (Helsinki) and Brightvision (Sweden). Built Stimuli from the same trenches you operate in.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                <img src="/images/team/Rezi.jpeg" alt="Rezi Dzidziguri" className="w-16 h-16 rounded-xl object-cover shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-900">Rezi Dzidziguri</p>
                    <a href="https://www.linkedin.com/in/revaz-dzidziguri-4a02941b9/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-blue transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                  <p className="text-sm text-gray-500">Co-Founder &amp; CTO</p>
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">Solution Architect at TBC Bank. Neobank architect at Vacuumlabs. Built a team of 9 olympiad-winning engineers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mb-20"></div>

          {/* ── CHAPTER 2: THE ENGINEERS ── */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Engineers Who Build to Scale
            </h3>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-3xl text-[15px]">
              CS majors from Eastern Europe&apos;s top university. International olympiad medalists. They architect systems that grow with your business.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {engineers.map((eng, i) => (
                <div key={i} className="p-5 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                  <img src={eng.photo} alt={eng.name} className="w-16 h-16 rounded-xl object-cover mx-auto mb-3" />
                  <p className="font-bold text-gray-900 text-[15px]">{eng.name}</p>
                  <p className="text-brand-blue font-bold text-sm mt-1">{eng.headline}</p>
                  <p className="text-gray-400 text-[12px] mt-1 leading-snug">{eng.sub}</p>
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                    {eng.linkedin && (
                      <a href={eng.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-blue transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    )}
                    {eng.profiles?.map((p: { label: string; url: string }, j: number) => (
                      <a key={j} href={p.url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold text-gray-300 hover:text-brand-blue transition-colors underline underline-offset-2">
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
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

          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] aspect-video group" onClick={(e) => { const overlay = (e.currentTarget as HTMLElement).querySelector('.iframe-overlay'); if (overlay) (overlay as HTMLElement).style.display = 'none'; }}>
            <iframe
              src="https://www.youtube.com/embed/3Q9rewnLFYw?rel=0"
              title="Working with Stimuli"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            <div className="iframe-overlay absolute inset-0 z-10 cursor-pointer" />
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
          <div className="flex flex-col items-center gap-4 mt-10">
            <div className="flex -space-x-3">
              {[
                { src: "/images/testimonials/enzo-carasso.jpg", name: "Enzo" },
                { src: "/images/testimonials/taylor-haren.jpg", name: "Taylor" },
                { src: "/images/testimonials/michael-ewald.jpg", name: "Michael" },
                { src: "/images/testimonials/aj-cassata.jpg", name: "AJ" },
                { src: "/images/testimonials/naeem-alvi.jpg", name: "Naeem" },
                { src: "/images/testimonials/aleksander-ivanov.jpg", name: "Aleksander" },
                { src: "/images/testimonials/alex-vacca.jpg", name: "Alex" },
                { src: "/images/testimonials/harrison-waid.jpeg", name: "Harrison" },
                { src: "/images/testimonials/felix-frank.jpeg", name: "Felix" },
              ].map((t, i) => (
                <img
                  key={i}
                  src={t.src}
                  alt={t.name}
                  className="w-11 h-11 rounded-full border-2 border-white/20 object-cover shadow-[0_0_20px_rgba(232,180,200,0.2)] hover:scale-110 hover:z-10 transition-transform duration-300"
                />
              ))}
            </div>
            <span className="text-sm text-gray-400 font-medium">Trusted by 40+ Revenue teams and agencies</span>
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
                Your CTO + Tech-ops department
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
