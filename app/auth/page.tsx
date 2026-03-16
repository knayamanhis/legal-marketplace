"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { login, isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) router.push("/dashboard");
  }, [isLoggedIn, router]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const displayName = mode === "signup" ? name : email.split("@")[0];
    login(email, displayName);
    router.push("/dashboard");
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#f8faff] px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl">⚖️</Link>
          <h1 className="text-2xl font-bold text-[#1e3a5f] mt-3">
            {mode === "signup" ? "Create your account" : "Welcome back"}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {mode === "signup" ? "Get free AI legal guidance instantly" : "Sign in to access your dashboard"}
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <div className="flex rounded-lg overflow-hidden border border-gray-200 mb-6">
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${mode === "signup" ? "bg-[#1e3a5f] text-white" : "text-gray-500 hover:text-[#1e3a5f]"}`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${mode === "login" ? "bg-[#1e3a5f] text-white" : "text-gray-500 hover:text-[#1e3a5f]"}`}
            >
              Log In
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1e3a5f]"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1e3a5f]"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1e3a5f] text-white py-3 rounded-lg font-semibold hover:bg-[#162d4a] transition-colors mt-2"
            >
              {mode === "signup" ? "Create Account & Continue →" : "Log In →"}
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-4">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
