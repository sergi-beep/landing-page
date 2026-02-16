'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Reaction {
  emoji: string;
  count: number;
}

interface SlackMessage {
  id: string;
  avatarUrl: string;
  initials: string;
  name: string;
  time: string;
  message: string;
  reactions?: Reaction[];
  replies?: number;
  gradientFrom: string;
  gradientTo: string;
}

const beforeMessages: SlackMessage[] = [
  {
    id: '1',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    initials: 'VP',
    name: 'VP OF REVOPS',
    time: '10:47 AM',
    message: '"The Zapier workflow broke again. All leads from last night are stuck. Third time this month."',
    reactions: [
      { emoji: '👀', count: 3 },
      { emoji: '😤', count: 5 },
      { emoji: '🔥', count: 2 },
    ],
    replies: 12,
    gradientFrom: 'from-red-500',
    gradientTo: 'to-orange-600',
  },
  {
    id: '2',
    avatarUrl: 'https://i.pravatar.cc/150?img=52',
    initials: 'HS',
    name: 'HEAD OF SALES',
    time: '11:23 AM',
    message: '"Nobody knows which attribution numbers are right. Marketing says one thing, sales says another."',
    reactions: [
      { emoji: '😰', count: 7 },
      { emoji: '💀', count: 4 },
    ],
    replies: 8,
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-purple-600',
  },
  {
    id: '3',
    avatarUrl: 'https://i.pravatar.cc/150?img=36',
    initials: 'GTM',
    name: 'HEAD OF GTM',
    time: '2:34 PM',
    message: '"We got 200 leads from the agency last week. I can only find 130 in HubSpot. Where are the other 70?"',
    reactions: [
      { emoji: '😡', count: 3 },
      { emoji: '🤦', count: 6 },
    ],
    replies: 15,
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-rose-600',
  },
  {
    id: '4',
    avatarUrl: 'https://i.pravatar.cc/150?img=68',
    initials: 'RM',
    name: 'REVOPS MANAGER',
    time: '4:12 PM',
    message: '"Paying $4.2k/mo across 11 tools. I\'m afraid to cancel any because I don\'t know what breaks."',
    reactions: [
      { emoji: '💸', count: 8 },
      { emoji: '😭', count: 5 },
    ],
    replies: 19,
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-orange-500',
  },
];

const afterMessages: SlackMessage[] = [
  {
    id: '1',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    initials: 'VP',
    name: 'VP OF REVOPS',
    time: '9:02 AM',
    message: '"All 47 leads auto-synced, enriched, routed. I didn\'t touch anything."',
    reactions: [
      { emoji: '✅', count: 12 },
      { emoji: '🎉', count: 8 },
      { emoji: '⚡', count: 5 },
    ],
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-600',
  },
  {
    id: '2',
    avatarUrl: 'https://i.pravatar.cc/150?img=52',
    initials: 'HS',
    name: 'HEAD OF SALES',
    time: '9:15 AM',
    message: '"Attribution dashboard updates automatically. CEO has the report."',
    reactions: [
      { emoji: '📊', count: 6 },
      { emoji: '💪', count: 4 },
    ],
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-purple-600',
  },
  {
    id: '3',
    avatarUrl: 'https://i.pravatar.cc/150?img=36',
    initials: 'GTM',
    name: 'HEAD OF GTM',
    time: '10:08 AM',
    message: '"300 leads in. 300 in HubSpot. Zero leakage."',
    reactions: [
      { emoji: '🎯', count: 9 },
      { emoji: '🚀', count: 7 },
    ],
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-rose-600',
  },
  {
    id: '4',
    avatarUrl: 'https://i.pravatar.cc/150?img=68',
    initials: 'RM',
    name: 'REVOPS MANAGER',
    time: '11:30 AM',
    message: '"Cancelled 7 tools. One system. Saving $4.1k/mo."',
    reactions: [
      { emoji: '💰', count: 11 },
      { emoji: '🎊', count: 6 },
      { emoji: '✨', count: 4 },
    ],
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-orange-500',
  },
];

