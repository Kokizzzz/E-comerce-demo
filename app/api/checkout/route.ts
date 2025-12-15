import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items = body?.items;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: items.map((item: any) => ({
        quantity: item.qty,
        price_data: {
          currency: item.currency,
          unit_amount: item.priceCents,
          product_data: {
            name: item.name,
            images: item.image ? [item.image] : [],
          },
        },
      })),
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: err?.message || "Server error creating checkout session" },
      { status: 500 }
    );
  }
}
