import BentoGrid from "@/components/BentoGrid";
import ProviderBanner from "@/components/ProviderBanner";
import SavingsCalculator from "@/components/SavingsCalculator";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import RateAlertSignup from "@/components/RateAlertSignup";
import StickyCTA from "@/components/StickyCTA";
import { CTA, NAV } from "@/lib/links";
import Link from "next/link";

export default function Home() {
  return (
    <main>
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
