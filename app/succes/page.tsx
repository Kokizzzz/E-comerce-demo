import products from "@/data/products.json";
import AddToCartButton from "@/components/AddToCartButton";

function formatMoney(cents: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight">Shop</h1>
        <p className="text-gray-600 max-w-xl">
          A clean demo storefront. Add items to your cart and proceed to checkout.
        </p>
      </div>

      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="group rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="relative">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-60 object-cover group-hover:scale-[1.02] transition"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-sm font-semibold">
                {formatMoney(p.priceCents, p.currency)}
              </div>
            </div>

            <div className="p-5">
              <h2 className="text-lg font-bold">{p.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{p.description}</p>

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
        ))}
      </div>
    </div>
  );
}
