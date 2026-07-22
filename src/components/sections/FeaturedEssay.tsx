"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function FeaturedEssay() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-10"
        >
          <span className="text-[0.78rem] font-sans font-medium tracking-[0.2em] uppercase text-accent mb-3 block">
            From the Margins
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-warm font-light">
            The Reading Table — <em className="italic">featured essay</em>
          </h2>
        </motion.div>

        <motion.article
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          {/* Image */}
          <div className="overflow-hidden rounded-sm group">
            <div className="photo-mat relative">
              <span className="absolute top-5 left-5 z-10 px-3 py-1.5 bg-ink-warm/80 text-cream text-[0.72rem] font-sans font-medium tracking-[0.15em] uppercase rounded-sm">
                Featured Essay
              </span>
              <Image
                src="/editorial/framer-reading-table.png"
                alt="The Reading Table — From the Margins"
                width={700}
                height={600}
                className="w-full h-auto object-cover rounded-sm transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
              <div className="flex justify-between items-center mt-3 px-0.5">
                <span className="text-[0.78rem] tracking-[0.12em] uppercase text-text-muted font-medium">
                  The Reading Table
                </span>
                <span className="text-[0.78rem] tracking-[0.12em] uppercase text-text-muted font-medium">
                  Jun 2026
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[0.8rem] font-sans tracking-[0.1em] uppercase text-text-muted mb-4">
              From the Margins · Jun 26 · 6 min read
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-ink-warm font-light mb-4">
              I Am Not Here to <em className="italic">Inspire You</em>
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-6 drop-cap">
              There comes a point when surviving stops being enough. A reflection
              on moving past inspiration tropes into participation,
              self-authorship, and what comes next.
            </p>

            {/* Byline */}
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/editorial/kelly-profile.png"
                alt="Kelly Gunn portrait"
                width={38}
                height={38}
                className="rounded-full object-cover"
              />
              <div>
                <strong className="text-sm font-sans font-semibold text-ink-warm block">
                  Kelly Gunn
                </strong>
                <span className="text-sm text-text-muted">
                  Editor-in-Chief
                </span>
              </div>
            </div>

            <Link
              href="/from-the-margins"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-ink-warm text-ink-warm text-[0.85rem] font-sans font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-ink-warm hover:text-cream transition-all duration-500"
            >
              Read the Essay <span>→</span>
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
