"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleEmphasis?: string;
  lead: string;
  breadcrumb: string;
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
}

export default function PageHero({
  eyebrow,
  title,
  titleEmphasis,
  lead,
  breadcrumb,
  bgColor = "bg-cream",
  textColor = "text-ink-warm",
  accentColor = "text-accent",
}: PageHeroProps) {
  return (
    <section className={`${bgColor} pt-44 pb-20 md:pb-24`}>
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav
            className="flex items-center gap-2 text-[0.78rem] font-sans tracking-[0.12em] uppercase text-text-muted mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-ink-warm transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className={textColor}>{breadcrumb}</span>
          </nav>

          <span
            className={`text-[0.78rem] font-sans font-medium tracking-[0.2em] uppercase ${accentColor} mb-4 block`}
          >
            {eyebrow}
          </span>

          <h1
            className={`font-serif text-4xl md:text-5xl lg:text-6xl ${textColor} font-light leading-tight mb-6`}
          >
            {title}{" "}
            {titleEmphasis && (
              <em className="italic">{titleEmphasis}</em>
            )}
          </h1>

          <p
            className={`text-lg md:text-xl leading-relaxed max-w-xl ${
              bgColor.includes("pool") ? "text-cream/80" : "text-text-secondary"
            }`}
          >
            {lead}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
