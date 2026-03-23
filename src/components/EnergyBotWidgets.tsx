"use client";

import Script from "next/script";
import { ENERGYBOT } from "@/lib/links";

// Web component elements use non-standard HTML attributes.
// Using type cast so TypeScript doesn't reject EnergyBot's custom attribute names.
type WebComponentDiv = React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>;
const Div = "div" as unknown as React.ComponentType<WebComponentDiv>;

export default function EnergyBotWidgets() {
  const h = ENERGYBOT.historicalChart;
  const c = ENERGYBOT.currentChart;

  return (
    <div className="flex flex-col gap-6">
      {/* Historical trend chart — all attributes preserved exactly as deployed */}
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

      {/* Current trend chart — all attributes preserved exactly as deployed */}
      <Div
        data-eb-component={c.component}
        style={{ height: c.height }}
        business={c.business}
        state-code={c.stateCode}
        utility-code={c.utilityCode}
      />

      {/* EnergyBot loader — script src preserved exactly */}
      <Script src={ENERGYBOT.scriptSrc} strategy="afterInteractive" />
    </div>
  );
}
