import MarketInsights from "@/components/MarketInsights";
import { AFFILIATE_LINKS } from "@/lib/affiliates";
import { RATES } from "@/lib/links";

// ─── Section label ─────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">
        {children}
      </p>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}

// ─── Shared tile wrapper ────────────────────────────────────────────────────
function Tile({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md p-6 ${className}`}>
      {children}
    </div>
  );
}

// ─── Deal card ─────────────────────────────────────────────────────────────
function DealCard({
  badge, label, rate, term, description, href, featured,
}: {
  badge?: string; label: string; rate: string; term: string;
  description: string; href: string; featured?: boolean;
}) {
  return (
    <div
      className="relative flex flex-col h-full"
      style={featured ? { filter: "drop-shadow(0 0 14px rgba(35,140,35,0.22))" } : undefined}
    >
      {badge && (
        <span className="absolute -top-3 left-4 z-10 bg-[#238C23] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
          {badge}
        </span>
      )}
      <div
        className="flex flex-col flex-1 rounded-2xl border p-6"
        style={featured
          ? { border: "2px solid #238C23", background: "rgba(255,255,255,0.95)" }
          : { border: "1px solid #e2e8f0", background: "rgba(255,255,255,0.80)" }
        }
      >
        <p className="text-xs font-bold uppercase tracking-widest text-[#238C23] mb-3">{label}</p>
        <div className="flex items-end gap-2 mb-2">
          <span className="text-5xl font-black text-[#238C23] leading-none">{rate}</span>
          <span className="text-slate-400 text-sm pb-1">per kWh</span>
        </div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">{term}</p>
        <p className="text-sm text-slate-600 leading-relaxed flex-1">{description}</p>
        <a
          href={href}
          className="mt-6 block text-center bg-[#238C23] hover:bg-[#1a6b1a] text-white font-bold py-3 rounded-xl transition-colors text-sm"
        >
          Shop This Deal →
        </a>
      </div>
    </div>
  );
}

// ─── Market Alert tile ──────────────────────────────────────────────────────
function MarketAlertTile() {
  return (
    <Tile className="flex flex-col justify-between h-full">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
          📉 Market Alert
        </p>
        <div className="mb-1">
          <span className="text-4xl font-black text-[#238C23] leading-none">{RATES.weeklyChange}</span>
        </div>
        <p className="text-sm font-semibold text-gray-700 mb-4">
          Avg. fixed rates dropped this week
        </p>
        <div className="space-y-2">
          {[
            { label: "Last week avg", value: `${RATES.lastWeekAvg}¢`, highlight: false },
            { label: "This week avg", value: `${RATES.bestRate}¢`, highlight: true },
          ].map((row) => (
            <div key={row.label} className="flex justify-between items-center text-sm">
              <span className="text-slate-500">{row.label}</span>
              <span className={row.highlight ? "font-black text-[#238C23]" : "font-semibold text-slate-400 line-through"}>
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 rounded-xl bg-[#238C23]/8 border border-[#238C23]/20 p-3">
        <p className="text-xs text-[#238C23] font-semibold leading-snug">
          ⚡ Summer demand typically pushes prices above 13¢ in June. Now is a good time to lock in.
        </p>
      </div>
    </Tile>
  );
}

// ─── Main grid ──────────────────────────────────────────────────────────────
export default function BentoGrid() {
  return (
    <section
      className="py-14 px-4"
      style={{ background: "linear-gradient(160deg, #f0fdf4 0%, #f8fafc 60%, #f1f5f9 100%)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* ── Section 1: Today's Best Rates ── */}
        <div>
          <SectionLabel>Today&apos;s Best Rates</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <DealCard
              featured
              badge="Price Dropped Today"
              label="🏆 Lowest 12-Month Rate"
              rate={`${RATES.bestRate}¢`}
              term="12-Month Fixed"
              description="The lowest fixed 12-month rate in Texas right now. Lock it in before it's gone — analysts expect summer prices to spike above 13¢."
              href={AFFILIATE_LINKS.best12Month}
            />
            <DealCard
              label="🌿 Best 100% Green Plan"
              rate={`${RATES.greenRate}¢`}
              term="12-Month Fixed · 100% Renewable"
              description="Fully renewable energy at a competitive rate. Good for the planet and your wallet."
              href={AFFILIATE_LINKS.bestGreenPlan}
            />
            <MarketAlertTile />
          </div>
        </div>

        {/* ── Section 2: Before You Switch ── */}
        <div>
          <SectionLabel>Before You Switch</SectionLabel>
          <MarketInsights />
        </div>

      </div>
    </section>
  );
}
