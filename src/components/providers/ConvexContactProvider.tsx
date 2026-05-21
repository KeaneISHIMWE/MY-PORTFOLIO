"use client";

import React, { createContext, useContext, useMemo } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const ConvexAvailContext = createContext(false);

export function useConvexContactEnabled(): boolean {
  return useContext(ConvexAvailContext);
}

/** True when NEXT_PUBLIC_CONVEX_URL is set so the contact form may use Convex hooks. */
export function ConvexContactProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const raw = process.env.NEXT_PUBLIC_CONVEX_URL?.trim();
  const enabled = Boolean(raw?.startsWith("https://") && raw.length > 10);

  const client = useMemo(() => {
    if (!enabled || !raw) return null;
    return new ConvexReactClient(raw);
  }, [enabled, raw]);

  if (client) {
    return (
      <ConvexProvider client={client}>
        <ConvexAvailContext.Provider value={true}>
          {children}
        </ConvexAvailContext.Provider>
      </ConvexProvider>
    );
  }

  return (
    <ConvexAvailContext.Provider value={false}>
      {children}
    </ConvexAvailContext.Provider>
  );
}
