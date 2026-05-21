"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AmbientGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[14] opacity-[0.22] contrast-115 mix-blend-screen dark:opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(transparent calc(100% - 1px), rgba(148,163,184,0.25) 100%), linear-gradient(90deg, transparent calc(100% - 1px), rgba(148,163,184,0.18) 100%)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(#000,rgba(0,0,0,0.5) 40%,transparent 104%)",
        }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[12] blur-[115px]"
        animate={
          reduceMotion ? {} : { opacity: [0.24, 0.48, 0.24], scale: [1, 1.04, 1] }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        style={{
          background:
            "radial-gradient(circle at 16% -8%,rgba(59,130,246,0.55),transparent 61%), radial-gradient(circle at 116% -6%,rgba(168,85,255,0.65),transparent 61%)",
        }}
      />
    </>
  );
}
