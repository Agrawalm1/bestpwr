"use client";

const PROVIDERS = [
  {
    name: "Gexa Energy",
    logo: "https://electricityplans.com/texas/wp-content/uploads/sites/2/2019/03/Gexa-Energy-365x190.jpg",
  },
  {
    name: "Just Energy",
    logo: "https://justenergy.com/wp-content/uploads/2018/11/just-energy-logo-1.png",
  },
  {
    name: "Rhythm",
    logo: "https://electricityplans.com/texas/wp-content/uploads/sites/2/2021/01/Rhythm-logo.jpg",
  },
  {
    name: "TXU Energy",
    logo: "https://electricityplans.com/texas/wp-content/uploads/sites/2/2019/10/TXU-logo-365x190.jpg",
  },
  {
    name: "Reliant",
    logo: "https://wheelock.nrg.com/app/assets/images/reliant-logo.png",
  },
];

export default function ProviderBanner() {
  return (
    <div className="bg-white border-b border-slate-100 py-5 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Plans from top Texas providers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {PROVIDERS.map(({ name, logo }) => (
            <div key={name} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt={name}
                style={{ height: "28px", width: "auto", objectFit: "contain" }}
                onError={(e) => {
                  // Fall back to text if logo fails to load
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              <span
                className="hidden text-xs font-bold uppercase tracking-widest text-slate-500"
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
