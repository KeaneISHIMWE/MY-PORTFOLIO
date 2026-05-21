"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const [pct, setPct] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent">
      <motion.div
        className="h-full rounded-r-full bg-gradient-to-r from-sky-300 via-blue-500 to-purple-400"
        style={{ width: reduced ? `${pct}%` : `${pct}%` }}
        transition={
          reduced
            ? { duration: 0 }
            : { type: "spring", stiffness: 160, damping: 30 }
        }
      />
    </div>
  );
}
