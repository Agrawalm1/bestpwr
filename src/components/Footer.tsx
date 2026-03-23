import Link from "next/link";
import { NAV, CTA } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="bg-[#238C23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href={NAV.home}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/66bc06c69f291ffe53220431/66bc3a7bdae1587a108483df_BESTPWR-logo-v1.png"
            srcSet="
              https://cdn.prod.website-files.com/66bc06c69f291ffe53220431/66bc3a7bdae1587a108483df_BESTPWR-logo-v1-p-500.png 500w,
              https://cdn.prod.website-files.com/66bc06c69f291ffe53220431/66bc3a7bdae1587a108483df_BESTPWR-logo-v1-p-800.png 800w,
              https://cdn.prod.website-files.com/66bc06c69f291ffe53220431/66bc3a7bdae1587a108483df_BESTPWR-logo-v1-p-1080.png 1080w,
              https://cdn.prod.website-files.com/66bc06c69f291ffe53220431/66bc3a7bdae1587a108483df_BESTPWR-logo-v1-p-1600.png 1600w,
              https://cdn.prod.website-files.com/66bc06c69f291ffe53220431/66bc3a7bdae1587a108483df_BESTPWR-logo-v1.png 1862w
            "
            sizes="(max-width: 479px) 98vw, (max-width: 767px) 99vw, (max-width: 1862px) 100vw, 1862px"
            alt="BESTPWR"
            loading="lazy"
            style={{ height: "32px", width: "auto" }}
          />
        </Link>

        {/* Nav links */}
        <div className="flex flex-wrap items-center gap-6">
          <Link href={NAV.about} className="text-white/75 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
            About
          </Link>
          <Link href={NAV.news} className="text-white/75 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
            News
          </Link>
          <Link href={NAV.contact} className="text-white/75 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
            Contact
          </Link>
          <Link href={NAV.esiLookup} className="text-white/75 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
            ESI Lookup
          </Link>
          <Link
            href={NAV.shop}
            className="bg-white text-[#238C23] hover:bg-gray-100 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-colors"
          >
            Shop
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 text-center py-4">
        <p className="text-xs text-white/50">Copyright © 2024 BESTPWR</p>
      </div>
    </footer>
  );
}
