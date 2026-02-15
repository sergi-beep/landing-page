'use client';

import { useEffect, useState } from 'react';

/* ═══════════════════════════════════════════
   UNIFIED INBOX - Full production interface
   Like Attio: realistic, polished, detailed
═══════════════════════════════════════════ */
export function MockUnifiedInbox() {
  const [selectedConvo, setSelectedConvo] = useState(0);

  const conversations = [
    {
      id: 1,
      from: "Sarah Chen",
      company: "TechFlow Inc.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      campaign: "SaaS Agencies Q1 2024",
      subject: "Re: Automating your outbound process",
      preview: "This is exactly what we've been looking for. Can we schedule a demo next week?",
      time: "2m ago",
      status: "replied",
      unread: true,
      messages: 4,
    },
    {
      id: 2,
      from: "Mike Rodriguez",
      company: "Growth Labs",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      campaign: "B2B Lead Gen Outreach",
      subject: "Interesting timing...",
      preview: "You: Hey Mike, noticed your agency handles 50+ B2B clients. We help agencies like yours...",
      time: "1h ago",
      status: "opened",
      unread: false,
      messages: 2,
    },
    {
      id: 3,
      from: "Emma Watson",
      company: "Scale Partners",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      campaign: "SaaS Agencies Q1 2024",
      subject: "Re: Outbound infrastructure for agencies",
      preview: "Not right now, but circle back in Q2? We're planning to scale then.",
      time: "3h ago",
      status: "replied",
      unread: true,
      messages: 3,
    },
    {
      id: 4,
      from: "James Park",
      company: "RevOps Co",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      campaign: "CRO Services Offer",
      subject: "Quick question about your platform",
      preview: "You: James, saw RevOps Co is crushing it with conversion optimization...",
      time: "5h ago",
      status: "sent",
      unread: false,
      messages: 1,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-4">
          <h3 className="text-[15px] font-semibold text-gray-900">Inbox</h3>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              All campaigns
            </button>
            <button className="px-3 py-1.5 text-[13px] font-medium text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
              Unread
            </button>
            <button className="px-3 py-1.5 text-[13px] font-medium text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
              Replied
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200">
            <span className="text-[12px] font-semibold text-blue-700">3 new</span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 divide-x divide-gray-200">
        {/* Conversation List */}
        <div className="col-span-2 bg-white">
          <div className="divide-y divide-gray-100">
            {conversations.map((convo, i) => (
              <div
                key={convo.id}
                onClick={() => setSelectedConvo(i)}
                className={`px-4 py-4 cursor-pointer transition-all hover:bg-gray-50 ${
                  selectedConvo === i ? 'bg-blue-50 border-l-4 border-blue-600' : 'border-l-4 border-transparent'
                } ${convo.unread ? 'bg-blue-50/30' : ''}`}
              >
                <div className="flex items-start gap-3">
                  <img
                    src={convo.avatar}
                    alt={convo.from}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex-1 min-w-0">
                        <p className={`text-[13px] font-semibold truncate ${convo.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                          {convo.from}
                        </p>
                        <p className="text-[12px] text-gray-500 truncate">{convo.company}</p>
                      </div>
                      <span className="text-[11px] text-gray-400 flex-shrink-0">{convo.time}</span>
                    </div>
                    <p className={`text-[13px] mb-2 truncate ${convo.unread ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>
                      {convo.subject}
                    </p>
                    <p className="text-[12px] text-gray-400 truncate mb-2">
                      {convo.preview}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium truncate max-w-[140px]">
                        {convo.campaign}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase ${
                        convo.status === 'replied' ? 'bg-emerald-100 text-emerald-700' :
                        convo.status === 'opened' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {convo.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Thread */}
        <div className="col-span-3 bg-white">
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={conversations[selectedConvo].avatar}
                  alt={conversations[selectedConvo].from}
                  className="w-11 h-11 rounded-full"
                />
                <div>
                  <p className="text-[14px] font-semibold text-gray-900">{conversations[selectedConvo].from}</p>
                  <p className="text-[13px] text-gray-500">{conversations[selectedConvo].company}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[12px] text-gray-500 mb-1">{conversations[selectedConvo].time}</p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase ${
                  conversations[selectedConvo].status === 'replied' ? 'bg-emerald-100 text-emerald-700' :
                  conversations[selectedConvo].status === 'opened' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {conversations[selectedConvo].status}
                </span>
              </div>
            </div>
            <p className="text-[14px] font-semibold text-gray-900">{conversations[selectedConvo].subject}</p>
          </div>

          <div className="p-6 space-y-4 bg-white min-h-[300px]">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[12px] font-semibold flex-shrink-0">
                You
              </div>
              <div className="flex-1">
                <p className="text-[13px] text-gray-900 leading-relaxed">
                  Hey {conversations[selectedConvo].from.split(' ')[0]}, I noticed {conversations[selectedConvo].company} specializes in B2B lead generation — and from what I can see, you're doing great work.
                </p>
                <p className="text-[11px] text-gray-400 mt-2">2 days ago</p>
              </div>
            </div>

            {conversations[selectedConvo].status !== 'sent' && (
              <div className="flex gap-3">
                <img
                  src={conversations[selectedConvo].avatar}
                  alt={conversations[selectedConvo].from}
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-[13px] text-gray-900 leading-relaxed">
                    {conversations[selectedConvo].preview}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-2">{conversations[selectedConvo].time}</p>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200 bg-white">
            <textarea
              placeholder="Type your reply..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[13px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={3}
            />
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white text-[13px] font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Send reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   CAMPAIGN DASHBOARD - Production table interface
   Like Attio: proper data table with live metrics
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
    { name: "SaaS Agencies Q1 2024", client: "Growth Partner", status: "active", sends: "1,247", opens: "34.2%", clicks: "12.8%", replies: "4.2%", revenue: "$47,200" },
    { name: "B2B Lead Gen Outreach", client: "Scale Labs", status: "active", sends: "892", opens: "29.1%", clicks: "10.4%", replies: "3.8%", revenue: "$31,800" },
    { name: "CRO Services Offer", client: "RevOps Co", status: "paused", sends: "634", opens: "31.5%", clicks: "11.9%", replies: "5.1%", revenue: "$22,400" },
    { name: "Agency Partnership Intro", client: "DataFlow", status: "active", sends: "474", opens: "27.8%", clicks: "9.2%", replies: "2.9%", revenue: "$18,600" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[15px] font-semibold text-gray-900">Campaigns</h3>
          <button className="px-4 py-2 bg-blue-600 text-white text-[13px] font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            + New campaign
          </button>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-[11px] uppercase font-semibold text-gray-500 mb-1">Total Sent</p>
            <p className="text-2xl font-bold text-gray-900">{sent.toLocaleString()}</p>
            <p className="text-[11px] text-emerald-600 font-medium mt-1">+47/min</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-[11px] uppercase font-semibold text-gray-500 mb-1">Opened</p>
            <p className="text-2xl font-bold text-gray-900">{opened}</p>
            <p className="text-[11px] text-blue-600 font-medium mt-1">27.4% rate</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-[11px] uppercase font-semibold text-gray-500 mb-1">Replied</p>
            <p className="text-2xl font-bold text-gray-900">{replied}</p>
            <p className="text-[11px] text-emerald-600 font-medium mt-1">3.9% rate</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Campaign</th>
              <th className="px-6 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Sends</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Opens</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Clicks</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Replies</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {campaigns.map((campaign, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="text-[13px] font-semibold text-gray-900">{campaign.name}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-[13px] text-gray-600">{campaign.client}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-mono font-semibold text-gray-900">{campaign.sends}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-semibold text-blue-600">{campaign.opens}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-semibold text-purple-600">{campaign.clicks}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-semibold text-emerald-600">{campaign.replies}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-bold text-gray-900">{campaign.revenue}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase ${
                    campaign.status === 'active'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {campaign.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t-2 border-gray-200 bg-gray-50">
            <tr>
              <td className="px-6 py-4 text-[13px] font-bold text-gray-900">Total</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4 text-right text-[13px] font-mono font-bold text-gray-900">3,247</td>
              <td className="px-6 py-4 text-right text-[13px] font-bold text-blue-600">30.7%</td>
              <td className="px-6 py-4 text-right text-[13px] font-bold text-purple-600">11.1%</td>
              <td className="px-6 py-4 text-right text-[13px] font-bold text-emerald-600">4.0%</td>
              <td className="px-6 py-4 text-right text-[13px] font-bold text-gray-900">$120,000</td>
              <td className="px-6 py-4"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   ATTRIBUTION - Production analytics interface
═══════════════════════════════════════════ */
export function MockAttribution() {
  const sources = [
    { channel: "Outbound Campaign A", source: "Smartlead", leads: 127, opps: 34, closed: 12, revenue: "$47,200", roi: "4.2x", color: "blue" },
    { channel: "Outbound Campaign B", source: "Instantly", leads: 89, opps: 21, closed: 8, revenue: "$31,800", roi: "3.8x", color: "purple" },
    { channel: "Referral Partners", source: "Direct", leads: 43, opps: 12, closed: 7, revenue: "$28,400", roi: "5.1x", color: "emerald" },
    { channel: "Inbound Website", source: "Organic", leads: 31, opps: 9, closed: 4, revenue: "$18,900", roi: "∞", color: "amber" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
        <h3 className="text-[15px] font-semibold text-gray-900 mb-1">Attribution Dashboard</h3>
        <p className="text-[13px] text-gray-600">True source → revenue connection</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Channel</th>
              <th className="px-6 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Source</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Leads</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Opps</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Closed</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">ROI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {sources.map((source, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-${source.color}-500`}></div>
                    <p className="text-[13px] font-semibold text-gray-900">{source.channel}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-[13px] text-gray-600">{source.source}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-mono font-semibold text-gray-900">{source.leads}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-semibold text-blue-600">{source.opps}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-semibold text-purple-600">{source.closed}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-bold text-emerald-600">{source.revenue}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-bold text-gray-900">{source.roi}</p>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t-2 border-gray-200 bg-gray-50">
            <tr>
              <td className="px-6 py-4 text-[13px] font-bold text-gray-900" colSpan={2}>Total</td>
              <td className="px-6 py-4 text-right text-[13px] font-mono font-bold text-gray-900">290</td>
              <td className="px-6 py-4 text-right text-[13px] font-bold text-blue-600">76</td>
              <td className="px-6 py-4 text-right text-[13px] font-bold text-purple-600">31</td>
              <td className="px-6 py-4 text-right text-[13px] font-bold text-emerald-600">$126,300</td>
              <td className="px-6 py-4 text-right text-[13px] font-bold text-gray-900">4.3x</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   CLIENT VIEW - Multi-tenant interface
═══════════════════════════════════════════ */
export function MockClientView() {
  const clients = [
    { name: "Growth Partner", logo: "GP", campaigns: 12, sends: "847K", replies: "4.2%", revenue: "$342K", health: "excellent", color: "blue" },
    { name: "Scale Labs", logo: "SL", campaigns: 8, sends: "621K", replies: "3.8%", revenue: "$287K", health: "good", color: "purple" },
    { name: "RevOps Co", logo: "RC", campaigns: 5, sends: "403K", replies: "5.1%", revenue: "$198K", health: "excellent", color: "emerald" },
    { name: "Lead Factory", logo: "LF", campaigns: 9, sends: "512K", replies: "2.9%", revenue: "$156K", health: "warning", color: "amber" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[15px] font-semibold text-gray-900 mb-1">Client Overview</h3>
            <p className="text-[13px] text-gray-600">62 active clients • Same infrastructure</p>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
            <span className="text-[12px] font-semibold text-emerald-700">● All systems operational</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Campaigns</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Total Sends</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Reply Rate</th>
              <th className="px-6 py-3 text-right text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-3 text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Health</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {clients.map((client, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-${client.color}-500 to-${client.color}-600 flex items-center justify-center text-white text-[12px] font-bold shadow-sm`}>
                      {client.logo}
                    </div>
                    <p className="text-[13px] font-semibold text-gray-900">{client.name}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-semibold text-gray-900">{client.campaigns}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-mono font-semibold text-gray-900">{client.sends}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-semibold text-emerald-600">{client.replies}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="text-[13px] font-bold text-gray-900">{client.revenue}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      client.health === 'excellent' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' :
                      client.health === 'good' ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' :
                      'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                    }`}></div>
                    <span className="text-[12px] font-medium text-gray-700 capitalize">{client.health}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 text-center">
        <p className="text-[12px] text-gray-500">
          Showing 4 of <span className="font-semibold text-blue-600">62</span> active clients
        </p>
      </div>
    </div>
  );
}
