"use client";

import { useState } from "react";

interface Result {
  esid: string;
  address: string;
  utility: string;
  status: string;
}

// Placeholder — replace with real ESID lookup API when available
function mockLookup(address: string): Result {
  return {
    esid: "1008901012345678901",
    address: address,
    utility: "Oncor Electric Delivery",
    status: "Active",
  };
}

export default function ESIIDLookup() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    if (!address.trim()) { setError("Please enter a service address."); return; }
    setError("");
    setLoading(true);
    // Simulate async lookup
    setTimeout(() => {
      setResult(mockLookup(address));
      setLoading(false);
    }, 800);
  }

  return (
    <div className="flex flex-col h-full gap-4">
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-1">ESID Lookup</h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          Your Electric Service Identifier (ESID) is the 17-digit number tied to your meter. Find it by entering your service address.
        </p>
      </div>

      <form onSubmit={handleLookup} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="123 Main St, Houston TX 77002"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#238C23]"
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#238C23] hover:bg-[#1a6b1a] disabled:bg-gray-300 text-white text-sm font-bold py-2 rounded-lg transition-colors"
        >
          {loading ? "Looking up…" : "Find My ESID →"}
        </button>
      </form>

      {result && (
        <div className="rounded-xl border border-[#238C23]/30 bg-[#238C23]/5 p-4 text-xs space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">ESID</span>
            <span className="font-mono font-bold text-gray-900">{result.esid}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Utility</span>
            <span className="font-semibold text-gray-900">{result.utility}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className="font-semibold text-[#238C23]">{result.status}</span>
          </div>
          <p className="text-gray-400 pt-1 border-t border-gray-200">
            Use your ESID when switching providers to ensure a smooth transfer.
          </p>
        </div>
      )}
    </div>
  );
}
