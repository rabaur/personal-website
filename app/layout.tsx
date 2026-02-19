import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Crimson_Pro } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "Raphaël Baur",
  description:
    "Personal website of Raphaël Baur, Doctoral Fellow at the ETH AI Center, ETH Zürich.",
  openGraph: {
    title: "Raphaël Baur",
    description:
      "Doctoral Fellow at the ETH AI Center, ETH Zürich. Research on human-AI collaboration, reward learning, and hospital design.",
    url: "https://www.raphaelbaur.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${crimsonPro.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased font-[family-name:var(--font-geist-sans)]">
        <ThemeProvider>
          <main className="max-w-xl mx-auto px-6 py-8">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
