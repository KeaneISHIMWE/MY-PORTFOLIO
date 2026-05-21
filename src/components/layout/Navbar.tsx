"use client";

import { NAV_LINKS, SITE } from "@/lib/constants";
import { BrandGithub, BrandLinkedin } from "@/components/icons/BrandIcons";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sparkles, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar({ activeId }: { activeId: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const dark = mounted && resolvedTheme === "dark";

  return (
    <>
      <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.75rem)] max-w-6xl -translate-x-1/2 px-4 sm:px-0">
        <nav className="surface-glass flex items-center justify-between gap-6 rounded-[1.65rem] border border-[var(--border)] px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="group relative flex items-center gap-2 text-left outline-none ring-offset-transparent focus-visible:ring-2 focus-visible:ring-sky-500/85"
          >
            <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/10">
              <Sparkles className="h-[1.08rem] w-[1.08rem] text-sky-200" />
              <span className="pointer-events-none absolute inset-[-1px] rounded-2xl bg-gradient-to-tr from-blue-500/42 via-purple-500/52 to-purple-950/92 opacity-[0.7] blur-sm transition-opacity duration-700 group-hover:opacity-100 group-hover:blur-md" />
            </span>
            <span className="hidden flex-col sm:flex">
              <span className="font-display text-[0.8rem] font-semibold leading-tight">
                {SITE.name}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-muted">
                Developer Portfolio
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((item) => {
              const active = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "relative rounded-full px-3 py-1 text-[13px] font-medium transition-colors",
                    active
                      ? "text-white dark:text-[var(--fg)]"
                      : "text-muted hover:text-[var(--fg)]",
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-glow-back"
                      className="pointer-events-none absolute inset-[-1px] rounded-full bg-gradient-to-r from-blue-500/62 via-purple-500/74 to-purple-900/94 opacity-[0.8] blur-xl"
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 32,
                      }}
                    />
                  ) : null}
                  <motion.span layout className="relative">
                    {item.label}
                  </motion.span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              aria-label="GitHub"
              className="hidden rounded-xl border border-white/14 bg-white/5 px-2.5 py-2 text-muted transition hover:bg-white/10 hover:text-[var(--fg)] sm:inline-flex"
              href={SITE.social.github}
              target="_blank"
              rel="noreferrer"
            >
              <BrandGithub className="h-4 w-4" />
            </a>
            <a
              aria-label="LinkedIn"
              className="hidden rounded-xl border border-white/14 bg-white/5 px-2.5 py-2 text-muted transition hover:bg-white/10 hover:text-[var(--fg)] sm:inline-flex"
              href={SITE.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <BrandLinkedin className="h-4 w-4" />
            </a>

            <button
              aria-label={
                mounted
                  ? `Switch to ${dark ? "light" : "dark"} mode`
                  : "Toggle appearance"
              }
              type="button"
              disabled={!mounted}
              className="hidden rounded-xl border border-white/14 bg-white/5 px-2.5 py-2 transition hover:bg-white/10 md:inline-flex"
              onClick={() => setTheme(dark ? "light" : "dark")}
            >
              {!mounted ? (
                <Moon className="h-4 w-4 opacity-65" />
              ) : dark ? (
                <Sun className="h-4 w-4 text-sky-200" />
              ) : (
                <Moon className="h-4 w-4 opacity-82" />
              )}
            </button>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              type="button"
              className="inline-flex rounded-xl border border-white/14 bg-white/5 px-2.5 py-2 lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-4 w-4" />
            </button>

            <button
              aria-label={
                mounted
                  ? `Switch to ${dark ? "light" : "dark"} mode`
                  : "Toggle appearance"
              }
              type="button"
              disabled={!mounted}
              className="inline-flex rounded-xl border border-white/14 bg-white/5 px-2.5 py-2 md:hidden"
              onClick={() => setTheme(dark ? "light" : "dark")}
            >
              {!mounted ? (
                <Moon className="h-4 w-4 opacity-65" />
              ) : dark ? (
                <Sun className="h-4 w-4 text-sky-200" />
              ) : (
                <Moon className="h-4 w-4 opacity-82" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <button
              type="button"
              aria-label="Close navigation overlay"
              className="absolute inset-0 bg-black/72 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 32, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="surface-glass relative mx-auto mt-24 w-[calc(100%-3rem)] max-w-md rounded-3xl border border-[var(--border)] p-5"
            >
              <div className="mb-3 flex justify-between px-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-muted">
                  Navigate
                </span>
                <Sparkles className="h-[0.92rem] w-[0.92rem] opacity-82" />
              </div>
              <div className="flex flex-col gap-1 pb-4">
                {NAV_LINKS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-left font-medium hover:bg-white/6",
                      activeId === item.id && "bg-white/6",
                    )}
                    onClick={() => scrollTo(item.id)}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[11px] text-muted">
                      {activeId === item.id ? "active" : "<>"}
                    </span>
                  </motion.button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                <a
                  href={SITE.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-2xl border border-white/10 bg-white/5 py-3 text-muted hover:bg-white/8"
                  onClick={() => setOpen(false)}
                >
                  <BrandGithub className="h-[1.06rem] w-[1.06rem]" />
                </a>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-2xl border border-white/10 bg-white/5 py-3 text-muted hover:bg-white/8"
                  onClick={() => setOpen(false)}
                >
                  <BrandLinkedin className="h-[1.06rem] w-[1.06rem]" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
