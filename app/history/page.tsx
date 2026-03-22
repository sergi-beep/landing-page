'use client';

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SolutionsDropdown } from "../components/solutions-dropdown";

const manifestoSections = [
  {
    text: "We exist to prove something.",
    first: true,
    bold: true,
  },
  {
    text: "Not for the title. As proof. Proof that a country whose talent and freedom has been oppressed by the Russian empire for over 200 years can still mix science and business at the highest level and produce industry-changing products.",
  },
  {
    text: "To make it happen, we assembled a team of generational talent: olympiad-winning software developers, mathematicians, solutions architects, and revenue operations specialists.",
  },
  {
    text: "People whose strive for professionalism and excellence overshadows everyday pleasures. People who were born to do this.",
  },
  {
    text: "For over two years we have worked non-stop and changed the cold email industry. Built new standards that the leaders of this game now operate on.",
  },
  {
    text: "We have created the fundamentals of our business and culture.",
  },
  {
    text: "But this is just the beginning.",
    bold: true,
  },
  {
    text: "The faith in our purpose, our discipline, and the love and respect we have for our team and our work gives us the confidence to wake up every day and take one more step toward where we are destined to be.",
  },
  {
    text: "And if you want to be a part of this journey, either as a partner or as a co-worker, feel free to reach out to us.",
  },
  {
    text: "We are searching for you.",
    bold: true,
  },
];

export default function PurposePage() {
  const router = useRouter();
  const [promptDismissed, setPromptDismissed] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoFading, setVideoFading] = useState(false);
  const [pageFading, setPageFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startExperience = () => {
    setPromptDismissed(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  // Check if already seen this session
  useEffect(() => {
    if (sessionStorage.getItem('purpose-seen')) {
      router.replace('/');
    }
  }, [router]);

  const skipVideo = () => {
    if (!videoEnded) {
      setVideoFading(true);
      setTimeout(() => setVideoEnded(true), 300);
    }
  };

  const handleVideoEnd = () => {
    setVideoFading(true);
    setTimeout(() => setVideoEnded(true), 300);
  };

  // Background music: play from start, loop while on page
  useEffect(() => {
    if (!videoEnded || !audioRef.current) return;
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.loop = false;
    audio.volume = 0;
    audio.play().catch(() => {});

    // Fade in over 2 seconds
    let vol = 0;
    const fadeIn = setInterval(() => {
      vol = Math.min(vol + 0.05, 1);
      audio.volume = vol;
      if (vol >= 1) clearInterval(fadeIn);
    }, 100);

    return () => {
      clearInterval(fadeIn);
      audio.pause();
    };
  }, [videoEnded]);

  // After crawl ends, fade out and redirect to homepage
  const [crawlDone, setCrawlDone] = useState(false);
  useEffect(() => {
    if (!videoEnded) return;
    const timer = setTimeout(() => {
      setPageFading(true);
      sessionStorage.setItem('purpose-seen', 'true');
      setTimeout(() => router.push('/'), 2000);
    }, 110000);
    return () => clearTimeout(timer);
  }, [videoEnded, router]);

  // Scroll reveal for manifesto sections
  useEffect(() => {
    if (!videoEnded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );
    document.querySelectorAll('.manifesto-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [videoEnded]);

  return (
    <main className={`min-h-screen bg-brand-black transition-opacity duration-2000 ${pageFading ? 'opacity-0' : 'opacity-100'}`}>
      <audio ref={audioRef} src="/purpose-music.mp3" preload="auto" />
      {/* Volume Prompt */}
      {!promptDismissed && !videoEnded && (
        <div
          className="fixed inset-0 z-[110] bg-brand-black flex flex-col items-center justify-center cursor-pointer"
          onClick={startExperience}
        >
          <svg className="w-10 h-10 text-white/40 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M11 5L6 9H2v6h4l5 4V5z" />
          </svg>
          <p className="text-white/60 text-lg tracking-wide mb-8">Best with sound on.</p>
          <p className="text-white/20 text-sm tracking-widest uppercase">Click anywhere to continue</p>
        </div>
      )}

      {/* Video Intro */}
      {!videoEnded && (
        <div
          className={`fixed inset-0 z-[100] bg-brand-black flex items-center justify-center cursor-pointer transition-opacity duration-600 ${videoFading ? 'opacity-0' : 'opacity-100'}`}
          onClick={skipVideo}
        >
          <video
            ref={videoRef}
            src="/3d_logo_with_audio.mp4"
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-contain"
          />
          <p className="absolute bottom-8 text-white/20 text-sm tracking-widest uppercase">Click anywhere to skip</p>
        </div>
      )}

      {/* Navigation - only visible after video */}
      {videoEnded && (
        <nav className="fixed top-0 left-0 right-0 z-50 nav-glass border-b border-white/[0.06] animate-fade-in">
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
                <Link href="/history" className="text-[15px] font-medium text-white hover:text-white transition-colors">Our Purpose</Link>
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
      )}

      {/* Manifesto - Star Wars Crawl */}
      {videoEnded && (
        <div className="bg-brand-black overflow-hidden">
          {/* Crawl container */}
          <div className={`crawl-container ${crawlDone ? 'crawl-done' : ''}`}>
            <div className="crawl-perspective">
              <div className="crawl-content">
                {manifestoSections.map((section, i) => (
                  <p
                    key={i}
                    className={`mb-12 lg:mb-16 text-left leading-relaxed tracking-tight font-bold text-white ${
                      section.first
                        ? 'text-2xl lg:text-4xl'
                        : section.bold
                          ? 'text-lg lg:text-2xl'
                          : 'text-base lg:text-xl'
                    }`}
                  >
                    {section.text}
                  </p>
                ))}

                {/* CTA at end of crawl */}
                <div className="flex flex-col items-center pt-16">
                  <Link
                    href="https://calendly.com/sergi-feq/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-black rounded-full font-bold text-[17px] tracking-tight overflow-hidden transition-all duration-500 hover:bg-brand-blue hover:text-white hover:shadow-[0_0_60px_rgba(0,102,255,0.4)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Be a part of this journey
                      <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                  <p className="text-white/30 text-[15px] mt-8 font-medium tracking-tight">
                    Partner with us or join the team
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      <style jsx>{`
        .crawl-container {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: #0F172A;
        }
        .crawl-perspective {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 600px;
          height: 100%;
          perspective: 600px;
          overflow: hidden;
        }
        .crawl-content {
          position: absolute;
          top: 100%;
          width: 100%;
          padding: 0 80px;
          animation: crawl 110s linear forwards;
        }
        .crawl-done {
          height: auto;
          min-height: 100vh;
          overflow: visible;
        }
        .crawl-done .crawl-perspective {
          position: relative;
          bottom: auto;
          left: auto;
          transform: none;
        }
        .crawl-done .crawl-content {
          position: relative;
          top: auto;
          animation: none;
          transform: none;
          padding-top: 80px;
          padding-bottom: 80px;
        }
        @keyframes crawl {
          0% {
            top: 100%;
            transform: rotateX(12deg);
          }
          100% {
            top: -180%;
            transform: rotateX(12deg);
          }
        }
        .duration-2000 {
          transition-duration: 2000ms;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </main>
  );
}
