"use client";

import { useState } from "react";
import { Zap, Bell, CheckCircle } from "lucide-react";
import Modal from "@/components/Modal";

// ─── Tile data ────────────────────────────────────────────────────────────────
const INSIGHTS = [
  {
    icon: Zap,
    iconColor: "text-[#238C23]",
    iconBg: "bg-[#238C23]/10",
    title: "Texas Deregulation",
    summary:
      "You have the power to choose. Competition among 100+ providers drives lower rates and more innovation.",
    modalTitle: "How Texas Deregulation Works",
    detail: (
      <>
        <p>
          Texas is one of only a handful of states with a fully deregulated electricity market. Instead
          of one utility controlling generation and pricing, over 100 retail electricity providers (REPs)
          compete for your business — which means you get to choose who you pay and at what rate.
        </p>
        <p>
          Your local utility (Oncor, CenterPoint, AEP, etc.) still owns and maintains the physical
          power lines and responds to outages. But your bill and your rate are set by whichever REP you
          pick. Switching is free, takes 1–3 business days, and your lights never go out during the
          transfer.
        </p>
        <p>
          The result: Texans in deregulated zones consistently see rates 10–20% lower than customers
          locked into regulated monopoly utilities in other states.
        </p>
      </>
    ),
  },
  {
    icon: Bell,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    title: "Watch Your Expiration",
    summary:
      "Don't get stuck on a variable holdover rate. Switch 14 days before your contract ends to avoid a bill shock.",
    modalTitle: "Why Contract Timing Matters",
    detail: (
      <>
        <p>
          When a fixed-rate plan expires, most providers automatically move you to a month-to-month
          variable rate — often 30–50% higher than your contract rate. This happens quietly, with only
          a small notice buried in your bill.
        </p>
        <p>
          The safest move: start shopping 30 days before your contract end date and switch at least
          14 days before expiration. That window gives your new provider enough time to process the
          transfer before your old plan lapses.
        </p>
        <p>
          Check your contract end date on your current bill or provider's website, then come back here
          to compare the best fixed rates before the holdover kicks in.
        </p>
      </>
    ),
  },
  {
    icon: CheckCircle,
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50",
    title: "Key Factors to Compare",
    summary:
      "Look beyond the headline rate. We help you find plans with no hidden fees or tricky usage tiers.",
    modalTitle: "What to Actually Look For in a Plan",
    detail: (
      <>
        <p>
          The advertised rate (e.g., 7.9¢/kWh) is often calculated at a specific usage level — typically
          1,000 kWh/month. Use more or less and the effective rate can jump significantly because of
          tiered pricing structures.
        </p>
        <div className="space-y-3">
          {[
            { term: "Base charge", def: "A flat monthly fee regardless of usage. A $9.95/month base fee adds ~1¢/kWh to your effective rate at 1,000 kWh." },
            { term: "Usage tiers", def: "Some plans charge a different rate below 500 kWh or above 2,000 kWh. Read the EFL (Electricity Facts Label) carefully." },
            { term: "Early termination fee", def: "Switching before your contract ends can cost $100–$200. Know this before you lock in a long-term plan." },
            { term: "Renewable content", def: "100% renewable doesn't always cost more. Compare green plans alongside standard ones." },
          ].map(({ term, def }) => (
            <div key={term}>
              <p className="font-semibold text-gray-800">{term}</p>
              <p>{def}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

// ─── Single insight tile ──────────────────────────────────────────────────────
function InsightTile({ tile }: { tile: (typeof INSIGHTS)[0] }) {
  const [open, setOpen] = useState(false);
  const Icon = tile.icon;

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col gap-4">
        {/* Icon */}
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tile.iconBg}`}>
          <Icon className={`w-5 h-5 ${tile.iconColor}`} strokeWidth={2} />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-sm font-bold text-gray-900 mb-1">{tile.title}</h3>
          <p className="text-xs text-slate-500 leading-relaxed">{tile.summary}</p>
        </div>

        {/* Learn More */}
        <button
          onClick={() => setOpen(true)}
          className="self-start text-xs font-bold text-[#238C23] hover:underline"
        >
          Learn More →
        </button>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} title={tile.modalTitle}>
        {tile.detail}
      </Modal>
    </>
  );
}

// ─── Grid ─────────────────────────────────────────────────────────────────────
export default function MarketInsights() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {INSIGHTS.map((tile) => (
        <InsightTile key={tile.title} tile={tile} />
      ))}
    </div>
  );
}
