import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "./ThemeToggle";

// Re-enable when the CV page is ready: { href: "/cv", label: "CV" }
const navLinks: { href: string; label: string }[] = [];

export function Header() {
  return (
    <header className="flex justify-between items-start pt-6 pb-6 mb-8 border-y border-zinc-700 dark:border-zinc-300">
      <div className="flex flex-col justify-between gap-3">
        <div>
          <Link href="/" className="no-underline hover:no-underline">
            <h1 className="text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
              {siteConfig.name}
            </h1>
          </Link>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 pt-4">
            {siteConfig.position}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {siteConfig.institution}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {navLinks.length > 0 ? (
            <>
              <nav className="flex gap-3 text-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-700" />
            </>
          ) : null}
          <SocialLinks />
          <ThemeToggle />
        </div>
      </div>
      <Image
        src={siteConfig.image}
        alt={siteConfig.name}
        width={160}
        height={160}
        className="rounded-full border border-zinc-200 dark:border-zinc-700 hidden sm:block"
        priority
      />
    </header>
  );
}
