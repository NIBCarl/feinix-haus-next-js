"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  variants = fadeUp,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      className={className}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
