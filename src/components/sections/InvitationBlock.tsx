"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function InvitationBlock() {
  return (
    <section className="py-16 md:py-32 bg-cream" aria-label="Get started with Feinix Haus">
      <div className="max-w-[700px] mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-[0.9rem] font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
            The Next Chapter
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-ink-warm font-light mb-5">
            Now do <em className="italic">the thing.</em>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            Read the essays, join the community, or apply for the editorial
            work. Whichever door, the house is open.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              href="/pool-haus"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ink-warm text-ink-warm text-[1rem] font-sans font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-ink-warm hover:text-cream transition-all duration-500 w-full sm:w-auto"
            >
              Join Pool Haus <span>→</span>
            </Link>
            <Link
              href="/the-haus-edit#apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink-warm text-cream text-[1rem] font-sans font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-accent transition-colors duration-500 w-full sm:w-auto"
            >
              Apply · Haus Edit <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
