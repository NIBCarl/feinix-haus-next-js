"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/animations";

export default function ApplyForm() {
  return (
    <section className="py-24 md:py-32 bg-ink-warm text-cream" id="apply">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeLeft}
          >
            <span className="text-[0.78rem] font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
              Apply · Volume I
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream font-light mb-6">
              A small room.
              <br />
              <em className="italic">By application</em> only.
            </h2>
            <p className="text-lg text-cream/70 leading-relaxed mb-4">
              We curate the room as carefully as we curate the editorial. Tell us
              a little about where you are and what you&apos;re editing next —
              Kelly reads every application personally.
            </p>
            <p className="text-lg text-cream/70 leading-relaxed">
              If the fit is right, we&apos;ll send the Volume I details, the
              timing, and the investment. If it isn&apos;t yet, we&apos;ll tell you
              that too — and often point you somewhere better.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="apply-first"
                  className="text-[0.78rem] font-sans font-medium tracking-[0.15em] uppercase text-cream/60 mb-2 block"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="apply-first"
                  placeholder="Kelly"
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/15 text-cream text-base rounded-sm placeholder:text-cream/30 focus:outline-none focus:border-accent transition-colors"
                  autoComplete="given-name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="apply-email"
                  className="text-[0.78rem] font-sans font-medium tracking-[0.15em] uppercase text-cream/60 mb-2 block"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="apply-email"
                  placeholder="you@email.com"
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/15 text-cream text-base rounded-sm placeholder:text-cream/30 focus:outline-none focus:border-accent transition-colors"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="apply-where"
                className="text-[0.78rem] font-sans font-medium tracking-[0.15em] uppercase text-cream/60 mb-2 block"
              >
                Where are you right now?
              </label>
              <textarea
                id="apply-where"
                placeholder="A sentence or two on the chapter you're in — no polish required."
                rows={3}
                className="w-full px-4 py-3.5 bg-white/5 border border-white/15 text-cream text-base rounded-sm placeholder:text-cream/30 focus:outline-none focus:border-accent transition-colors resize-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="apply-next"
                className="text-[0.78rem] font-sans font-medium tracking-[0.15em] uppercase text-cream/60 mb-2 block"
              >
                What are you editing next?
              </label>
              <textarea
                id="apply-next"
                placeholder="The life, the work, the story — whatever feels like it needs an editorial eye."
                rows={3}
                className="w-full px-4 py-3.5 bg-white/5 border border-white/15 text-cream text-base rounded-sm placeholder:text-cream/30 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-cream text-ink-warm text-[0.85rem] font-sans font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-sand transition-colors duration-500 cursor-pointer"
            >
              Submit Application <span>→</span>
            </button>

            <p className="text-[0.78rem] font-sans tracking-[0.1em] text-cream/40 mt-2">
              Reviewed personally · No automation · We reply within a week
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
