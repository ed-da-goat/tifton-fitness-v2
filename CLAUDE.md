# Tifton Fitness v2 — Agent Orchestration

## Project

Astro 6 + Tailwind v4 static site for Tifton Fitness gym in Tifton, GA.
Dev: `npm run dev` → localhost:4321
Build: `npm run build` → dist/

## Agent Team

### Roles

| Agent | Role | When to spawn |
|-------|------|---------------|
| **Orchestrator** | Reads SITE-ISSUES.md, plans fixes, dispatches workers, records outcomes | Start of every session |
| **Auditor** | Scans all pages for visual bugs, placeholder remnants, broken elements | After any deploy or on-demand |
| **Fixer** | Executes a single specific fix from the issue backlog | One fixer per issue |
| **QA** | Verifies a fix is correct before marking it closed | After every Fixer run |

### Orchestrator Loop (run at session start)

```
1. Read SITE-ISSUES.md
2. Triage open issues by severity (P0/P1/P2)
3. For each P0 issue: spawn Fixer → spawn QA → update issue status
4. For P1/P2: queue in SITE-ISSUES.md with estimated effort
5. After all fixes: spawn Auditor to scan for new issues
6. Write findings back to SITE-ISSUES.md
```

### Auditor Checklist

Run this on every page (/, /gym, /membership, /about, /contact, /thanks):

- [ ] No `<div class="image-placeholder">` visible (gray boxes)
- [ ] All buttons visible on their backgrounds (check dark sections)
- [ ] All navigation links resolve (no 404s)
- [ ] Contact form has action="/thanks" and data-netlify="true"
- [ ] OG image is a real JPEG (not the text placeholder)
- [ ] Favicon is Tifton Fitness branded (not Astro default)
- [ ] No console errors
- [ ] Mobile layout intact at 390px width
- [ ] `npm run build` exits clean

### Fixer Rules

- One issue per fixer run
- Always run `npm run build` before marking done
- Write the fix summary to SITE-ISSUES.md

### QA Rules

- Read the issue description, read the fix, verify it addresses the root cause
- Open the affected page in browser if possible
- Only mark CLOSED if you're confident it's resolved

---

## SITE-ISSUES.md

All known issues are tracked in `/Users/edwardahrens/TiftonFitness/v2/SITE-ISSUES.md`.
Format: see that file.

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 6.1.9 |
| Styles | Tailwind v4 CSS-first (`@theme`, `@utility`) |
| Fonts | Fraunces Variable + Inter Tight Variable (Google Fonts) |
| Images | Astro `<Image>` via `ImagePlaceholder.astro` |
| Content | Astro Content Layer (JSON in `src/content/`) |
| Forms | Netlify Forms (`data-netlify="true"`, action="/thanks") |
| Deploy | Netlify (or Vercel — both configs present) |

## Key files

| File | Purpose |
|------|---------|
| `src/pages/index.astro` | Homepage — hero, equipment zones, coach, CTA |
| `src/pages/gym.astro` | Gym page — gallery, equipment list, FAQ |
| `src/pages/about.astro` | About — awards, Jordan Roman staff card |
| `src/pages/contact.astro` | Contact — form (Netlify), map, visit steps |
| `src/pages/thanks.astro` | Post-form thank-you page |
| `src/components/ImagePlaceholder.astro` | Image with graceful placeholder fallback |
| `src/components/StaffCard.astro` | Staff portrait + bio card |
| `src/components/MapEmbed.astro` | Google Maps iframe |
| `src/styles/global.css` | Design tokens, global styles, button utilities |
| `public/og-default.jpg` | OG social image (1200×630 JPEG) |
| `public/favicon.svg` | Favicon (green TF monogram) |

## Color palette

| Token | Value | Use |
|-------|-------|-----|
| `--color-accent` | `#1F5F3F` | Green — buttons, labels, accents |
| `--color-ink` | `#0A0A0A` | Near-black — dark sections, body text |
| `--color-paper` | `#FAFAF7` | Off-white — light sections, button text on dark |

## Button rules

| Class | Background | Use on |
|-------|-----------|--------|
| `btn-primary` | Green fill | Any background |
| `btn-outline` | Transparent, dark border | Light/white backgrounds only |
| `btn-outline-white` | Transparent, white border | Dark/ink backgrounds only |
