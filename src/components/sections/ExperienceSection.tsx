"use client";

import { EXPERIENCE } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

export function ExperienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative scroll-mt-36 py-24 sm:scroll-mt-32 sm:py-28"
    >
      <SectionHeader
        eyebrow="Timeline"
        title="Momentum across teams, timelines, and technical honesty"
        subtitle="Weekly shipping cadences, quarterly refactors, and launches that recruiters actually screenshot."
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-[4rem] left-[1.5rem] top-16 w-[1px] bg-gradient-to-b from-sky-500/80 via-purple-600/70 to-transparent sm:left-[3.125rem]"
        />

        <ol className="relative flex flex-col gap-16 pb-24">
          {EXPERIENCE.map((slot, ix) => (
            <motion.li
              key={`${slot.title}-${slot.period}`}
              className="relative pl-24 sm:pl-36"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.65,
                delay: ix * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.span
                aria-hidden
                className="absolute left-[1.25rem] top-8 flex h-[0.9rem] w-[0.9rem] items-center justify-center rounded-full border border-sky-500/70 bg-black/80 shadow-[0_0_50px_-2px_rgba(59,130,246,0.85)] sm:left-[2.8125rem]"
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: [1, 1.18, 1], rotate: [-2.5, 2.8, -2.6] }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <p className="font-mono text-[11px] uppercase tracking-[0.42em] text-muted">
                {slot.period}
              </p>
              <div className="mt-8 flex flex-col gap-11 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="max-w-lg">
                  <h3 className="font-display text-[1.5rem] font-semibold">
                    {slot.title}
                  </h3>
                  <p className="mt-7 text-muted text-[13px] font-medium uppercase tracking-[0.08em]">
                    {slot.company}
                  </p>
                  <p className="mt-7 text-muted text-[17px] leading-relaxed">
                    {slot.detail}
                  </p>
                </div>
              </div>
              <ul className="mt-14 flex flex-wrap gap-14">
                {slot.tags.map((t) => (
                  <li
                    key={t}
                    className={cn(
                      "rounded-[1.94rem] border border-[var(--border)] bg-black/65 px-[0.93rem] py-[11px]",
                      "text-[13px]",
                    )}
                  >
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
