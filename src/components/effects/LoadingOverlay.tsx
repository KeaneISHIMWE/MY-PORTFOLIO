"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function LoadingOverlay({ visible }: { visible: boolean }) {
  const reduced = useReducedMotion();

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030713]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative flex flex-col items-center gap-6 px-8 text-center">
            <motion.div
              className="relative h-[4.85rem] w-[4.85rem] rounded-[1.95rem] border border-white/12 bg-white/5 backdrop-blur-2xl shadow-[0_0_140px_-24px_rgba(59,130,246,0.95)]"
              animate={
                reduced
                  ? {}
                  : { rotate: [-2, 2, -2], scale: [1, 1.05, 1] }
              }
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
              }}
            >
              <span className="absolute inset-[7px] rounded-[1.4rem] bg-gradient-to-br from-sky-300/70 via-purple-700/69 to-purple-950/94 opacity-[0.92]" />
            </motion.div>
            <div>
              <p className="font-display text-[1.45rem] tracking-tight text-white sm:text-xl">
                Calibrating the scene
              </p>
              <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.5em] text-white/52">
                Keanne Ishimwe — Portfolio shell
              </p>
            </div>
          </div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 26% 16%,rgba(59,130,246,0.38),transparent 52%), radial-gradient(circle at 82% -4%,rgba(168,85,255,0.48),transparent 53%)",
            }}
            animate={
              reduced ? {} : { opacity: [0.35, 0.65, 0.35] }
            }
            transition={{ duration: 6.5, repeat: Infinity }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
