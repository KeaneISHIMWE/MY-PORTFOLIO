"use client";

import type { ProjectCategory } from "@/lib/constants";
import { PROJECTS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const FILTERS: (ProjectCategory | "All")[] = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "AI Projects",
  "Full Stack",
];

export function ProjectsSection() {
  const [tab, setTab] = useState<(typeof FILTERS)[number]>("All");
  const reduceMotion = useReducedMotion();

  const visible = useMemo(() => {
    if (tab === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === tab);
  }, [tab]);

  return (
    <section id="projects" className="relative scroll-mt-36 py-24 sm:scroll-mt-32 sm:py-28">
      <SectionHeader
        eyebrow="Showcase"
        title="Interactive build stories with cinematic fidelity"
        subtitle="Breadth across web apps, Flutter experiences, orchestrated intelligence, and full-stack builds."
      />

      <div className="mx-auto mb-14 flex max-w-6xl flex-wrap justify-center gap-3 px-6">
        <LayoutGroup id="filters">
          {FILTERS.map((f) => {
            const active = tab === f;
            return (
              <button
                key={f}
                type="button"
                className={cn(
                  "relative rounded-full px-5 py-[0.62rem] text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors",
                  active ? "text-white" : "text-muted hover:text-[var(--fg)]",
                )}
                onClick={() => setTab(f)}
              >
                {active ? (
                  <>
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3b82ff] via-[#7c3aed] to-[#5800a4] opacity-95"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                    <motion.span
                      layoutId="project-filter-ring"
                      className="pointer-events-none absolute inset-0 rounded-full border border-white/36"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  </>
                ) : null}
                <span className="relative z-[4]">{f}</span>
              </button>
            );
          })}
        </LayoutGroup>
      </div>

      <div className="mx-auto grid max-w-6xl gap-11 px-6 md:grid-cols-2">
        {visible.map((project, ix) => (
          <motion.article
            key={project.title}
            layout="position"
            className="group relative overflow-hidden rounded-[2.05rem]"
            transition={{
              duration: reduceMotion ? 0 : 0.72,
              delay: reduceMotion ? 0 : ix * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
          >
            <ProjectCardMotion project={project} reduceMotion={!!reduceMotion} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ProjectCardMotion({
  project,
  reduceMotion,
}: {
  project: (typeof PROJECTS)[number];
  reduceMotion: boolean;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="gradient-border-mask h-full rounded-[inherit]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="gradient-border-inner overflow-hidden rounded-[inherit] shadow-[inset_0_0_0_1px_rgba(248,249,252,0.06)] dark:bg-transparent">
        <div className="relative h-[15rem] overflow-hidden sm:h-[16.25rem]">
          <motion.div
            className="relative h-full w-full"
            animate={{ scale: hover && !reduceMotion ? 1.06 : 1 }}
            transition={{ duration: 0.74, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="object-cover"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,26,0.04)_54%,rgba(3,9,54,0.96)_118%)]"
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-[-20%]"
              animate={{ opacity: hover ? 1 : 0.35 }}
              style={{
                background:
                  "radial-gradient(circle at 74% -4%,rgba(217,147,247,0.48),transparent 72%), radial-gradient(circle at 38% -2%,rgba(79,157,247,0.44),transparent 71%)",
              }}
              transition={{ duration: 0.55 }}
            />
          </motion.div>
        </div>

        <div className="relative z-[22] space-y-6 px-8 pb-[2.4rem] pt-12 sm:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
            {project.category}
          </p>
          <h3 className="font-display text-[1.62rem] font-semibold">{project.title}</h3>
          <p className="text-muted text-[15px] leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-3 pt-4">
            {project.tech.slice(0, 6).map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--border)] bg-black/62 px-[0.9rem] py-[7px] text-[13px]"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-8 pt-[0.94rem]">
            <Link
              className="text-[var(--fg)] hover:text-sky-200"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            {project.live ? (
              <Link
                className="inline-flex items-center gap-2 hover:text-purple-300"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <ExternalLink className="h-[1rem] w-[1rem]" />
              </Link>
            ) : (
              <span className="text-muted text-[14px]">Demo coming soon</span>
            )}
          </div>
        </div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-[1px]"
          animate={{ rotate: hover && !reduceMotion ? 0.6 : 0 }}
          style={{
            background:
              "linear-gradient(to bottom,transparent 84%,rgba(59,130,246,0.22))",
            mixBlendMode: "screen",
            opacity: 0.94,
          }}
        />
      </div>
    </div>
  );
}
