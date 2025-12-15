"use client";

import { useEffect, useMemo, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function DealsCountdown() {
  const target = useMemo(() => {
    const d = new Date();
    d.setMinutes(59, 59, 999);
    return d.getTime();
  }, []);

  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, target - now);
  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border bg-white shadow-sm">
      <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 text-red-700 px-3 py-1 text-xs font-bold">
            🔥 Live Deal Window
          </div>
          <div className="mt-2 text-2xl font-extrabold tracking-tight">
            Today’s Deals
          </div>
          <div className="text-sm text-gray-600 mt-1">
            Curated demo discounts — refresh automatically
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-2xl border bg-gray-50 px-4 py-3">
            <div className="text-[11px] font-bold text-gray-500">ENDS IN</div>
            <div className="font-mono text-2xl font-extrabold">
              {pad(h)}:{pad(m)}:{pad(s)}
            </div>
          </div>

          <a
            href="#deals"
            className="rounded-2xl bg-[#232f3e] text-white px-5 py-3 font-bold hover:brightness-110 active:scale-[0.98] transition shadow-sm"
          >
            View deals →
          </a>
        </div>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-[#febd69] via-red-500 to-[#00a8e1]" />
    </div>
  );
}
