import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import LenisProvider from "@/lib/lenis";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feinix Haus — A Publishing House · Palm Springs",
  description:
    "The Art of After. Feinix Haus is an editorial publishing house built for women rewriting life after disruption. Essays, community, and a private editorial experience — Volume I.",
  keywords: [
    "Feinix Haus",
    "publishing house",
    "editorial",
    "after cancer",
    "Kelly Gunn",
    "Palm Springs",
    "women empowerment",
  ],
  openGraph: {
    title: "Feinix Haus — A Publishing House · Palm Springs",
    description:
      "The Art of After. Essays, community, and a private editorial experience for women rewriting life after disruption.",
    type: "website",
    locale: "en_US",
    siteName: "Feinix Haus",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LenisProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
