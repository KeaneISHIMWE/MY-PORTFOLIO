"use client";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ConvexContactProvider } from "@/components/providers/ConvexContactProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ConvexContactProvider>{children}</ConvexContactProvider>
    </ThemeProvider>
  );
}
