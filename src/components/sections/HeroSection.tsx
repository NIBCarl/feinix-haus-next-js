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
    <section
      ref={ref}
      className="bg-cream pt-[7rem] md:pt-[11rem] pb-16 md:pb-24 text-center relative overflow-hidden"
      aria-label="Welcome to Feinix Haus — editorial publishing house"
    >
      <div className="max-w-[1040px] mx-auto flex flex-col items-center px-6 md:px-10">
        
        {/* Top Text (Eyebrow & H1) */}
        <div className="order-1 max-w-[780px] mx-auto mb-8 md:mb-10 w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothTransition, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 font-sans text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase text-accent mb-6"
          >
            <span>A LIFESTYLE & FITNESS COMMUNITY</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-accent" />
            <span>EST. 2024</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="font-serif text-[clamp(3.5rem,7.5vw,6rem)] font-light leading-[0.98] text-ink-warm tracking-[-0.02em]"
          >
            Welcome to the <em className="italic text-ink-warm font-light">After.</em>
          </motion.h1>

          {/* Visually hidden but machine-readable brand definition */}
          <span className="visually-hidden">
            Feinix Haus is a lifestyle, wellness, and fitness community founded by Kelly Gunn. 
            Built for women after cancer—the woman the wellness world forgot about after treatment ended. 
            It is a culture, a fitness community, and the room she has been looking for.
          </span>
        </div>

        {/* Lead Paragraph (Order changes on mobile) */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.3 }}
          className="order-3 md:order-2 font-sans text-[1.1rem] sm:text-[1.25rem] font-light text-text-secondary leading-[1.7] max-w-[620px] mx-auto mb-10 md:mb-14"
        >
          Not a support group. Not a coaching program. Not another heavy healing space. Feinix Haus is a lifestyle and fitness community for women who are done recovering and ready to actually live. The room you&apos;ve been looking for.
        </motion.p>

        {/* Kinfolk Photo Mat */}
        <motion.div 
          className="order-2 md:order-3 w-full max-w-[1000px] mx-auto mb-10 md:mb-14 relative"
          variants={scaleReveal}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[#F7F3EC] p-4 sm:p-6 pb-4 sm:pb-5 rounded-sm border border-border-subtle shadow-[0_20px_50px_rgba(31,27,22,0.05)] relative z-10">
            <motion.div style={{ y: imageY }} className="overflow-hidden relative rounded-sm h-[320px] sm:h-[420px] md:h-[580px] max-h-[70vh] w-full">
               <Image 
                  src="/covers/framer-hero.jpg"
                  alt="Volume I Edition — The Art of After by Feinix Haus, an editorial publishing house for women rewriting life after disruption"
                  fill
                  priority
                  className="object-cover"
               />
            </motion.div>
            <div className="flex justify-between items-center mt-3 px-1 font-sans text-[0.6rem] sm:text-[0.72rem] tracking-[0.1em] sm:tracking-[0.18em] uppercase text-text-muted whitespace-nowrap">
              <span className="hidden sm:inline">Feinix Haus · Welcome to the After</span>
              <span className="sm:hidden">Feinix Haus</span>
              <span className="hidden sm:inline">A Lifestyle Community</span>
              <span className="sm:hidden">Community</span>
            </div>
          </div>
          
          {/* Scroll cue — hidden on mobile */}
          <motion.div 
            className="hidden md:flex absolute -left-12 -bottom-10 items-center gap-3 font-sans text-[0.72rem] tracking-[0.2em] uppercase text-text-muted rotate-[-90deg] origin-top-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.4 }}
          >
            <div className="w-12 h-px bg-accent opacity-60" />
            <span>Scroll</span>
          </motion.div>
        </motion.div>

        {/* Actions — stack on mobile */}
        <motion.div 
          className="order-4 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.5 }}
        >
          <Link href="/the-haus-edit" className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-9 py-[1.05rem] bg-ink-warm text-cream border border-ink-warm text-[0.82rem] font-sans font-medium tracking-[0.12em] uppercase transition-all duration-500 hover:bg-accent hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(194,106,74,0.15)] group rounded-sm">
             <span className="flex items-center gap-2">Explore Volume I <span className="group-hover:translate-x-1 transition-transform duration-300">→</span></span>
          </Link>
          
          <Link href="/the-haus-edit#apply" className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-9 py-[1.05rem] bg-transparent text-ink-warm border border-ink-warm text-[0.82rem] font-sans font-medium tracking-[0.12em] uppercase transition-all duration-500 hover:text-cream hover:bg-ink-warm hover:-translate-y-0.5 group rounded-sm">
             <span className="flex items-center gap-2">Apply for Appointment <span className="group-hover:translate-x-1 transition-transform duration-300">→</span></span>
          </Link>

          <Link href="/from-the-margins" className="inline-flex items-center gap-2 text-ink-warm text-[0.9rem] font-sans font-medium tracking-[0.06em] uppercase hover:text-accent hover:gap-3 transition-all duration-300">
            Read the Essays <span className="transition-transform duration-300">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
