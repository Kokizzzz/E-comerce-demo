export type CartItem = {
  id: string;
  name: string;
  priceCents: number;
  currency: string;
  image: string;
  qty: number;
};

const KEY = "starter_store_cart";

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function writeCart(items: CartItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function addItem(item: Omit<CartItem, "qty">, qty = 1) {
  const cart = readCart();
  const i = cart.findIndex((x) => x.id === item.id);
  if (i >= 0) cart[i].qty += qty;
  else cart.push({ ...item, qty });
  writeCart(cart);
  return cart;
}

export function setQty(id: string, qty: number) {
  const cart = readCart().map((x) => (x.id === id ? { ...x, qty } : x));
  const cleaned = cart.filter((x) => x.qty > 0);
  writeCart(cleaned);
  return cleaned;
}

export function clearCart() {
  writeCart([]);
}
