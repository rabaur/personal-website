import { Mail, Github } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

function GoogleScholarIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-1.75a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5zM1.75 10.333 12 0l10.25 10.333h-4.707v.334A7.457 7.457 0 0 0 12 8.5a7.457 7.457 0 0 0-5.543 2.167v-.334H1.75z" />
    </svg>
  );
}

const iconMap = {
  mail: Mail,
  github: Github,
  google_scholar: GoogleScholarIcon,
} as const;

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {siteConfig.socialLinks.map((link) => {
        const Icon = iconMap[link.platform];
        return (
          <a
            key={link.platform}
            href={link.url}
            target={link.platform === "mail" ? undefined : "_blank"}
            rel={link.platform === "mail" ? undefined : "noopener noreferrer"}
            title={link.label}
            className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}
