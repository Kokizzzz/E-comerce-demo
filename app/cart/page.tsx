import { Suspense } from "react";
import CartClient from "./CartClient";

export const dynamic = "force-dynamic";

export default function CartPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading cart…</div>}>
      <CartClient />
    </Suspense>
  );
}
