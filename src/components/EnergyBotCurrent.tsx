"use client";

import Script from "next/script";
import { ENERGYBOT } from "@/lib/links";

export default function EnergyBotCurrent() {
  const c = ENERGYBOT.currentChart;
  type WebDiv = React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>;
  const Div = "div" as unknown as React.ComponentType<WebDiv>;

  return (
    <>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Current Market Rates</p>
      {/* Attributes preserved exactly as deployed */}
      <Div
        data-eb-component={c.component}
        style={{ height: c.height }}
        business={c.business}
        state-code={c.stateCode}
        utility-code={c.utilityCode}
      />
      <Script src={ENERGYBOT.scriptSrc} strategy="afterInteractive" />
    </>
  );
}
