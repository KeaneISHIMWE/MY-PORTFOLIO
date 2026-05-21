"use client";

import { SERVICES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion, useReducedMotion } from "framer-motion";
import {
  Cpu,
  Database,
  LayoutPanelTop,
  Palette,
  ServerCog,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

const ICONS: LucideIcon[] = [
  ServerCog,
  Smartphone,
  Database,
  Palette,
  Cpu,
  LayoutPanelTop,
];

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative scroll-mt-36 py-24 sm:scroll-mt-32 sm:py-28">
      <SectionHeader
        eyebrow="Engagements"
        title="Composable services calibrated for cinematic delivery"
        subtitle="Zero-to-demo, platform-hardening, polished UI systems—whatever needs to feel unmistakably premium."
      />

      <div className="mx-auto grid max-w-6xl gap-[1.94rem] px-6 sm:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((srv, ix) => {
          const Ico = ICONS[ix % ICONS.length];

          return (
            <motion.article
              key={srv.title}
              className="surface-glass group relative rounded-[2.13rem] p-[2.54rem]"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.65,
                delay: ix * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -11 }}
            >
              <div className="mb-[1.94rem] flex items-start justify-between gap-4">
                <span className="inline-flex rounded-[18px] border border-[var(--border)] bg-black/55 p-[0.93rem] text-sky-200">
                  <Ico className="h-[1.94rem] w-[1.94rem]" aria-hidden />
                </span>
                <span className="font-mono text-[13px] text-muted">{`/${ix + 11}`}</span>
              </div>
              <h3 className="font-display text-[1.52rem] font-semibold">
                {srv.title}
              </h3>
              <p className="mt-[0.93rem] text-muted text-[16px] leading-relaxed">
                {srv.description}
              </p>

              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-x-[-20%] top-[-30%] h-[148%]"
                animate={
                  reduceMotion
                    ? undefined
                    : { opacity: [0.06, 0.19, 0.06], x: [-10, 6, -10] }
                }
                transition={{ duration: 11, repeat: Infinity }}
                style={{
                  background:
                    "radial-gradient(circle,rgba(59,130,246,0.38),transparent 63%)",
                }}
              />

              <div className="pointer-events-none absolute inset-x-[2.08rem] bottom-[2rem] hidden h-[1px] rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent sm:block" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
