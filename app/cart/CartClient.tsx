"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function CartClient() {
  const searchParams = useSearchParams();
  const added = searchParams.get("added");

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-bold">Cart</h1>

      {added && (
        <div className="mt-4 rounded-xl border bg-white p-4">
          ✅ Added to cart: <b>{added}</b>
        </div>
      )}

      <div className="mt-6">
        <Link className="underline" href="/">
          ← Continue shopping
        </Link>
      </div>
    </main>
  );
}
