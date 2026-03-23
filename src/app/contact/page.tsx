import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — BESTPWR",
  description: "Reach our team for help finding the best Texas electricity plan for your home or business.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative text-white py-16 px-4 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://media.istockphoto.com/id/2192989129/photo/texas-flag-blowing-in-the-wind-in-field-of-bluebonnet-flowers-near-tree-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=wybO1iLsuspJGe5wDFR4kobZmodUJwSnpZbyP9KznxQ="
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,79,92,0.65) 0%, rgba(8,47,56,0.60) 100%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-3">
            We&apos;re here to help.
          </h1>
          <p className="text-lg font-light text-white/80">
            Questions about a plan, your bill, or switching providers? Drop us a message and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: "linear-gradient(160deg, #f0fdf4 0%, #f8fafc 100%)" }}>
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">

          {/* Contact info */}
          <div className="sm:col-span-1 flex flex-col gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#238C23] mb-1">Response Time</p>
              <p className="text-sm text-gray-600">Within 1 business day</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#238C23] mb-1">Coverage</p>
              <p className="text-sm text-gray-600">Texas deregulated market only (ERCOT)</p>
            </div>
          </div>

          {/* Form */}
          <div className="sm:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Send us a message</h2>
              <form
                action="mailto:support@bestpwr.com"
                method="get"
                encType="text/plain"
                className="flex flex-col gap-5"
              >
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Name <span className="text-[#238C23]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={256}
                    placeholder="Your name"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#238C23] focus:ring-1 focus:ring-[#238C23]/30 transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Email <span className="text-[#238C23]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={256}
                    placeholder="you@example.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#238C23] focus:ring-1 focus:ring-[#238C23]/30 transition"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#238C23] focus:ring-1 focus:ring-[#238C23]/30 transition text-gray-700"
                  >
                    <option value="">Select a topic…</option>
                    <option value="plan-question">Question about a plan</option>
                    <option value="switching">Help switching providers</option>
                    <option value="bill-issue">Bill or billing issue</option>
                    <option value="business">Business / commercial inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Message <span className="text-[#238C23]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={5}
                    placeholder="Tell us how we can help…"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#238C23] focus:ring-1 focus:ring-[#238C23]/30 transition resize-none"
                  />
                </div>

                <input
                  type="submit"
                  value="Send Message →"
                  className="w-full bg-[#238C23] hover:bg-[#1a6b1a] text-white font-bold py-3 rounded-xl cursor-pointer transition-colors text-sm"
                />
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
