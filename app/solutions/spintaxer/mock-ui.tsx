'use client';

import { useEffect, useState } from 'react';

/* ═══════════════════════════════════════════
   HERO VISUAL — One sentence → millions of variations
═══════════════════════════════════════════ */
export function HeroSpintax() {
  const original = "I noticed your agency specializes in B2B lead generation.";
  const variations = [
    "I saw that your team focuses on B2B lead gen.",
    "Your agency's B2B lead generation work caught my eye.",
    "I came across your B2B lead gen services.",
    "Noticed you guys are deep in B2B lead generation.",
    "Your focus on B2B lead generation stood out to me.",
  ];

  return (
    <div className="relative">
      {/* Original sentence */}
      <div className="relative z-10 p-5 rounded-xl border border-white/[0.1] bg-white/[0.04] backdrop-blur-sm mb-4 mock-field" style={{ animationDelay: '0ms' }}>
        <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-2">Original</p>
        <p className="text-white/70 text-[14px] font-medium leading-relaxed">{original}</p>
      </div>

      {/* Branching lines */}
      <div className="relative flex justify-center mb-4">
        <div className="w-px h-8 bg-gradient-to-b from-brand-blue/40 to-brand-blue/10"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-brand-blue mock-pulse"></div>
        </div>
      </div>

      {/* Variations fan out */}
      <div className="space-y-1.5">
        {variations.map((v, i) => (
          <div
            key={i}
            className="p-3 rounded-lg border border-white/[0.06] bg-white/[0.02] mock-row"
            style={{ animationDelay: `${i * 150 + 500}ms` }}
          >
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex-shrink-0 mock-tag" style={{ animationDelay: `${i * 150 + 700}ms` }}>
                v{i + 1}
              </span>
              <p className="text-white/40 text-[12px] leading-snug">{v}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Count */}
      <div className="mt-4 text-center mock-field" style={{ animationDelay: '1500ms' }}>
        <span className="text-[11px] text-white/20 font-semibold">
          5 shown of <span className="text-brand-blue font-bold">2,847,396</span> possible variations
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MOCK APP — Full Spintaxer UI recreation
═══════════════════════════════════════════ */

const sampleInput = `Hi {{first_name}},

I noticed your agency specializes in B2B lead generation — and from what I can see, you're doing great work.

We help agencies like yours automate outbound prospecting so your team can focus on closing instead of finding. Would it make sense to chat for 15 minutes this week?`;

const sampleOutput = `Hi {{first_name}},

{I noticed|I saw|I came across the fact that} your agency {specializes in|focuses on|is deep in} B2B lead generation — {and from what I can see|and from what I've seen|based on what I found}, {you're doing great work|your results speak for themselves|the work you're putting out is solid}.

{We help agencies like yours|Our team works with agencies similar to yours|We partner with agencies like yours to} {automate outbound prospecting|streamline the outbound process|take outbound off your plate} so your team can {focus on closing instead of finding|spend more time closing and less time prospecting|do what they do best — close deals}. {Would it make sense to|Does it make sense to|Any interest in} {chat for 15 minutes this week|grab a quick call this week|hop on a short call}?`;

export function MockSpintaxerApp() {
  const [showOutput, setShowOutput] = useState(false);
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowOutput(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const target = 45;
    let frame: number;
    let current = 0;
    const step = () => {
      current += 1;
      setCredits(Math.min(current, target));
      if (current < target) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden mock-shimmer">
      {/* Top nav bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/80">
        <div className="flex items-center gap-1.5">
          <span className="text-gray-300 text-lg font-light">{`{`}</span>
          <span className="text-[15px] font-extrabold text-gray-800 tracking-tight">Spintaxer</span>
          <span className="text-gray-300 text-lg font-light">{`}`}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200/60">
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[12px] font-bold text-gray-600 tabular-nums">{credits}</span>
          </div>
          <button className="px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] font-semibold text-gray-500 hover:border-blue-300 transition-colors">
            Top up
          </button>
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">S</span>
          </div>
        </div>
      </div>

      {/* Sequencer selector */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-[11px] font-semibold text-gray-400 mb-2.5">Choose sequencer</p>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-blue-500 bg-blue-50/50 text-[12px] font-bold text-blue-600">
            <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            Smartlead
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-[12px] font-medium text-gray-400 hover:border-gray-300 transition-colors">
            <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            Instantly
          </button>
        </div>
      </div>

      {/* Split panels */}
      <div className="grid grid-cols-2 gap-0 px-5 pb-2 pt-3">
        {/* Original copy */}
        <div className="pr-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] font-semibold text-gray-700">Original copy</p>
            <p className="text-[10px] text-gray-400 font-medium">
              Sentences: <span className="font-semibold text-gray-500">4</span> &nbsp;|&nbsp; Words: <span className="font-semibold text-gray-500">47</span>
            </p>
          </div>
          <div className="relative min-h-[180px] rounded-lg border-2 border-blue-400/50 bg-white p-3">
            <p className="text-[12px] text-gray-600 leading-relaxed whitespace-pre-wrap">{sampleInput}</p>
            <div className="absolute bottom-2 right-2 w-[2px] h-4 bg-blue-500 mock-cursor"></div>
          </div>
        </div>

        {/* Spintaxed copy */}
        <div className="pl-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] font-semibold text-gray-700">Spintaxed copy</p>
          </div>
          <div className={`min-h-[180px] rounded-lg border border-gray-200 p-3 transition-all duration-500 ${showOutput ? 'bg-white border-emerald-300/50' : 'bg-gray-50'}`}>
            {showOutput ? (
              <SpintaxHighlighted text={sampleOutput} />
            ) : (
              <div className="flex items-center justify-center h-full min-h-[160px]">
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-200 border-t-blue-500 mx-auto mb-2 animate-spin"></div>
                  <p className="text-[11px] text-gray-300 font-medium">Generating...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Spintax button */}
      <div className="px-5 pb-4 pt-1">
        <div className="flex items-center gap-3">
          <button className={`flex-1 py-3 rounded-lg font-bold text-[14px] transition-all duration-300 ${
            showOutput
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
              : 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
          }`}>
            {showOutput ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Spintaxed
              </span>
            ) : (
              <span>Spintax &nbsp;⚡ 10</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* Highlighted spintax text — {variations|show|in color} */
function SpintaxHighlighted({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g);

  return (
    <p className="text-[11px] leading-relaxed whitespace-pre-wrap">
      {parts.map((part, i) => {
        if (part.startsWith('{') && part.endsWith('}')) {
          const options = part.slice(1, -1).split('|');
          return (
            <span key={i} className="inline">
              <span className="text-gray-400">{`{`}</span>
              {options.map((opt, j) => (
                <span key={j}>
                  <span className="text-blue-600 font-medium bg-blue-50 px-0.5 rounded">{opt}</span>
                  {j < options.length - 1 && <span className="text-gray-300">|</span>}
                </span>
              ))}
              <span className="text-gray-400">{`}`}</span>
            </span>
          );
        }
        return <span key={i} className="text-gray-600">{part}</span>;
      })}
    </p>
  );
}

/* ═══════════════════════════════════════════
   BEFORE / AFTER — Repetitive vs. Unique
═══════════════════════════════════════════ */
export function MockBeforeAfter() {
  const beforeEmails = [
    "I noticed your agency specializes in B2B lead generation.",
    "I noticed your agency specializes in B2B lead generation.",
    "I noticed your agency specializes in B2B lead generation.",
    "I noticed your agency specializes in B2B lead generation.",
    "I noticed your agency specializes in B2B lead generation.",
  ];

  const afterEmails = [
    "I saw that your team focuses on B2B lead gen.",
    "Your agency's B2B lead generation work caught my eye.",
    "I came across your B2B lead gen services.",
    "Noticed you guys are deep in B2B lead generation.",
    "Your focus on generating B2B leads really stood out.",
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Before */}
      <div className="rounded-xl border border-red-200/60 bg-red-50/30 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <span className="text-[12px] font-bold text-red-400 uppercase tracking-widest">Without spintax</span>
        </div>
        <div className="space-y-2">
          {beforeEmails.map((email, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-white border border-red-100/80 mock-row" style={{ animationDelay: `${i * 100}ms` }}>
              <p className="text-[11px] text-gray-500 leading-snug">{email}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-red-300 font-semibold mt-3 text-center">
          5 emails. 1 unique version. Spam filters love this.
        </p>
      </div>

      {/* After */}
      <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/30 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[12px] font-bold text-emerald-500 uppercase tracking-widest">With spintax</span>
        </div>
        <div className="space-y-2">
          {afterEmails.map((email, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-white border border-emerald-100/80 mock-row" style={{ animationDelay: `${i * 100 + 300}ms` }}>
              <p className="text-[11px] text-gray-600 leading-snug">{email}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-emerald-400 font-semibold mt-3 text-center">
          5 emails. 5 unique versions. Each one sounds human.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   VARIANT PREVIEW — Example generated variants
═══════════════════════════════════════════ */
export function MockVariantPreview() {
  const variants = [
    {
      label: "Variant A",
      text: "I saw that your team focuses on B2B lead gen — and from what I've seen, your results speak for themselves. Our team works with agencies similar to yours to streamline the outbound process so your team can spend more time closing and less time prospecting.",
    },
    {
      label: "Variant B",
      text: "I came across the fact that your agency is deep in B2B lead generation — based on what I found, the work you're putting out is solid. We partner with agencies like yours to take outbound off your plate so your team can do what they do best — close deals.",
    },
    {
      label: "Variant C",
      text: "Your agency's B2B lead generation work caught my eye — and from what I can see, you're doing great work. We help agencies like yours automate outbound prospecting so your team can focus on closing instead of finding.",
    },
  ];

  return (
    <div className="space-y-3">
      {variants.map((v, i) => (
        <div
          key={i}
          className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-brand-blue/20 hover:bg-white/[0.04] transition-all duration-300 mock-row"
          style={{ animationDelay: `${i * 200}ms` }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[9px] font-bold text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full">
              {v.label}
            </span>
            <div className="flex-1 h-px bg-white/[0.04]"></div>
            <button className="text-[9px] text-white/20 hover:text-white/40 font-medium transition-colors">
              Copy
            </button>
          </div>
          <p className="text-[13px] text-white/50 leading-relaxed">{v.text}</p>
        </div>
      ))}
    </div>
  );
}
