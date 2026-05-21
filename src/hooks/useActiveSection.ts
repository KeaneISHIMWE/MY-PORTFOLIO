"use client";

import { useEffect, useState } from "react";

/** Tracks which `#section` intersects nearest the top for scrollspy nav highlighting. */
export function useActiveSection(sectionIds: readonly string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => n !== null);

    if (nodes.length === 0) {
      setActive(sectionIds[0]);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = [...entries]
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        const id = visible?.target.id;
        if (id && sectionIds.includes(id)) {
          setActive(id);
        }
      },
      {
        threshold: [0.18, 0.28, 0.42],
        rootMargin: "-72px 0px -62% 0px",
      },
    );

    for (const n of nodes) obs.observe(n);

    return () => {
      for (const n of nodes) obs.unobserve(n);
      obs.disconnect();
    };
  }, [sectionIds]);

  return active;
}
