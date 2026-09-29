import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Raphaël Baur
      </p>
      <SocialLinks />
    </footer>
  );
}
