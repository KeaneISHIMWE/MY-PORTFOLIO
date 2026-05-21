"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center"
          ? "mx-auto mb-14 text-center"
          : "mb-14 text-left",
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.3em]",
          align === "center" ? "justify-center mx-auto" : "",
        )}
      >
        <span className="bg-gradient-to-r from-[#74baff] via-[#7c72ff] to-[#ffa5f4] bg-clip-text font-semibold text-transparent">
          {eyebrow}
        </span>
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{
          duration: 0.7,
          delay: 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.85rem]",
          align === "center" ? "" : "",
        )}
      >
        <span className="bg-gradient-to-br from-[#f5f9ff] to-[#8aa4ff] bg-clip-text text-transparent dark:from-white dark:to-[#9bb4ff]">
          {title}
        </span>
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{
            duration: 0.6,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-4 text-muted text-base leading-relaxed sm:text-[1.06rem]"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
