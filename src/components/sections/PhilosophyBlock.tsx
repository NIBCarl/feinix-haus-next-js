"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { textMaskContainer, textMaskLine, fadeRight, viewportOnce } from "@/lib/animations";

export default function PhilosophyBlock() {
  return (
    <section className="py-20 md:py-32 relative bg-cream overflow-hidden" aria-label="Editorial philosophy of Feinix Haus">
      
      {/* Right side dark background (Desktop) */}
      <div className="absolute top-0 right-0 w-full lg:w-[45vw] h-full bg-[#181818] z-0 hidden lg:block" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Text Column (Left) */}
          <motion.div
            className="w-full lg:w-[50%] lg:pr-16 xl:pr-24"
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
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink-warm font-light leading-tight mb-8"
              variants={textMaskLine}
            >
              Start <em className="italic">living.</em>
            </motion.h2>

            <motion.p
              className="text-[1.1rem] md:text-xl text-text-secondary leading-relaxed drop-cap max-w-xl"
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

          {/* Portrait Column (Right) */}
          <motion.div
            className="w-full lg:w-[50%] relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
          >
            {/* Mobile dark background */}
            <div className="absolute inset-0 bg-[#181818] translate-x-6 translate-y-6 lg:hidden -z-10" />
            
            <Image
              src="/editorial/kelly-profile4.png"
              alt="Kelly Gunn — Founder and Editor-in-Chief of Feinix Haus"
              width={800}
              height={1000}
              quality={100}
              unoptimized
              className="w-full h-auto object-cover shadow-2xl relative z-10"
            />
            
            <div className="absolute bottom-4 left-4 lg:-left-6 lg:bottom-12 z-20 flex flex-col items-start hidden">
              <span className="text-[0.75rem] tracking-[0.15em] uppercase text-cream bg-[#181818] px-3 py-1 mb-1">
                Kelly Gunn
              </span>
              <span className="text-[0.70rem] tracking-[0.15em] uppercase text-cream/80 bg-[#181818] px-3 py-1">
                Founder &amp; Editor
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
