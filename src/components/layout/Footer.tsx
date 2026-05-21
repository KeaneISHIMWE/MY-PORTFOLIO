"use client";

import { NAV_LINKS, SITE } from "@/lib/constants";
import { BrandGithub, BrandLinkedin } from "@/components/icons/BrandIcons";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-black/38 py-14 pb-28 backdrop-blur-xl dark:bg-black/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl tracking-tight">{SITE.name}</p>
          <p className="mt-2 max-w-sm text-muted text-sm leading-relaxed">
            Polished portfolios for founders who obsess over detail. Crafted with
            Next.js, Convex, Flutter, and a love for restrained motion design.
          </p>
          <div className="mt-5 flex gap-4 text-muted">
            <a
              className="inline-flex items-center gap-1 hover:text-[var(--fg)]"
              href={SITE.social.github}
              target="_blank"
              rel="noreferrer"
            >
              <BrandGithub className="h-4 w-4" />
              <ArrowUpRight className="h-3 w-3 opacity-74" />
            </a>
            <a
              className="inline-flex items-center gap-1 hover:text-[var(--fg)]"
              href={SITE.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <BrandLinkedin className="h-4 w-4" />
              <ArrowUpRight className="h-3 w-3 opacity-74" />
            </a>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-10 gap-y-3 text-muted text-[13px]">
          {NAV_LINKS.map((l) => (
            <a key={l.id} className="hover:text-[var(--fg)]" href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between border-t border-white/[0.08] px-6 pt-6 text-[11px] text-muted font-mono">
        <motion.span layout>
          © {new Date().getFullYear()} {SITE.name} — HAND-CRAFTED.
        </motion.span>
        <span>Vercel‑ready • Convex‑backed</span>
      </div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] right-[-14%] h-56 w-[26rem] rounded-full bg-purple-700/42 blur-[90px]"
        animate={{ rotate: [-4, 3, -4], opacity: [0.45, 0.74, 0.45] }}
        transition={{ duration: 26, repeat: Infinity }}
      />
    </footer>
  );
}
