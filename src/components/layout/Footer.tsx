"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-ink-warm text-cream" role="contentinfo">
      {/* Newsletter Invitation */}
      <div className="border-b border-white/10" aria-label="Newsletter signup">
        <ScrollReveal>
          <div className="max-w-[700px] mx-auto text-center py-20 px-6">
            <span className="text-[0.78rem] font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
              Come Closer
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream font-light mb-4">
              Notes from <em>the Haus.</em>
            </h2>
            <p className="text-base text-cream/70 leading-relaxed mb-8">
              Essays, observations, and the occasional thing I couldn&apos;t stop
              thinking about.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="visually-hidden">
                Your email address
              </label>
              <input
                type="email"
                id="footer-email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 bg-white/5 border border-white/15 text-cream text-base rounded-sm placeholder:text-cream/40 focus:outline-none focus:border-accent transition-colors"
                autoComplete="email"
                required
              />
              <button
                type="submit"
                className="px-7 py-3.5 bg-accent text-cream text-[0.85rem] font-sans font-medium tracking-[0.08em] uppercase rounded-sm hover:bg-accent-hover transition-colors duration-300 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col mb-4">
              <span className="font-serif text-xl text-cream">
                Feinix<span className="text-cream/40 mx-0.5">·</span>Haus
              </span>
              <span className="text-[0.68rem] font-sans font-medium tracking-[0.2em] uppercase text-cream/50 mt-1">
                A Publishing House
              </span>
            </Link>
            <p className="text-base text-cream/60 leading-relaxed">
              The Haus is a home for the art of after. Essays, editorial
              experiences, and conversations for people who have lived through
              change and are ready to participate in what&apos;s next.
            </p>
          </div>

          {/* The House */}
          <div>
            <h5 className="text-[0.78rem] font-sans font-semibold tracking-[0.15em] uppercase text-cream/70 mb-5">
              The House
            </h5>
            <ul className="space-y-3">
              {[
                { label: "The Haus Edit", href: "/the-haus-edit" },
                { label: "Pool Haus", href: "/pool-haus" },
                { label: "From the Margins", href: "/from-the-margins" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-cream/60 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h5 className="text-[0.78rem] font-sans font-semibold tracking-[0.15em] uppercase text-cream/70 mb-5">
              Visit
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.skool.com/unapologetically-after"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-cream/60 hover:text-cream transition-colors duration-300"
                >
                  The Community ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.c-heads.com/2026/07/13/the-boat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-cream/60 hover:text-cream transition-colors duration-300"
                >
                  Latest Essay ↗
                </a>
              </li>
              <li>
                <Link
                  href="/the-haus-edit#apply"
                  className="text-base text-cream/60 hover:text-cream transition-colors duration-300"
                >
                  Apply · Haus Edit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[0.78rem] font-sans font-semibold tracking-[0.15em] uppercase text-cream/70 mb-5">
              Contact
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@feinixhaus.com"
                  className="text-base text-cream/60 hover:text-cream transition-colors duration-300"
                >
                  hello@feinixhaus.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:press@feinixhaus.com"
                  className="text-base text-cream/60 hover:text-cream transition-colors duration-300"
                >
                  Press inquiries
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@feinixhaus.com"
                  className="text-base text-cream/60 hover:text-cream transition-colors duration-300"
                >
                  Collaborations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[0.78rem] font-sans tracking-[0.1em] text-cream/40">
            © 2026 Feinix Haus. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {[
              {
                label: "Instagram",
                href: "https://www.instagram.com/feinix_haus",
              },
              {
                label: "TikTok",
                href: "https://www.tiktok.com/@unapologeticallyafter",
              },
              { label: "Facebook", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.78rem] font-sans tracking-[0.1em] text-cream/40 hover:text-cream transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
