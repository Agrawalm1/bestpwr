"use client";

import Script from "next/script";
import { ENERGYBOT } from "@/lib/links";

export default function EnergyBotHistorical() {
  const h = ENERGYBOT.historicalChart;
  type WebDiv = React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>;
  const Div = "div" as unknown as React.ComponentType<WebDiv>;

  return (
    <>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">12-Month Rate Trend</p>
      {/* Attributes preserved exactly as deployed */}
      <Div
        data-eb-component={h.component}
        style={{ height: h.height }}
        line-color={h.lineColor}
        text-color={h.textColor}
        type={h.type}
        business={h.business}
        state={h.state}
        utility={h.utility}
        days={h.days}
      />
      <Script src={ENERGYBOT.scriptSrc} strategy="afterInteractive" />
    </>
  );
}
