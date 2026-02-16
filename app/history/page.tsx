'use client';

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductsDropdown } from "../components/products-dropdown";

const giants = [
  {
    name: "Andria Razmadze",
    years: "1889 – 1929",
    photo: "/images/history/andria-razmadze-final-final.jpeg",
    title: "The Founder",
    field: "Calculus of Variations",
    achievement: "Created a new direction in calculus of variations by solving problems in the class of discontinuous curves. Before him, this entire field dealt with smooth curves — he showed how to handle cases where curves have breaks and corners.",
    legacy: "Built Georgian mathematical terminology from zero. Every math term written in Georgian traces back to his work. He didn't just do mathematics in Georgia — he made Georgia mathematical.",
    color: "brand-blue",
  },
  {
    name: "Niko Muskhelishvili",
    years: "1891 – 1976",
    photo: "/images/history/niko-muskhelishvili.jpg",
    title: "The Engineer of Theory",
    field: "Elasticity & Integral Equations",
    achievement: "Invented methods for solving elasticity problems using complex variable functions. Before him, calculating stress and deformation in solid materials was extremely difficult. His methods made it solvable — and they're still used today in engineering, construction, and aerospace.",
    legacy: "His techniques were directly applied in building the USSR's first satellite. He also developed the theory of singular integral equations, giving mathematicians a powerful new toolkit that remains standard worldwide.",
    color: "white",
  },
  {
    name: "Ilia Vekua",
    years: "1907 – 1977",
    photo: "/images/history/ilia-vekua.jpg",
    title: "The Inventor",
    field: "Generalized Analytic Functions & Shell Theory",
    achievement: "Created the theory of generalized analytic functions — a completely new branch of mathematics that didn't exist before him. He also invented new methods for solving elliptic partial differential equations.",
    legacy: "Built a mathematical theory of thin elastic shells — curved structures like domes, aircraft fuselages, and rocket bodies. Before his work, engineers couldn't precisely calculate how these structures behave under stress. His math is in every aircraft flying today.",
    color: "brand-blue",
  },
];

export default function HistoryPage() {
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
              <Link href="/about" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/#faq" className="text-[15px] font-medium text-white/50 hover:text-white transition-colors">
                FAQs
              </Link>
              <ProductsDropdown />
              <Link href="/history" className="text-[15px] font-medium text-white transition-colors">
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
          HERO — The Declaration
      ═══════════════════════════════════════════ */}
      <section className="relative pt-40 pb-20 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand-blue/[0.05] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-blue/[0.03] rounded-full blur-[100px]"></div>

        <div className="max-w-[900px] mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
            <span className="text-sm text-white/60 font-medium tracking-wide uppercase">Our Heritage</span>
          </div>

          <h1 className="text-5xl lg:text-[4.5rem] font-extrabold tracking-[-0.03em] leading-[0.95] mb-8 text-white">
            Giants built this ground.<br />
            <span className="text-gradient">We&apos;re not letting it go cold.</span>
          </h1>

          <p className="text-xl text-white/40 leading-relaxed max-w-3xl mx-auto font-light tracking-tight">
            Georgia produced mathematicians who rewrote the rules of physics, engineering, and space exploration. Their work is in every satellite, every aircraft fuselage, every load-bearing structure on earth. This is the tradition we come from. And we intend to honor it.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE GIANTS — Alternating Dark/White Cards
      ═══════════════════════════════════════════ */}
      {giants.map((giant, index) => {
        const isDark = index % 2 === 0;
        const isReversed = index % 2 === 1;

        return (
          <section
            key={giant.name}
            className={`relative py-24 lg:py-32 px-8 lg:px-12 overflow-hidden ${isDark ? 'bg-brand-black' : 'bg-white'}`}
          >
            {isDark && (
              <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-blue/[0.04] rounded-full blur-[120px] -translate-y-1/2"></div>
            )}

            <div className="max-w-[1100px] mx-auto relative reveal-section">
              <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                {/* Photo */}
                <div className="w-full lg:w-[380px] flex-shrink-0">
                  <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden ${isDark ? 'border border-white/[0.08]' : 'border border-gray-200/60 shadow-xl'}`}>
                    <Image
                      src={giant.photo}
                      alt={giant.name}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-brand-black/80 via-transparent to-transparent' : 'bg-gradient-to-t from-white/60 via-transparent to-transparent'}`}></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${isDark ? 'text-brand-blue' : 'text-brand-blue'}`}>
                        {giant.years}
                      </p>
                      <p className={`text-2xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {giant.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${isDark ? 'text-brand-blue' : 'text-brand-blue'}`}>
                    {giant.title}
                  </p>
                  <h2 className={`text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {giant.name}
                  </h2>
                  <p className={`text-sm font-semibold uppercase tracking-widest mb-8 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                    {giant.field}
                  </p>

                  {/* Achievement */}
                  <div className="mb-8">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-white/20' : 'text-gray-300'}`}>
                      What he did
                    </p>
                    <p className={`text-[15px] leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                      {giant.achievement}
                    </p>
                  </div>

                  {/* Legacy */}
                  <div className={`p-6 rounded-xl ${isDark ? 'bg-white/[0.03] border border-white/[0.06]' : 'bg-gray-50 border border-gray-200/60'}`}>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-brand-blue' : 'text-brand-blue'}`}>
                      Why it matters
                    </p>
                    <p className={`text-[15px] leading-relaxed font-medium ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      {giant.legacy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ═══════════════════════════════════════════
          THE CHALLENGE — Dark Manifesto
      ═══════════════════════════════════════════ */}
      <section className="relative py-32 px-8 lg:px-12 bg-brand-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/[0.06] rounded-full blur-[140px]"></div>

        <div className="max-w-[900px] mx-auto relative text-center reveal-section">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-6">The challenge</p>

          <h2 className="text-4xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] leading-[1] mb-10 text-white">
            These men solved problems the world said were unsolvable.<br />
            <span className="text-white/30 mt-2 block">They didn&apos;t ask permission. They just did it.</span>
          </h2>

          <div className="max-w-2xl mx-auto mb-16">
            <p className="text-xl text-white/40 leading-relaxed font-light tracking-tight mb-8">
              Razmadze created an entire mathematical language for a nation. Muskhelishvili&apos;s equations helped put the first satellite in orbit. Vekua&apos;s math is in every aircraft fuselage flying right now.
            </p>
            <p className="text-xl text-white/60 leading-relaxed font-semibold tracking-tight">
              This is the standard we hold ourselves to. Not because we have to. Because we refuse to let this legacy collect dust.
            </p>
          </div>

          {/* The dare */}
          <div className="p-10 rounded-2xl border border-brand-blue/20 bg-brand-blue/[0.04] max-w-2xl mx-auto mb-16">
            <p className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug mb-6">
              Challenge us.
            </p>
            <p className="text-white/50 text-[15px] leading-relaxed">
              Bring us your broken systems, your duct-taped workflows, your impossible deadlines. We come from a country that produced mathematicians who solved what couldn&apos;t be solved. Give us something worth solving.
            </p>
          </div>

          <Link
            href="https://calendly.com/sergi-feq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-black rounded-full font-bold text-[17px] tracking-tight overflow-hidden transition-all duration-500 hover:bg-brand-blue hover:text-white hover:shadow-[0_0_60px_rgba(0,102,255,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Give us your hardest problem
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
