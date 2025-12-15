"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import CategoryBar from "./CategoryBar";
import CartBadge from "./CartBadge";

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 21l-4.3-4.3" />
      <circle cx="11" cy="11" r="7" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}

export default function Navbar() {
  const router = useRouter();
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") || "");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const cat = sp.get("cat");
    const params = new URLSearchParams();
    if (cat) params.set("cat", cat);
    if (q.trim()) params.set("q", q.trim());
    router.push(`/?${params.toString()}`);
  }

  return (
    <header className="sticky top-0 z-50">
      {/* top bar */}
      <div className="bg-[#0b1220] text-white">
        <div className="w-full px-4 sm:px-8 py-3 flex items-center gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-black grid place-items-center font-black shadow-sm">
              M
            </div>
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight group-hover:text-[#febd69] transition">
                MegaMart
              </div>
              <div className="text-[11px] text-white/65 -mt-0.5">
                premium demo storefront
              </div>
            </div>
          </Link>

          {/* Search */}
          <form onSubmit={submit} className="flex-1 hidden md:flex">
            <div className="flex w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 focus-within:border-[#febd69] focus-within:ring-2 focus-within:ring-[#febd69]/30 transition">
              <input
                className="w-full px-4 py-2.5 bg-transparent text-white placeholder:text-white/40 outline-none"
                placeholder="Search products (demo)"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <button
                className="px-4 bg-[#febd69] text-black font-bold flex items-center gap-2 hover:brightness-95 active:scale-[0.98] transition"
              >
                <IconSearch />
                Search
              </button>
            </div>
          </form>

          <Link
            href="/login"
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition"
          >
            <IconUser />
            <div className="leading-tight">
              <div className="text-xs text-white/70">Hello, sign in</div>
              <div className="font-bold">Account</div>
            </div>
          </Link>

          <div className="px-3 py-2 rounded-xl hover:bg-white/10 transition">
            <CartBadge />
          </div>
        </div>
      </div>

      {/* category bar */}
      <CategoryBar />
    </header>
  );
}
