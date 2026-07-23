"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerChild, fadeUp, viewportOnce } from "@/lib/animations";

const logos = [
  {
    name: "PEOPLE",
    type: "Feature",
    href: "#",
  },
  {
    name: "C-Heads",
    type: "Magazine",
    href: "https://www.c-heads.com/2026/02/12/the-moment-anyway-a-conversation-with-kelly/",
  },
  {
    name: "The Sunday",
    type: "Edit",
    href: "#",
  },
  {
    name: "After the",
    type: "Diagnosis · Podcast",
    href: "#",
  },
];

export default function PressReel() {
  return (
    <section
      className="py-6 md:py-10 bg-sand-deep border-y border-border-subtle overflow-hidden"
      aria-label="Press and media features for Feinix Haus and Kelly Gunn"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mb-4 md:mb-6">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-[0.85rem] font-sans font-medium tracking-[0.2em] uppercase text-text-muted mb-3 block">
            As Seen In
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-warm font-light">
            Press &amp; Media
          </h2>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden flex whitespace-nowrap">
        {/* We render 4 identical sets to ensure the screen is filled even on 4K monitors, and animate by exactly 1 set's width (-25% of total width) */}
        <motion.div
          className="flex w-fit flex-shrink-0 items-center gap-10 md:gap-24 pr-10 md:pr-24"
          animate={{ x: ["0%", "-25%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[1, 2, 3, 4].map((setId) => (
            <React.Fragment key={setId}>
              {logos.map((logo, index) => {
                const isExternal = logo.href.startsWith("http");
                const Tag = logo.href === "#" ? "div" : "a";
                const linkProps = isExternal
                  ? { href: logo.href, target: "_blank", rel: "noopener noreferrer" }
                  : logo.href !== "#"
                  ? { href: logo.href }
                  : {};

                return (
                  <Tag
                    key={`${setId}-${logo.name}-${index}`}
                    {...linkProps}
                    className={`inline-block text-center flex-shrink-0 ${isExternal ? "group cursor-pointer" : ""}`}
                  >
                    <span className="font-serif text-4xl md:text-6xl text-ink-warm block mb-2 group-hover:text-accent transition-colors duration-300">
                      {logo.name}
                    </span>
                    <em className="text-lg md:text-xl font-sans text-text-muted not-italic tracking-wider block">
                      {logo.type}
                      {isExternal && (
                        <span className="inline-block ml-2 opacity-60 group-hover:opacity-100 transition-opacity">
                          ↗
                        </span>
                      )}
                    </em>
                  </Tag>
                );
              })}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
