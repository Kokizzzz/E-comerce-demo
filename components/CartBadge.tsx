"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readCart } from "@/lib/cart";

export default function CartBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const cart = readCart();
      setCount(cart.reduce((s, i) => s + i.qty, 0));
    };
    update();
    window.addEventListener("storage", update);
    window.addEventListener("cart:updated" as any, update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("cart:updated" as any, update);
    };
  }, []);

  return (
    <Link href="/cart" className="relative inline-flex items-center gap-2">
      <div className="relative">
        <span className="text-2xl leading-none">🛒</span>
        {count > 0 && (
          <span className="absolute -top-2 -right-2 min-w-6 h-6 px-2 text-xs grid place-items-center rounded-full bg-[#f08804] text-black font-black">
            {count}
          </span>
        )}
      </div>
      <span className="hidden sm:inline font-bold">Cart</span>
    </Link>
  );
}
