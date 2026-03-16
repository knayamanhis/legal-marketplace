"use client";

interface PaywallCardProps {
  onUnlock: () => void;
}

export default function PaywallCard({ onUnlock }: PaywallCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0f2035] rounded-xl p-8 text-white text-center shadow-lg">
      <div className="text-5xl mb-4">🔓</div>
      <h3 className="text-xl font-bold mb-2">Want to speak to a verified lawyer?</h3>
      <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">
        Unlock a curated list of verified lawyers relevant to your case, complete with contact numbers, social scores, and fees.
      </p>

      <div className="bg-white/10 rounded-xl p-4 mb-6 inline-block">
        <div className="flex items-center gap-3">
          <div className="text-left">
            <p className="text-xs text-gray-300">One-time unlock</p>
            <p className="text-3xl font-bold text-[#e6b800]">₹20</p>
          </div>
          <div className="text-left text-sm text-gray-300 space-y-1">
            <p>✓ 10+ verified lawyers</p>
            <p>✓ Direct contact numbers</p>
            <p>✓ Social trust scores</p>
          </div>
        </div>
      </div>

      <button
        onClick={onUnlock}
        className="bg-[#e6b800] text-[#1e3a5f] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#cc9f00] transition-colors w-full max-w-xs"
      >
        Pay ₹20 &amp; Unlock Lawyers
      </button>
      <p className="text-xs text-gray-400 mt-3">Secure payment · Instant access</p>
    </div>
  );
}
