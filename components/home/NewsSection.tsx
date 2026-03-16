import { NEWS_ITEMS } from "@/lib/mockData";
import Badge from "@/components/ui/Badge";

export default function NewsSection() {
  return (
    <section id="news" className="py-16 bg-[#f8faff]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Recent Legal Developments</h2>
          <p className="text-gray-500">Stay informed about the latest rulings and changes in Indian law.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {NEWS_ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <Badge color="gold">{item.category}</Badge>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <h3 className="font-semibold text-[#1e3a5f] mb-2 leading-snug">{item.headline}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.summary}</p>
              <p className="text-xs text-gray-400">Source: {item.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
