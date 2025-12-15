import { NextResponse } from "next/server";

export async function POST() {
  // Demo mode: no real payments on deployment
  return NextResponse.json(
    {
      demo: true,
      url: "/succes", // redirect page in your app
      message: "Demo checkout: payments are disabled on live deployment.",
    },
    { status: 200 }
  );
}

// Optional: block GET so you don't see 405 confusion
export async function GET() {
  return NextResponse.json({ ok: true }, { status: 200 });
}
