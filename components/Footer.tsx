import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
      <p className="text-xs text-zinc-400 dark:text-zinc-500">
        &copy; {new Date().getFullYear()} Raphaël Baur
      </p>
      <SocialLinks />
    </footer>
  );
}
