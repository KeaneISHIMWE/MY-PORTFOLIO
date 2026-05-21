import { AppProviders } from "@/components/providers/AppProviders";
import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono, Syne } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const siteTitle = "Keanne ISHIMWE | Full Stack & Mobile Developer";

export const metadata: Metadata = {
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL != null &&
    process.env.NEXT_PUBLIC_SITE_URL.length > 0
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : undefined,
  title: {
    default: siteTitle,
    template: `%s · Keanne Ishimwe`,
  },
  description:
    "Portfolio of Keanne Ishimwe — full stack and Flutter developer focused on premium digital products, Convex-backed forms, and performance-first interfaces.",
  keywords: [
    "Keanne Ishimwe",
    "Full Stack Developer",
    "Flutter",
    "Next.js",
    "Convex",
    "Portfolio",
    "Software Engineer",
    "FastAPI",
    "PostgreSQL",
  ],
  openGraph: {
    title: siteTitle,
    description:
      "Modern portfolio showcasing full-stack web, mobile apps, APIs, and AI-forward builds.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "Modern portfolio showcasing full-stack web & mobile craftsmanship.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#04060f" },
    { media: "(prefers-color-scheme: light)", color: "#f4f7ff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-[var(--fg)]">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
