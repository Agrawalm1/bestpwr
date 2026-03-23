import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find My ESI ID — BESTPWR",
  description: "Look up your Electric Service Identifier (ESI ID) by address and find your Texas utility provider.",
};

const FAQS = [
  {
    q: "What is an ESI ID?",
    a: "Your Electric Service Identifier (ESI ID) is a 17-digit number tied to your physical meter. It identifies your specific service location within the Texas deregulated electricity market.",
  },
  {
    q: "Why do I need it?",
    a: "When switching electricity providers, your new REP uses the ESI ID to locate your meter and complete the transfer. Without it, the switch can be delayed or fail.",
  },
  {
    q: "Where else can I find it?",
    a: "It's printed on your current electricity bill, usually labeled 'ESIID' or 'ESI ID'. You can also find it on SmartMeterTexas.com using your service address.",
  },
  {
    q: "Does switching affect my service?",
    a: "No. Your lights, outlets, and appliances stay on throughout the transfer. Only the billing company changes — the physical power lines are always operated by your local utility.",
  },
];

export default function ESILookupPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#238C23] text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3">ESI ID Lookup</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-3">
            Find your utility provider.
          </h1>
          <p className="text-lg font-light text-white/80">
            Enter your service address below to look up your ESI ID — the 17-digit number you need to switch electricity providers in Texas.
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: "linear-gradient(160deg, #f0fdf4 0%, #f8fafc 100%)" }}>
        <div className="max-w-4xl mx-auto flex flex-col gap-12">

          {/* Lookup tool */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 flex flex-col items-center text-center gap-6">
            <div className="w-14 h-14 rounded-full bg-[#f0fdf4] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#238C23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Look up your ESI ID</h2>
              <p className="text-sm text-slate-500 max-w-sm">
                Enter your service address on EnergyBot&apos;s free lookup tool to find your 17-digit ESI ID instantly.
              </p>
            </div>
            <a
              href="https://www.energybot.com/esid-lookup.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#238C23] hover:bg-[#1a6b1a] text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Find My ESI ID →
            </a>
            <p className="text-xs text-slate-400">Opens in a new tab &middot; Free, no sign-up required &middot; Lookup powered by EnergyBot</p>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-6">Frequently asked questions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FAQS.map(({ q, a }) => (
                <div key={q}>
                  <p className="text-sm font-bold text-gray-900 mb-1">{q}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-white border-t border-slate-100 text-center">
        <p className="text-sm text-slate-500 mb-4">Ready to find a better rate?</p>
        <a
          href="/shop"
          className="inline-block bg-[#238C23] hover:bg-[#1a6b1a] text-white font-bold px-8 py-3 rounded-lg transition-colors"
        >
          Shop Electricity Plans →
        </a>

      </section>
    </main>
  );
}
