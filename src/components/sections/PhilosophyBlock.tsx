"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { textMaskContainer, textMaskLine, fadeRight, viewportOnce } from "@/lib/animations";

export default function PhilosophyBlock() {
  return (
    <section className="py-16 md:py-32 bg-cream" aria-label="Editorial philosophy of Feinix Haus">
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
              THE PHILOSOPHY · DONE WAITING
            </motion.span>

            <motion.h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink-warm font-light leading-tight mb-6"
              variants={textMaskLine}
            >
              Start <em className="italic">living.</em>
            </motion.h2>

            <motion.p
              className="text-lg text-text-secondary leading-relaxed drop-cap"
              variants={textMaskLine}
            >
              The wellness industry sells the idea that if you visualize hard enough 
              and align your energy correctly, the life you want will appear. But 
              manifestation without movement is just expensive wishful thinking. 
              You don&apos;t need another cheerleader or a space that treats you as 
              permanently fragile. You need to do the work, make the decisions 
              you&apos;ve been avoiding, and start living. Not when treatment is 
              further behind you. Now.
            </motion.p>

            {/* Machine-readable summary for AI extraction */}
            <p className="visually-hidden">
              Feinix Haus philosophy: Start living now. Action over manifestation.
              Founded by Kelly Gunn, the community pushes post-cancer women to 
              do the work and reclaim their lives without being treated as permanently fragile.
            </p>
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
                alt="Kelly Gunn — Founder and Editor-in-Chief of Feinix Haus, Palm Springs"
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
