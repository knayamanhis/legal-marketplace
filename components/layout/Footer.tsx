import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f2035] text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">⚖️</span>
            <span className="text-xl font-bold text-white">VakilConnect</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Making legal help accessible to every Indian. We connect you with verified advocates and give you the information you need.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#cases" className="hover:text-white transition-colors">Common Legal Matters</Link></li>
            <li><Link href="/#lawyers" className="hover:text-white transition-colors">Find a Lawyer</Link></li>
            <li><Link href="/#testimonials" className="hover:text-white transition-colors">Reviews</Link></li>
            <li><Link href="/#news" className="hover:text-white transition-colors">Legal News</Link></li>
            <li><Link href="/dashboard" className="hover:text-white transition-colors">Post a Query</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal Disclaimer</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            VakilConnect provides general legal information for educational purposes only. Nothing on this platform constitutes legal advice. Always consult a qualified advocate for advice specific to your situation. Advocate listings and social scores are for informational purposes only.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © 2026 VakilConnect. All rights reserved. | For India.
      </div>
    </footer>
  );
}
