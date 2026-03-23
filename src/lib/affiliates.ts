/**
 * affiliates.ts — Affiliate & partner shop links
 *
 * DO NOT modify URLs — tracking parameters must stay intact.
 */

const AFFILIATE_URL = "https://www.powerhq.co/app.html?utm_source=PRASAD_VENTURES&utm_medium=referral&utm_campaign=partners#/prasad_ventures?ftype=DEFAULT";

export const AFFILIATE_LINKS = {
  /** Lowest 12-month fixed rate — featured deal */
  best12Month: AFFILIATE_URL,

  /** Best 100% green / renewable plan */
  bestGreenPlan: AFFILIATE_URL,

  /** Best no-base-fee 12-month fixed plan */
  bestNoBaseFee: AFFILIATE_URL,
} as const;

/** Embedded iframe partner app — for plan comparison widget */
export const IFRAME_URL = "https://www.powerhq.co/partner-app.html?utm_source=PRASAD_VENTURES&utm_medium=referral&utm_campaign=partners#/prasad_ventures?ftype=DEFAULT_PARTNER&advisor_only=true";
