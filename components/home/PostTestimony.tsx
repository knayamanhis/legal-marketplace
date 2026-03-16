"use client";

import { useState } from "react";
import { CASE_TYPES } from "@/lib/mockData";

export default function PostTestimony() {
  const [form, setForm] = useState({ name: "", city: "", caseType: "", rating: "5", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("lm_testimonials") || "[]");
    existing.push({ ...form, date: new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" }) });
    localStorage.setItem("lm_testimonials", JSON.stringify(existing));
    setSubmitted(true);
  }

  return (
    <section id="post-testimony" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Share Your Experience</h2>
          <p className="text-gray-500">Help others by sharing how VakilConnect helped you with your legal matter.</p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-semibold text-green-800 text-lg mb-2">Thank you for your review!</h3>
            <p className="text-green-600 text-sm">Your testimony helps others find the legal help they need.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a5f]"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a5f]"
                  placeholder="e.g. Delhi"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Case Type</label>
                <select
                  required
                  value={form.caseType}
                  onChange={(e) => setForm({ ...form, caseType: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a5f]"
                >
                  <option value="">Select type</option>
                  {CASE_TYPES.map((c) => (
                    <option key={c.id} value={c.title}>{c.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <select
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a5f]"
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>{"★".repeat(r)} ({r}/5)</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Experience</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a5f] resize-none"
                placeholder="Share how VakilConnect helped you..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e3a5f] text-white py-3 rounded-lg font-semibold hover:bg-[#162d4a] transition-colors"
            >
              Submit Testimony
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
