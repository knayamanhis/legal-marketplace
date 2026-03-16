import Link from "next/link";
import { LAWYERS } from "@/lib/mockData";
import Badge from "@/components/ui/Badge";

export default function FindLawyerTeaser() {
  const featured = LAWYERS.slice(0, 3);

  return (
    <section id="lawyers" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Find a Verified Lawyer Near You</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our network of 500+ verified advocates across Delhi, Mumbai, Bengaluru, and more. Post a query to unlock full contact details.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featured.map((lawyer) => (
            <div key={lawyer.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-lg font-bold">
                  {lawyer.name.split(" ")[1]?.charAt(0) || "A"}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-[#1e3a5f] text-sm">{lawyer.name}</h3>
                    {lawyer.verified && <span className="text-blue-500 text-xs">✓</span>}
                  </div>
                  <p className="text-xs text-gray-500">{lawyer.city} · {lawyer.experience} yrs exp</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {lawyer.specialization.map((s) => (
                  <Badge key={s} color="navy">{s}</Badge>
                ))}
              </div>

              <div className="mb-3">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Social Score</span>
                  <span className="font-semibold text-[#1e3a5f]">{lawyer.socialScore}/100</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-[#1e3a5f]"
                    style={{ width: `${lawyer.socialScore}%` }}
                  />
                </div>
              </div>

              {/* Blurred contact info */}
              <div className="relative">
                <div className="blur-sm select-none text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                  <p>📞 +91 XXXXX XXXXX</p>
                  <p>💼 {lawyer.fee}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-[#f0f4ff] rounded-2xl p-8">
          <p className="text-[#1e3a5f] font-semibold mb-2">Want to see contact details?</p>
          <p className="text-gray-500 text-sm mb-6">Post your legal query and unlock verified lawyer contacts for just ₹20</p>
          <Link
            href="/auth"
            className="bg-[#1e3a5f] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#162d4a] transition-colors inline-block"
          >
            Post a Query to Unlock
          </Link>
        </div>
      </div>
    </section>
  );
}
