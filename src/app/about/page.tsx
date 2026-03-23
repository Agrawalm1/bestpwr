import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — BESTPWR",
  description: "Independent Texas electricity brokers helping you find the best rate without the sales pitch.",
};

const VALUES = [
  {
    icon: "⚡",
    title: "Truly Independent",
    body: "We are not owned by any electricity provider. We compare plans across the market and surface the best options — full stop.",
  },
  {
    icon: "🔍",
    title: "Transparent by Design",
    body: "No hidden tiers, no bait-and-switch rates. Every plan we feature includes the full Electricity Facts Label so you know exactly what you're signing up for.",
  },
  {
    icon: "🌿",
    title: "Green Options Always Included",
    body: "We believe renewable energy should be price-competitive. We always surface the best 100% green plan alongside the lowest-cost standard plan.",
  },
  {
    icon: "📍",
    title: "Texas-Only Focus",
    body: "We don't try to serve 50 states. BESTPWR is built specifically for the ERCOT deregulated market — which means deeper data and better recommendations for Texans.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative text-white py-20 px-4 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1643080729141-0c10cc827d80?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,79,92,0.65) 0%, rgba(8,47,56,0.60) 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3">About BESTPWR</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
            Simplifying Texas electricity — one household at a time.
          </h1>
          <p className="text-lg font-light text-white/80 max-w-xl mx-auto">
            We&apos;re an independent broker, not a provider. Our only job is to cut through the noise and help you find the plan that actually saves you money.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Texas has one of the most competitive electricity markets in the world — over 100 retail providers competing for your business. That&apos;s great in theory, but in practice it creates a confusing maze of plans, tiers, and fine print that most people don&apos;t have time to navigate.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            BESTPWR was built to fix that. We aggregate current market rates, strip away the junk, and show you the actual best plan for your home — whether you care most about price, green energy, or contract flexibility.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We earn a small referral fee when you sign up through our links. The best rate always wins.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(160deg, #f0fdf4 0%, #f8fafc 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            BESTPWR started when our founders — frustrated Texas homeowners — realized they were paying 40% more than their neighbors for the same electricity after letting their contracts lapse onto a holdover rate.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            After manually comparing dozens of plans to find the best deal, they decided to build the tool they wished existed: a clean, honest rate comparison site with no dark patterns and no inflated &quot;featured&quot; placements.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today we help thousands of Texas households switch to better plans each year — saving the average customer over $200 annually compared to their holdover rate.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
