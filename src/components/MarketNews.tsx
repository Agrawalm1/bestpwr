// MarketNews — fetches live headlines from EIA RSS feed.
// Revalidates every 6 hours via Next.js ISR.
// Falls back to static headlines if the feed is unavailable.

const STATIC_FALLBACK = [
  {
    date: "Mar 2026",
    headline: "Texas electricity demand set to soar to 218GW by 2031 as data centers fuel record grid load.",
    href: "https://www.datacenterdynamics.com/en/news/ercot-electricity-demand-in-texas-set-to-soar-to-218gw-by-2031-fueled-by-data-center-growth/",
  },
  {
    date: "Feb 2026",
    headline: "ERCOT workshops new framework for handling power requests from data centers and large loads.",
    href: "https://www.kltv.com/2026/02/27/ercot-workshops-how-support-power-requests-data-centers/",
  },
  {
    date: "Jan 2026",
    headline: "EIA warns data center demand could raise ERCOT power prices by up to 79% without grid investment.",
    href: "https://www.eia.gov/todayinenergy/detail.php?id=65844",
  },
  {
    date: "Jan 2026",
    headline: "Fixed-rate plans still well below average — experts say lock in now before summer demand spike.",
    href: "https://electricityplans.com/texas-electricity-trends/",
  },
];

interface Headline {
  date: string;
  headline: string;
  href: string;
}

function extractText(xml: string, tag: string): string {
  const cdataMatch = xml.match(new RegExp(`<${tag}>[\\s]*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>[\\s]*</${tag}>`));
  if (cdataMatch) return cdataMatch[1].trim();
  const tagMatch = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return tagMatch ? tagMatch[1].trim() : "";
}

async function fetchHeadlines(): Promise<Headline[]> {
  try {
    const res = await fetch("https://www.eia.gov/rss/todayinenergy.xml", {
      next: { revalidate: 21600 }, // refresh every 6 hours
    });
    if (!res.ok) return STATIC_FALLBACK;

    const xml = await res.text();
    const itemMatches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];

    const items: Headline[] = itemMatches.slice(0, 4).map((m) => {
      const item  = m[1];
      const title = extractText(item, "title");
      const link  = extractText(item, "link") || extractText(item, "guid");
      const pub   = extractText(item, "pubDate");
      const date  = pub
        ? new Date(pub).toLocaleDateString("en-US", { month: "short", year: "numeric" })
        : "";
      return { headline: title, href: link, date };
    });

    return items.filter((i) => i.headline && i.href).length >= 2
      ? items
      : STATIC_FALLBACK;
  } catch {
    return STATIC_FALLBACK;
  }
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="inline-block w-3 h-3 ml-1 shrink-0 opacity-50"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M9 3a1 1 0 0 0 0 2h1.586L5.293 10.293a1 1 0 1 0 1.414 1.414L12 6.414V8a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1H9Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M3 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a1 1 0 1 0-2 0v2H3V7h2a1 1 0 0 0 0-2H3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default async function MarketNews() {
  const headlines = await fetchHeadlines();

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
        </span>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Live Feed</p>
      </div>

      {/* Headlines */}
      <ul className="flex flex-col divide-y divide-slate-100">
        {headlines.map((item) => (
          <li key={item.href} className="py-3 first:pt-0 last:pb-0">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-3 items-start hover:opacity-80 transition-opacity"
            >
              <span className="text-xs font-semibold text-[#238C23] whitespace-nowrap pt-0.5 shrink-0">
                {item.date}
              </span>
              <span className="text-sm text-slate-700 leading-snug group-hover:text-slate-900 transition-colors">
                {item.headline}
                <ExternalLinkIcon />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
