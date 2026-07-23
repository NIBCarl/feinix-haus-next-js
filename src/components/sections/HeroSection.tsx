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
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      aria-label="Welcome to Feinix Haus — editorial publishing house"
    >
      {/* Full-bleed Parallax Background Image */}
      <motion.div 
        style={{ y: imageY }} 
        className="absolute z-0 w-full h-[120%] -top-[10%]"
      >
        <Image 
          src="/covers/framer-hero.jpg"
          alt="Volume I Edition — The Art of After by Feinix Haus"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay to ensure white text pops against any background image */}
        <div className="absolute inset-0 bg-ink-warm/50" />
      </motion.div>

      {/* Floating Content Overlay */}
      <motion.div 
        className="relative z-10 w-full max-w-[840px] px-6 mt-16 md:mt-24 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        {/* Eyebrow */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 font-sans text-[0.75rem] sm:text-[0.85rem] font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase text-sand mb-6">
          <span>A LIFESTYLE & FITNESS COMMUNITY</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-sand" />
          <span>EST. 2025</span>
        </div>
        
        {/* H1 */}
        <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-light leading-[1.05] text-cream tracking-[-0.02em] mb-8 drop-shadow-md">
          Welcome to the <em className="italic font-light">After.</em>
        </h1>

        {/* Visually hidden but machine-readable brand definition */}
        <span className="visually-hidden">
          Feinix Haus is a lifestyle, wellness, and fitness community founded by Kelly Gunn. 
          Built for women after cancer—the woman the wellness world forgot about after treatment ended. 
          It is a culture, a fitness community, and the room she has been looking for.
        </span>

        {/* Lead Paragraph */}
        <p className="font-sans text-[1.25rem] sm:text-[1.4rem] font-light text-cream/90 leading-[1.7] max-w-[700px] mx-auto mb-10 drop-shadow-sm">
          Not a support group. Not a coaching program. Not another heavy healing space. Feinix Haus is a lifestyle and fitness community for women who are done recovering and ready to actually live. The room you&apos;ve been looking for.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
          <Link href="/the-haus-edit" className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-[1.05rem] bg-cream text-ink-warm border border-cream text-[0.95rem] font-sans font-medium tracking-[0.12em] uppercase transition-all duration-500 hover:bg-sand hover:border-sand hover:-translate-y-0.5 hover:shadow-lg group rounded-sm">
             <span className="flex items-center gap-2">Explore Volume I <span className="group-hover:translate-x-1 transition-transform duration-300">→</span></span>
          </Link>
          
          <Link href="/the-haus-edit#apply" className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-[1.05rem] bg-transparent text-cream border border-cream text-[0.95rem] font-sans font-medium tracking-[0.12em] uppercase transition-all duration-500 hover:bg-cream/10 hover:-translate-y-0.5 group rounded-sm">
             <span className="flex items-center gap-2">Apply for Appointment <span className="group-hover:translate-x-1 transition-transform duration-300">→</span></span>
          </Link>
        </div>

        <div className="mt-8">
          <Link href="/from-the-margins" className="inline-flex items-center gap-2 text-cream/80 text-[1rem] font-sans font-medium tracking-[0.06em] uppercase hover:text-cream hover:gap-3 transition-all duration-300">
            Read the Essays <span className="transition-transform duration-300">→</span>
          </Link>
        </div>
      </motion.div>

    </section>
  );
}
