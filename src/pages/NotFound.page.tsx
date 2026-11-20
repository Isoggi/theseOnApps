import { Link } from "react-router";

export function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-extrabold text-slate-900">404</h1>
      <p className="mt-2 text-slate-600">Page not found.</p>
      <Link
        to="/"
        className="mt-4 text-sm font-medium text-sky-600 hover:underline"
      >
        Return Home
      </Link>
    </main>
  );
}
