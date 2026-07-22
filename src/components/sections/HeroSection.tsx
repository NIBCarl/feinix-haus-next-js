"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { scaleReveal, smoothTransition } from "@/lib/animations";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="bg-cream pt-[11rem] pb-24 text-center relative overflow-hidden">
      <div className="max-w-[1040px] mx-auto flex flex-col items-center px-6 md:px-10">
        
        {/* Header Text */}
        <div className="max-w-[780px] mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothTransition, delay: 0.1 }}
            className="flex items-center justify-center gap-2.5 font-sans text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-accent mb-6"
          >
            <span>ISSUE NO. 01</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>VOLUME I EDITION</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>EST. 2024</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="font-serif text-[clamp(3.5rem,7.5vw,6rem)] font-light leading-[0.98] text-ink-warm mb-7 tracking-[-0.02em]"
          >
            The Art of <em className="italic text-ink-warm font-light">After.</em>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothTransition, delay: 0.3 }}
            className="font-sans text-[1.25rem] font-light text-text-secondary leading-[1.7] max-w-[620px] mx-auto"
          >
            Some places ask you to become someone new. This one asks something quieter. What if nothing was missing? What if your next chapter isn&apos;t about reinvention, but recognition? Welcome home.
          </motion.p>
        </div>

        {/* Kinfolk Photo Mat */}
        <motion.div 
          className="w-full max-w-[1000px] mx-auto mb-14 relative"
          variants={scaleReveal}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[#F7F3EC] p-6 pb-5 rounded-sm border border-border-subtle shadow-[0_20px_50px_rgba(31,27,22,0.05)] relative z-10">
            <motion.div style={{ y: imageY }} className="overflow-hidden relative rounded-sm h-[580px] max-h-[70vh] w-full">
               <Image 
                  src="/covers/framer-hero.jpg"
                  alt="Volume I Edition"
                  fill
                  priority
                  className="object-cover"
               />
            </motion.div>
            <div className="flex justify-between items-center mt-3 px-1 font-sans text-[0.72rem] tracking-[0.18em] uppercase text-text-muted">
              <span>Volume I · The Art of After</span>
              <span>A Limited Edition of One · Palm Springs</span>
            </div>
          </div>
          
          {/* Scroll cue decorative element outside the mat */}
          <motion.div 
            className="absolute -left-12 -bottom-10 flex items-center gap-3 font-sans text-[0.72rem] tracking-[0.2em] uppercase text-text-muted rotate-[-90deg] origin-top-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.4 }}
          >
            <div className="w-12 h-px bg-accent opacity-60" />
            <span>Scroll</span>
          </motion.div>
        </motion.div>

        {/* Actions */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.5 }}
        >
          <Link href="/the-haus-edit" className="inline-flex items-center gap-2.5 px-9 py-[1.05rem] bg-ink-warm text-cream border border-ink-warm text-[0.82rem] font-sans font-medium tracking-[0.12em] uppercase transition-all duration-500 hover:bg-accent hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(194,106,74,0.15)] group rounded-sm">
             <span className="flex items-center gap-2">Explore Volume I <span className="group-hover:translate-x-1 transition-transform duration-300">→</span></span>
          </Link>
          
          <Link href="/the-haus-edit#apply" className="inline-flex items-center gap-2.5 px-9 py-[1.05rem] bg-transparent text-ink-warm border border-ink-warm text-[0.82rem] font-sans font-medium tracking-[0.12em] uppercase transition-all duration-500 hover:text-cream hover:bg-ink-warm hover:-translate-y-0.5 group rounded-sm">
             <span className="flex items-center gap-2">Apply for Appointment <span className="group-hover:translate-x-1 transition-transform duration-300">→</span></span>
          </Link>

          <Link href="/from-the-margins" className="inline-flex items-center gap-2 text-ink-warm text-[0.9rem] font-sans font-medium tracking-[0.06em] uppercase hover:text-accent hover:gap-3 transition-all duration-300 ml-2">
            Read the Essays <span className="transition-transform duration-300">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
