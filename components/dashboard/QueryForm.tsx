"use client";

import { useState } from "react";

interface QueryFormProps {
  onSubmit: (query: string) => void;
  loading: boolean;
}

export default function QueryForm({ onSubmit, loading }: QueryFormProps) {
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) onSubmit(query.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-[#1e3a5f] mb-4">Describe Your Legal Issue</h2>
      <textarea
        rows={5}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1e3a5f] resize-none mb-4"
        placeholder="e.g. My landlord is trying to evict me without notice. We have a registered rent agreement valid until December 2026..."
        required
      />
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-400">{query.length} characters</p>
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="bg-[#1e3a5f] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#162d4a] transition-colors disabled:opacity-50"
        >
          {loading ? "Analysing..." : "Get Legal Guidance →"}
        </button>
      </div>
    </form>
  );
}
