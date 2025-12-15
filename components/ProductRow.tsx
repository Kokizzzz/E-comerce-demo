"use client";
import AddToCartButton from "@/components/AddToCartButton";
import RatingStars from "@/components/RatingStars";
import { demoDeal, demoFlags, demoRating } from "@/lib/demo";

type Product = {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  currency: string;
  image: string;
  category: string;
};

type Props = {
  title: string;
  products: Product[];
};

function formatMoney(cents: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

// no downloads needed
const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
      fill="#9ca3af" font-size="20" font-family="Arial">
      Image unavailable
    </text>
  </svg>
`);

export default function ProductRow({ title, products }: Props) {
  return (
    <section className="mt-10">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-extrabold">{title}</h2>
        <span className="text-sm text-blue-700 hover:underline cursor-pointer">
          See more
        </span>
      </div>

      <div className="mt-4 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        {products.map((p) => {
          const r = demoRating(p.id);
          const d = demoDeal(p.id);
          const f = demoFlags(p.id);

          return (
            <div
              key={p.id}
              className="min-w-[240px] max-w-[240px] bg-white border rounded-2xl shadow-sm hover:shadow-md transition flex flex-col snap-start"
            >
              <div className="relative h-44 bg-gray-100 rounded-t-2xl overflow-hidden">
                <img
                  src={p.image || PLACEHOLDER}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = PLACEHOLDER;
                  }}
                />

                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {d.isDeal && (
                    <span className="bg-red-600 text-white text-[11px] font-bold px-2 py-1 rounded">
                      Deal -{d.percent}%
                    </span>
                  )}
                  {f.bestSeller && (
                    <span className="bg-[#232f3e] text-white text-[11px] font-bold px-2 py-1 rounded">
                      Best Seller
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="text-sm font-semibold leading-snug line-clamp-2 min-h-[40px]">
                  {p.name}
                </div>

                <div className="mt-2 font-extrabold">
                  {formatMoney(p.priceCents, p.currency)}
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <RatingStars rating={r.rating} />
                  <span className="text-xs text-blue-700 hover:underline">
                    ({r.reviews})
                  </span>
                </div>

                {f.prime && (
                  <div className="mt-2 flex items-center gap-2 text-xs font-semibold">
                    <span className="bg-[#00a8e1] text-white px-2 py-1 rounded">
                      Prime
                    </span>
                    <span className="text-gray-600">FastShip</span>
                  </div>
                )}

                <div className="mt-auto pt-4">
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
          );
        })}
      </div>
    </section>
  );
}
