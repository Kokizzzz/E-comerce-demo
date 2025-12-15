"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function CheckoutClient() {
  const sp = useSearchParams();

  // Example: /checkout?status=success or /checkout?total=123
  const status = sp.get("status");
  const total = sp.get("total");

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-bold">Checkout</h1>

      {(status || total) && (
        <div className="mt-4 rounded-2xl border bg-white p-4">
          {status ? (
            <div>
              Status: <b>{status}</b>
            </div>
          ) : null}
          {total ? (
            <div className="mt-1">
              Total: <b>{total}</b>
            </div>
          ) : null}
        </div>
      )}

      <div className="mt-6 flex gap-3">
        <Link
          href="/cart"
          className="rounded-xl border bg-white px-4 py-2 font-semibold hover:bg-gray-50"
        >
          ← Back to cart
        </Link>

        <Link
          href="/"
          className="rounded-xl bg-[#FEBd69] px-4 py-2 font-bold text-black hover:brightness-95"
        >
          Continue shopping
        </Link>
      </div>

      <p className="mt-6 text-sm text-gray-600">
        Demo checkout page (no real payments).
      </p>
    </main>
  );
}
