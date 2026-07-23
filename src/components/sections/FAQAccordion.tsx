"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How is this different from coaching or therapy?",
    answer:
      "It isn't either. The Haus Edit is editorial work — closer to what a creative director does for a brand, or an editor-in-chief does for a magazine. We're not processing the past. We're shaping the next chapter with intention, taste, and a clear point of view.",
  },
  {
    question: "How long is the engagement?",
    answer:
      "Volume I runs for three months. The pace is deliberately slow — we work at the speed of attention, not urgency. Sessions are scheduled with breathing room between them.",
  },
  {
    question: "How many women are in each Volume?",
    answer:
      "Intentionally few. We curate the room as carefully as we curate the editorial. Applications are reviewed personally, and the cohort is kept small enough that every woman's edit is fully considered.",
  },
  {
    question: "Is it in person or remote?",
    answer:
      "Mostly remote, with the option of an in-person intensive. We've found that distance actually protects the editorial pace — it gives both of us room to think between sessions.",
  },
  {
    question: "What does it cost?",
    answer:
      "Pool Haus community access is free (with a $22/month optional membership for full editorial & live calls). Pricing for the private Haus Edit (Volume One) is shared privately upon application to ensure fit.",
  },
  {
    question: "Is this a wellness program or support group?",
    answer:
      "No. Feinix Haus is a publishing house and gathering place for women rewriting life after disruption. There are no beige wellness tropes, patient language, or coaching scripts — just observed editorial writing and genuine community.",
  },
];

interface FAQAccordionProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  bgColor?: string;
}

export default function FAQAccordion({
  faqs = defaultFAQs,
  title = "The fine print,",
  subtitle = "edited.",
  bgColor = "bg-cream",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const uniqueId = useId();

  return (
    <section
      className={`py-16 md:py-32 ${bgColor} border-b border-border-subtle`}
      aria-label="Frequently asked questions"
    >
      <div className="max-w-[860px] mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <span className="text-[0.78rem] font-sans font-medium tracking-[0.2em] uppercase text-accent mb-3 block">
            Frequently Asked
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-warm font-light">
            {title} <em className="italic">{subtitle}</em>
          </h2>
        </motion.div>

        <motion.div
          className="space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          role="list"
        >
          {faqs.map((faq, i) => {
            const questionId = `${uniqueId}-question-${i}`;
            const answerId = `${uniqueId}-answer-${i}`;
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="border-b border-border-subtle"
                role="listitem"
              >
                <button
                  id={questionId}
                  className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="font-sans text-base md:text-lg font-medium text-ink-warm pr-4 group-hover:text-accent transition-colors duration-300">
                    {faq.question}
                  </span>
                  <motion.span
                    className="text-xl text-text-muted flex-shrink-0 w-6 h-6 flex items-center justify-center"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-text-secondary leading-relaxed pb-6 pr-8 text-justify md:text-left">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
