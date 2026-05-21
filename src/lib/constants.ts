/** Site copy and structured content — update with your links and screenshots. */

export const SITE = {
  name: "Keanne ISHIMWE",
  role: "Full Stack & Mobile App Developer",
  tagline:
    "I architect thoughtful web and mobile products—fast, scalable, and beautifully crafted.",
  email: "hello@example.com",
  location: "Open to remote opportunities",
  bio: `I’m a passionate software and mobile developer focused on building innovative, user‑friendly digital solutions. I love turning ambiguity into resilient systems—with clean architecture, solid APIs, and interfaces that feel effortless.

My work spans polished frontends on React & Next.js, pragmatic backends with Node / FastAPI / PostgreSQL, and cross‑platform Flutter apps. I'm especially drawn to AI‑assisted workflows, scalable product engineering, and the craft of making complex systems feel calm at the edges.`,
  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
} as const;

export type ProjectCategory =
  | "Web Apps"
  | "Mobile Apps"
  | "AI Projects"
  | "Full Stack";

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live?: string;
  category: ProjectCategory;
};

/** Placeholders — swap images for your screenshots and URLs for repos and demos */
export const PROJECTS: ProjectItem[] = [
  {
    title: "Nimbus Analytics",
    description:
      "Real‑time product analytics dashboards with granular roles, streaming ingestion, and a glassmorphism UI tuned for SaaS founders.",
    tech: ["Next.js", "Convex", "Tailwind CSS", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    github: SITE.social.github,
    live: SITE.social.twitter,
    category: "Web Apps",
  },
  {
    title: "NovaWallet Mobile",
    description:
      "Cross‑platform fintech companion with biometric auth, transactional animations, and a pixel‑precise Flutter design system.",
    tech: ["Flutter", "REST API", "PostgreSQL", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    github: SITE.social.github,
    live: SITE.social.twitter,
    category: "Mobile Apps",
  },
  {
    title: "Helix Assist",
    description:
      "LLM‑orchestrated workflow copilot wired into custom tools—with streaming responses, embeddings, and human‑readable audit trails.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    github: SITE.social.github,
    category: "AI Projects",
  },
  {
    title: "Orbit Logistics",
    description:
      "End‑to‑end operations console: inventory projections, SLA tracking, integrations with Stripe & SendGrid—all on a blazing Next.js frontend.",
    tech: ["Next.js", "Node.js", "Express", "PostgreSQL", "SQLAlchemy"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    github: SITE.social.github,
    live: SITE.social.twitter,
    category: "Full Stack",
  },
];

export const SKILLS: { name: string; level: number; hint?: string }[] = [
  { name: "React.js", level: 92 },
  { name: "Next.js", level: 93 },
  { name: "Node.js", level: 90 },
  { name: "Express", level: 87 },
  { name: "Flutter", level: 91 },
  { name: "JavaScript / TypeScript", level: 92 },
  { name: "Python", level: 88 },
  { name: "FastAPI", level: 86 },
  { name: "REST APIs", level: 94 },
  { name: "PostgreSQL", level: 88 },
  { name: "SQLAlchemy", level: 84 },
  { name: "Tailwind CSS", level: 95 },
];

export const EXPERIENCE = [
  {
    period: "2024 — Present",
    title: "Full Stack Engineer",
    company: "Forward‑thinking product studio",
    detail:
      "Shipping modern web dashboards, API platforms, and design systems optimized for storytelling and conversions.",
    tags: ["Next.js", "Convex", "System design"],
  },
  {
    period: "2022 — 2024",
    title: "Mobile & API Developer",
    company: "Product‑led startup",
    detail:
      "Built Flutter releases with offline‑first UX, hardened REST contracts, and monitoring that kept releases calm.",
    tags: ["Flutter", "PostgreSQL", "Telemetry"],
  },
  {
    period: "2020 — 2022",
    title: "Software Developer",
    company: "Agency & indie projects",
    detail:
      "Delivered expressive marketing sites with motion design, integrations, and content workflows that marketers could own.",
    tags: ["React", "Animations", "CI/CD"],
  },
];

export const SERVICES = [
  {
    title: "Full Stack Web Development",
    description:
      "Composable Next.js architectures, SSR/ISR when it matters, and APIs that behave predictably at scale.",
  },
  {
    title: "Mobile App Development",
    description:
      "Flutter craftsmanship with obsessive attention to performance, accessibility gestures, and store readiness.",
  },
  {
    title: "API Development",
    description:
      "Thoughtful versioning, schemas, caching, observability—from Express to FastAPI and everything between.",
  },
  {
    title: "UI/UX Development",
    description:
      "Micro‑interaction design tokens, cinematic motion choreography, and systems that survive real content.",
  },
  {
    title: "Backend Systems",
    description:
      "Relational modeling in PostgreSQL/SQLAlchemy, migrations discipline, background jobs without mystery.",
  },
  {
    title: "AI Integration",
    description:
      "Pragmatic integrations—streaming chat, tooling, embeddings—anchored by safety, tests, and cost awareness.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Keanne turned an abstract brief into something investors asked us to demo twice. Rare mix of polish and pragmatism.",
    name: "Amina K.",
    role: "Cofounder · Fintech venture",
  },
  {
    quote:
      "Our mobile release felt cinematic without sacrificing deadlines. Outstanding communication and relentless craft.",
    name: "Diego V.",
    role: "Head of Product · SaaS startup",
  },
  {
    quote:
      "The backend work was immaculate—tracing, schemas, rollout plans. We leaned on Keanne across the entire stack.",
    name: "Lena M.",
    role: "Tech Lead · Health platform",
  },
];

export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const HERO_TECH_ICONS = [
  "React",
  "Next.js",
  "Flutter",
  "FastAPI",
  "PostgreSQL",
  "Convex",
];
