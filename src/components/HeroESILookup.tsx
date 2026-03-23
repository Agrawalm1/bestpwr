"use client";

import { useState } from "react";

// ─── Texas TDU zip-prefix map ──────────────────────────────────────────────
const TDU_ZONES = [
  {
    prefixes: ["750","751","752","753","754","755","756","757","758","759",
               "760","761","762","763","764","765","766","767","768","769"],
    name: "Oncor Electric Delivery",
    abbr: "Oncor",
    badge: "bg-blue-600",
    portal: "https://www.smartmetertexas.com",
    portalLabel: "SmartMeterTexas (Oncor)",
  },
  {
    prefixes: ["770","771","772","773","774","775","776","777","778","779"],
    name: "CenterPoint Energy",
    abbr: "CenterPoint",
    badge: "bg-orange-500",
    portal: "https://www.smartmetertexas.com",
    portalLabel: "SmartMeterTexas (CenterPoint)",
  },
  {
    prefixes: ["780","781","782","783","784","785","786","787","788"],
    name: "AEP Texas Central",
    abbr: "AEP Central",
    badge: "bg-red-600",
    portal: "https://www.smartmetertexas.com",
    portalLabel: "SmartMeterTexas (AEP Central)",
  },
  {
    prefixes: ["789","790","791","792","793","794","795","796","797","798","799"],
    name: "AEP Texas North",
    abbr: "AEP North",
    badge: "bg-red-700",
    portal: "https://www.smartmetertexas.com",
    portalLabel: "SmartMeterTexas (AEP North)",
  },
  {
    prefixes: ["733","734","736","738","739","733"],
    name: "Texas-New Mexico Power",
    abbr: "TNMP",
    badge: "bg-purple-600",
    portal: "https://www.smartmetertexas.com",
    portalLabel: "SmartMeterTexas (TNMP)",
  },
];

function detectTDU(input: string) {
  const zip = (input.match(/\b(\d{5})\b/) || [])[1];
  if (!zip) return null;
  const prefix = zip.slice(0, 3);
  return TDU_ZONES.find((z) => z.prefixes.includes(prefix)) ?? null;
}

export default function HeroESILookup() {
  const [address, setAddress] = useState("");
  const [tdu, setTdu] = useState<(typeof TDU_ZONES)[0] | null>(null);
  const [notFound, setNotFound] = useState(false);

  function handleIdentify(e: React.FormEvent) {
    e.preventDefault();
    const result = detectTDU(address);
    if (result) {
      setTdu(result);
      setNotFound(false);
    } else {
      setTdu(null);
      setNotFound(true);
    }
  }

  const showButton = address.trim().length > 0;

  return (
    <div
      className="w-full max-w-lg mx-auto mt-8 rounded-2xl p-6"
      style={{
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      }}
    >
      <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-3">
        Find Your Utility Provider
      </p>

      <form onSubmit={handleIdentify} className="flex flex-col gap-3">
        <input
          type="text"
          value={address}
          onChange={(e) => { setAddress(e.target.value); setTdu(null); setNotFound(false); }}
          placeholder="Enter your address or ZIP code"
          className="w-full rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60"
        />

        {showButton && (
          <button
            type="submit"
            className="w-full bg-white text-[#238C23] font-bold py-3 rounded-xl text-sm hover:bg-gray-100 transition-colors"
          >
            Identify My Utility →
          </button>
        )}
      </form>

      {/* Result */}
      {tdu && (
        <div className="mt-4 rounded-xl bg-white/90 p-4 flex items-start gap-3">
          <span className={`mt-0.5 shrink-0 text-white text-xs font-bold px-2.5 py-1 rounded-full ${tdu.badge}`}>
            {tdu.abbr}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900">{tdu.name}</p>
            <p className="text-xs text-gray-500 mt-0.5">
              Your ESI ID is managed through this portal:
            </p>
            <a
              href={tdu.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs font-bold text-[#238C23] hover:underline"
            >
              Look up my ESI ID on {tdu.portalLabel} →
            </a>
          </div>
        </div>
      )}

      {notFound && (
        <p className="mt-3 text-white/70 text-xs text-center">
          Could not detect a Texas TDU. Please include a valid Texas ZIP code.
        </p>
      )}
    </div>
  );
}
