import productsData from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

type SearchParams = { q?: string; cat?: string };

function matchesQuery(p: any, q: string) {
  const s = q.toLowerCase();
  return (
    (p.name ?? "").toLowerCase().includes(s) ||
    (p.description ?? "").toLowerCase().includes(s) ||
    (p.category ?? "").toLowerCase().includes(s)
  );
}

function pick<T>(arr: T[], n: number) {
  return arr.slice(0, Math.max(0, n));
}

export default async function HomePage(props: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await props.searchParams) ?? {};
  const all = productsData as any[];

  const q = typeof sp.q === "string" ? sp.q.trim() : "";
  const cat = typeof sp.cat === "string" ? sp.cat.trim() : "";

  const filtered = all.filter((p) => {
    const catOk = !cat || p.category === cat;
    const qOk = !q || matchesQuery(p, q);
    return catOk && qOk;
  });

  const bestSellers = pick(filtered, 10);
  const recommended = filtered.slice(10);

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      {/* HERO (smaller + no right card) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0b1220]" />

        {/* soft glow accents */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-24 -left-28 h-[320px] w-[320px] rounded-full bg-[#FEBd69]/20 blur-3xl" />
          <div className="absolute -bottom-28 -right-28 h-[380px] w-[380px] rounded-full bg-[#00a8e1]/16 blur-3xl" />
        </div>

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-8 pt-10 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
            ✨ Marketplace Demo UI
            <span className="rounded-full bg-[#FEBd69]/20 px-2 py-0.5 text-[11px] font-bold text-[#FEBd69]">
              Next.js + Tailwind
            </span>
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                MegaMart
                <span className="block text-white/85">
                  Deals, Best Sellers & Essentials
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70 leading-relaxed">
                Search + category filtering, ratings, badges, and a clean cart
                flow — built to feel like a real storefront.
              </p>

              {(q || cat) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
                    {cat ? `Category: ${cat}` : "All categories"}
                  </span>
                  {q ? (
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
                      Search: “{q}”
                    </span>
                  ) : null}
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
                    {filtered.length} items
                  </span>
                </div>
              )}
            </div>

            {/* right side intentionally EMPTY now (for cleaner hero) */}
            <div className="hidden lg:block lg:col-span-4" />
          </div>
        </div>

        {/* SMOOTH TRANSITION: black -> dark gray -> gray -> light -> page bg */}
        <div className="relative">
          <div className="h-16 bg-gradient-to-b from-[#0b1220] via-[#1a2233] to-[#2b3446]" />
          <div className="h-14 bg-gradient-to-b from-[#2b3446] via-[#dfe5ee] to-[#f6f7fb]" />
        </div>
      </section>

      {/* PRODUCTS (more spacing so it doesn't stick to hero) */}
      <main className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 pb-14 pt-8">
        {/* Best Sellers */}
        <section id="bestsellers" className="mt-2">
          <div className="rounded-3xl bg-white p-5 sm:p-7 shadow-[0_18px_50px_rgba(15,23,42,.08)] border border-black/5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                  Best Sellers
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Popular items with ratings, Deal badges, and Prime-like tags.
                </p>
              </div>
              <a
                className="text-sm font-semibold text-blue-700 hover:underline"
                href="#recommended"
              >
                See more →
              </a>
            </div>

            <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {bestSellers.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Recommended */}
        <section id="recommended" className="mt-10">
          <div className="rounded-3xl bg-white p-5 sm:p-7 shadow-[0_18px_50px_rgba(15,23,42,.08)] border border-black/5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                  Recommended for you
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  A mix of categories — use the top nav to filter.
                </p>
              </div>
              <span className="text-sm text-slate-500">
                Showing {recommended.length} items
              </span>
            </div>

            <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {recommended.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="mt-10">
          <div className="rounded-3xl bg-[#0b1220] text-white border border-white/10 p-6 sm:p-8 shadow-[0_18px_50px_rgba(15,23,42,.18)]">
            <div className="grid gap-6 lg:grid-cols-3">
              <div>
                <div className="text-lg font-extrabold">MegaMart</div>
                <p className="mt-2 text-sm text-white/70">
                  Demo storefront UI — category filters, search, product cards,
                  and cart.
                </p>
              </div>
              <div className="text-sm">
                <div className="font-bold text-white/90">Quick links</div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-white/75">
                  <a className="hover:text-white" href="#bestsellers">
                    Best Sellers
                  </a>
                  <a className="hover:text-white" href="#recommended">
                    Recommended
                  </a>
                  <a className="hover:text-white" href="/cart">
                    Cart
                  </a>
                  <a className="hover:text-white" href="/login">
                    Account
                  </a>
                </div>
              </div>
              <div className="text-sm">
                <div className="font-bold text-white/90">Built with</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    Next.js
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    Tailwind
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    Local Cart
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    Filters
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/60">
              © {new Date().getFullYear()} MegaMart • Demo project (no real
              payments)
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
