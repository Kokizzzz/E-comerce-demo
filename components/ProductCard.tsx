"use client";

import AddToCartButton from "@/components/AddToCartButton";
import RatingStars from "@/components/RatingStars";
import { demoDeal, demoFlags, demoRating } from "@/lib/demo";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  currency: string;
  image: string;
  category: string;
};

function formatMoney(cents: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
    <defs>
      <linearGradient id="g" x1="0" x2="1">
        <stop offset="0" stop-color="#f3f4f6"/>
        <stop offset="1" stop-color="#e5e7eb"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
      fill="#9ca3af" font-size="22" font-family="Arial">
      Image unavailable
    </text>
  </svg>
`);

function IconHeart({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7-4.6-9.5-8.1C.5 9.7 2.4 6.5 6 6.2c1.9-.2 3.2.7 4 1.7.8-1 2.1-1.9 4-1.7 3.6.3 5.5 3.5 3.5 6.7C19 16.4 12 21 12 21z" />
    </svg>
  );
}

export default function ProductCard({ p }: { p: Product }) {
  const r = demoRating(p.id);
  const d = demoDeal(p.id);
  const f = demoFlags(p.id);
  const [liked, setLiked] = useState(false);

  return (
    <div className="group bg-white border rounded-3xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* image */}
      <div className="relative h-44 sm:h-52 bg-gray-100 overflow-hidden">
        <img
          src={p.image || PLACEHOLDER}
          alt={p.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300"
          onError={(e) => ((e.currentTarget as HTMLImageElement).src = PLACEHOLDER)}
        />

        {/* top chips */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {d.isDeal && (
            <span className="bg-red-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow">
              Deal -{d.percent}%
            </span>
          )}
          {f.bestSeller && (
            <span className="bg-[#111827] text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow">
              Best Seller
            </span>
          )}
        </div>

        {/* right actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setLiked((v) => !v)}
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 grid place-items-center shadow-sm border border-black/5 active:scale-[0.98] transition"
            aria-label="Wishlist"
          >
            <span className={liked ? "text-red-600" : "text-gray-700"}>
              <IconHeart filled={liked} />
            </span>
          </button>

          <button
            type="button"
            className="opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 grid place-items-center shadow-sm border border-black/5"
            aria-label="Quick view"
            onClick={() => alert("Quick view (demo)")}
          >
            <span className="text-sm font-black">i</span>
          </button>
        </div>

        {/* bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {p.category}
        </div>

        <div className="mt-1 font-semibold text-sm leading-snug line-clamp-2 min-h-[40px]">
          {p.name}
        </div>

        <div className="mt-2 flex items-end justify-between">
          <div className="text-lg font-extrabold">{formatMoney(p.priceCents, p.currency)}</div>
          {f.prime && (
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="bg-[#00a8e1] text-white px-2 py-1 rounded-full">Prime</span>
            </div>
          )}
        </div>

        <div className="mt-2 flex items-center gap-2">
          <RatingStars rating={r.rating} />
          <span className="text-xs text-blue-700 hover:underline">({r.reviews})</span>
        </div>

        <div className="mt-auto pt-4">
          <div className="group-hover:translate-y-0 translate-y-[2px] transition">
            <AddToCartButton
              product={{
                id: p.id,
                name: p.name,
                priceCents: p.priceCents,
                currency: p.currency,
                image: p.image,
              }}
            />
          </div>
        </div>
      </div>

      {/* accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#febd69] via-[#00a8e1] to-red-500 opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}
