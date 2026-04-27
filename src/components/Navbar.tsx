"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, CTA } from "@/lib/links";

const NAV_LINKS = [
  { label: "About", href: NAV.about },
  { label: "Tips", href: NAV.tips },
  { label: "Contact", href: NAV.contact },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/40 bg-[#238C23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        <Link href={NAV.home} className="flex-shrink-0 focus:outline-none">
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
            style={{ height: "36px", width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                isActive(href)
                  ? "text-white border-b-2 border-white pb-0.5"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href={NAV.shop}
            className="bg-white text-[#238C23] hover:bg-gray-100 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-lg transition-colors"
          >
            Shop Electricity
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 text-white hover:text-white/80 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — slides open */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-200 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/40 bg-[#238C23] px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                isActive(href) ? "text-white" : "text-white/75"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href={NAV.shop}
            onClick={() => setMenuOpen(false)}
            className="bg-white text-[#238C23] hover:bg-gray-100 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-lg text-center transition-colors"
          >
            Shop Electricity
          </Link>
        </div>
      </div>
    </nav>
  );
}
