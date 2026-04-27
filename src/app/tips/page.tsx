import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/lib/links";

export const metadata: Metadata = {
  title: "Texas Electricity Tips & Guides",
  description: "Learn how to save money on electricity in Texas. Guides on switching providers, fixed vs. variable rates, understanding your bill, and more.",
  keywords: ["Texas electricity tips", "how to switch electricity providers Texas", "fixed vs variable rate electricity", "Texas electricity bill explained", "when to switch electricity Texas"],
};

const TIPS = [
  {
    id: "when-to-switch",
    title: "When is the best time to switch electricity providers in Texas?",
    summary: "Timing your switch right can save you hundreds. Here's what to know.",
    body: [
      "The best time to switch is 30 days before your current contract expires. Most providers require notice before your contract ends — if you miss the window, you'll automatically roll onto a variable month-to-month rate that can be 30–50% higher.",
      "Spring (March–May) is historically the best season to lock in a rate. Demand is low, so providers compete aggressively on price. By June, summer heat drives up demand and rates follow.",
      "If you're currently on a variable plan, switch immediately — you're at the market's mercy every month. A fixed 12-month plan gives you price certainty through the Texas summer peak.",
      "Avoid switching in July or August unless your current situation is terrible. Providers know demand is high and rates reflect it. If you must switch mid-summer, lock in the longest fixed term available to ride out the peak.",
    ],
  },
  {
    id: "fixed-vs-variable",
    title: "Fixed vs. variable rate electricity plans: which is right for you?",
    summary: "Understanding the difference could save you from a nasty bill surprise.",
    body: [
      "A fixed-rate plan locks your price per kWh for the entire contract — typically 12 or 24 months. Your rate won't change even if ERCOT prices spike during a heat wave or a winter storm. This is what most Texas households should choose.",
      "A variable-rate plan fluctuates month to month based on wholesale market prices. When the market is calm, variable rates can dip below fixed rates. But during extreme weather events — like Winter Storm Uri in 2021 — variable-rate customers have received bills in the thousands.",
      "The bottom line: fixed-rate plans are the safe, predictable choice for most families. Variable plans are only worth considering if you actively monitor the market and have the flexibility to switch quickly.",
      "When comparing fixed plans, always check the Electricity Facts Label (EFL) for the all-in price at 1,000 kWh per month. Some plans advertise a low headline rate but charge a base fee that makes the true cost much higher.",
    ],
  },
  {
    id: "contract-expires",
    title: "What happens when your electricity contract expires?",
    summary: "Don't let your provider quietly move you to a higher rate.",
    body: [
      "When a fixed-rate contract ends, most Texas providers automatically move you to a month-to-month variable rate. This rate is almost always higher — sometimes significantly — and you may not receive a clear notification that it happened.",
      "Set a calendar reminder 45 days before your contract end date. That gives you time to compare plans, sign up with a new provider, and complete the switch before your contract lapses.",
      "Your contract end date is listed on your monthly bill. You can also call your current provider to confirm. Some providers offer early renewal options — locking in a new rate 30–60 days before expiration — which can be worth it if rates are rising.",
      "There is no fee to switch providers in Texas. The only cost you might incur is an early termination fee (ETF) from your current provider if you leave before your contract ends — typically $100–$200. Always check your current contract before switching early.",
    ],
  },
  {
    id: "summer-prices",
    title: "Why do Texas electricity prices spike in the summer?",
    summary: "ERCOT, air conditioning, and why locking in now matters.",
    body: [
      "Texas runs on its own grid — ERCOT — which is largely isolated from the rest of the country. That means when demand surges, Texas can't easily import power from neighboring states. During summer heat waves, when every home and business is running AC at full blast, the grid operates near its limits.",
      "High demand pushes wholesale electricity prices up sharply. Providers who buy power on the spot market pass those costs on to variable-rate customers immediately. Fixed-rate customers are insulated — their price is locked regardless of what the market does.",
      "Historically, Texas electricity rates are lowest in spring (March–May) and fall (September–October), and highest in June–August. If you're reading this in spring, now is one of the best windows of the year to lock in a rate.",
      "With data center construction accelerating across Texas, grid demand is projected to keep climbing through the late 2020s. Analysts expect summer peaks to become more intense — another reason to favor fixed-rate plans.",
    ],
  },
  {
    id: "read-your-bill",
    title: "How to read your Texas electricity bill",
    summary: "Know what you're actually paying for before you switch.",
    body: [
      "Your Texas electricity bill has two main parts: the energy charge (your rate per kWh times your usage) and the delivery charge (what your local utility like Oncor charges to maintain the power lines). You can only shop and switch the energy charge — the delivery charge is fixed by your utility and stays the same regardless of provider.",
      "Look for a base charge or customer charge — a flat monthly fee on top of your per-kWh rate. A plan advertised at 6.5¢/kWh with a $9.95 base charge may cost more per month than a 7.2¢/kWh plan with no base fee, depending on your usage.",
      "The Electricity Facts Label (EFL) is the standardized document every Texas provider must publish. It shows the all-in average price at 500, 1,000, and 2,000 kWh per month. Always compare EFLs — not just headline rates — when shopping plans.",
      "Your ESI ID (Electric Service Identifier) is a 17-digit number on your bill tied to your meter. New providers need it to process a switch. You can find it on your bill or use our ESI Lookup tool to retrieve it instantly.",
    ],
  },
];

export default function TipsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-14">
      {/* Header */}
      <div id="top">
        <h1 className="text-3xl font-black text-slate-800 mb-2">Texas Electricity Tips</h1>
        <p className="text-slate-500 mb-8">
          Practical guides to help you pay less for electricity in Texas — without the jargon.
        </p>
      </div>

      {/* Table of contents */}
      <nav className="rounded-2xl border border-slate-200 bg-slate-50 p-6 mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">In this guide</p>
        <ol className="flex flex-col gap-2">
          {TIPS.map((tip, i) => (
            <li key={tip.id} className="flex items-start gap-3">
              <span className="shrink-0 w-5 h-5 rounded-full bg-[#238C23] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <a
                href={`#${tip.id}`}
                className="text-sm text-slate-700 hover:text-[#238C23] font-medium transition-colors leading-snug"
              >
                {tip.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Articles */}
      <div className="flex flex-col gap-10">
        {TIPS.map((tip, i) => (
          <article key={tip.id} id={tip.id} className="scroll-mt-24">
            <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md p-7">
              {/* Article header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#238C23] text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <h2 className="text-lg font-black text-slate-800 leading-snug">{tip.title}</h2>
              </div>
              <p className="text-sm text-[#238C23] font-semibold mb-5 pl-10">{tip.summary}</p>
              <div className="flex flex-col gap-3 pl-10">
                {tip.body.map((paragraph, j) => (
                  <p key={j} className="text-sm text-slate-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* Back to top */}
              <div className="mt-6 pt-5 border-t border-slate-100 pl-10">
                <a href="#top" className="text-xs text-slate-400 hover:text-[#238C23] font-semibold transition-colors">
                  ↑ Back to top
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div
        className="mt-12 rounded-2xl p-8 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0D4F5C 0%, #082F38 100%)" }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Ready to Save?</p>
        <h2 className="text-2xl font-black mb-2">Compare plans and lock in your rate today.</h2>
        <p className="text-sm text-white/70 mb-6">
          Texas fixed rates are near their spring lows. Don&apos;t wait for summer.
        </p>
        <Link
          href={CTA.shop}
          className="inline-block bg-[#238C23] hover:bg-[#1a6b1a] text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
        >
          Shop Electricity Plans →
        </Link>
      </div>
    </main>
  );
}
