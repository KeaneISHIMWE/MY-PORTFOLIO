"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export function CursorGlow() {
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 420, damping: 34, mass: 0.42 });
  const sy = useSpring(y, { stiffness: 420, damping: 34, mass: 0.42 });

  const spotlight = useMotionTemplate`radial-gradient(620px circle at ${sx}px ${sy}px, rgba(96,165,250,0.34),transparent 72%)`;

  useEffect(() => {
    const move = (ev: PointerEvent) => {
      x.set(ev.clientX);
      y.set(ev.clientY);
    };

    window.addEventListener("pointermove", move, { passive: true });
    const leave = () => {
      x.set(-520);
      y.set(-520);
    };
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, [x, y]);

  if (reduceMotion || typeof window === "undefined") {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[22] opacity-95 mix-blend-screen max-md:hidden"
      style={{ backgroundImage: spotlight }}
    />
  );
}
