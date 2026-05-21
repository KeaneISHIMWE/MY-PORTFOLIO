"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-36 py-24 sm:scroll-mt-32 sm:py-28"
    >
      <SectionHeader
        eyebrow="Testimonials"
        title="Momentum people feel in the margins"
        subtitle="Placeholder quotes you can swap for verified collaborator feedback."
      />

      <div className="mx-auto grid max-w-6xl gap-[1.5rem] px-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, ix) => (
          <motion.figure
            key={t.name}
            className="gradient-border-mask h-full rounded-[2.05rem]"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 0.7,
              delay: ix * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -8, rotate: ix % 2 === 0 ? -0.35 : 0.35 }
            }
          >
            <div className="gradient-border-inner surface-glass flex h-full flex-col rounded-[calc(2.05rem-1px)] p-[2.15rem]">
              <blockquote className="text-[17px] font-light italic leading-relaxed text-[var(--fg)]">
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="mt-auto border-t border-white/14 pt-[1.4rem]">
                <p className="font-display text-[1.05rem] font-semibold not-italic">
                  {t.name}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted not-italic">
                  {t.role}
                </p>
              </figcaption>
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
