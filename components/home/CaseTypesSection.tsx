import { CASE_TYPES } from "@/lib/mockData";
import Card from "@/components/ui/Card";

export default function CaseTypesSection() {
  return (
    <section id="cases" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Common Legal Matters We Handle</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From property disputes to workplace harassment — find clear guidance on the legal issues that matter most to you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CASE_TYPES.map((c) => (
            <Card key={c.id} hover className="text-center cursor-pointer group">
              <div className="text-4xl mb-3">{c.icon}</div>
              <h3 className="font-semibold text-[#1e3a5f] text-sm mb-2 group-hover:text-[#e6b800] transition-colors">{c.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{c.description}</p>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-400">{c.relevantActs[0]}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
