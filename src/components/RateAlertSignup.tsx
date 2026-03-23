"use client";

import { useState } from "react";

export default function RateAlertSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      // Replace FORMSPREE_FORM_ID with your ID from formspree.io/dashboard
      const res = await fetch("https://formspree.io/f/mlgpvwzy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, _subject: "New Rate Alert Signup — BESTPWR" }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Could not connect. Please try again.");
    }
    setLoading(false);
  }

  return (
    <section
      className="py-16 px-4"
      style={{ background: "linear-gradient(135deg, #0D4F5C 0%, #082F38 100%)" }}
    >
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">Rate Alerts</p>
        <h2 className="text-2xl font-black text-white mb-2">
          Get notified when rates drop.
        </h2>
        <p className="text-sm text-white/70 mb-8">
          We monitor Texas electricity rates daily. Enter your email and we&apos;ll alert you when a better deal becomes available in your area.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-8">
            <p className="text-2xl mb-2">✅</p>
            <p className="text-white font-bold text-lg">You&apos;re on the list.</p>
            <p className="text-white/65 text-sm mt-1">We&apos;ll email you when rates drop in Texas.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 rounded-xl px-4 py-3 text-sm text-gray-900 bg-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              disabled={loading}
              className="shrink-0 bg-[#238C23] hover:bg-[#1a6b1a] disabled:bg-[#238C23]/50 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
            >
              {loading ? "Subscribing…" : "Alert Me →"}
            </button>
          </form>
        )}

        <p className="text-xs text-white/40 mt-4">No spam. Unsubscribe any time.</p>
      </div>
    </section>
  );
}
