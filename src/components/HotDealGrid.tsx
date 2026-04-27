import { AFFILIATE_LINKS } from "@/lib/affiliates";

interface Deal {
  label: string;
  provider: string;
  rate: string;
  rateUnit: string;
  term: string;
  description: string;
  href: string;
  badge?: string;
  featured?: boolean;
}

const deals: Deal[] = [
  {
    featured: true,
    badge: "Price Dropped Today",
    label: "🏆 Best 12-Month Rate",
    provider: "Best Available Plan",
    rate: "7.2¢",
    rateUnit: "per kWh",
    term: "12-Month Fixed",
    description:
      "The lowest fixed 12-month rate available in your area right now. Lock it in before it's gone.",
    href: AFFILIATE_LINKS.best12Month,
  },
  {
    label: "Best 100% Green Plan",
    provider: "Best Available Plan",
    rate: "9.1¢",
    rateUnit: "per kWh",
    term: "12-Month Fixed · 100% Renewable",
    description:
      "Fully renewable energy at a competitive rate. Good for the planet and your wallet.",
    href: AFFILIATE_LINKS.bestGreenPlan,
  },
];

function DealCard({ deal }: { deal: Deal }) {
  return (
    <div
      className="relative flex flex-col h-full rounded-2xl p-8 bg-white"
      style={
        deal.featured
          ? { boxShadow: "0 0 0 2px #238C23, 0 0 24px 4px rgba(35,140,35,0.25), 0 4px 32px rgba(0,0,0,0.08)" }
          : { boxShadow: "0 1px 4px rgba(0,0,0,0.08)", border: "1px solid #e5e7eb" }
      }
    >
      {/* Badge */}
      {deal.badge && (
        <span className="absolute -top-3 left-6 bg-[#238C23] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
          {deal.badge}
        </span>
      )}

      {/* Content — grows to fill card */}
      <div className="flex flex-col gap-4 flex-1">
        <p className="text-xs font-bold uppercase tracking-widest text-[#238C23]">{deal.label}</p>
        <h3 className="text-xl font-black text-gray-900">{deal.provider}</h3>

        <div className="flex items-end gap-2">
          <span className="text-5xl font-black text-[#238C23] leading-none">{deal.rate}</span>
          <span className="text-gray-500 text-sm pb-1">{deal.rateUnit}</span>
        </div>

        <p className="text-sm font-semibold text-gray-500">{deal.term}</p>
        <p className="text-gray-600 leading-relaxed text-sm">{deal.description}</p>
      </div>

      {/* Button — always pinned to bottom */}
      <a
        href={deal.href}
        className="mt-8 block text-center bg-[#238C23] hover:bg-[#1a6b1a] text-white font-bold py-4 rounded-xl transition-colors"
      >
        Shop This Deal →
      </a>
    </div>
  );
}

export default function HotDealGrid() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Today&#x27;s Hot Deals</h2>
          <p className="text-gray-500">Rates updated daily. Lock in before they change.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deals.map((deal) => (
            <DealCard key={deal.label} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
}
