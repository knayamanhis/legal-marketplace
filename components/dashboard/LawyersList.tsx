import { Lawyer } from "@/types";
import Badge from "@/components/ui/Badge";

interface LawyersListProps {
  lawyers: Lawyer[];
}

function ScoreBar({ score }: { score: number }) {
  const color = score >= 90 ? "bg-green-500" : score >= 70 ? "bg-yellow-400" : "bg-red-400";
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-100 rounded-full h-2">
        <div className={`h-2 rounded-full ${color}`} style={{ width: `${score}%` }} />
      </div>
      <span className={`text-xs font-bold ${score >= 90 ? "text-green-600" : score >= 70 ? "text-yellow-600" : "text-red-600"}`}>
        {score}
      </span>
    </div>
  );
}

export default function LawyersList({ lawyers }: LawyersListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">✅</span>
        <div>
          <h3 className="font-semibold text-[#1e3a5f]">Verified Lawyers for Your Case</h3>
          <p className="text-xs text-gray-500">{lawyers.length} lawyers found · Sorted by social score</p>
        </div>
      </div>

      {lawyers.map((lawyer) => (
        <div key={lawyer.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-lg font-bold shrink-0">
                {lawyer.name.split(" ")[1]?.charAt(0) || "A"}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-[#1e3a5f]">{lawyer.name}</h4>
                  {lawyer.verified && (
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-200">✓ Verified</span>
                  )}
                </div>
                <p className="text-xs text-gray-500">{lawyer.city} · {lawyer.experience} years experience · {lawyer.fee}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {lawyer.specialization.map((s) => (
              <Badge key={s} color="navy">{s}</Badge>
            ))}
          </div>

          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">Social Trust Score</p>
            <ScoreBar score={lawyer.socialScore} />
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <a
              href={`tel:${lawyer.phone}`}
              className="flex items-center gap-2 bg-[#f0f4ff] text-[#1e3a5f] px-4 py-2.5 rounded-lg font-medium hover:bg-[#dbe4ff] transition-colors"
            >
              📞 {lawyer.phone}
            </a>
            <a
              href={lawyer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-50 text-gray-600 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              💼 View LinkedIn
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