function SlackMessage({ message, delay, side }: { message: SlackMessage; delay: number; side: 'before' | 'after' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'before' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Message Container */}
      <div className={`flex gap-3 px-3 py-2 -mx-3 rounded transition-all duration-200 ${
        isHovered ? 'bg-white/[0.04]' : ''
      }`}>
        {/* Avatar */}
        <div className="w-9 h-9 rounded flex-shrink-0 overflow-hidden">
          <img
            src={message.avatarUrl}
            alt={message.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name & Time */}
          <div className="flex items-baseline gap-2 mb-0.5">
            <span className="font-bold text-white text-[15px] hover:underline cursor-pointer">
              {message.name}
            </span>
            <span className="text-white/40 text-xs font-normal">
              {message.time}
            </span>
          </div>

          {/* Message Text */}
          <div className="text-[15px] text-white/90 leading-[1.46668] break-words">
            {message.message}
          </div>

          {/* Reactions */}
          {message.reactions && message.reactions.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {message.reactions.map((reaction, idx) => (
                <button
                  key={idx}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-150 cursor-pointer group/reaction"
                >
                  <span className="text-sm leading-none">{reaction.emoji}</span>
                  <span className="text-xs text-white/60 group-hover/reaction:text-white/80 font-medium">
                    {reaction.count}
                  </span>
                </button>
              ))}
              <button className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-150 opacity-0 group-hover:opacity-100">
                <span className="text-xs text-white/60">+</span>
              </button>
            </div>
          )}

          {/* Thread Replies */}
          {message.replies && message.replies > 0 && (
            <button className="flex items-center gap-2 mt-1 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
              <div className="flex -space-x-1">
                <div className={`w-5 h-5 rounded bg-gradient-to-br ${message.gradientFrom} ${message.gradientTo} ring-2 ring-[#1a1d21]`} />
                <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-500 to-pink-500 ring-2 ring-[#1a1d21]" />
              </div>
              <span>{message.replies} {message.replies === 1 ? 'reply' : 'replies'}</span>
              <span className="text-white/40 font-normal">Last reply 2m ago</span>
            </button>
          )}
        </div>

        {/* Hover Actions */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-4 right-0 flex items-center gap-1 bg-brand-black border border-white/10 rounded-lg shadow-2xl p-1"
          >
            {['💬', '⚡', '😊', '⋯'].map((icon, idx) => (
              <button
                key={idx}
                className="w-7 h-7 flex items-center justify-center rounded hover:bg-brand-blue/20 transition-colors text-sm"
              >
                {icon}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function SlackComparison() {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-black">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] text-white/40 uppercase tracking-widest font-semibold mb-4"
          >
            THE PATTERN EVERYONE RECOGNIZES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            Every Revenue Team's Slack
            <br />
            <span className="text-gradient">Looks the Same.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-white/50 text-lg max-w-xl mx-auto"
          >
            Your team lives in Slack. Your insights should too.
          </motion.p>
        </div>

        {/* Before/After Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Red glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-red-500/20 via-red-500/5 to-transparent rounded-3xl blur-2xl opacity-60" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6 shadow-lg shadow-red-500/20">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shadow-lg shadow-red-400/50" />
                <span className="text-sm font-semibold text-red-400 uppercase tracking-wide">Before</span>
              </div>

              <div className="mb-6">
                <h3 className="text-3xl lg:text-4xl font-bold mb-2 font-mono text-red-50">#escalations</h3>
                <div className="flex items-center gap-3 text-white/50">
                  <span className="text-lg font-semibold text-red-300/80">47 unread messages</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">🔔 Notifications on</span>
                </div>
              </div>

              {/* Slack Container */}
              <div className="relative bg-[#1a1d21] border border-red-500/20 rounded-xl overflow-hidden shadow-2xl shadow-red-950/50 ring-1 ring-red-500/10">
                {/* Channel Header */}
                <div className="border-b border-red-500/10 px-5 py-3 bg-gradient-to-b from-red-950/20 to-brand-black/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400/80 text-sm">#</span>
                      <span className="font-semibold text-white text-sm">escalations</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/40">
                      <span className="text-xs">47 members</span>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-5 space-y-4 max-h-[600px] overflow-y-auto">
                  {beforeMessages.map((msg, idx) => (
                    <SlackMessage
                      key={msg.id}
                      message={msg}
                      delay={idx * 0.1}
                      side="before"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Green glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 via-emerald-500/5 to-transparent rounded-3xl blur-2xl opacity-60" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6 shadow-lg shadow-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
                <span className="text-sm font-semibold text-green-400 uppercase tracking-wide">After</span>
              </div>

              <div className="mb-6">
                <h3 className="text-3xl lg:text-4xl font-bold mb-2 font-mono text-green-50">#automations</h3>
                <div className="flex items-center gap-3 text-white/50">
                  <span className="text-lg font-semibold text-green-300/80">System running quietly</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">🟢 All systems operational</span>
                </div>
              </div>

              {/* Slack Container */}
              <div className="relative bg-[#1a1d21] border border-green-500/20 rounded-xl overflow-hidden shadow-2xl shadow-green-950/50 ring-1 ring-green-500/10">
                {/* Channel Header */}
                <div className="border-b border-green-500/10 px-5 py-3 bg-gradient-to-b from-green-950/20 to-brand-black/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400/80 text-sm">#</span>
                      <span className="font-semibold text-white text-sm">automations</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/40">
                      <span className="text-xs">47 members</span>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-5 space-y-4 max-h-[600px] overflow-y-auto">
                  {afterMessages.map((msg, idx) => (
                    <SlackMessage
                      key={msg.id}
                      message={msg}
                      delay={idx * 0.1}
                      side="after"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
