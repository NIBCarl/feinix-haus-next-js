import type { Variants, Transition } from "framer-motion";

/* ─── Custom Easing ─── */
export const editorial: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const smoothTransition: Transition = {
  duration: 0.85,
  ease: editorial,
};

export const slowTransition: Transition = {
  duration: 1.1,
  ease: editorial,
};

/* ─── Reveal Variants ─── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: editorial },
  },
};

/* ─── Stagger Variants ─── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: editorial,
    },
  },
};

/* ─── Text Mask Reveal (line by line) ─── */
export const textMaskContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const textMaskLine: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: editorial,
    },
  },
};

/* ─── Menu Overlay Variants ─── */
export const menuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

export const menuLink: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: editorial },
  },
};

export const menuLinkContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

/* ─── Viewport Settings ─── */
export const viewportOnce = { once: true, margin: "-100px" as const };
export const viewportAlways = { once: false, margin: "-80px" as const };
