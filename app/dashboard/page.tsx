"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { getLegalResponse } from "@/lib/legalResponses";
import { LAWYERS } from "@/lib/mockData";
import { LegalResponse, Lawyer } from "@/types";
import QueryForm from "@/components/dashboard/QueryForm";
import AIResponseCard from "@/components/dashboard/AIResponseCard";
import PaywallCard from "@/components/dashboard/PaywallCard";
import LawyersList from "@/components/dashboard/LawyersList";

export default function DashboardPage() {
  const { user, isLoggedIn } = useAuth();
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<LegalResponse | null>(null);
  const [paid, setPaid] = useState(false);
  const [filteredLawyers, setFilteredLawyers] = useState<Lawyer[]>([]);

  useEffect(() => {
    if (!isLoggedIn) router.push("/auth");
  }, [isLoggedIn, router]);

  function handleQuery(q: string) {
    setQuery(q);
    setLoading(true);
    setAiResponse(null);
    setPaid(false);
    // Simulate a brief delay for effect
    setTimeout(() => {
      setAiResponse(getLegalResponse(q));
      setLoading(false);
    }, 1200);
  }

  function handleUnlock() {
    const lower = query.toLowerCase();
    const keywords = ["property", "divorce", "criminal", "consumer", "landlord", "rent", "tenant", "inheritance", "will", "bail", "fir", "marriage", "custody", "family", "civil", "workplace"];
    const matched = keywords.find((k) => lower.includes(k));

    let lawyers = LAWYERS;
    if (matched) {
      const specMap: Record<string, string[]> = {
        property: ["Property", "Real Estate", "Civil"],
        divorce: ["Divorce", "Family", "Women Rights"],
        criminal: ["Criminal", "Defense"],
        consumer: ["Consumer", "Civil"],
        landlord: ["Property", "Civil"],
        rent: ["Property", "Civil"],
        tenant: ["Property", "Civil"],
        inheritance: ["Property", "Civil", "Family"],
        will: ["Property", "Family"],
        bail: ["Criminal", "Defense"],
        fir: ["Criminal", "Defense"],
        marriage: ["Divorce", "Family"],
        custody: ["Divorce", "Family"],
        family: ["Family", "Divorce"],
        civil: ["Civil", "Consumer"],
        workplace: ["Criminal", "Corporate"],
      };
      const specs = specMap[matched] || [];
      const filtered = LAWYERS.filter((l) => l.specialization.some((s) => specs.includes(s)));
      lawyers = filtered.length > 0 ? filtered : LAWYERS;
    }

    setFilteredLawyers(lawyers.sort((a, b) => b.socialScore - a.socialScore));
    setPaid(true);
  }

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-[#f8faff] py-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#1e3a5f]">
            Welcome back, {user?.name} 👋
          </h1>
          <p className="text-gray-500 text-sm mt-1">Describe your legal issue below and get instant AI-powered guidance.</p>
        </div>

        <div className="space-y-6">
          <QueryForm onSubmit={handleQuery} loading={loading} />

          {loading && (
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
              <div className="text-3xl mb-3 animate-pulse">⚖️</div>
              <p className="text-[#1e3a5f] font-medium">Analysing your query...</p>
              <p className="text-gray-400 text-sm mt-1">Searching relevant Indian laws and precedents</p>
            </div>
          )}

          {aiResponse && !loading && (
            <>
              <AIResponseCard response={aiResponse} />
              {!paid && <PaywallCard onUnlock={handleUnlock} />}
              {paid && <LawyersList lawyers={filteredLawyers} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
