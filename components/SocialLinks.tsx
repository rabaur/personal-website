import { siteConfig } from "@/data/siteConfig";

// Style kit §5: no icon libraries. Links are text-only buttons.
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-[var(--s-2)] ${className}`}>
      {siteConfig.socialLinks.map((link) => {
        const isExternal = link.platform !== "mail";
        return (
          <a
            key={link.platform}
            href={link.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            title={link.label}
            className="btn"
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
