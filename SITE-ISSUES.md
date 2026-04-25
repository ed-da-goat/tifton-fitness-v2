# Tifton Fitness — Site Issues Backlog

> Orchestrator reads this file at session start. Fixers update status. QA marks CLOSED.
> Format: `### [P0/P1/P2] #N — Title`

---

## Open Issues

### [P1] #1 — OG social image needs real photo + branding

**Status:** PARTIALLY FIXED  
**Description:** `public/og-default.jpg` was a text file. Replaced with resized tifton-017.jpg (dumbbell rack interior, 1200×630). Still no "Tifton Fitness" text overlay — a branded version would perform better on social.  
**Fix:** Open Canva → 1200×630 canvas → drop in gym photo → add "Tifton Fitness" text in white → export JPEG → drop at `public/og-default.jpg`  
**Owner:** Human (requires image editor)

---

### [P1] #2 — CTA "Call" button visibility (needs browser verification)

**Status:** ATTEMPTED FIX — needs QA  
**Description:** In screenshots, the "Call (229) 340-6228" button in the dark "Start tonight" CTA section appeared as an empty white box (invisible text). Changed class from `btn-outline` to `btn-outline-white` and added explicit CSS override in `.final-cta-actions`. Needs browser verification.  
**Fix applied:** `btn-outline-white` + scoped CSS in index.astro line ~727  
**QA:** Open localhost:4321 → scroll to "Start tonight" section → confirm white outlined button with visible text

---

### [P2] #3 — Hero photo quality (tifton-001)

**Status:** OPEN  
**Description:** `tifton-001.jpg` (homepage hero) was flagged as "marginal" quality in HANDOFF.md. Currently the only wide interior shot available.  
**Fix:** If a better high-resolution interior shot (min 2400px wide) becomes available, replace at `src/assets/images/hero/`. Check mobile at 390px width — if acceptable, close this.  
**Owner:** Human (needs new photo or decision to accept current)

---

### [P2] #4 — Cardio zone has no actual cardio equipment photo

**Status:** WORKAROUND APPLIED  
**Description:** No clean cardio equipment photo exists (tifton-005 showed someone's rear). Replaced with tifton-012 (Jordan Roman / TF Method promo graphic). Not ideal — shows a marketing graphic instead of actual cardio equipment.  
**Fix:** Get a clean photo of the cardio row (treadmills, ellipticals, stair climber) and replace `tifton-012` in the cardio slots of both `index.astro` and `gym.astro`  
**Owner:** Human (needs new photo)

---

### [P2] #5 — Analytics not installed

**Status:** OPEN  
**Description:** No tracking code on any page. Can't measure traffic, conversions, or which pages members visit before signing up.  
**Fix:** Choose a provider (Plausible, Fathom, or Google Analytics), add their script tag to `src/layouts/Layout.astro` in the `<head>`.  
**Effort:** 10 minutes  
**Owner:** Human (account creation) + AI (add the tag)

---

### [P2] #6 — Gallery-exterior shows kettlebell action shot, not exterior

**Status:** CLOSED  
**Description:** `gallery-exterior` slot on `/gym` uses tifton-008 which shows a person exercising in the parking lot with the building partially visible — not a proper exterior/signage shot.  
**Fix applied:** `exterior-signage.jpg` (Tifton Fitness sign in foreground, building behind, clear blue sky) copied from Downloads and wired into gym.astro.

---

## Closed Issues

| # | Title | Fixed | Verified |
|---|-------|-------|---------|
| — | Jordan's head cropped in portrait | ✓ objectPosition="top" added | ✓ |
| — | Equipment zones all gray (homepage) | ✓ 4 photos wired | ✓ build clean |
| — | "Call" button invisible on dark bg | ✓ btn-outline → btn-outline-white | needs browser check |
| — | About page awards gray | ✓ tifton-015/016 wired | ✓ build clean |
| — | Gym page gallery all gray (6 slots) | ✓ 6 photos wired | ✓ build clean |
| — | Favicon was Astro default logo | ✓ green TF monogram SVG | ✓ |
| — | No thank-you page after form submit | ✓ /thanks page created | ✓ build clean |
| — | Map embed used fake coordinates | ✓ address-based query URL | needs browser check |
| — | OG image was a text file | ✓ real 1200×630 JPEG | needs social preview test |
| — | Cardio photo showed person's rear | ✓ replaced with tifton-012 | ✓ build clean |

---

## Agent Log

| Date | Agent | Action |
|------|-------|--------|
| 2026-04-25 | Fixer | Wired Jordan portrait, equipment zones, CTA button fix, award photos |
| 2026-04-25 | Fixer | Gym page gallery 6 slots wired, favicon created, /thanks page built |
| 2026-04-25 | Fixer | OG image created (sips resize), cardio photo replaced, map URL fixed |
| 2026-04-25 | Orchestrator | SITE-ISSUES.md and CLAUDE.md created, agent team initialized |
