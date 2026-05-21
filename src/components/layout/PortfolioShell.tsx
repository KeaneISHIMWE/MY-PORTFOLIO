"use client";

import { AmbientGrid } from "@/components/effects/AmbientGrid";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { LoadingOverlay } from "@/components/effects/LoadingOverlay";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { NAV_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useState } from "react";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function PortfolioShell() {
  const [splash, setSplash] = useState(true);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const ms = reduceMotion ? 0 : 1950;
    const t = window.setTimeout(() => setSplash(false), ms);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingOverlay visible={splash} />
      <ScrollProgress />
      <CursorGlow />
      <AmbientGrid />
      <Navbar activeId={activeId} />
      <main className="relative z-[26] mx-auto flex w-full max-w-[120rem] flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
