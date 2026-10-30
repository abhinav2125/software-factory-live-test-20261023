# Software Factory — Landing Page

A production-quality Next.js landing page presenting the **Software Factory**: an AI-assisted delivery platform that turns product briefs into reviewed, tested software through reusable workflows and agent orchestration.

## Technology stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (`@tailwindcss/postcss`, CSS-first config) + **shadcn/ui** (new-york)
- **Lucide React** icons, **Framer Motion** animation
- **React Three Fiber + drei + three** hero scene with WebGL detection and SVG fallback

## Getting started

```sh
npm install        # install dependencies (regenerates package-lock.json)
npm run dev        # development server at http://localhost:3000
```

## Verification

```sh
npm run lint       # ESLint (flat config)
npm run typecheck  # tsc --noEmit
npm test           # node --test
npm run build      # production build and HTTP route/navigation checks
npm run verify:routes # repeat route checks against an existing production build
npm start          # serve the production build
```

## Project structure

```
app/                  layout, page, globals.css (Tailwind @theme mappings)
app/about/            About Us route; shared navigation/footer live in the layout
components/ui/        shadcn/ui primitives (button, badge, card)
components/landing/   page sections: navbar, hero, capabilities, how-it-works,
                      product-preview, final-cta, footer
components/three/     R3F factory scene + WebGL wrapper/fallback
lib/utils.ts          cn() helper
tokens.css            design tokens (brand colors, neutrals, semantic, motion)
public/fonts/         self-hosted brand fonts and their SIL Open Font licenses
scripts/verify-routes.mts # production HTTP regression checks for both routes
AGENTS.md             conventions for coding agents
DESIGN.md             design system documentation
```

## Design system

Brand colors — Lavender `#CBB3E8`, Acid Lime `#D4FF3F`, Vermilion `#E34234` — are defined once in `tokens.css` and mapped to Tailwind/shadcn semantic utilities in `app/globals.css`. See [DESIGN.md](DESIGN.md) for the full system.

The Home and About Us links are available in the shared desktop and mobile navigation. Product section links return to the landing page from either route. Inter, Space Grotesk, and JetBrains Mono are bundled locally so production builds do not need a font download service.

The route check starts a temporary production server, checks the full landing page, About content, navigation destinations, direct refresh, and hydration assets, then stops the server. It replaces the standalone scaffold's component mocks with checks against the integrated application.

## Known limitations

- The product preview is an **illustrative demo** (labeled in the UI); live orchestration requires a future hosted backend.
- CTA buttons ("Start building", "Sign in", "Watch the workflow") are placeholders pending real destinations; footer resource links are `#` placeholders.
- Visual/browser testing (screenshots, real-pointer interaction) was not performed in this environment; behavior was verified via lint, typecheck, unit tests, and a production build.
