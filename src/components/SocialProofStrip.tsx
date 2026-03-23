const STATS = [
  { value: "100+",   label: "Plans compared" },
  { value: "4.8 ★", label: "Customer rating" },
];

export default function SocialProofStrip() {
  return (
    <div className="bg-[#0D4F5C] text-white py-5 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6 text-center">
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <p className="text-2xl font-black">{value}</p>
            <p className="text-xs text-white/65 uppercase tracking-widest mt-0.5">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
