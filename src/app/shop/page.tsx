import type { Metadata } from "next";
import { IFRAME_URL } from "@/lib/affiliates";

export const metadata: Metadata = {
  title: "Shop Electricity Plans — BESTPWR",
  description: "Compare and shop the best Texas electricity plans from top providers. Fixed rates, no hidden fees.",
};

export default function ShopPage() {
  return (
    <main className="flex flex-col" style={{ minHeight: "calc(100vh - 64px)" }}>
      {/* Header bar */}
      <div className="bg-[#0D4F5C] text-white py-6 px-4 text-center">
        <h1 className="text-2xl font-black mb-1">Compare & Shop Texas Electricity Plans</h1>
        <p className="text-sm text-white/75">
          All plans are fixed-rate with no hidden fees. Select a plan to get started.
        </p>
      </div>

      {/* Embedded partner app */}
      <div className="flex-1 w-full">
        <iframe
          src={IFRAME_URL}
          title="Shop Electricity Plans"
          className="w-full border-0"
          style={{ minHeight: "calc(100vh - 160px)", height: "100%" }}
          allow="payment"
        />
      </div>
    </main>
  );
}
