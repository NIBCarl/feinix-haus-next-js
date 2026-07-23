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
      {/* Bio Section */}
      <section className="pt-[200px] pb-20 md:pt-[260px] lg:pt-[280px] md:pb-32 bg-cream" aria-label="Kelly Gunn biography">
        <div className="max-w-[1600px] mx-auto lg:px-6 xl:px-10">
          <div className="relative w-full flex flex-col lg:flex-row shadow-2xl">
            
            {/* Left Dark Box */}
            <div className="w-full lg:w-[65%] bg-[#181818] pt-16 pb-20 px-8 md:px-16 lg:pl-20 xl:pl-28 lg:pr-[280px] xl:pr-[380px] relative z-10 flex flex-col justify-center">
              <ScrollReveal>
                <h2 className="font-serif text-[clamp(4rem,6vw,7rem)] text-cream uppercase tracking-wide mb-4 leading-[1.05] whitespace-nowrap">
                  HI, I&apos;M KELLY
                </h2>
                <p className="font-serif text-2xl md:text-3xl text-cream/90 italic leading-snug mb-8 max-w-[28rem]">
                  From the standstill to the start line.
                </p>
                <div className="space-y-6 text-[1rem] md:text-[1.15rem] text-cream/80 leading-[1.8] max-w-xl font-sans font-light tracking-wide">
                  <p>
                    Kelly was living a good life in Hawaii—surfing and running a swimsuit company—but she was drinking too much and postponing the good parts. A move to Central America was meant to be her fresh start, until a suspicious ultrasound ended the fantasy.
                  </p>
                  <p>
                    Diagnosed with breast cancer in July 2024, Kelly relocated to the East Coast. What followed wasn&apos;t just a battle for survival; it was a radical decision to stop waiting. Within one year, she went from a double mastectomy to competing in a bodybuilding show.
                  </p>
                  <p>
                    She shared her raw, unapologetic experience on TikTok, and it resonated deeply with a community of women who felt invisible. The medical system handed them a finish line, and the wellness world wanted them constantly healing.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-cream/10">
                  <span className="text-[0.9rem] font-sans font-medium tracking-[0.15em] uppercase text-cream/50 mb-5 block">
                    CREDENTIALS &amp; FEATURES
                  </span>
                  <ul className="flex flex-col gap-3 text-[1.15rem] text-cream/90 italic font-serif">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/80"></span> Certified Personal Trainer
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/80"></span> Ironman Triathlete
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/80"></span> Sober
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/80"></span> C-Heads Magazine Interview
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Large Image */}
            <div className="w-full lg:w-[35%] relative min-h-[600px] lg:min-h-0 bg-[#d8d9d4] z-0 overflow-hidden">
              <Image 
                src="/editorial/kelly-profile3.jpg" 
                alt="Kelly Gunn Full Portrait" 
                fill
                className="object-cover object-center scale-[1.02]"
              />
            </div>

            {/* Center Overlapping Image (Desktop) */}
            <div className="hidden lg:block absolute left-[65%] top-1/2 -translate-x-[65%] -translate-y-1/2 w-[340px] xl:w-[400px] z-20 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <ScrollReveal delay={0.2}>
                <Image 
                  src="/editorial/kelly-profile2.jpg" 
                  alt="Kelly Gunn Profile" 
                  width={600} 
                  height={800} 
                  className="w-full h-auto object-cover grayscale-[20%]" 
                />
              </ScrollReveal>
            </div>

            {/* Mobile Overlapping Image */}
            <div className="block lg:hidden absolute left-6 top-[40%] sm:top-[45%] -translate-y-1/2 w-[55%] sm:w-[45%] max-w-[280px] z-20 shadow-2xl border-4 border-[#181818]">
              <ScrollReveal delay={0.2}>
                <Image 
                  src="/editorial/kelly-profile2.jpg" 
                  alt="Kelly Gunn Profile" 
                  width={600} 
                  height={800} 
                  className="w-full h-auto object-cover grayscale-[20%]" 
                />
              </ScrollReveal>
            </div>
            
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
