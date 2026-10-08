import type { Metadata } from "next";
import { Barlow_Condensed, Crimson_Pro } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-barlow-condensed",
});

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
      className={`${barlowCondensed.variable} ${crimsonPro.variable}`}
    >
      <body>
        <main className="board">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
