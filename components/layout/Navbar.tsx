"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { user, isLoggedIn, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⚖️</span>
          <span className="text-xl font-bold text-[#1e3a5f]">VakilConnect</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/#cases" className="hover:text-[#1e3a5f] transition-colors">Legal Matters</Link>
          <Link href="/#lawyers" className="hover:text-[#1e3a5f] transition-colors">Find a Lawyer</Link>
          <Link href="/#testimonials" className="hover:text-[#1e3a5f] transition-colors">Reviews</Link>
          <Link href="/#news" className="hover:text-[#1e3a5f] transition-colors">Legal News</Link>
        </div>

        <div className="flex items-center gap-3">
          {isLoggedIn && user ? (
            <>
              <Link href="/dashboard" className="text-sm text-gray-700 hover:text-[#1e3a5f] font-medium">Dashboard</Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-sm font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-red-600 transition-colors">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link
              href="/auth"
              className="bg-[#1e3a5f] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#162d4a] transition-colors"
            >
              Login / Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
