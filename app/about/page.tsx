'use client';

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
      {/* Navigation — same as homepage */}
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
              <Link href="/#pricing" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors flex items-center gap-1">
                Resources
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
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
          HERO — Dark
      ═══════════════════════════════════════════ */}
      <section className="relative pt-40 pb-20 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/[0.06] rounded-full blur-[120px]"></div>

        <div className="max-w-[900px] mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
            <span className="text-sm text-white/60 font-medium tracking-wide uppercase">The team behind the system</span>
          </div>

          <h1 className="text-5xl lg:text-[4.5rem] font-extrabold tracking-[-0.03em] leading-[0.95] mb-8 text-white">
            We&apos;ve been in your shoes.<br />
            <span className="text-gradient">That&apos;s why this works.</span>
          </h1>

          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto font-light tracking-tight">
            One of us ran a cold email agency. The other built banking infrastructure.
            We combined both to build what agencies actually need.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TEAM — White section
      ═══════════════════════════════════════════ */}
      <section className="relative py-32 px-8 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto reveal-section">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Rezi */}
            <div className="group">
              <a
                href="https://www.linkedin.com/in/revaz-dzidziguri-4a02941b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[4/5] mb-8 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/50 group-hover:border-brand-blue/30 group-hover:shadow-2xl transition-all duration-500">
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
                  Former solution architect at TBC Bank, where he designed systems handling millions of transactions. Now he builds the same enterprise-grade infrastructure — but for agencies that need it to actually work at scale. Backend engineering, complex data pipelines, the stuff that doesn&apos;t break at 2 AM.
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
                <div className="relative aspect-[4/5] mb-8 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/50 group-hover:border-brand-blue/30 group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src="/images/team/sergi.jpeg"
                    alt="Sergi Cheishvili - Co-Founder & CBO"
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
                  Ran his own cold email agency. Lived the pain — the broken Zapier flows at midnight, the spreadsheet chaos, the $4k/mo tool stack that did half of what it should. Turned that frustration into Stimuli. He knows exactly what&apos;s breaking in your ops because he&apos;s been there.
                </p>
              </div>
            </div>
          </div>

          {/* Team strip */}
          <div className="mt-20 pt-12 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 tracking-tight">8+ dedicated engineers behind every project</p>
                  <p className="text-sm text-gray-500">Deep expertise in outbound infrastructure, data pipelines & agency ops</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="font-semibold text-gray-900">40+</span> B2B teams scaled
                <span className="text-gray-200">|</span>
                <span className="font-semibold text-gray-900">7+</span> months avg. retention
                <span className="text-gray-200">|</span>
                <span className="font-semibold text-gray-900">6</span> clients max
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — Dark
      ═══════════════════════════════════════════ */}
      <section className="relative py-32 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/[0.06] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-sky/[0.04] rounded-full blur-[150px]"></div>

        <div className="max-w-3xl mx-auto text-center relative reveal-section">
          <h2 className="text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] mb-8 text-white text-balance">
            We only take 6 agencies at a time.<br />
            <span className="text-white/40">For a reason.</span>
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
