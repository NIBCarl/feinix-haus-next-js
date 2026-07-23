"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerChild, viewportOnce } from "@/lib/animations";

interface Tier {
  badge: string;
  price: string;
  priceSuffix: string;
  title: string;
  desc: string;
  includes: string[];
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
}

const tiers: Tier[] = [
  {
    badge: "Start Here · Free",
    price: "Free",
    priceSuffix: " · forever",
    title: "Unapologetically Community",
    desc: "The open front door. Real conversations, monthly Open Haus gatherings, and a place where depth meets ease.",
    includes: [
      "Access to the free Skool community",
      "Monthly Open Haus gatherings",
      "The welcome orientation video",
      "Free member resources & classroom",
    ],
    ctaText: "Join Free",
    ctaHref: "https://www.skool.com/unapologetically-after",
  },
  {
    badge: "Membership",
    price: "$22",
    priceSuffix: " / month · first week free",
    title: "Full Pool Haus Access",
    desc: "The complete gathering place — exclusive essays, guided discussions, the live call calendar, and a circle that values substance over noise.",
    includes: [
      "Everything in the free community",
      "Members-only essays & editorial",
      "Weekly live calls & recordings",
      "The full classroom & archives",
      "The rolling 30-day leaderboard & rooms",
    ],
    ctaText: "Start 7-Day Free Trial",
    ctaHref: "https://www.skool.com/unapologetically-after",
    featured: true,
  },
];

export default function MembershipTiers() {
  return (
    <section className="py-16 md:py-32 bg-pool text-cream">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.title}
              className={`rounded-sm p-8 md:p-10 ${
                tier.featured
                  ? "bg-white/10 border border-white/20"
                  : "bg-white/5 border border-white/10"
              }`}
              variants={staggerChild}
            >
              <span className="text-[0.72rem] font-sans font-medium tracking-[0.18em] uppercase text-[#E8B89A] mb-4 block">
                {tier.badge}
              </span>
              <div className="font-serif text-3xl text-cream mb-2">
                {tier.price}
                <em className="text-base font-sans not-italic text-cream/60">
                  {tier.priceSuffix}
                </em>
              </div>
              <h3 className="font-serif text-xl text-cream mb-3">
                {tier.title}
              </h3>
              <p className="text-base text-cream/70 leading-relaxed mb-6">
                {tier.desc}
              </p>
              <ul className="space-y-2.5 mb-8">
                {tier.includes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-base text-cream/80"
                  >
                    <span className="text-[#E8B89A] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={tier.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-7 py-3.5 text-[0.85rem] font-sans font-medium tracking-[0.06em] uppercase rounded-sm transition-all duration-500 w-full justify-center ${
                  tier.featured
                    ? "bg-cream text-pool hover:bg-sand"
                    : "border border-cream/30 text-cream hover:bg-white/10"
                }`}
              >
                {tier.ctaText} <span>→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-base text-cream/50 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.5 } } }}
        >
          No commitment. Cancel anytime. The first week is on us — come see the
          room before you decide.
        </motion.p>
      </div>
    </section>
  );
}
