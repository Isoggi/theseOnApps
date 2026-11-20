import type { LoginProps } from "../types";

export function LoginPage({ param }: LoginProps) {
  return (
    <main className="mx-auto max-w-md p-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Sign In</h1>
        <p className="mt-1 text-sm text-slate-500">
          Authenticate to access protected dashboard routes.
        </p>
      </div>
    </main>
  );
}
