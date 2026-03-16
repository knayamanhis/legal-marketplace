import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#f0f4ff] to-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="inline-block bg-[#fff3b0] text-[#7a5c00] text-sm font-medium px-3 py-1 rounded-full mb-6">
            🇮🇳 Built for India
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] leading-tight mb-6">
            Find the Right Lawyer.{" "}
            <span className="text-[#e6b800]">Understand Your Rights.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
            India&apos;s trusted legal marketplace for upper and middle-class citizens. Get instant legal guidance, find verified advocates, and manage your case — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/auth"
              className="bg-[#1e3a5f] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#162d4a] transition-colors text-center"
            >
              Post a Query Free
            </Link>
            <a
              href="#lawyers"
              className="border-2 border-[#1e3a5f] text-[#1e3a5f] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e3a5f] hover:text-white transition-colors text-center"
            >
              Find a Lawyer
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">No registration required to browse. Free AI guidance with account.</p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 bg-[#1e3a5f] rounded-full flex items-center justify-center text-9xl shadow-2xl">
              ⚖️
            </div>
            <div className="absolute -top-4 -right-4 bg-[#e6b800] text-[#1e3a5f] rounded-xl px-4 py-3 shadow-lg font-semibold text-sm">
              10,000+ cases resolved
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-lg font-semibold text-sm text-[#1e3a5f]">
              500+ verified lawyers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
