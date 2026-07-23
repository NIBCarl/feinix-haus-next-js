import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import LenisProvider from "@/lib/lenis";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://feinixhaus.com"),
  title: "Feinix Haus — Editorial Publishing House for Women Rewriting Life After Disruption",
  description:
    "Feinix Haus is an editorial publishing house founded by Kelly Gunn in Palm Springs. Offering private editorial experiences, essays, and community for women rewriting life after disruption. Volume I — The Art of After.",
  keywords: [
    "Feinix Haus",
    "publishing house",
    "editorial experience",
    "women after cancer",
    "Kelly Gunn",
    "Palm Springs",
    "life after disruption",
    "post-cancer community",
    "editorial direction",
    "The Haus Edit",
    "Pool Haus",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Feinix Haus — Editorial Publishing House for Women Rewriting Life After Disruption",
    description:
      "Private editorial experiences, long-form essays, and a gathering community for women rewriting life after disruption. Founded by Kelly Gunn in Palm Springs.",
    type: "website",
    locale: "en_US",
    siteName: "Feinix Haus",
    url: "https://feinixhaus.com",
    images: [
      {
        url: "/covers/framer-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Feinix Haus — The Art of After, Volume I Edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feinix Haus — A Publishing House for Life After Disruption",
    description:
      "Private editorial experiences, essays, and community for women rewriting life after disruption.",
    images: ["/covers/framer-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* JSON-LD Structured Data — Organization + Person */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Feinix Haus",
  url: "https://feinixhaus.com",
  logo: "https://feinixhaus.com/covers/framer-hero.jpg",
  description:
    "Feinix Haus is an editorial publishing house and gathering place for women rewriting life after disruption. Founded by Kelly Gunn in Palm Springs, it offers private editorial experiences, long-form essays, and an intentional community.",
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "Kelly Gunn",
    jobTitle: "Founder & Editor-in-Chief",
    url: "https://feinixhaus.com/about",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Palm Springs",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.instagram.com/feinix_haus",
    "https://www.tiktok.com/@unapologeticallyafter",
    "https://www.skool.com/unapologetically-after",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@feinixhaus.com",
    contactType: "customer service",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kelly Gunn",
  jobTitle: "Founder & Editor-in-Chief",
  url: "https://feinixhaus.com/about",
  worksFor: {
    "@type": "Organization",
    name: "Feinix Haus",
    url: "https://feinixhaus.com",
  },
  description:
    "Writer, editor, and founder of Feinix Haus. Kelly Gunn built the editorial publishing house after her own cancer journey, bringing two decades of brand strategy and creative direction to personal editorial work for women in transition.",
  image: "https://feinixhaus.com/editorial/kelly-portrait.png",
  sameAs: [
    "https://www.instagram.com/feinix_haus",
    "https://www.c-heads.com/2026/02/12/the-moment-anyway-a-conversation-with-kelly/",
  ],
  knowsAbout: [
    "Editorial direction",
    "Brand strategy",
    "Creative direction",
    "Life after cancer",
    "Women's empowerment",
  ],
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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </body>
    </html>
  );
}
