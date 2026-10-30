# AGENTS.md

Instructions for coding agents working on the Software Factory landing page.

## Technology stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript** (strict mode).
- **Tailwind CSS v4** via `@tailwindcss/postcss` — configuration lives in CSS (`app/globals.css` with `@theme inline`), not a JS config file.
- **shadcn/ui** (new-york style, CSS variables) — components live in `components/ui/`, registered in `components.json`.
- **Lucide React** for all iconography. Never use emoji as icons.
- **React Three Fiber + drei + three** for 3D visuals, in `components/three/`.
- **Framer Motion** for animation and scroll reveals.

## Project structure

```
app/                  App Router entry: layout.tsx, page.tsx, globals.css
components/ui/        shadcn/ui primitives (button, badge, card)
components/landing/   Landing page sections (navbar, hero, capabilities, ...)
components/three/     React Three Fiber scenes and their wrappers
lib/utils.ts          cn() helper (clsx + tailwind-merge)
tokens.css            Design tokens — single source of truth (see DESIGN.md)
```

Route segments compose sections from `components/landing/`. Keep sections self-contained: data arrays, variants, and markup in one file.

## Coding standards

- TypeScript everywhere; `strict` is on. No `any` unless unavoidable and justified.
- Server components by default; add `"use client"` only where interactivity, hooks, or browser APIs are required.
- Use path alias `@/*` (maps to repo root) for imports.
- Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build` before considering work complete.

## Design system rules

- **All color, radius, shadow, and motion values come from `tokens.css`** via the semantic Tailwind utilities mapped in `app/globals.css` (`bg-background`, `text-muted-foreground`, `bg-acid-lime`, `text-lavender`, `shadow-panel`, `surface-panel`, ...).
- Do not hardcode hex values in components. Brand hex values appear only in `tokens.css` and inside the Three.js scene (which cannot read CSS variables).
- shadcn/ui semantic tokens (`primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `ring`) are wired to brand colors in `tokens.css`; extend tokens there, never in components.
- Reuse `components/ui` primitives instead of restyling one-off elements.

## Animation and 3D guidelines

- Always call `useReducedMotion()` and disable or minimize motion when the user prefers reduced motion.
- 3D scenes are client-only: load with `next/dynamic` (`ssr: false`) and provide a static SVG/ARIA fallback for no-WebGL environments (see `components/three/hero-visual.tsx`).
- Keep scenes bounded (fixed aspect container, capped `dpr`), decorative content `aria-hidden`, and avoid scenes that block the main thread on low-power devices.
- Use the standard easing token `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out-expo`) for entrances.

## Accessibility, responsiveness, performance

- Semantic HTML (`nav`, `main`, `section`, `footer`, lists); visible `:focus-visible` ring (wired to `--ring`).
- Mobile-first responsive layout; verify at mobile, tablet, and desktop widths.
- Lazy-load expensive client content; avoid layout shift with fixed aspect containers.

## Commands

```sh
npm install        # install dependencies (regenerates package-lock.json)
npm run dev        # development server
npm run lint       # ESLint (flat config, eslint-config-next)
npm run typecheck  # tsc --noEmit
npm test           # node --test
npm run build      # production build
npm start          # serve production build
```
