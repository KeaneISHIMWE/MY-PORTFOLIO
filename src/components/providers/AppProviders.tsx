"use client";

import type { ReactNode } from "react";
import { ConvexContactProvider } from "@/components/providers/ConvexContactProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return <ConvexContactProvider>{children}</ConvexContactProvider>;
}
