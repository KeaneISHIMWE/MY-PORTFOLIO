# Keanne ISHIMWE — portfolio

Next.js App Router portfolio with Tailwind CSS v4, Framer Motion, and Convex for a production contact inbox.

## Prerequisites

- Node.js 20+
- npm (dependencies are pinned in `package-lock.json`)

## Install

```bash
npm install
```

## Convex (contact form persistence)

Convex stores contact submissions in the `contactMessages` table (`convex/schema.ts`).

1. **Create/link a Convex project** (runs codegen and publishes functions):

   ```bash
   npx convex dev
   ```

2. Convex writes `NEXT_PUBLIC_CONVEX_URL` to `.env.local` (or prints it in the CLI).

3. After schema changes, rerun `npx convex dev`.

> This repo ships a minimal [`convex/_generated`](convex/_generated) bootstrap so `next build` works before Convex is wired up. Run `npx convex dev` to refresh `_generated/` when functions are renamed or added.

## Local development

```bash
npm run dev
```

Convex sync (optional, second terminal):

```bash
npm run convex:dev
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_CONVEX_URL` | Convex HTTPS URL (`https://YOUR-DEPLOYMENT.convex.cloud`) — enables the mutation-powered contact form |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL for Open Graph (`metadataBase`) |

Copy [.env.example](.env.example) to `.env.local`.

## Deploy on Vercel

1. Import the repo in [Vercel](https://vercel.com/).
2. Add `NEXT_PUBLIC_CONVEX_URL` under **Environment Variables**.
3. Run `npx convex deploy --prod` from your Convex project when you ship backend schema/functions.
4. Deploy; `npm run build` runs automatically.

### Icons note

Lucide v1 no longer exposes brand glyphs. GitHub and LinkedIn use [`src/components/icons/BrandIcons.tsx`](src/components/icons/BrandIcons.tsx).

### Content

Portfolio copy, projects, skills, testimonials, and experience snippets live in [`src/lib/constants.ts`](src/lib/constants.ts).
