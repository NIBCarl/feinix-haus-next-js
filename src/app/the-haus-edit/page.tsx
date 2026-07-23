import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import DetailGrid from "@/components/sections/DetailGrid";
import VolumeFeature from "@/components/sections/VolumeFeature";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ApplyForm from "@/components/sections/ApplyForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "The Haus Edit — Private Editorial Experience for Women in Transition · Feinix Haus",
  description:
    "The Haus Edit is a private, three-month editorial experience by Kelly Gunn. We refine, clarify, and shape your next chapter into a hand-bound, printed Volume One. Not coaching, not therapy — editorial direction for women rewriting life after disruption.",
  alternates: {
    canonical: "/the-haus-edit",
  },
  openGraph: {
    title: "The Haus Edit — Private Editorial Experience · Feinix Haus",
    description:
      "A private editorial for your life. Three months of structured conversations and deep editorial passes, culminating in a hand-bound, printed Volume One.",
    images: [
      {
        url: "/covers/framer-volume-one.jpg",
        width: 1200,
        height: 630,
        alt: "The Haus Edit — Volume One, Hand-bound Limited Edition",
      },
    ],
  },
};

const details = [
  {
    label: "What It Is",
    title: "Private editorial work",
    desc: "Not coaching, not therapy — editorial direction for your next chapter. We approach your life the way an editor-in-chief approaches a manuscript.",
  },
  {
    label: "Who It's For",
    title: "Women in transition",
    desc: "Women who've been through something and don't need another support group — they need an editorial eye, a creative collaborator, and a room that expects their best.",
  },
  {
    label: "The Experience",
    title: "Three-month journey",
    desc: "Structured conversations, reflective assignments, and deep editorial passes. We work at the speed of attention, not urgency — with breathing room between every session.",
  },
  {
    label: "The Volume",
    title: "A printed artifact",
    desc: "Volume One is a hand-bound, limited-edition printed volume — your story, refined and designed with the same care as a literary magazine.",
  },
];

const hausFaqs = [
  {
    question: "How is this different from coaching or therapy?",
    answer:
      "It isn't either. The Haus Edit is editorial work — closer to what a creative director does for a brand, or an editor-in-chief does for a magazine. We're not processing the past. We're shaping the next chapter.",
  },
  {
    question: "How long is the engagement?",
    answer:
      "Volume I runs for three months. The pace is deliberately slow — we work at the speed of attention, not urgency.",
  },
  {
    question: "How many women are in each Volume?",
    answer:
      "Intentionally few. Applications are reviewed personally, and the cohort is kept small enough that every woman's edit is fully considered.",
  },
  {
    question: "Is it in person or remote?",
    answer:
      "Mostly remote, with the option of an in-person intensive. Distance protects the editorial pace.",
  },
  {
    question: "What does it cost?",
    answer:
      "Pricing is shared privately upon application. We want to make sure the fit is right before talking numbers.",
  },
];

/* FAQPage JSON-LD */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hausFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* Service JSON-LD */
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "The Haus Edit — Private Editorial Experience",
  provider: {
    "@type": "Organization",
    name: "Feinix Haus",
    url: "https://feinixhaus.com",
  },
  description:
    "A private, three-month editorial experience for women in transition. Structured conversations, reflective assignments, and deep editorial passes — culminating in a hand-bound, printed Volume One.",
  serviceType: "Editorial Direction",
  areaServed: "Worldwide",
  url: "https://feinixhaus.com/the-haus-edit",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/LimitedAvailability",
    description: "By application only. Pricing shared upon accepted application.",
  },
};

export default function TheHausEditPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Editorial · By Application"
        title="The Haus Edit."
        titleEmphasis="Volume I."
        lead="A private editorial for your life. Together we refine, clarify, and shape your next chapter into a hand-bound, printed Volume One."
        breadcrumb="The Haus Edit"
      />

      <section className="py-20 md:py-28 bg-cream" aria-label="What the Haus Edit includes">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <DetailGrid items={details} />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream-warm" aria-label="Volume One artifact">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <VolumeFeature
            imageSrc="/covers/framer-volume-one.jpg"
            imageAlt="Volume One — Hand-bound limited edition printed volume by Feinix Haus"
            caption="Volume One"
            subcaption="Limited Edition · Printed"
            eyebrow="The Artifact"
            title="Your Volume One."
            titleEmphasis="Hand-bound."
            description="This is the physical manifestation of three months of editorial work. A typeset, designed, hand-bound document — not a journal, not a scrapbook — a printed volume. Your life, edited."
            includes={[
              "Custom typeset interior design",
              "Hand-selected photographic plates",
              "Archival paper and hand-sewn binding",
              "Numbered and limited edition",
            ]}
            ctaText="Apply for Volume I"
            ctaHref="/the-haus-edit#apply"
          />
        </div>
      </section>

      <FAQAccordion
        faqs={hausFaqs}
        title="Questions about"
        subtitle="the Edit."
      />

      <ApplyForm />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}
