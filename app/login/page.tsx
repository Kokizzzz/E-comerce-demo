import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto bg-white border rounded-2xl p-6 shadow-sm">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <p className="text-gray-600 mt-1 text-sm">Demo login screen</p>

      <label className="block mt-5 text-sm font-medium">Email</label>
      <input
        className="w-full mt-2 border rounded-xl px-3 py-2"
        placeholder="demo@email.com"
      />

      <label className="block mt-4 text-sm font-medium">Password</label>
      <input
        className="w-full mt-2 border rounded-xl px-3 py-2"
        placeholder="••••••••"
        type="password"
      />

      <button className="mt-5 w-full bg-black text-white rounded-xl py-2.5 font-semibold">
        Sign in (demo)
      </button>

      <Link className="block text-center underline text-sm mt-4" href="/">
        Back to shop
      </Link>
    </div>
  );
}
