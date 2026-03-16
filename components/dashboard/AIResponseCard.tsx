import { LegalResponse } from "@/types";

interface AIResponseCardProps {
  response: LegalResponse;
}

export default function AIResponseCard({ response }: AIResponseCardProps) {
  return (
    <div className="bg-white border-l-4 border-[#e6b800] rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🤖</span>
        <h3 className="font-semibold text-[#1e3a5f]">AI Legal Summary</h3>
        <span className="text-xs bg-[#fff3b0] text-[#7a5c00] px-2 py-0.5 rounded-full ml-auto">General Guidance</span>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed mb-5">{response.summary}</p>

      <div className="mb-5">
        <h4 className="text-sm font-semibold text-[#1e3a5f] mb-3">Key Points</h4>
        <ul className="space-y-2">
          {response.keyPoints.map((point, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-600">
              <span className="text-[#e6b800] font-bold shrink-0">→</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-[#1e3a5f] mb-2">Relevant Laws</h4>
        <div className="flex flex-wrap gap-2">
          {response.relevantActs.map((act) => (
            <span key={act} className="bg-[#dbe4ff] text-[#1e3a5f] text-xs px-3 py-1 rounded-full">{act}</span>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-400 border-t border-gray-100 pt-4 italic">{response.disclaimer}</p>
    </div>
  );
}
