// MarketNews — fetches live headlines from EIA RSS feed.
// Revalidates every 6 hours via Next.js ISR.
// Falls back to static headlines if the feed is unavailable.

const STATIC_FALLBACK = [
  {
    date: "Oct 2026",
    headline: "ERCOT reports Texas grid handled record summer 2026 demand without major outages — new capacity additions credited.",
    href: "https://www.eia.gov/todayinenergy/",
  },
  {
    date: "Oct 2026",
    headline: "Texas electricity rates easing post-summer but analysts warn winter heating demand could push prices back above 14¢ by December.",
    href: "https://electricityplans.com/texas-electricity-trends/",
  },
  {
    date: "Sep 2026",
    headline: "Data center buildout in Texas accelerates — ERCOT projects 30GW of new large-load interconnection requests through 2028.",
    href: "https://www.datacenterdynamics.com/en/news/ercot-electricity-demand-in-texas-set-to-soar-to-218gw-by-2031-fueled-by-data-center-growth/",
  },
  {
    date: "Sep 2026",
    headline: "EIA: Texas residential electricity prices up 8% year-over-year as grid investment costs flow through to consumers.",
    href: "https://www.eia.gov/todayinenergy/detail.php?id=65844",
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
