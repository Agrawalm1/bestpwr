/**
 * Central links file for bestpwr.com
 *
 * IMPORTANT: EnergyBot script URLs and widget attributes must never be modified.
 * All affiliate/tracking parameters are preserved exactly as deployed.
 */

export const NAV = {
  home: "/",
  about: "/about",
  contact: "/contact",
  shop: "/shop",
  esiLookup: "/esi-lookup",
  news: "/news",
  tips: "/tips",
} as const;

const AFFILIATE_URL = "https://www.powerhq.co/partner-app.html?utm_source=PRASAD_VENTURES&utm_medium=referral&utm_campaign=partners#/prasad_ventures?ftype=DEFAULT_PARTNER&advisor_only=true";

export const CTA = {
  getStarted: "/shop",
  shop: "/shop",
} as const;

/**
 * RATES — update these numbers when rates change.
 * When EnergyBot API access is approved, this will be replaced
 * with a live server-side fetch and these values become the fallback.
 *
 * To update: change bestRate and greenRate, save the file, redeploy.
 */
export const RATES = {
  /** Best available 12-month fixed rate (cents per kWh) */
  bestRate: 7.2,
  /** Best 100% green 12-month fixed rate (cents per kWh) */
  greenRate: 9.1,
  /** Last week's average rate for Market Alert tile */
  lastWeekAvg: 7.4,
  /** Week-over-week change label shown in Market Alert tile */
  weeklyChange: "−2.7%",
  /** Last updated — change this when you update the rates above */
  updatedAt: "Apr 27, 2026",
} as const;

/** EnergyBot web component configuration — DO NOT modify */
export const ENERGYBOT = {
  scriptSrc: "https://www.energybot.com/eb-webcomponents/v1/component-loader.js",

  historicalChart: {
    component: "eb-historical-trend-chart-v2",
    height: "256px",
    lineColor: "#238C23",
    textColor: "#000000",
    type: "MIN",
    business: "false",
    state: "TX",
    utility: "ONCOR",
    days: "365",
  },

  currentChart: {
    component: "eb-current-trend-chart",
    height: "344px",
    business: "true",
    stateCode: "TX",
    utilityCode: "ONCOR",
  },
} as const;
