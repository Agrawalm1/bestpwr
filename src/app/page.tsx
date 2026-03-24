import type { Metadata } from "next";
import BentoGrid from "@/components/BentoGrid";
import ProviderBanner from "@/components/ProviderBanner";
import SavingsCalculator from "@/components/SavingsCalculator";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import RateAlertSignup from "@/components/RateAlertSignup";
import StickyCTA from "@/components/StickyCTA";
import { CTA, NAV } from "@/lib/links";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BESTPWR — Best Texas Electricity Rates",
  description: "Compare and shop the best Texas electricity plans. Fixed rates, no hidden fees, no variable plans. Find the lowest electricity rate in your area today.",
  keywords: ["Texas electricity rates", "best electricity rates Texas", "cheap electricity Texas", "compare electricity plans", "ERCOT", "deregulated energy Texas", "fixed rate electricity", "lowest electricity rate Texas"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it safe to switch electricity providers?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Switching providers in Texas is completely safe. Your local utility still owns and maintains the physical power lines and responds to outages. Only the company that sends your bill changes. There are no service interruptions during a transfer." }
    },
    {
      "@type": "Question",
      "name": "How long does switching take?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most switches complete within 1–3 business days. If you time it before your current contract expires, there are no early termination fees and no gap in service." }
    },
    {
      "@type": "Question",
      "name": "What is a fixed-rate plan?",
      "acceptedAnswer": { "@type": "Answer", "text": "A fixed-rate plan locks your rate per kWh for the length of your contract — typically 12 or 24 months. Your rate won't change even if the market spikes, which protects you during hot Texas summers." }
    },
    {
      "@type": "Question",
      "name": "What happens when my contract expires?",
      "acceptedAnswer": { "@type": "Answer", "text": "If you don't switch before your contract ends, most providers automatically move you to a month-to-month variable rate — often 30–50% higher than your fixed rate. We recommend shopping 30 days before expiration." }
    },
    {
      "@type": "Question",
      "name": "Are there fees for switching?",
      "acceptedAnswer": { "@type": "Answer", "text": "Switching to a new provider is free. However, leaving your current provider before your contract ends may trigger an early termination fee (typically $100–$200). Check your current contract first." }
    },
    {
      "@type": "Question",
      "name": "What is an ESI ID and why do I need it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Your ESI ID (Electric Service Identifier) is a 17-digit number tied to your meter. New providers use it to locate your service point and complete the transfer. You can find it on your current bill or use our ESI Lookup tool." }
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section
        className="relative text-white py-24 px-4 overflow-hidden"
        style={{ minHeight: "520px" }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://plus.unsplash.com/premium_photo-1754254943912-90f1646ae082?q=80&w=2651&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark teal overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(13,79,92,0.65) 0%, rgba(8,47,56,0.60) 100%)" }}
        />
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 drop-shadow-md">
            The BEST electricity suppliers at the BEST prices.
          </h1>
          <p className="text-lg sm:text-xl font-light mb-10 text-white/90">
            No tricks, hidden fees, or variable plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CTA.shop}
              className="bg-white text-[#238C23] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-base shadow-md"
            >
              Shop Electricity Plans →
            </a>
            <Link
              href={NAV.esiLookup}
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              Find My ESI ID
            </Link>
          </div>

          {/* Social proof stats */}
          <div className="mt-12 pt-8 border-t border-white/20 w-full flex flex-wrap justify-center gap-8 sm:gap-16">
            {[
              { value: "10,000+", label: "Texas households served" },
              { value: "$200",    label: "Avg. annual savings" },
              { value: "100+",    label: "Plans compared" },
              { value: "4.8 ★",  label: "Customer rating" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-black">{value}</p>
                <p className="text-xs text-white/60 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProviderBanner />

      {/* Bento grid */}
      <BentoGrid />

      <SavingsCalculator />
      <Testimonials />
      <FAQAccordion />
      <RateAlertSignup />
      <StickyCTA />
    </main>
  );
}
