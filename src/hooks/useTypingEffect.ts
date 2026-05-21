"use client";

import { useEffect, useState } from "react";

export function useTypingEffect(
  text: string,
  speedMs = 48,
  startDelayMs = 400,
): string {
  const [out, setOut] = useState("");

  useEffect(() => {
    let ix = 0;
    let frame: ReturnType<typeof setTimeout>;

    const start = setTimeout(() => {
      const tick = () => {
        ix += 1;
        setOut(text.slice(0, ix));
        if (ix < text.length) {
          frame = setTimeout(tick, speedMs + (text[ix] === " " ? 60 : 0));
        }
      };
      tick();
    }, startDelayMs);

    return () => {
      clearTimeout(start);
      clearTimeout(frame);
      setOut("");
    };
  }, [text, speedMs, startDelayMs]);

  return out;
}
