"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface VolumeFeatureProps {
  imageSrc: string;
  imageAlt: string;
  caption: string;
  subcaption: string;
  eyebrow: string;
  title: string;
  titleEmphasis: string;
  description: string;
  includes?: string[];
  ctaText: string;
  ctaHref: string;
}

export default function VolumeFeature({
  imageSrc,
  imageAlt,
  caption,
  subcaption,
  eyebrow,
  title,
  titleEmphasis,
  description,
  includes,
  ctaText,
  ctaHref,
}: VolumeFeatureProps) {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <div className="photo-mat">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={750}
          className="w-full h-auto object-cover rounded-sm"
        />
        <div className="flex justify-between items-center mt-3 px-0.5">
          <span className="text-[0.78rem] tracking-[0.12em] uppercase text-text-muted font-medium">
            {caption}
          </span>
          <span className="text-[0.78rem] tracking-[0.12em] uppercase text-text-muted font-medium">
            {subcaption}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center py-4">
        <span className="text-[0.78rem] font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
          {eyebrow}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-ink-warm font-light mb-4">
          {title} <em className="italic">{titleEmphasis}</em>
        </h3>
        <p className="text-lg text-text-secondary leading-relaxed drop-cap mb-6 text-justify md:text-left">
          {description}
        </p>
        {includes && includes.length > 0 && (
          <ul className="space-y-2 mb-6">
            {includes.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-base text-text-secondary"
              >
                <span className="text-accent mt-0.5">·</span>
                {item}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-cream text-ink-warm border border-border-subtle text-[0.85rem] font-sans font-medium tracking-[0.06em] uppercase rounded-sm hover:bg-sand transition-colors duration-500 self-start"
        >
          {ctaText} <span>→</span>
        </Link>
      </div>
    </motion.div>
  );
}
