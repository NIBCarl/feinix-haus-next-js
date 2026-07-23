import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import PressReel from "@/components/sections/PressReel";
import InvitationBlock from "@/components/sections/InvitationBlock";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Kelly Gunn — Founder & Certified Personal Trainer · Feinix Haus",
  description:
    "Kelly Gunn is the founder of Feinix Haus, a lifestyle and fitness community for women after cancer. Ironman triathlete, bodybuilder, and advocate for living boldly.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Kelly Gunn — Founder & Certified Personal Trainer",
    description:
      "Writer, triathlete, bodybuilder, and the woman behind Feinix Haus. After a breast cancer diagnosis in 2024, she stopped postponing her life and built the community she couldn't find.",
    images: [
      {
        url: "/editorial/kelly-portrait.png",
        width: 1200,
        height: 630,
        alt: "Kelly Gunn — Founder of Feinix Haus",
      },
    ],
  },
};

/* Person JSON-LD (page-level, more detailed) */
const personDetailJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kelly Gunn",
  jobTitle: "Founder & Certified Personal Trainer",
  url: "https://feinixhaus.com/about",
  image: "https://feinixhaus.com/editorial/kelly-portrait.png",
  description:
    "Writer, triathlete, bodybuilder, and the woman behind Feinix Haus. After a breast cancer diagnosis in 2024, she stopped postponing her life and built the community she couldn't find.",
  worksFor: {
    "@type": "Organization",
    name: "Feinix Haus",
    url: "https://feinixhaus.com",
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
    "https://www.c-heads.com/2026/02/12/the-moment-anyway-a-conversation-with-kelly/",
  ],
  knowsAbout: [
    "Fitness and Wellness",
    "Bodybuilding post-mastectomy",
    "Life after cancer",
    "Women's empowerment",
    "Sobriety",
    "Endurance sports",
  ],
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder & Certified Personal Trainer"
        title="Kelly Gunn."
        lead="Writer, triathlete, bodybuilder, and the woman behind Feinix Haus. After a breast cancer diagnosis in 2024, she stopped postponing her life and built the community she couldn't find."
        breadcrumb="About"
      />

      {/* Bio Section */}
      <section className="py-20 md:py-28 bg-cream" aria-label="Kelly Gunn biography">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="photo-mat">
                <Image
                  src="/editorial/kelly-portrait.png"
                  alt="Kelly Gunn — Founder of Feinix Haus, editorial portrait in Palm Springs"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover rounded-sm"
                />
                <div className="flex justify-between items-center mt-3 px-0.5">
                  <span className="text-[0.78rem] tracking-[0.12em] uppercase text-text-muted font-medium">
                    Kelly Gunn
                  </span>
                  <span className="text-[0.78rem] tracking-[0.12em] uppercase text-text-muted font-medium">
                    Founder &amp; Certified PT
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="pt-4">
                <span className="text-[0.78rem] font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
                  The Story
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-ink-warm font-light mb-6">
                  From the standstill to <em className="italic">the start line.</em>
                </h2>
                <div className="space-y-5 text-lg text-text-secondary leading-relaxed">
                  <p className="drop-cap">
                    Kelly was living a good life in Hawaii—surfing and running a swimsuit company—but she was drinking too much and postponing the good parts. A move to Central America was meant to be her fresh start, until a suspicious ultrasound ended the fantasy.
                  </p>
                  <p>
                    Diagnosed with breast cancer in July 2024, Kelly relocated to the East Coast. What followed wasn&apos;t just a battle for survival; it was a radical decision to stop waiting. Within one year, she went from a double mastectomy to competing in a bodybuilding show.
                  </p>
                  <p>
                    She shared her raw, unapologetic experience on TikTok, and it resonated deeply with a community of women who felt invisible. The medical system handed them a finish line, and the wellness world wanted them constantly healing.
                  </p>
                  <p>
                    Feinix Haus was born as a sanctuary—a room for women who, after adversity, need a place to land. An homage to the Phoenix rising, but built for women who refuse to be ordinary. Because life is too short to wait for the &ldquo;right time&rdquo; to start living.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-border-subtle">
                  <span className="text-[0.75rem] font-sans font-medium tracking-[0.15em] uppercase text-text-muted mb-3 block">
                    CREDENTIALS &amp; FEATURES
                  </span>
                  <ul className="flex flex-wrap gap-x-2 gap-y-1 text-base text-text-secondary italic">
                    <li className="flex items-center gap-2">Certified Personal Trainer <span className="text-text-muted">·</span></li>
                    <li className="flex items-center gap-2">Ironman Triathlete <span className="text-text-muted">·</span></li>
                    <li className="flex items-center gap-2">Sober <span className="text-text-muted">·</span></li>
                    <li className="flex items-center">C-Heads Magazine Interview</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <PressReel />
      <InvitationBlock />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personDetailJsonLd) }}
      />
    </>
  );
}
