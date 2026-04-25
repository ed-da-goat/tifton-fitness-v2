# Tifton Fitness v2 — Handoff Documentation

## Running locally

```bash
cd v2/
npm install
npm run dev
```

Opens at `http://localhost:4321` (or next available port).

**Requirements:** Node 22+

---

## Deploying

### Vercel (recommended)

1. Push `v2/` to GitHub (or connect the repo root)
2. In Vercel: New Project → select repo → set **Root Directory** to `v2`
3. Framework: Astro (auto-detected)
4. Deploy — done

### Netlify

1. Push `v2/` to GitHub
2. In Netlify: New Site → select repo → set **Base directory** to `v2`
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy — done

**Environment variables:** None required for the current build.

---

## Swapping image placeholders for real photos

### How placeholders work

Any image slot without a real photo renders as a gray block with a green label describing what should go there. In production builds, the label is hidden — the gray block remains until a real photo is dropped in.

### To swap in a real photo

**Step 1 — Add the file**

Drop the image into the appropriate subfolder:
```
v2/src/assets/images/
  hero/        ← homepage hero (needs high-res, min 2400px wide)
  gym/         ← equipment zone photos, gallery
  staff/       ← Jordan Roman portrait
  exterior/    ← outside the building
  equipment/   ← individual equipment shots
```

Name the file something descriptive: `jordan-roman-portrait.jpg`, `free-weights-floor.jpg`, etc.

**Step 2 — Import it in the page/component**

Open the relevant `.astro` file and add an import at the top:
```astro
---
import jordanPhoto from '../assets/images/staff/jordan-roman-portrait.jpg';
---
```

**Step 3 — Pass it to the component**

Find the `<ImagePlaceholder>` call with the matching `slot` name and add `src`:
```astro
<ImagePlaceholder
  slot="staff-jordan-portrait"
  description="Jordan Roman portrait"
  aspectRatio="1/1"
  src={jordanPhoto}
  alt="Jordan Roman — Head Coach at Tifton Fitness"
/>
```

Astro will automatically optimize the image to WebP and generate responsive sizes.

### Photo requirements by slot

See `src/content/image-slots.json` for the full registry. Priority slots:

| Slot | Page | Min resolution | Notes |
|------|------|----------------|-------|
| `hero-main` | Homepage | 2400px wide | Current: tifton-001.jpg (marginal) |
| `staff-jordan-portrait` | Homepage, About | 800×800 | Get permission for tifton-014.jpg |
| `gallery-main` | Gym | 2400px wide | Landscape, interior wide shot |
| `gym-free-weights` | Homepage | 1200×900 | Dumbbell rack area |
| `gym-cardio` | Homepage | 1200×900 | Cardio row |

---

## Editing copy

### Pages and what they map to

| Page | File | What's there |
|------|------|--------------|
| Homepage | `src/pages/index.astro` | Hero headline/subhead, section headings, review quotes |
| Membership | `src/pages/membership.astro` | Page headline, "Included with every plan" list, FAQ category |
| The Gym | `src/pages/gym.astro` | Equipment list (hardcoded in page), amenities, etiquette |
| About | `src/pages/about.astro` | Origin story placeholder, staff section |
| Contact | `src/pages/contact.astro` | Page headline, visit steps, Formspree endpoint |

### Editing a page headline

Open the page file, find the `<h1>` tag in the `<!-- PAGE HEADER -->` section, and edit the text directly.

### Editing the hero on the homepage

In `src/pages/index.astro`, find the `<!-- HERO -->` section:
```astro
<h1 class="hero-headline">
  No contract.<br />No closing time.
</h1>
<p class="hero-sub">
  24/7 key card access, full equipment, month-to-month billing.
  Starting at $25.
</p>
```

---

## Editing hours, prices, staff

These are in content collections — edit the JSON files.

### Membership prices (`src/content/membership/`)

To change the Individual price from $25 to $30:
```
open src/content/membership/individual.json
```
Change `"price": 25` to `"price": 30`.

Files: `individual.json`, `couple.json`, `family.json`

Fields: `name`, `price`, `period`, `tagline`, `features[]`, `cta`, `featured`

### Staff (`src/content/staff/`)

To add a new staff member, create `src/content/staff/their-name.json`:
```json
{
  "name": "First Last",
  "role": "Their Role",
  "credentials": ["Credential 1", "Credential 2"],
  "bio": "One to two sentences about them."
}
```

To edit Jordan Roman's bio or credentials: `src/content/staff/jordan-roman.json`

### FAQ (`src/content/faq/`)

Each FAQ item is its own `.json` file. To edit an answer, open the relevant file:
```
src/content/faq/04-contract.json
src/content/faq/07-freeze.json
```
Change the `answer` field.

To add a new FAQ item, create `src/content/faq/15-new-question.json` following the same format. The `order` field controls display order.

---

## Connecting the contact form

The form currently uses a placeholder Formspree endpoint. To make it live:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form → get your form ID (looks like `xyzabcde`)
3. Open `src/pages/contact.astro`
4. Find: `action="https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID"`
5. Replace `REPLACE_WITH_YOUR_FORMSPREE_ID` with your actual form ID

Formspree free tier handles 50 submissions/month. For more volume, Netlify Forms is included free with Netlify hosting — replace the action with `action="/contact" method="POST"` and add `data-netlify="true"` to the form.

---

## Adding the OG image

The `public/og-default.jpg` placeholder needs to be replaced with a real 1200×630px image for social sharing previews. Options:
- A photo of the gym interior with "Tifton Fitness" text overlay
- The gym logo on a green background
- Any 1200×630 image that represents the gym

Drop the file at `public/og-default.jpg` (same name, just replace the file).

---

## Site URL

The site URL is set in `astro.config.mjs`:
```js
site: 'https://tiftonfitness.com',
```

Update this if the domain is different. This affects the sitemap and canonical URLs.

---

## Tech stack summary

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Astro 6 | Static output, zero JS by default, fast |
| Styles | Tailwind v4 (CSS-first) | No config file, modern `@theme` syntax |
| Fonts | Google Fonts (Fraunces + Inter Tight) | Variable fonts, loaded via `<link>` |
| Images | Astro `<Image>` component | Auto WebP conversion, responsive srcset |
| Content | Astro Content Layer (JSON) | Edit prices/staff/FAQ without touching page code |
| Forms | Formspree | Zero backend, simple swap to Netlify Forms |
| Deploy | Vercel or Netlify | Both configs included |
| Sitemap | `@astrojs/sitemap` | Auto-generated at build time |
