"use client";

import { addItem } from "@/lib/cart";

type Props = {
  product: {
    id: string;
    name: string;
    priceCents: number;
    currency: string;
    image: string;
  };
};

export default function AddToCartButton({ product }: Props) {
  return (
    <button
      className="mt-4 w-full rounded-xl py-2.5 font-medium bg-black text-white hover:opacity-90 active:opacity-80 transition"
      onClick={() => {
        addItem({ ...product }, 1);
        window.dispatchEvent(new Event("cart:updated"));
      }}
    >
      Add to cart
    </button>
  );
}
