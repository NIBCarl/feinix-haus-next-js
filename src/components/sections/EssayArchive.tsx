"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerChild, fadeUp, viewportOnce } from "@/lib/animations";

interface Essay {
  topic: string;
  image: string;
  alt: string;
  pub: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  external?: boolean;
}

const essays: Essay[] = [
  {
    topic: "living",
    image: "/editorial/framer-reading-table.png",
    alt: "Reading table scene",
    pub: "From the Margins",
    date: "Jun 26 · 6 min",
    title: "I Am Not Here to Inspire You",
    excerpt: "There comes a point when surviving stops being enough…",
    href: "#",
  },
  {
    topic: "courage",
    image: "/covers/framer-pool-haus.jpg",
    alt: "A boat drifting on still water",
    pub: "C-Heads",
    date: "Draft · On Courage",
    title: "The Boat",
    excerpt: "Some journeys don't begin when you leave home…",
    href: "https://www.c-heads.com/2026/07/13/the-boat/",
    external: true,
  },
  {
    topic: "permission",
    image: "/covers/framer-hero.jpg",
    alt: "Permission draft notebook",
    pub: "Draft",
    date: "On Permission",
    title: "Permission",
    excerpt: "Somewhere along the way, we stopped trusting our own opinions…",
    href: "#",
  },
];

const topics = [
  { key: "all", label: "All" },
  { key: "living", label: "On Living" },
  { key: "courage", label: "On Courage" },
  { key: "permission", label: "On Permission" },
];

export default function EssayArchive() {
  const [activeTopic, setActiveTopic] = useState("all");

  const filtered =
    activeTopic === "all"
      ? essays
      : essays.filter((e) => e.topic === activeTopic);

  return (
    <section className="py-24 md:py-32 bg-cream-warm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-[0.78rem] font-sans font-medium tracking-[0.2em] uppercase text-accent mb-3 block">
            From the Margins
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-warm font-light">
            The <em className="italic">Reading Table.</em>
          </h2>
        </motion.div>

        {/* Topic Filters */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          {topics.map((topic) => (
            <button
              key={topic.key}
              onClick={() => setActiveTopic(topic.key)}
              className={`px-4 py-2 text-[0.8rem] font-sans font-medium tracking-[0.1em] uppercase rounded-sm border transition-all duration-300 cursor-pointer ${
                activeTopic === topic.key
                  ? "bg-ink-warm text-cream border-ink-warm"
                  : "bg-transparent text-text-secondary border-border-subtle hover:border-ink-warm hover:text-ink-warm"
              }`}
              aria-pressed={activeTopic === topic.key}
            >
              {topic.label}
            </button>
          ))}
        </motion.div>

        {/* Essay Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          key={activeTopic}
        >
          {filtered.map((essay) => (
            <motion.a
              key={essay.title}
              href={essay.href}
              target={essay.external ? "_blank" : undefined}
              rel={essay.external ? "noopener noreferrer" : undefined}
              className="group block"
              variants={staggerChild}
            >
              <div className="overflow-hidden rounded-sm mb-4 relative">
                <Image
                  src={essay.image}
                  alt={essay.alt}
                  width={600}
                  height={750}
                  className="w-full h-72 object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-ink-warm/0 group-hover:bg-ink-warm/20 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-cream text-sm font-sans font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Read Essay →
                  </span>
                </div>
              </div>
              <div className="text-[0.75rem] font-sans tracking-[0.12em] uppercase text-text-muted mb-2">
                <span className="text-accent">{essay.pub}</span> · {essay.date}
              </div>
              <h3 className="font-serif text-lg text-ink-warm group-hover:text-accent transition-colors duration-300 mb-1">
                {essay.title}
              </h3>
              <p className="text-base text-text-secondary">{essay.excerpt}</p>
            </motion.a>
          ))}
        </motion.div>

        <p className="text-center text-base text-text-muted italic mt-12">
          The Reading Table is updated as new essays and drafts are published.
          Subscribe to Notes from the Haus to get new pieces first.
        </p>
      </div>
    </section>
  );
}
