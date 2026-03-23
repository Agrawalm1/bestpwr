const TESTIMONIALS = [
  {
    quote: "I had no idea I was on a holdover rate paying 14¢/kWh. BESTPWR found me a 12-month fixed plan at 7.9¢ in about 5 minutes. Switching was completely painless.",
    name: "Marcus T.",
    location: "Dallas, TX",
    saving: "Saving $180/yr",
  },
  {
    quote: "The provider comparison saved me from a plan with a sneaky base fee that would have cost more than the cheaper headline rate. Really glad I used this before signing up.",
    name: "Priya R.",
    location: "Houston, TX",
    saving: "Saving $220/yr",
  },
  {
    quote: "I wanted 100% renewable and was expecting to pay a premium. Found a green plan at 9.1¢ that's actually cheaper than what my neighbor pays on a standard plan.",
    name: "Carlos M.",
    location: "Austin, TX",
    saving: "Saving $150/yr",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#238C23] mb-2">What Customers Say</p>
          <h2 className="text-2xl font-black text-gray-900">Real Texans. Real savings.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, location, saving }) => (
            <div key={name} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
              <div>
                <p className="text-sm font-bold text-gray-900">{name}</p>
                <p className="text-xs text-slate-400">{location}</p>
                <span className="inline-block mt-2 text-xs font-bold text-[#238C23] bg-[#238C23]/10 px-2.5 py-1 rounded-full">
                  {saving}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
