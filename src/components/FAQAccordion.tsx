"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is it safe to switch electricity providers?",
    a: "Yes. Switching providers in Texas is completely safe. Your local utility (Oncor, CenterPoint, etc.) still owns and maintains the physical power lines and responds to outages. Only the company that sends your bill changes. There are no service interruptions during a transfer.",
  },
  {
    q: "How long does switching take?",
    a: "Most switches complete within 1–3 business days. If you time it before your current contract expires, there are no early termination fees and no gap in service.",
  },
  {
    q: "What is a fixed-rate plan?",
    a: "A fixed-rate plan locks your rate per kWh for the length of your contract — typically 12 or 24 months. Your rate won't change even if the market spikes, which protects you during hot Texas summers when spot prices can double.",
  },
  {
    q: "What happens when my contract expires?",
    a: "If you don't switch before your contract ends, most providers automatically move you to a month-to-month variable rate — often 30–50% higher than your fixed rate. We recommend shopping 30 days before expiration.",
  },
  {
    q: "Are there fees for switching?",
    a: "Switching to a new provider is free. However, leaving your current provider before your contract ends may trigger an early termination fee (typically $100–$200). Check your current contract first.",
  },
  {
    q: "What is an ESI ID and why do I need it?",
    a: "Your ESI ID (Electric Service Identifier) is a 17-digit number tied to your meter. New providers use it to locate your service point and complete the transfer. You can find it on your current bill or use our ESI Lookup tool.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="text-sm font-semibold text-gray-900">{q}</span>
        <span className={`shrink-0 w-5 h-5 rounded-full border-2 border-[#238C23] flex items-center justify-center transition-transform ${open ? "rotate-45" : ""}`}>
          <svg className="w-3 h-3 text-[#238C23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-64 pb-4" : "max-h-0"}`}>
        <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#238C23] mb-2">FAQ</p>
          <h2 className="text-2xl font-black text-gray-900">Common questions answered.</h2>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50 px-6 divide-y divide-slate-100">
          {FAQS.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
