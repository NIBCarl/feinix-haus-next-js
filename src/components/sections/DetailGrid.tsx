"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerChild, viewportOnce } from "@/lib/animations";

interface DetailItem {
  label: string;
  title: string;
  desc: string;
}

interface DetailGridProps {
  items: DetailItem[];
}

export default function DetailGrid({ items }: DetailGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {items.map((item) => (
        <motion.div
          key={item.label}
          className="border-t border-border-subtle pt-6"
          variants={staggerChild}
        >
          <span className="text-[0.75rem] font-sans font-medium tracking-[0.18em] uppercase text-accent mb-3 block">
            {item.label}
          </span>
          <h4 className="font-serif text-xl text-ink-warm mb-2">
            {item.title}
          </h4>
          <p className="text-base text-text-secondary leading-relaxed text-justify md:text-left">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
