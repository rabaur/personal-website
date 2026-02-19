import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-bold tracking-tight mb-4">404</h1>
      <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-6">
        Page not found
      </p>
      <Link
        href="/"
        className="text-sm px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}
