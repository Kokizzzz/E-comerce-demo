"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryBar() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="bg-[#232f3e] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-1 text-sm">
          <button className="px-3 py-2 font-semibold rounded hover:bg-white/10">
            ☰ All
          </button>

          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative"
              onMouseEnter={() => setOpenId(cat.id)}
              onMouseLeave={() => setOpenId(null)}
            >
              <button className="px-3 py-2 rounded hover:bg-white/10">
                {cat.label}
              </button>

              {openId === cat.id && (
                <div className="absolute left-0 top-full w-[520px] bg-white text-black rounded-b-xl shadow-xl border overflow-hidden">
                  <div className="p-4">
                    <div className="font-bold mb-2">{cat.label}</div>
                    <div className="grid grid-cols-2 gap-2">
                      {cat.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="px-3 py-2 rounded hover:bg-black/5"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 text-xs text-gray-500">
                      Demo menu links
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="/deals"
            className="ml-auto px-3 py-2 rounded hover:bg-white/10 font-semibold"
          >
            Today&apos;s Deals
          </Link>
        </div>
      </div>
    </div>
  );
}
