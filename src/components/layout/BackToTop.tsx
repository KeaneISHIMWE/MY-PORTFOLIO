"use client";

import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const cb = () => setShown(window.scrollY > 640);
    cb();
    window.addEventListener("scroll", cb, { passive: true });
    return () => window.removeEventListener("scroll", cb);
  }, []);

  return (
    <AnimatePresence>
      {shown ? (
        <motion.button
          type="button"
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 32, opacity: 0 }}
          transition={{ duration: 0.45 }}
          aria-label="Back to top"
          className="fixed bottom-8 right-5 z-[55] rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-4 text-white shadow-[0_0_45px_-6px_rgba(59,130,246,0.85)] lg:right-14"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <ChevronUp className="h-[1rem] w-[1rem]" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
