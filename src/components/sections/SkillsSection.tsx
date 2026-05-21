"use client";

import { SKILLS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative scroll-mt-36 py-24 sm:scroll-mt-32 sm:py-28">
      <SectionHeader
        eyebrow="Engineering Palette"
        title="Fluent across the full surface area of product"
        subtitle="Depth where it hurts, lightness where humans feel it."
      />
      <div className="mx-auto grid max-w-6xl gap-7 px-6 sm:grid-cols-2 xl:grid-cols-3">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="group relative rounded-[2.1rem]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              delay: reduceMotion ? 0 : i * 0.04,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              reduceMotion ? undefined : { y: -8, rotateX: 2, rotateY: -4 }
            }
            style={{
              perspective: "1200px",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="surface-glass relative h-full overflow-hidden rounded-[2.08rem] p-9 transition-shadow duration-500 group-hover:shadow-[0_0_60px_-20px_rgba(59,130,246,0.55)]">
              <div className="flex items-baseline justify-between gap-8">
                <h3 className="font-display text-[1.2rem] font-semibold">
                  {s.name}
                </h3>
                <span className="font-mono text-[13px] text-muted">
                  {s.level}%
                </span>
              </div>
              <div className="mt-6 h-[6px] w-full rounded-full bg-white/7">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-sky-300 via-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${s.level}%`,
                  }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{
                    duration: reduceMotion ? 0 : 1.05,
                    delay: reduceMotion ? 0 : 0.1 + i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -right-[25%] -top-[30%] h-44 w-[14rem] rotate-[-20deg] bg-gradient-to-r from-purple-950/94 via-[#050b38]/93 to-[#070018]/93 opacity-[0]"
                animate={
                  reduceMotion
                    ? undefined
                    : { opacity: [0, 0.35, 0], scale: [0.94, 1.02, 0.94] }
                }
                transition={{
                  duration: 14,
                  delay: i * 0.9,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
