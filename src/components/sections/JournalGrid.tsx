"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, staggerChild, fadeUp, viewportOnce } from "@/lib/animations";

const cards = [
  {
    image: "/covers/framer-volume-one.jpg",
    alt: "The Haus Edit — Volume One",
    tag: "Private Appointment · Volume I",
    title: "The Haus Edit",
    desc: "A private editorial for your life. Together we refine, clarify, and shape your next chapter into a hand-bound, printed Volume One.",
    link: "/the-haus-edit",
    linkText: "Reserve Appointment",
  },
  {
    image: "/covers/framer-pool-haus.jpg",
    alt: "Pool Haus — The Gathering Place",
    tag: "For the Regulars · Community",
    title: "The Pool Haus",
    desc: "The gathering place behind the publishing house. Playlists, Sunday conversations, Open Haus calls, and a circle that values depth.",
    link: "/pool-haus",
    linkText: "Enter the Room",
  },
  {
    image: "/editorial/framer-reading-table.png",
    alt: "From the Margins — Reading Table",
    tag: "Editorial & Essays · Reading Table",
    title: "From the Margins",
    desc: "Long-form essays, reflections, and observations on drifting, permission, and the art of after. Published by the house.",
    link: "/from-the-margins",
    linkText: "Browse All Essays",
  },
];

export default function JournalGrid() {
  return (
    <section className="py-24 md:py-32 bg-cream-warm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div>
            <span className="editorial-meta mb-3 block">
              THE PUBLISHING HOUSE · EDITIONS &amp; ROOMS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-ink-warm font-light">
              Inside the <em className="italic">House.</em>
            </h2>
          </div>
          <Link
            href="/the-haus-edit"
            className="text-[0.85rem] font-sans font-medium tracking-[0.06em] uppercase text-ink-warm hover:text-accent transition-colors duration-300 group"
          >
            Explore All Experiences{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* Card Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {cards.map((card) => (
            <motion.article
              key={card.title}
              className="group"
              variants={staggerChild}
            >
              <div className="overflow-hidden rounded-sm mb-5">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={400}
                  height={280}
                  className="w-full h-56 object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </div>
              <span className="text-[0.75rem] font-sans font-medium tracking-[0.15em] uppercase text-text-muted mb-2 block">
                {card.tag}
              </span>
              <Link
                href={card.link}
                className="font-serif text-xl text-ink-warm hover:text-accent transition-colors duration-300 block mb-2"
              >
                {card.title}
              </Link>
              <p className="text-base text-text-secondary leading-relaxed mb-4">
                {card.desc}
              </p>
              <Link
                href={card.link}
                className="text-[0.82rem] font-sans font-medium tracking-[0.08em] uppercase text-ink-warm hover:text-accent transition-colors duration-300 group/link"
              >
                {card.linkText}{" "}
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                  →
                </span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
