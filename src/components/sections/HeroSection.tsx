"use client";

import { EXPERIENCE, HERO_TECH_ICONS, SITE, SKILLS, TESTIMONIALS } from "@/lib/constants";
import { BrandGithub, BrandLinkedin } from "@/components/icons/BrandIcons";
import { GlowLink } from "@/components/ui/GlowButton";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 180],
  );

  const typing = useTypingEffect(SITE.role, 54, 600);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100vh] flex-col overflow-hidden pb-28 pt-[7.85rem]"
    >
      <div className="relative z-[10] mx-auto flex max-w-6xl flex-1 flex-col gap-14 px-6 lg:flex-row lg:items-center">
        <motion.div className="max-w-xl flex-1 lg:max-w-[34rem]" style={{ y }}>
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-mono text-[10px] uppercase tracking-[0.55em] text-muted"
          >
            Full-stack intuition · polished product craft
          </motion.div>

          <motion.h1
            layout
            className="mt-8 font-display text-[2.72rem] font-semibold tracking-[-0.03em] sm:text-[3.12rem] lg:text-[3.76rem]"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="bg-gradient-to-br from-[#dce8ff] to-[#4c7dff] bg-clip-text text-transparent dark:from-white dark:to-[#8aaaff]">
              {SITE.name}
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 min-h-[3.85rem] text-[1.14rem] leading-relaxed text-muted sm:text-[1.22rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-[var(--fg)]">{typing}</span>
            {!reduceMotion ? (
              <motion.span
                aria-hidden
                className="ml-2 inline-flex h-[1.15em] align-[-4px]"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.08,
                  repeat: Infinity,
                }}
              >
                <span className="mx-[1px] inline-block h-full w-[1px] rounded bg-gradient-to-b from-blue-400 to-purple-500" />
              </motion.span>
            ) : null}
          </motion.p>

          <motion.p
            className="mt-5 max-w-md text-[15px] leading-relaxed text-muted"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            className="mt-11 flex flex-wrap gap-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.48,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <GlowLink variant="primary" href="#projects" external={false}>
              <span>View Projects</span>
              <ArrowRight className="h-[0.94rem] w-[0.94rem] opacity-[0.93]" />
            </GlowLink>
            <GlowLink variant="ghost" href="#contact" external={false}>
              Contact Me
            </GlowLink>
          </motion.div>

          <motion.div
            className="mt-14 flex flex-wrap gap-10 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.8 }}
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
                Experience arc
              </p>
              <p className="mt-1 text-[28px] font-semibold tracking-tight text-[var(--fg)]">
                {EXPERIENCE.length}+ eras
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
                Social proof beats
              </p>
              <p className="mt-1 text-[28px] font-semibold tracking-tight text-[var(--fg)]">
                {TESTIMONIALS.length}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
                Skills indexed
              </p>
              <p className="mt-1 text-[28px] font-semibold tracking-tight text-[var(--fg)]">
                {SKILLS.length}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-14 flex gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              className="group inline-flex gap-3 text-muted hover:text-[var(--fg)]"
              href={SITE.social.github}
              target="_blank"
              rel="noreferrer"
            >
              <BrandGithub className="h-8 w-8" />
              <span className="max-w-[8rem] text-[13px] leading-snug opacity-94">
                <span className="block font-medium text-[var(--fg)] group-hover:text-sky-200">
                  GitHub
                </span>
              </span>
            </Link>
            <Link
              className="group inline-flex gap-3 text-muted hover:text-[var(--fg)]"
              href={SITE.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <BrandLinkedin className="h-8 w-8" />
              <span className="max-w-[8rem] text-[13px] leading-snug opacity-94">
                <span className="block font-medium text-[var(--fg)] group-hover:text-purple-200">
                  LinkedIn
                </span>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <OrbCluster reduceMotion={!!reduceMotion} />
      </div>

      <div className="pointer-events-none absolute left-[-12%] top-[40%] h-96 w-[26rem] rounded-full bg-purple-950/92 blur-[120px]" />
    </section>
  );
}

function OrbCluster({ reduceMotion }: { reduceMotion: boolean }) {
  const icons = HERO_TECH_ICONS;

  const offsets = [
    { top: "7%", left: "10%" },
    { top: "-3%", left: "60%" },
    { top: "22%", left: "-5%" },
    { top: "68%", left: "-2%" },
    { top: "54%", left: "70%" },
    { top: "-6%", left: "28%" },
  ] as const;

  return (
    <div className="relative mt-24 flex flex-1 items-center justify-center lg:mt-16">
      <div className="relative h-[384px] w-[364px] sm:h-[438px] sm:w-[394px]">
        <motion.div
          animate={
            reduceMotion
              ? {}
              : { rotate: [-3, 2.5, -3], translateY: [0, -10, 0] }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-6 rounded-[2.8rem] border border-[var(--border)] bg-[radial-gradient(circle_at_15%_-10%,rgba(59,130,246,0.35),transparent_61%),linear-gradient(to_top_right,rgba(16,26,94,0.96),rgba(29,27,104,0.96))]"
          style={{
            backdropFilter: "blur(52px)",
            boxShadow:
              "inset 0 0 82px rgba(59,130,246,0.22), inset 1px -1px 0 rgba(248,113,246,0.24)",
          }}
        />

        <motion.div
          className="absolute left-1/2 top-[40%] h-28 w-[6.42rem] -translate-x-1/2 rounded-[1.4rem] border border-[var(--border)] bg-gradient-to-b from-[#8bb6ff]/22 via-[#392d8c]/94 to-purple-950/93"
          style={{
            backdropFilter: "blur(54px)",
            boxShadow:
              "0 0 60px rgba(59,130,246,0.55), inset 3px -3px 16px rgba(255,255,255,0.18)",
          }}
          animate={
            reduceMotion ? {} : { rotateX: [8, -6, 8], rotateY: [-4, 4, -4] }
          }
          transition={{ duration: 16, repeat: Infinity, repeatType: "mirror" }}
        />

        {icons.map((label, ix) => {
          const slot = offsets[ix % offsets.length];
          const delay = ix * 0.25;

          return (
            <motion.span
              key={label}
              className="pointer-events-none absolute inline-flex rounded-full border border-white/21 bg-black/62 px-[0.73rem] py-[6px] font-mono text-[11px] uppercase tracking-[0.25em]"
              style={slot}
              initial={{ opacity: 0 }}
              animate={
                reduceMotion ? { opacity: 1 } : { y: [-4, 4, -4], opacity: 1 }
              }
              transition={{
                opacity: {
                  duration: 0.6,
                  delay: 0.2 + ix * 0.08,
                },
                duration: 5.5 + delay,
                repeat: Infinity,
              }}
            >
              <span className="bg-gradient-to-r from-[#a5cfff] to-[#c6bfff] bg-clip-text text-transparent dark:from-[#dcf0ff] dark:to-[#e5d6ff]">
                {label}
              </span>
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
