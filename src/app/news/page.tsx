import MarketNews from "@/components/MarketNews";

export const metadata = {
  title: "Market News | BESTPWR",
  description: "The latest Texas electricity market news and energy headlines.",
};

export default function NewsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-black text-slate-800 mb-2">Market News</h1>
      <p className="text-slate-500 mb-8">
        Latest headlines from the Texas electricity market, updated regularly.
      </p>
      <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md p-6">
        <MarketNews />
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md p-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-700">Follow BESTPWR on LinkedIn</p>
          <p className="text-xs text-slate-400 mt-0.5">Updates, tips, and market insights from our team.</p>
        </div>
        <a
          href="https://www.linkedin.com/company/bestpwr-com"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2 bg-[#0A66C2] hover:bg-[#0958a8] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.851 0-2.135 1.445-2.135 2.939v5.667H9.357V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.371 4.267 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.891 20.45H3.779V9h3.112v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          Follow
        </a>
      </div>
    </main>
  );
}
