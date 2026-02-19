import { siteConfig } from "@/data/siteConfig";

export function ResearchInterests() {
  return (
    <div className="flex flex-wrap gap-2">
      {siteConfig.researchInterests.map((interest) => (
        <span
          key={interest}
          className="px-2.5 py-1 text-sm border border-zinc-300 dark:border-zinc-600 rounded-md shadow-[1px_1px_0_0] shadow-zinc-300 dark:shadow-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 dark:hover:border-zinc-100 transition-colors cursor-default"
        >
          {interest}
        </span>
      ))}
    </div>
  );
}
