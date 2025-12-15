import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryTiles() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-extrabold">Shop by Category</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.slice(0, 4).map((c) => (
          <div key={c.id} className="bg-white border rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="font-bold text-lg">{c.label}</div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                {c.items.slice(0, 4).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                href={`/?cat=${c.id}`}
                className="inline-block mt-4 text-sm text-blue-700 hover:underline font-semibold"
              >
                Shop {c.label} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
