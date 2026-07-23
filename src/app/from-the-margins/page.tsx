import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FeaturedEssay from "@/components/sections/FeaturedEssay";
import EssayArchive from "@/components/sections/EssayArchive";

export const metadata: Metadata = {
  title: "From the Margins — Essays & Editorial Writing by Kelly Gunn · Feinix Haus",
  description:
    "Long-form essays, reflections, and observations on drifting, permission, and the art of after. Written by Kelly Gunn, published by Feinix Haus. Exploring identity, transition, and life after disruption.",
  alternates: {
    canonical: "/from-the-margins",
  },
  openGraph: {
    title: "From the Margins — Essays & Editorial · Feinix Haus",
    description:
      "Long-form essays and reflections on drifting, permission, and the art of after. Published by Feinix Haus, written by Kelly Gunn.",
    images: [
      {
        url: "/editorial/framer-reading-table.png",
        width: 1200,
        height: 630,
        alt: "From the Margins — The Reading Table by Feinix Haus",
      },
    ],
  },
};

/* Blog JSON-LD */
const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "From the Margins",
  description:
    "Long-form essays, reflections, and observations on drifting, permission, and the art of after. Published by Feinix Haus.",
  url: "https://feinixhaus.com/from-the-margins",
  publisher: {
    "@type": "Organization",
    name: "Feinix Haus",
    url: "https://feinixhaus.com",
  },
  author: {
    "@type": "Person",
    name: "Kelly Gunn",
    jobTitle: "Founder & Editor-in-Chief",
    url: "https://feinixhaus.com/about",
  },
  blogPost: [
    {
      "@type": "BlogPosting",
      headline: "I Am Not Here to Inspire You",
      description:
        "A reflection on moving past inspiration tropes into participation, self-authorship, and what comes next.",
      datePublished: "2026-06-01",
      author: {
        "@type": "Person",
        name: "Kelly Gunn",
      },
      publisher: {
        "@type": "Organization",
        name: "Feinix Haus",
      },
      url: "https://feinixhaus.com/from-the-margins",
    },
  ],
};

export default function FromTheMarginsPage() {
  return (
    <>
      <PageHero
        eyebrow="Essays & Reflections · The Reading Table"
        title="From the"
        titleEmphasis="Margins."
        lead="Long-form essays, reflections, and observations on drifting, permission, and the art of after. Published by the house. Written by the editor."
        breadcrumb="From the Margins"
      />

      <FeaturedEssay />

      <EssayArchive />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
    </>
  );
}
