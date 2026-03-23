"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV } from "@/lib/links";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 520);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#0F172A] border-t border-white/10 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-full">
        <p className="text-white text-sm font-semibold text-center sm:text-left">
          ⚡ Rates are near a 2-year low. Lock in a fixed rate before summer demand spikes.
        </p>
        <Link
          href={NAV.shop}
          className="shrink-0 bg-[#238C23] hover:bg-[#1a6b1a] text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap"
        >
          Shop Plans Now →
        </Link>
      </div>
    </div>
  );
}
