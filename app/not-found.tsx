import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] grid place-items-center bg-[#f6f7fb] px-6">
      <div className="w-full max-w-xl rounded-3xl border bg-white p-8 shadow-sm">
        <div className="text-sm font-semibold text-slate-500">404</div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-slate-600">
          The page you’re looking for doesn’t exist (demo storefront).
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="rounded-xl bg-[#FEBd69] px-5 py-3 text-center font-bold text-black hover:brightness-95"
          >
            Go home
          </Link>
          <Link
            href="/cart"
            className="rounded-xl border bg-white px-5 py-3 text-center font-semibold hover:bg-gray-50"
          >
            Go to cart
          </Link>
        </div>
      </div>
    </main>
  );
}
