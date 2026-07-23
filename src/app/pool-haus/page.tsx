import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import DetailGrid from "@/components/sections/DetailGrid";
import MembershipTiers from "@/components/sections/MembershipTiers";
import VolumeFeature from "@/components/sections/VolumeFeature";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Pool Haus — Community & Gathering Place for Women After Disruption · Feinix Haus",
  description:
    "Pool Haus is the community behind Feinix Haus. A curated gathering space on Skool with free and paid membership ($22/month). Monthly Open Haus calls, weekly live sessions, essays, and a circle that values depth over performance.",
  alternates: {
    canonical: "/pool-haus",
  },
  openGraph: {
    title: "Pool Haus — The Gathering Place · Feinix Haus",
    description:
      "A curated community for women in after. Free and paid membership with live calls, essays, and Open Haus gatherings.",
    images: [
      {
        url: "/covers/framer-pool-haus.jpg",
        width: 1200,
        height: 630,
        alt: "Pool Haus — The Gathering Place by Feinix Haus",
      },
    ],
  },
};

const pillars = [
  {
    label: "The Room",
    title: "Curated gathering space",
    desc: "A digital gathering place on Skool for women in after — not a Facebook group, not a support circle. A room with taste.",
  },
  {
    label: "The Calendar",
    title: "Live calls & Open Haus",
    desc: "Monthly Open Haus gatherings, weekly member calls, and real-time conversations with Kelly and the community.",
  },
  {
    label: "The Classroom",
    title: "Essays & editorials",
    desc: "Members-only long-form essays, guided reflections, and the full editorial archive — a growing body of considered work.",
  },
  {
    label: "The Leaderboard",
    title: "Engagement, not competition",
    desc: "A rolling 30-day leaderboard that rewards presence, curiosity, and contribution — not performance or volume.",
  },
];

const poolFaqs = [
  {
    question: "What is Pool Haus exactly?",
    answer:
      "Pool Haus is the community behind the publishing house. It's hosted on Skool, with a free tier (open to all) and a paid membership ($22/month) that unlocks the full editorial and live calendar.",
  },
  {
    question: "How is this different from a Facebook group?",
    answer:
      "It's curated, edited, and intentionally small. No algorithmic feed, no ads, no content farming. Just conversation, essays, and depth.",
  },
  {
    question: "What's included in the free tier?",
    answer:
      "Access to the community feed, monthly Open Haus gatherings, the welcome video, and free member resources.",
  },
  {
    question: "What does the $22/month membership unlock?",
    answer:
      "Weekly live calls, members-only essays, the full classroom archive, recordings, and the rolling leaderboard & rooms.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no commitment. The first week is free — come see the room before you decide.",
  },
];

/* FAQPage JSON-LD */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: poolFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* Product JSON-LD for membership tiers */
const productJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Pool Haus — Free Community Membership",
    description:
      "Free access to the Feinix Haus community on Skool. Includes community feed, monthly Open Haus gatherings, welcome video, and free member resources.",
    brand: { "@type": "Brand", name: "Feinix Haus" },
    url: "https://feinixhaus.com/pool-haus",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Pool Haus — Full Membership",
    description:
      "Full access to Pool Haus community at $22/month with a 7-day free trial. Includes weekly live calls, members-only essays, full classroom archive, recordings, and the rolling leaderboard.",
    brand: { "@type": "Brand", name: "Feinix Haus" },
    url: "https://feinixhaus.com/pool-haus",
    offers: {
      "@type": "Offer",
      price: "22",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: "https://www.skool.com/unapologetically-after",
    },
  },
];

export default function PoolHausPage() {
  return (
    <>
      <PageHero
        eyebrow="The Gathering Place · Community"
        title="The Pool Haus."
        titleEmphasis="Come sit."
        lead="The gathering place behind the publishing house. Playlists, Sunday conversations, Open Haus calls, and a circle that values depth over performance."
        breadcrumb="Pool Haus"
        bgColor="bg-pool"
        textColor="text-cream"
        accentColor="text-[#E8B89A]"
      />

      <section className="py-20 md:py-28 bg-cream" aria-label="What Pool Haus includes">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <DetailGrid items={pillars} />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream-warm" aria-label="Inside Pool Haus">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <VolumeFeature
            imageSrc="/covers/framer-pool-haus.jpg"
            imageAlt="Pool Haus — The Gathering Place for women after disruption"
            caption="Pool Haus"
            subcaption="Community · Skool"
            eyebrow="What You'll Find Inside"
            title="More than a"
            titleEmphasis="community."
            description="The Pool Haus is where the Haus breathes — a place to sit with others who understand the chapters without having to explain them. Not a support group, not a wellness circle — a room with taste and depth."
            includes={[
              "Open Haus monthly gatherings (free to all)",
              "Weekly live calls and recordings (paid)",
              "Long-form editorial essays and reflections",
              "The reading list, playlists, and conversation starters",
            ]}
            ctaText="Enter the Room"
            ctaHref="https://www.skool.com/unapologetically-after"
          />
        </div>
      </section>

      <MembershipTiers />

      <FAQAccordion
        faqs={poolFaqs}
        title="Questions about"
        subtitle="the Pool."
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {productJsonLd.map((product, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
        />
      ))}
    </>
  );
}
