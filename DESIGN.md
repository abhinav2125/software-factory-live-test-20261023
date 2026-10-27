# DESIGN.md

Visual and interaction design system for the Software Factory landing page.

## Brand positioning

Software Factory is a developer-focused SaaS: it turns product briefs into reviewed, tested software through AI-assisted agents and reusable workflows. The design language is **tactile engineering**: layered, dimensional surfaces (refined skeuomorphism) on a dark purple-ink canvas, suggesting a physical assembly line for software.

Design principles:

1. **Depth with purpose** — elevation communicates hierarchy (raised = interactive/primary, panel = content), never decoration.
2. **Brand color with intent** — lavender is identity, acid lime is action/success, vermilion is sparing emphasis. Never all three at equal weight.
3. **Technical texture** — hairline blueprint grids, mono labels, and task-graph motifs reinforce the factory concept.

## Color palette

| Token | Hex | Role |
| --- | --- | --- |
| `--lavender` | `#CBB3E8` | Brand identity: accents, highlight text, 3D surfaces |
| `--lavender-deep` | `#A67FD4` | Deeper brand surfaces, light-theme accent |
| `--lavender-soft` | `#E4D6F6` | High-contrast lavender text/foregrounds |
| `--acid-lime` | `#D4FF3F` | Primary CTAs, focus ring, success/running states |
| `--acid-lime-deep` | `#A8CC1F` | Light-theme primary (contrast-safe) |
| `--vermilion` | `#E34234` | Destructive, sparing emphasis, 3D accents |
| `--vermilion-soft` | `#F07A6E` | Vermilion text on dark (contrast-safe) |

Neutrals are a purple-ink scale `--ink-950` (#0d0913) through `--ink-50` (#f7f5fb). Dark theme is default; a `.light` theme block exists in `tokens.css`.

Semantic mapping (shadcn/ui): `primary = acid-lime`, `accent = lavender`, `destructive = vermilion`, `ring = acid-lime`, backgrounds from `ink-950/900/850`.

Contrast rules: acid-lime and lavender text only on ink backgrounds; use `*-soft` / `*-deep` variants when the base hue fails contrast.

## Typography

- **Display**: Space Grotesk (`--font-display`) — headlines, brand mark.
- **Body**: Inter (`--font-sans`).
- **Mono**: JetBrains Mono (`--font-mono`) — eyebrows, labels, status text; uppercase with wide tracking.
- Scale: hero `clamp(2.75rem, 6vw, 4.75rem)`, section titles `clamp(2rem, 4vw, 3rem)`, body `1rem`/`1.125rem`.

## Spacing, layout, radii, shadows

- Container: max `80rem`, `1.25rem` inline padding (`2rem` ≥ sm). Section rhythm: `clamp(4.5rem, 10vw, 8rem)` vertical.
- Radii: `sm 0.375rem`, `md 0.75rem`, `lg 1rem`, `xl 1.5rem`.
- Shadows (layered, tactile): `--shadow-panel` (inset top highlight + drop), `--shadow-raised` (deeper, for interactive surfaces), `--shadow-cta` (lime glow under primary buttons), `--shadow-lavender-glow`.
- Borders: 1px `ink-700`; hover states lift borders toward lavender.

## Components

- **Button** (`components/ui/button.tsx`): primary = acid-lime fill with CTA shadow and dark text; secondary = raised ink surface; active state translates 1px down (tactile press).
- **Badge**: pill with translucent brand tint (default lavender, `lime`, `vermilion`, `outline`).
- **Card**: `surface-panel`; hover lifts (`-translate-y-1`), border brightens, shadow deepens to `raised`.
- Capability icons sit in 44px rounded squares tinted with their accent color.

## Iconography and illustration

- Lucide React only, sized `size-4/5/6`, `aria-hidden` when decorative, paired with text labels otherwise. No emoji.

## 3D visual language and motion

- The hero scene (`components/three/factory-scene.tsx`) is a stacked assembly platform: ink base platter, lavender tiers, luminous lime core, and an orbiting ring of modular work units in brand accents — the factory as a physical object.
- Soft studio lighting: neutral key light with shadows, dim lime and vermilion point lights; contact shadows ground the object.
- Pointer parallax tilts the assembly; the orbit ring rotates slowly. All motion stops under `prefers-reduced-motion`.
- Motion principles: entrances fade + rise 20–32px over 0.55–0.9s on `--ease-out-expo`, staggered ≤ 0.12s; scroll reveals trigger once. No gratuitous glow or floating decor.

## Responsive behavior

- Mobile-first. Hero stacks (copy over visual) below `lg`; capabilities grid goes 1 → 2 → 4 columns; how-it-works spine hides below `md`; navigation collapses to an accessible disclosure menu below `md`.

## Accessibility and reduced motion

- Skip link to `#main-content`, semantic landmarks, labelled navs, `aria-expanded`/`aria-controls` on the mobile menu, visible focus rings (`--ring` = acid-lime).
- `prefers-reduced-motion`: scroll reveals disabled, 3D orbit/float paused, smooth scrolling off, spinner animation stopped.
- WebGL is feature-detected; unsupported environments receive a static labeled SVG fallback.
