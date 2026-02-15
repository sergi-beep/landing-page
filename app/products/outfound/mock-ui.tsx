'use client';

import { useEffect, useState } from 'react';

/* ═══════════════════════════════════════════
   MOCK UNIFIED INBOX — All campaigns, one view
═══════════════════════════════════════════ */
export function MockUnifiedInbox() {
  const conversations = [
    { id: 1, name: "Sarah Chen", company: "TechFlow", campaign: "SaaS Agencies Q1", status: "replied", lastMsg: "Interested! When can we chat?", time: "2m ago", unread: true },
    { id: 2, name: "Mike Rodriguez", company: "Growth Labs", campaign: "B2B Lead Gen Offer", status: "opened", lastMsg: "You: Hey Mike, noticed your agency...", time: "1h ago", unread: false },
    { id: 3, name: "Emma Watson", company: "Scale Partners", campaign: "SaaS Agencies Q1", status: "replied", lastMsg: "Not right now, maybe Q2?", time: "3h ago", unread: true },
    { id: 4, name: "David Kim", company: "RevOps Co", campaign: "CRO Services", status: "bounced", lastMsg: "Delivery failed", time: "5h ago", unread: false },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Inbox header */}
      <div className="flex items-center justify-between p-4 border-b border-white/[0.08] bg-white/[0.02] mock-field">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-[13px] font-bold text-white">Unified Inbox</h3>
            <p className="text-[10px] text-white/40">62 campaigns • 4 clients</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded text-[9px] font-bold text-emerald-400 bg-emerald-500/10 mock-tag">3 New</span>
        </div>
      </div>

      {/* Conversations */}
      <div className="divide-y divide-white/[0.04]">
        {conversations.map((conv, i) => (
          <div
            key={conv.id}
            className={`p-4 hover:bg-white/[0.02] transition-colors mock-row cursor-pointer ${conv.unread ? 'bg-brand-blue/[0.02]' : ''}`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${
                conv.status === 'replied' ? 'bg-emerald-500/10 text-emerald-400' :
                conv.status === 'opened' ? 'bg-brand-blue/10 text-brand-blue' :
                conv.status === 'bounced' ? 'bg-red-500/10 text-red-400' :
                'bg-white/[0.06] text-white/40'
              }`}>
                {conv.name.split(' ').map(n => n[0]).join('')}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <p className={`text-[13px] font-semibold ${conv.unread ? 'text-white' : 'text-white/60'}`}>
                      {conv.name}
                    </p>
                    <p className="text-[10px] text-white/30">{conv.company}</p>
                  </div>
                  <span className="text-[10px] text-white/30 flex-shrink-0">{conv.time}</span>
                </div>

                <p className={`text-[11px] mb-2 ${conv.unread ? 'text-white/70' : 'text-white/40'}`}>
                  {conv.lastMsg}
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-white/20 bg-white/[0.04] px-2 py-0.5 rounded">
                    {conv.campaign}
                  </span>
                  <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded ${
                    conv.status === 'replied' ? 'text-emerald-400 bg-emerald-500/10' :
                    conv.status === 'opened' ? 'text-brand-blue bg-brand-blue/10' :
                    conv.status === 'bounced' ? 'text-red-400 bg-red-500/10' :
                    'text-white/40 bg-white/[0.06]'
                  }`}>
                    {conv.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MOCK CAMPAIGN DASHBOARD — Live metrics
═══════════════════════════════════════════ */
export function MockCampaignDashboard() {
  const [sent, setSent] = useState(0);
  const [opened, setOpened] = useState(0);
  const [replied, setReplied] = useState(0);

  useEffect(() => {
    const intervals = [
      setInterval(() => setSent(s => Math.min(s + 47, 3247)), 30),
      setInterval(() => setOpened(o => Math.min(o + 12, 891)), 40),
      setInterval(() => setReplied(r => Math.min(r + 1, 127)), 50),
    ];
    return () => intervals.forEach(clearInterval);
  }, []);

  const campaigns = [
    { name: "SaaS Agencies Q1", client: "Growth Partner", status: "active", sends: "1,247", opens: "34%", replies: "4.2%" },
    { name: "B2B Lead Gen Offer", client: "Scale Labs", status: "active", sends: "892", opens: "29%", replies: "3.8%" },
    { name: "CRO Services", client: "RevOps Co", status: "paused", sends: "634", opens: "31%", replies: "5.1%" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Live stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] mock-field">
          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wide mb-1">Total Sent</p>
          <p className="text-2xl font-black text-white">{sent.toLocaleString()}</p>
          <p className="text-[9px] text-emerald-400 mt-1">+47/min</p>
        </div>
        <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] mock-field" style={{ animationDelay: '100ms' }}>
          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wide mb-1">Opened</p>
          <p className="text-2xl font-black text-white">{opened}</p>
          <p className="text-[9px] text-brand-blue mt-1">27.4% rate</p>
        </div>
        <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] mock-field" style={{ animationDelay: '200ms' }}>
          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wide mb-1">Replied</p>
          <p className="text-2xl font-black text-white">{replied}</p>
          <p className="text-[9px] text-emerald-400 mt-1">3.9% rate</p>
        </div>
      </div>

      {/* Campaign list */}
      <div className="border border-white/[0.08] rounded-xl overflow-hidden">
        <div className="grid grid-cols-6 gap-4 p-3 bg-white/[0.04] border-b border-white/[0.06]">
          <p className="col-span-2 text-[10px] font-bold text-white/40 uppercase tracking-wide">Campaign</p>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-wide">Sends</p>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-wide">Opens</p>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-wide">Replies</p>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-wide">Status</p>
        </div>

        {campaigns.map((camp, i) => (
          <div
            key={i}
            className="grid grid-cols-6 gap-4 p-3 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors mock-row"
            style={{ animationDelay: `${i * 100 + 300}ms` }}
          >
            <div className="col-span-2">
              <p className="text-[12px] font-semibold text-white">{camp.name}</p>
              <p className="text-[10px] text-white/30">{camp.client}</p>
            </div>
            <p className="text-[11px] text-white/60 font-mono">{camp.sends}</p>
            <p className="text-[11px] text-brand-blue font-semibold">{camp.opens}</p>
            <p className="text-[11px] text-emerald-400 font-semibold">{camp.replies}</p>
            <span className={`text-[9px] font-bold uppercase px-2 py-1 rounded w-fit ${
              camp.status === 'active' ? 'text-emerald-400 bg-emerald-500/10' : 'text-white/40 bg-white/[0.06]'
            }`}>
              {camp.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MOCK ATTRIBUTION — Revenue source clarity
═══════════════════════════════════════════ */
export function MockAttribution() {
  const sources = [
    { channel: "Outbound Campaign A", leads: 127, opps: 34, revenue: "$47,200", roi: "4.2x" },
    { channel: "Outbound Campaign B", leads: 89, opps: 21, revenue: "$31,800", roi: "3.8x" },
    { channel: "Inbound Referrals", leads: 43, opps: 12, revenue: "$18,900", roi: "-" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="p-4 rounded-t-xl border border-white/[0.08] bg-gradient-to-br from-brand-blue/[0.08] to-transparent mock-field">
        <h3 className="text-[13px] font-bold text-white mb-1">Attribution Dashboard</h3>
        <p className="text-[10px] text-white/40">True source → revenue connection</p>
      </div>

      <div className="border-x border-b border-white/[0.08] rounded-b-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 p-3 bg-white/[0.04] border-b border-white/[0.06]">
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-wide">Channel</p>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-wide text-right">Leads</p>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-wide text-right">Opps</p>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-wide text-right">Revenue</p>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-wide text-right">ROI</p>
        </div>

        {/* Rows */}
        {sources.map((source, i) => (
          <div
            key={i}
            className="grid grid-cols-5 gap-4 p-3 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors mock-row"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <p className="text-[12px] font-semibold text-white">{source.channel}</p>
            <p className="text-[11px] text-white/60 font-mono text-right">{source.leads}</p>
            <p className="text-[11px] text-brand-blue font-semibold text-right">{source.opps}</p>
            <p className="text-[11px] text-emerald-400 font-bold text-right">{source.revenue}</p>
            <p className="text-[11px] text-white/80 font-bold text-right">{source.roi}</p>
          </div>
        ))}

        {/* Total */}
        <div className="grid grid-cols-5 gap-4 p-3 bg-white/[0.04] border-t border-white/[0.08]">
          <p className="text-[11px] font-bold text-white">Total</p>
          <p className="text-[11px] text-white/80 font-mono text-right">259</p>
          <p className="text-[11px] text-white/80 font-semibold text-right">67</p>
          <p className="text-[11px] text-white font-bold text-right">$97,900</p>
          <p className="text-[11px] text-white font-bold text-right">4.0x</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MOCK MULTI-CLIENT VIEW — 62 agencies, one system
═══════════════════════════════════════════ */
export function MockClientView() {
  const clients = [
    { name: "Growth Partner", campaigns: 12, sends: "847K", replies: "4.2%", health: "excellent" },
    { name: "Scale Labs", campaigns: 8, sends: "621K", replies: "3.8%", health: "good" },
    { name: "RevOps Co", campaigns: 5, sends: "403K", replies: "5.1%", health: "excellent" },
    { name: "Lead Factory", campaigns: 9, sends: "512K", replies: "2.9%", health: "warning" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="p-4 rounded-t-xl border border-white/[0.08] bg-white/[0.02] mock-field flex items-center justify-between">
        <div>
          <h3 className="text-[13px] font-bold text-white mb-1">Client Overview</h3>
          <p className="text-[10px] text-white/40">62 active clients • Same infrastructure</p>
        </div>
        <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="text-[10px] font-bold text-emerald-400">All systems operational</span>
        </div>
      </div>

      <div className="border-x border-b border-white/[0.08] rounded-b-xl divide-y divide-white/[0.04]">
        {clients.map((client, i) => (
          <div
            key={i}
            className="p-4 hover:bg-white/[0.02] transition-colors mock-row"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 flex items-center justify-center border border-brand-blue/10">
                  <span className="text-[11px] font-bold text-brand-blue">{client.name.substring(0, 2)}</span>
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-white">{client.name}</p>
                  <p className="text-[10px] text-white/30">{client.campaigns} active campaigns</p>
                </div>
              </div>
              <div className={`w-2 h-2 rounded-full ${
                client.health === 'excellent' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' :
                client.health === 'good' ? 'bg-brand-blue shadow-[0_0_8px_rgba(0,102,255,0.5)]' :
                'bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]'
              } mock-pulse`}></div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-[9px] text-white/30 uppercase font-bold mb-1">Total Sends</p>
                <p className="text-[13px] font-bold text-white">{client.sends}</p>
              </div>
              <div>
                <p className="text-[9px] text-white/30 uppercase font-bold mb-1">Reply Rate</p>
                <p className="text-[13px] font-bold text-emerald-400">{client.replies}</p>
              </div>
              <div>
                <p className="text-[9px] text-white/30 uppercase font-bold mb-1">Status</p>
                <p className="text-[11px] font-semibold text-white/60 capitalize">{client.health}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center mock-field" style={{ animationDelay: '500ms' }}>
        <p className="text-[10px] text-white/20">
          Showing 4 of <span className="text-brand-blue font-bold">62</span> active clients
        </p>
      </div>
    </div>
  );
}
