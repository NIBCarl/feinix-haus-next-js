"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MenuOverlay from "@/components/layout/MenuOverlay";
import Image from "next/image";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [tickerIndex, setTickerIndex] = useState(0);

  // Ticker Logic
  const tickerItems = [
    { badge: "Volume I", text: "The Art of After — Available Now in The Haus Edit", href: "/the-haus-edit", linkText: "Explore Volume" },
    { badge: "Community", text: "Monthly Open Haus & Unapologetically After Skool Membership", href: "/pool-haus", linkText: "Join Pool Haus" },
    { badge: "Essays", text: 'Featured Editorial: "The Moment Anyway — A Conversation with Kelly"', href: "/from-the-margins", linkText: "Read Essay" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [tickerItems.length]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-xl border-b border-border-subtle shadow-[0_4px_20px_rgba(31,27,22,0.02)]"
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top Announcement Ticker */}
        <div className="bg-ink-warm text-sand px-6 py-2 border-b border-white/10 relative z-50">
          <div className="max-w-[1480px] mx-auto flex items-center justify-center relative">
            <button 
              onClick={() => setTickerIndex((prev) => (prev - 1 + tickerItems.length) % tickerItems.length)}
              className="text-sand text-lg opacity-60 hover:opacity-100 hover:text-accent transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center absolute left-0 md:left-auto md:relative mr-4"
              aria-label="Previous announcement"
            >
              ‹
            </button>
            <div className="overflow-hidden h-6 relative w-full max-w-[760px] text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tickerIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center gap-3 absolute inset-0 w-full"
                >
                  <span className="bg-accent text-white px-2 py-0.5 text-[0.7rem] font-semibold tracking-[0.1em] rounded-sm hidden sm:block whitespace-nowrap">
                    {tickerItems[tickerIndex].badge}
                  </span>
                  <span className="text-sand text-[0.82rem] tracking-[0.08em] uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                    {tickerItems[tickerIndex].text}
                  </span>
                  <Link href={tickerItems[tickerIndex].href} className="text-accent hover:text-white font-medium text-[0.82rem] tracking-[0.08em] uppercase transition-colors hidden sm:inline-flex items-center gap-1 whitespace-nowrap">
                    {tickerItems[tickerIndex].linkText} <span>→</span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
            <button 
              onClick={() => setTickerIndex((prev) => (prev + 1) % tickerItems.length)}
              className="text-sand text-lg opacity-60 hover:opacity-100 hover:text-accent transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center absolute right-0 md:right-auto md:relative ml-4"
              aria-label="Next announcement"
            >
              ›
            </button>
          </div>
        </div>

        {/* Main Header (Centered Layout) */}
        <div className="max-w-[1480px] mx-auto px-6 md:px-10 py-5 lg:pb-3 flex flex-col items-center gap-4 relative">
          
          {/* Centered Logo */}
          <Link href="/" className="flex flex-col items-center gap-0.5 md:gap-1 group" aria-label="Feinix Haus — Home">
            <span className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.95rem] font-serif font-medium tracking-[0.25em] md:tracking-[0.32em] uppercase text-ink-warm leading-[1.2] md:leading-none transition-transform duration-300 group-hover:scale-105 text-center">
              FEINIX HAUS
            </span>
            <span className="text-[0.55rem] md:text-[0.68rem] font-sans font-semibold tracking-[0.25em] md:tracking-[0.36em] uppercase text-accent mt-0 md:mt-0.5 text-center">
              A LIFESTYLE COMMUNITY
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:block w-full pt-1" aria-label="Primary">
            <ul className="flex justify-center items-center gap-11">
              <li className="relative">
                <Link href="/" className="text-[0.82rem] font-sans font-semibold tracking-[0.16em] uppercase text-text-primary hover:text-accent transition-colors py-2 flex items-center relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300 pb-4">
                  Home
                </Link>
              </li>

              <li className="relative group/nav">
                <Link href="/the-haus-edit" className="text-[0.82rem] font-sans font-semibold tracking-[0.16em] uppercase text-text-primary group-hover/nav:text-accent transition-colors py-2 flex items-center gap-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent group-hover/nav:after:w-full after:transition-all after:duration-300 pb-4">
                  The Haus Edit <span className="text-[0.7rem] opacity-60 transition-transform duration-300 group-hover/nav:rotate-180 group-hover/nav:text-accent group-hover/nav:opacity-100">▾</span>
                </Link>
                {/* Mega Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] bg-[#FCFAF7] border border-border-subtle shadow-[0_24px_48px_rgba(31,27,22,0.09)] rounded-sm p-9 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible translate-y-3 group-hover/nav:translate-y-0 transition-all duration-300">
                  <div className="grid grid-cols-[280px_1fr_1fr] gap-12 text-left">
                    {/* Preview Card */}
                    <div className="bg-[#F7F3EC] rounded-sm overflow-hidden border border-border-subtle transition-transform duration-300 hover:-translate-y-1 group/card">
                      <div className="relative h-[140px] w-full overflow-hidden bg-sand">
                        <Image src="/covers/framer-hero.jpg" alt="The Haus Edit" fill className="object-cover transition-transform duration-700 group-hover/card:scale-105" />
                      </div>
                      <div className="p-4 flex flex-col gap-1">
                        <span className="text-[0.68rem] font-sans font-semibold tracking-[0.16em] uppercase text-accent">Volume I Edition</span>
                        <p className="font-serif text-[1.15rem] font-medium text-ink-warm leading-tight mt-1">The Art of After</p>
                        <Link href="/the-haus-edit" className="text-[0.8rem] font-sans font-semibold text-ink-warm hover:text-accent transition-colors inline-flex items-center gap-1 mt-2">Explore Volume I <span>→</span></Link>
                      </div>
                    </div>
                    {/* Links */}
                    <div className="flex flex-col gap-4">
                      <span className="text-[0.72rem] font-sans font-bold tracking-[0.22em] uppercase text-accent border-b border-border-subtle pb-2">The Experience</span>
                      <ul className="flex flex-col gap-3.5">
                        <li><Link href="/the-haus-edit#overview" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">What It Is & Who It&apos;s For</Link></li>
                        <li><Link href="/the-haus-edit#experience" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">The Signature Journey</Link></li>
                        <li><Link href="/the-haus-edit#volume-1" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Volume I — The Art of After</Link></li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-[0.72rem] font-sans font-bold tracking-[0.22em] uppercase text-accent border-b border-border-subtle pb-2">Reservations & FAQs</span>
                      <ul className="flex flex-col gap-3.5">
                        <li><Link href="/the-haus-edit#faqs" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Frequently Asked Questions</Link></li>
                        <li><Link href="/the-haus-edit#apply" className="mt-1.5 text-[0.82rem] font-sans font-semibold tracking-[0.12em] uppercase text-accent border border-accent px-4 py-2 inline-block hover:bg-accent hover:text-white transition-colors duration-300">Apply / Book Experience</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="relative group/nav">
                <Link href="/pool-haus" className="text-[0.82rem] font-sans font-semibold tracking-[0.16em] uppercase text-text-primary group-hover/nav:text-accent transition-colors py-2 flex items-center gap-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent group-hover/nav:after:w-full after:transition-all after:duration-300 pb-4">
                  Pool Haus <span className="text-[0.7rem] opacity-60 transition-transform duration-300 group-hover/nav:rotate-180 group-hover/nav:text-accent group-hover/nav:opacity-100">▾</span>
                </Link>
                {/* Mega Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] bg-[#FCFAF7] border border-border-subtle shadow-[0_24px_48px_rgba(31,27,22,0.09)] rounded-sm p-9 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible translate-y-3 group-hover/nav:translate-y-0 transition-all duration-300">
                  <div className="grid grid-cols-[280px_1fr_1fr] gap-12 text-left">
                    {/* Preview Card */}
                    <div className="bg-[#F7F3EC] rounded-sm overflow-hidden border border-border-subtle transition-transform duration-300 hover:-translate-y-1 group/card">
                      <div className="relative h-[140px] w-full overflow-hidden bg-sand">
                        <Image src="/editorial/kelly-profile.png" alt="Pool Haus" fill className="object-cover transition-transform duration-700 group-hover/card:scale-105" />
                      </div>
                      <div className="p-4 flex flex-col gap-1">
                        <span className="text-[0.68rem] font-sans font-semibold tracking-[0.16em] uppercase text-accent">The Gathering Place</span>
                        <p className="font-serif text-[1.15rem] font-medium text-ink-warm leading-tight mt-1">Unapologetically After</p>
                        <Link href="/pool-haus" className="text-[0.8rem] font-sans font-semibold text-ink-warm hover:text-accent transition-colors inline-flex items-center gap-1 mt-2">Join Community <span>→</span></Link>
                      </div>
                    </div>
                    {/* Links */}
                    <div className="flex flex-col gap-4">
                      <span className="text-[0.72rem] font-sans font-bold tracking-[0.22em] uppercase text-accent border-b border-border-subtle pb-2">Memberships</span>
                      <ul className="flex flex-col gap-3.5">
                        <li><Link href="/pool-haus#free-community" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Free Unapologetically Community</Link></li>
                        <li><Link href="/pool-haus#paid-membership" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Paid Membership ($22/mo)</Link></li>
                        <li><Link href="/pool-haus#whats-included" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">What&apos;s Included</Link></li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-[0.72rem] font-sans font-bold tracking-[0.22em] uppercase text-accent border-b border-border-subtle pb-2">Gatherings</span>
                      <ul className="flex flex-col gap-3.5">
                        <li><Link href="/pool-haus#open-haus" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Monthly Open Haus</Link></li>
                        <li><a href="https://www.skool.com/unapologetically-after" target="_blank" rel="noopener noreferrer" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Skool Portal ↗</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="relative group/nav">
                <Link href="/from-the-margins" className="text-[0.82rem] font-sans font-semibold tracking-[0.16em] uppercase text-text-primary group-hover/nav:text-accent transition-colors py-2 flex items-center gap-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent group-hover/nav:after:w-full after:transition-all after:duration-300 pb-4">
                  From the Margins <span className="text-[0.7rem] opacity-60 transition-transform duration-300 group-hover/nav:rotate-180 group-hover/nav:text-accent group-hover/nav:opacity-100">▾</span>
                </Link>
                {/* Mega Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] bg-[#FCFAF7] border border-border-subtle shadow-[0_24px_48px_rgba(31,27,22,0.09)] rounded-sm p-9 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible translate-y-3 group-hover/nav:translate-y-0 transition-all duration-300">
                  <div className="grid grid-cols-[280px_1fr_1fr] gap-12 text-left">
                    {/* Preview Card */}
                    <div className="bg-[#F7F3EC] rounded-sm overflow-hidden border border-border-subtle transition-transform duration-300 hover:-translate-y-1 group/card">
                      <div className="relative h-[140px] w-full overflow-hidden bg-sand">
                        <Image src="/covers/framer-hero.jpg" alt="Essays Preview" fill className="object-cover transition-transform duration-700 group-hover/card:scale-105" />
                      </div>
                      <div className="p-4 flex flex-col gap-1">
                        <span className="text-[0.68rem] font-sans font-semibold tracking-[0.16em] uppercase text-accent">Editorial & Essays</span>
                        <p className="font-serif text-[1.15rem] font-medium text-ink-warm leading-tight mt-1">From the Margins</p>
                        <Link href="/from-the-margins" className="text-[0.8rem] font-sans font-semibold text-ink-warm hover:text-accent transition-colors inline-flex items-center gap-1 mt-2">Browse All Essays <span>→</span></Link>
                      </div>
                    </div>
                    {/* Links */}
                    <div className="flex flex-col gap-4">
                      <span className="text-[0.72rem] font-sans font-bold tracking-[0.22em] uppercase text-accent border-b border-border-subtle pb-2">Featured Essays</span>
                      <ul className="flex flex-col gap-3.5">
                        <li><a href="https://www.c-heads.com/2026/02/12/the-moment-anyway-a-conversation-with-kelly/" target="_blank" rel="noopener noreferrer" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">The Moment Anyway ↗</a></li>
                        <li><a href="https://www.c-heads.com/2026/07/13/the-boat/" target="_blank" rel="noopener noreferrer" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">The Boat ↗</a></li>
                        <li><Link href="/from-the-margins" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Read Editorial Column</Link></li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-[0.72rem] font-sans font-bold tracking-[0.22em] uppercase text-accent border-b border-border-subtle pb-2">Topics</span>
                      <ul className="flex flex-col gap-3.5">
                        <li><Link href="/from-the-margins?topic=editorial" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Editorial Philosophy</Link></li>
                        <li><Link href="/from-the-margins?topic=reflections" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Reflections & Notes</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="relative group/nav">
                <Link href="/about" className="text-[0.82rem] font-sans font-semibold tracking-[0.16em] uppercase text-text-primary group-hover/nav:text-accent transition-colors py-2 flex items-center gap-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent group-hover/nav:after:w-full after:transition-all after:duration-300 pb-4">
                  About <span className="text-[0.7rem] opacity-60 transition-transform duration-300 group-hover/nav:rotate-180 group-hover/nav:text-accent group-hover/nav:opacity-100">▾</span>
                </Link>
                {/* Mega Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] bg-[#FCFAF7] border border-border-subtle shadow-[0_24px_48px_rgba(31,27,22,0.09)] rounded-sm p-9 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible translate-y-3 group-hover/nav:translate-y-0 transition-all duration-300">
                  <div className="grid grid-cols-[280px_1fr_1fr] gap-12 text-left">
                    {/* Preview Card */}
                    <div className="bg-[#F7F3EC] rounded-sm overflow-hidden border border-border-subtle transition-transform duration-300 hover:-translate-y-1 group/card">
                      <div className="relative h-[140px] w-full overflow-hidden bg-sand">
                        <Image src="/editorial/kelly-profile.png" alt="Kelly Gunn Preview" fill className="object-cover transition-transform duration-700 group-hover/card:scale-105" />
                      </div>
                      <div className="p-4 flex flex-col gap-1">
                        <span className="text-[0.68rem] font-sans font-semibold tracking-[0.16em] uppercase text-accent">Editor-in-Chief</span>
                        <p className="font-serif text-[1.15rem] font-medium text-ink-warm leading-tight mt-1">Kelly Gunn</p>
                        <Link href="/about" className="text-[0.8rem] font-sans font-semibold text-ink-warm hover:text-accent transition-colors inline-flex items-center gap-1 mt-2">Read Story <span>→</span></Link>
                      </div>
                    </div>
                    {/* Links */}
                    <div className="flex flex-col gap-4">
                      <span className="text-[0.72rem] font-sans font-bold tracking-[0.22em] uppercase text-accent border-b border-border-subtle pb-2">The Story</span>
                      <ul className="flex flex-col gap-3.5">
                        <li><Link href="/about#story" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">My Story & Journey</Link></li>
                        <li><Link href="/about#why-feinix" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Why Feinix Haus Exists</Link></li>
                        <li><Link href="/about#philosophy" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Editorial Philosophy</Link></li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-[0.72rem] font-sans font-bold tracking-[0.22em] uppercase text-accent border-b border-border-subtle pb-2">Press & Media</span>
                      <ul className="flex flex-col gap-3.5">
                        <li><Link href="/about#press" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Press, Podcasts & Media</Link></li>
                        <li><Link href="/about#contact" className="font-serif text-[1.1rem] text-text-primary hover:text-accent transition-colors inline-block hover:translate-x-1 duration-300">Get in Touch</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link href="/pool-haus" className="bg-ink-warm text-cream px-[1.4rem] py-[0.55rem] text-[0.82rem] tracking-[0.16em] uppercase font-semibold border border-ink-warm hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                  Join
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Hamburger Layout */}
          <div className="lg:hidden absolute top-[1rem] right-4 flex items-center">
            <button
              className="flex flex-col gap-[5px] p-3 cursor-pointer z-50 w-[44px] h-[44px] items-center justify-center relative group"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span className="block w-5 h-[1.5px] bg-ink-warm group-hover:bg-accent transition-colors" />
              <span className="block w-5 h-[1.5px] bg-ink-warm group-hover:bg-accent transition-colors" />
              <span className="block w-5 h-[1.5px] bg-ink-warm group-hover:bg-accent transition-colors" />
            </button>
          </div>

        </div>
      </motion.header>

      {/* Floating Side Social Rail */}
      <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-[40] flex-col gap-5">
        <a href="https://www.instagram.com/feinix_haus" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-text-muted hover:text-accent transition-colors" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-[1.15]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-ink-warm text-cream px-[0.6rem] py-[0.25rem] rounded-sm text-[0.68rem] whitespace-nowrap absolute left-6 pointer-events-none uppercase tracking-[0.15em] font-medium">Instagram</span>
        </a>
        <a href="https://www.tiktok.com/@unapologeticallyafter" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-text-muted hover:text-accent transition-colors" aria-label="TikTok">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-[1.15]"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
          <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-ink-warm text-cream px-[0.6rem] py-[0.25rem] rounded-sm text-[0.68rem] whitespace-nowrap absolute left-6 pointer-events-none uppercase tracking-[0.15em] font-medium">TikTok</span>
        </a>
        <a href="https://www.skool.com/unapologetically-after" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-text-muted hover:text-accent transition-colors" aria-label="Community">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-[1.15]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-ink-warm text-cream px-[0.6rem] py-[0.25rem] rounded-sm text-[0.68rem] whitespace-nowrap absolute left-6 pointer-events-none uppercase tracking-[0.15em] font-medium">Community</span>
        </a>
      </aside>

      <AnimatePresence>
        {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
