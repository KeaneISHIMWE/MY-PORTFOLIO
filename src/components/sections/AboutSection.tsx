"use client";

import { SITE } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const stats = [
  { label: "Products shipped across web & mobile", value: "18+" },
  { label: "Code-first motion & micro‑UX rituals", value: "Awwwards vibes" },
  { label: "Remote-first collaborator", value: "UTC±3 OK" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-36 py-24 sm:scroll-mt-32 sm:py-28">
      <SectionHeader
        eyebrow="About"
        title="Architecting serene digital realities"
        subtitle="From whiteboard chaos to restrained systems that scale with your story."
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.06fr_minmax(0,0.9fr)] lg:gap-14">
        <motion.article
          className="surface-glass relative overflow-hidden rounded-[2.2rem] p-10"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-muted text-[17px] leading-relaxed">{SITE.bio}</p>
          <p className="mt-7 text-muted text-[17px] leading-relaxed">
            I obsess over pacing: how typography breathes at different breakpoints,
            how state machines keep forms honest, how APIs stay future-proof enough
            for fast founders. Teams bring me when they want a portfolio-or-product that
            whispers sophistication without shouting novelty.
          </p>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-72"
            style={{
              boxShadow:
                "inset 0 4px 0 rgba(248,249,252,0.04), inset 7px -6px 100px rgba(59,130,246,0.18)",
            }}
          />
        </motion.article>

        <div className="grid gap-7">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="gradient-border-mask"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-14%" }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="gradient-border-inner surface-glass flex flex-col gap-3 px-10 py-8">
                <span className="font-display text-3xl font-semibold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent dark:to-purple-400">
                  {s.value}
                </span>
                <p className="text-muted text-[15px] leading-relaxed">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
