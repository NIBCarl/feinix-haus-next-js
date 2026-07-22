import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import PressReel from "@/components/sections/PressReel";
import InvitationBlock from "@/components/sections/InvitationBlock";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Kelly Gunn — Feinix Haus",
  description:
    "Kelly Gunn is the founder and editor-in-chief of Feinix Haus — a publishing house and gathering place for women rewriting life after disruption.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder & Editor-in-Chief"
        title="Kelly Gunn."
        lead="Writer, editor, and the woman behind Feinix Haus. Everything here — every essay, every Volume, every room — started with a single sentence: 'What if nothing was missing?'"
        breadcrumb="About"
      />

      {/* Bio Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="photo-mat">
                <Image
                  src="/editorial/kelly-portrait.png"
                  alt="Kelly Gunn — Founder of Feinix Haus"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover rounded-sm"
                />
                <div className="flex justify-between items-center mt-3 px-0.5">
                  <span className="text-[0.78rem] tracking-[0.12em] uppercase text-text-muted font-medium">
                    Kelly Gunn
                  </span>
                  <span className="text-[0.78rem] tracking-[0.12em] uppercase text-text-muted font-medium">
                    Palm Springs, CA
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
                  From treatment room to <em className="italic">publishing house.</em>
                </h2>
                <div className="space-y-5 text-lg text-text-secondary leading-relaxed">
                  <p className="drop-cap">
                    In 2021, Kelly was diagnosed with cancer. What followed
                    wasn&apos;t the story you expect — the brave battle, the
                    triumphant return. What followed was quieter: a slow
                    disassembly of identity, a long drift, and eventually, a
                    question that changed everything.
                  </p>
                  <p>
                    &ldquo;What if nothing was missing?&rdquo;
                  </p>
                  <p>
                    That question became the editorial foundation of Feinix
                    Haus. Not a brand built from suffering, but a publishing
                    house built from attention — from learning to look at your
                    own life the way an editor looks at a manuscript: carefully,
                    curiously, without rushing toward an answer.
                  </p>
                  <p>
                    Kelly doesn&apos;t talk about cancer much anymore. She
                    doesn&apos;t need to. The Haus wasn&apos;t built for the
                    diagnosis — it was built for what came after. For the women
                    who survived something and now want to participate in what
                    happens next.
                  </p>
                  <p>
                    Before Feinix Haus, Kelly spent two decades in brand
                    strategy, creative direction, and editorial leadership. She
                    brings the same rigor to personal editorial work that she
                    brought to brand campaigns — but without the corporate
                    veneer.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-border-subtle">
                  <span className="text-[0.75rem] font-sans font-medium tracking-[0.15em] uppercase text-text-muted mb-3 block">
                    FEATURED IN
                  </span>
                  <p className="text-base text-text-secondary italic">
                    PEOPLE Magazine · C-Heads Magazine · After the Diagnosis
                    Podcast · The Sunday Edit
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <PressReel />
      <InvitationBlock />
    </>
  );
}
