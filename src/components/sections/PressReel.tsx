"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerChild, fadeUp, viewportOnce } from "@/lib/animations";

const logos = [
  { name: "PEOPLE", type: "Feature" },
  { name: "C-Heads", type: "Magazine" },
  { name: "The Sunday", type: "Edit" },
  { name: "After the", type: "Diagnosis · Podcast" },
];

export default function PressReel() {
  return (
    <section className="py-20 md:py-24 bg-sand border-y border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-[0.78rem] font-sans font-medium tracking-[0.2em] uppercase text-text-muted mb-3 block">
            As Seen In
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-ink-warm font-light">
            Press &amp; Media
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              className="text-center py-6"
              variants={staggerChild}
            >
              <span className="font-serif text-2xl md:text-3xl text-ink-warm block mb-1">
                {logo.name}
              </span>
              <em className="text-sm font-sans text-text-muted not-italic tracking-wider">
                {logo.type}
              </em>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
