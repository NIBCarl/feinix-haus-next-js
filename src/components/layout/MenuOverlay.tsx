"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { menuOverlay, menuLink, menuLinkContainer } from "@/lib/animations";

interface MenuOverlayProps {
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/", num: "01" },
  { label: "The Haus Edit", href: "/the-haus-edit", num: "02" },
  { label: "Pool Haus", href: "/pool-haus", num: "03" },
  { label: "From the Margins", href: "/from-the-margins", num: "04" },
  { label: "About Kelly Gunn", href: "/about", num: "05" },
];

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#F5F1EB] flex flex-col"
      variants={menuOverlay}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Menu Header */}
      <div className="flex items-center justify-between px-6 md:px-10 h-20 border-b border-border-subtle/30">
        <Link href="/" className="flex flex-col" onClick={onClose}>
          <span className="font-serif text-xl text-ink-warm">
            Feinix<span className="text-text-muted mx-0.5">·</span>Haus
          </span>
          <span className="text-[0.68rem] font-sans font-medium tracking-[0.2em] uppercase text-text-muted">
            A Publishing House
          </span>
        </Link>
        <button
          onClick={onClose}
          className="text-ink-warm text-xl min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-accent transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col md:flex-row items-start px-6 md:px-16 py-12 md:py-20 gap-12 md:gap-20 overflow-y-auto">
        {/* Nav Links */}
        <motion.nav
          className="flex-1"
          variants={menuLinkContainer}
          initial="hidden"
          animate="visible"
        >
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <motion.li key={link.href} variants={menuLink}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-baseline gap-4 group"
                >
                  <span className="text-[0.78rem] font-sans font-medium tracking-[0.15em] text-text-muted">
                    {link.num}.
                  </span>
                  <span className="font-serif text-3xl md:text-4xl text-ink-warm group-hover:text-accent transition-colors duration-300">
                    {link.label}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Sidebar */}
        <motion.div
          className="w-full md:max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="editorial-meta mb-4 block">
            SUBSCRIPTION &amp; APPOINTMENTS
          </span>
          <p className="text-base text-text-secondary leading-relaxed mb-6">
            Receive notes from the Haus, long-form essays, and private
            invitations for upcoming Volume editions.
          </p>
          <Link
            href="/the-haus-edit#apply"
            onClick={onClose}
            className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 bg-ink-warm text-cream text-[0.85rem] font-sans font-medium tracking-[0.08em] uppercase rounded-sm hover:bg-accent transition-colors duration-300"
          >
            Apply for Appointment <span>→</span>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 md:px-16 py-5 text-[0.75rem] font-sans tracking-[0.15em] uppercase text-text-muted border-t border-border-subtle/30">
        <span>© 2026 FEINIX HAUS · PALM SPRINGS</span>
        <span>hello@feinixhaus.com</span>
      </div>
    </motion.div>
  );
}
