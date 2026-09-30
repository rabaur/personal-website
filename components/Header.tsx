import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { SocialLinks } from "./SocialLinks";

// Re-enable when the CV page is ready: { href: "/cv", label: "CV" }
const navLinks: { href: string; label: string }[] = [];

export function Header() {
  return (
    <header className="hdr">
      <div className="flex flex-col gap-[var(--s-4)]">
        <Link href="/" className="display no-underline">
          {siteConfig.name}
        </Link>
        <div className="flex flex-wrap gap-[var(--s-2)]">
          <span className="tag">{siteConfig.position}</span>
          <span className="tag">{siteConfig.institution}</span>
        </div>
        <div className="flex flex-wrap items-center gap-[var(--s-2)]">
          {navLinks.length > 0 ? (
            <nav className="flex gap-[var(--s-2)]">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="btn">
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}
          <SocialLinks />
        </div>
      </div>
      <Image
        src={siteConfig.image}
        alt={siteConfig.name}
        width={160}
        height={160}
        className="hdr-photo hidden sm:block"
        priority
      />
    </header>
  );
}
