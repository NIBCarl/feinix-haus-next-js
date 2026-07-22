"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function InvitationBlock() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-[700px] mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-[0.78rem] font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
            The Next Chapter
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-warm font-light mb-5">
            Now do <em className="italic">the thing.</em>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-lg mx-auto">
            Read the essays, join the community, or apply for the editorial
            work. Whichever door, the house is open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pool-haus"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-ink-warm text-ink-warm text-[0.85rem] font-sans font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-ink-warm hover:text-cream transition-all duration-500"
            >
              Join Pool Haus <span>→</span>
            </Link>
            <Link
              href="/the-haus-edit#apply"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink-warm text-cream text-[0.85rem] font-sans font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-accent transition-colors duration-500"
            >
              Apply · Haus Edit <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
