import { TESTIMONIALS } from "@/lib/mockData";
import Badge from "@/components/ui/Badge";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "text-[#e6b800]" : "text-gray-200"}>★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-[#f8faff]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">What Our Users Say</h2>
          <p className="text-gray-500">Real stories from real people who found the legal help they needed.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#1e3a5f] text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.city} · {t.date}</p>
                </div>
              </div>
              <StarRating rating={t.rating} />
              <Badge color="navy" className="mt-2 mb-3">{t.caseType}</Badge>
              <p className="text-sm text-gray-600 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
