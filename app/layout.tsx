import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "MegaMart",
  description: "Demo marketplace storefront",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        {/* ✅ Fix for build: Navbar uses useSearchParams, so wrap in Suspense */}
        <Suspense fallback={<div className="h-[104px] bg-[#0b1220]" />}>
          <Navbar />
        </Suspense>

        {/* FULL WIDTH */}
        <main className="w-full">{children}</main>

        <footer className="mt-16 bg-[#232f3e] text-white">
          <a
            href="#"
            className="block w-full py-3 text-center text-sm font-semibold bg-[#37475a] hover:bg-white/10"
          >
            Back to top
          </a>

          <div className="w-full px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            <div>
              <div className="font-bold mb-3">Get to Know Us</div>
              <ul className="space-y-2 text-white/80">
                <li>About MegaMart (demo)</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>

            <div>
              <div className="font-bold mb-3">Make Money with Us</div>
              <ul className="space-y-2 text-white/80">
                <li>Sell on MegaMart</li>
                <li>Affiliate Program</li>
                <li>Advertise Your Products</li>
              </ul>
            </div>

            <div>
              <div className="font-bold mb-3">Payment Products</div>
              <ul className="space-y-2 text-white/80">
                <li>Credit &amp; Debit Cards</li>
                <li>Gift Cards</li>
                <li>Currency Converter</li>
              </ul>
            </div>

            <div>
              <div className="font-bold mb-3">Let Us Help You</div>
              <ul className="space-y-2 text-white/80">
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Help</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="w-full px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
              <div>© {new Date().getFullYear()} MegaMart — Demo Storefront</div>
              <div className="flex gap-4">
                <span>Privacy</span>
                <span>Terms</span>
                <span>Cookies</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
