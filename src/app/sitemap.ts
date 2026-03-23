import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bestpwr.com";
  return [
    { url: base,                  lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${base}/shop`,        lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${base}/esi-lookup`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
