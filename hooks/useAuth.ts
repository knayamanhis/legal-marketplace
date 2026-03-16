"use client";

import { useState, useEffect } from "react";
import { User } from "@/types";
import { getUser, setUser, clearUser } from "@/lib/auth";

export function useAuth() {
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    setUserState(getUser());
  }, []);

  function login(email: string, name: string) {
    const u: User = { email, name };
    setUser(u);
    setUserState(u);
  }

  function logout() {
    clearUser();
    setUserState(null);
  }

  return {
    user,
    isLoggedIn: user !== null,
    login,
    logout,
  };
}
