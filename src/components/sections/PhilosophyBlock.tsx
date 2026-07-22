"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { textMaskContainer, textMaskLine, fadeRight, viewportOnce } from "@/lib/animations";

export default function PhilosophyBlock() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Column */}
          <motion.div
            variants={textMaskContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              className="editorial-meta mb-5 block"
              variants={textMaskLine}
            >
              THE PHILOSOPHY · EDITOR&apos;S STATEMENT
            </motion.span>

            <motion.h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink-warm font-light leading-tight mb-6"
              variants={textMaskLine}
            >
              Recognition over <em className="italic">reinvention.</em>
            </motion.h2>

            <motion.p
              className="text-lg text-text-secondary leading-relaxed drop-cap"
              variants={textMaskLine}
            >
              Some places ask you to become someone new. This one asks something
              quieter. What if nothing was missing? What if your next chapter
              isn&apos;t about reinvention, but recognition? We examine your life
              the way an editor studies a manuscript — carefully, curiously,
              without rushing toward an answer.
            </motion.p>
          </motion.div>

          {/* Portrait Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
          >
            <div className="photo-mat">
              <Image
                src="/editorial/kelly-portrait.png"
                alt="Kelly Gunn — Editor-in-Chief"
                width={600}
                height={720}
                className="w-full h-auto object-cover rounded-sm"
              />
              <div className="flex justify-between items-center mt-3 px-0.5">
                <span className="text-[0.78rem] tracking-[0.12em] uppercase text-text-muted font-medium">
                  Kelly Gunn
                </span>
                <span className="text-[0.78rem] tracking-[0.12em] uppercase text-text-muted font-medium">
                  Founder &amp; Editor-in-Chief
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
