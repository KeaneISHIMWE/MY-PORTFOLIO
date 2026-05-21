"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const baseClasses =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[rgba(59,130,246,0.8)] overflow-hidden";

const variants = {
  primary:
    "bg-gradient-to-br from-[#58a8ff] via-[#447bff] to-[#7c51ff] text-white border border-white/15 shadow-[0_0_42px_-8px_rgba(59,130,246,0.75)] hover:shadow-[0_0_56px_-4px_rgba(168,85,255,0.55)]",
  ghost:
    "bg-white/5 text-[var(--fg)] hover:bg-white/10 border border-[var(--border)]",
};

export function GlowButton({
  variant = "primary",
  className,
  children,
  ...rest
}: {
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">) {
  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
      <button
        type="button"
        className={cn(baseClasses, variants[variant], className)}
        {...rest}
      >
        <GlowShimmer />
        <span className="relative">{children}</span>
      </button>
    </motion.div>
  );
}

export function GlowLink({
  variant = "primary",
  href,
  external,
  className,
  children,
}: {
  variant?: keyof typeof variants;
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={cn(baseClasses, variants[variant], className)}
        {...(external
          ? { target: "_blank", rel: "noreferrer noopener" }
          : {})}
      >
        <GlowShimmer />
        <span className="relative">{children}</span>
      </Link>
    </motion.div>
  );
}

function GlowShimmer() {
  return (
    <span className="pointer-events-none absolute inset-x-[-40%] top-[-100%] h-[200%] rotate-25 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70 blur-md" />
  );
}
