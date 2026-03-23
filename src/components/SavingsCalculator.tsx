"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV, RATES } from "@/lib/links";

const BEST_RATE = RATES.bestRate;

export default function SavingsCalculator() {
  const [usage, setUsage] = useState(1000);
  const [currentRate, setCurrentRate] = useState(13);

  const currentBill = (usage * currentRate) / 100;
  const bestBill    = (usage * BEST_RATE) / 100;
  const monthlySave = currentBill - bestBill;
  const yearlySave  = monthlySave * 12;
  const saving      = monthlySave > 0;

  return (
    <section
      className="py-16 px-4"
      style={{ background: "linear-gradient(160deg, #f0fdf4 0%, #f8fafc 100%)" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#238C23] mb-2">Savings Calculator</p>
          <h2 className="text-2xl font-black text-gray-900">See how much you could save.</h2>
          <p className="text-sm text-slate-500 mt-2">Based on today&apos;s best available 12-month fixed rate of {BEST_RATE}¢/kWh.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col gap-8">
          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                Monthly Usage — <span className="text-[#238C23]">{usage.toLocaleString()} kWh</span>
              </label>
              <input
                type="range"
                min={300}
                max={3000}
                step={50}
                value={usage}
                onChange={(e) => setUsage(Number(e.target.value))}
                className="w-full accent-[#238C23]"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>300 kWh</span><span>3,000 kWh</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                Your Current Rate — <span className="text-[#238C23]">{currentRate}¢/kWh</span>
              </label>
              <input
                type="range"
                min={7}
                max={20}
                step={0.1}
                value={currentRate}
                onChange={(e) => setCurrentRate(Number(e.target.value))}
                className="w-full accent-[#238C23]"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>7¢</span><span>20¢</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className={`rounded-xl p-6 text-center ${saving ? "bg-[#238C23]/8 border border-[#238C23]/20" : "bg-slate-50 border border-slate-200"}`}>
            {saving ? (
              <>
                <p className="text-xs font-bold uppercase tracking-widest text-[#238C23] mb-1">Estimated Savings</p>
                <p className="text-5xl font-black text-[#238C23] leading-none mb-1">
                  ${yearlySave.toFixed(0)}<span className="text-xl font-bold">/yr</span>
                </p>
                <p className="text-sm text-slate-500 mb-5">
                  That&apos;s <strong>${monthlySave.toFixed(0)}/month</strong> switching from {currentRate}¢ to {BEST_RATE}¢/kWh.
                </p>
                <Link
                  href={NAV.shop}
                  className="inline-block bg-[#238C23] hover:bg-[#1a6b1a] text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
                >
                  Lock In This Rate →
                </Link>
              </>
            ) : (
              <>
                <p className="text-sm font-semibold text-slate-500">
                  You&apos;re already near the best available rate. Nice work!
                </p>
                <p className="text-xs text-slate-400 mt-1">Adjust your current rate above to see potential savings.</p>
              </>
            )}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-slate-400 text-center -mt-4">
            Estimate only. Actual savings vary based on your utility, usage tier, and plan terms. Always review the Electricity Facts Label before signing up.
          </p>
        </div>
      </div>
    </section>
  );
}
