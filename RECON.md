# Tifton Fitness — Site Reconnaissance
**Phase 1 | April 2026**

---

## Current Stack

- **Framework:** None. Pure static HTML + CSS, zero dependencies.
- **Build tool:** None.
- **CSS:** Single `styles.css` file, ~1200 lines, hand-authored CSS custom properties.
- **Fonts:** Google Fonts CDN — Inter (400–900 weight) only.
- **Images:** None. No images exist anywhere on the current site. Every "visual" section is pure text and card layouts.
- **JavaScript:** Not observed — no JS files, no interactivity, no forms connected to anything.
- **Forms:** Contact form has `method="post"` and `action="#"` — it submits nowhere. Non-functional.
- **Analytics:** Not observed.
- **Maps:** Google Maps embed iframes (no API key, public embed URLs).
- **Hosting:** Unknown — site is running locally via Python HTTP server.

---

## Page Inventory

| URL | Title | Sections |
|-----|-------|----------|
| `/index.html` | Tifton Fitness - Your 24/7 Gym in Tifton, GA | Hero, Trust bar, Why Tifton Fitness (highlight cards), Getting Started (3 steps), Member reviews (2), CTA |
| `/memberships.html` | Memberships | Hero, 3 pricing tier cards, Included with every plan (6 items), FAQ (5 questions) |
| `/equipment.html` | Equipment | Hero, 4 equipment zones (Cardio, Free Weights, Machines, Functional), Gym Etiquette (4 items), CTA |
| `/coaching.html` | Coaching | Hero, 4 coaching feature cards, Who Coaching Is For (4 audience cards), How to Get Started (3 steps), CTA |
| `/reviews.html` | Reviews | Hero (4.8 avg rating badge), 6 member reviews in masonry grid, CTA |
| `/faq.html` | FAQs | Hero, 3 FAQ categories: General (3 Q), Memberships & Billing (5 Q), Facility & Equipment (3 Q), Safety & Security (3 Q), CTA |
| `/contact.html` | Contact | Hero, Contact form (name, phone, email, topic dropdown, message), Contact details, Visit steps (4), Map embed |
| `/blog.html` | Fitness Blog | Hero, 9 blog post cards with tags/dates, CTA |
| `/blog/beginner-gym-guide.html` | Beginner's Guide | 8-section long-form article |
| `/blog/muscle-building-basics.html` | Muscle Building 101 | 8-section long-form article |
| `/blog/24-7-gym-benefits.html` | 24/7 Gym Benefits | 7-section article |
| `/blog/nutrition-without-dieting.html` | Eat Better Without Dieting | 8-section article |
| `/blog/cardio-vs-weights.html` | Cardio vs. Weights | 7-section article |
| `/blog/weight-loss-sustainable.html` | Sustainable Weight Loss | 7-section article |

**Pages in nav not in Phase 2 plan:** Reviews, Blog, Coaching
**Pages in Phase 2 plan not in current site:** `/gym` (currently split between equipment.html + implied amenities)

---

## Copy Inventory

### Real, verified business information

```
Business name:   Tifton Fitness
Phone:           (229) 340-6228
Address:         130 Hunt Rd B7, Tifton, GA 31793
Location note:   Off Hunt Rd near the Hobby Lobby area
Hours:           24/7, 365 days a year
```

### Pricing (on-site, exact)

```
Individual:  $25/month
Couple:      $40/month  (labeled "Most Popular")
Family:      $55/month  (up to 4 people; +$10/ea for additional)
```

### Key value propositions (verbatim from site)

- "Budget-friendly fitness with no contracts, no pressure — just results."
- "No initiation fees, no annual charges, no hidden costs."
- "We earn your membership every month."
- "Your schedule, your rules."
- "We cut out the extras and pass the savings to you."
- "The price you see is the price you pay."

### Section headlines (verbatim)

**Home:**
- "Your 24/7 Gym in Tifton, GA"
- "Why Tifton Fitness?"
- "Getting Started is Easy"
- "What Members Are Saying"
- "Ready to Start Your Fitness Journey?"

**Memberships:**
- "Find Your Perfect Plan"
- "Included With Every Plan"
- "Membership Questions"

**Equipment:**
- "Built for Real Workouts"
- "No gimmicks. Just solid, reliable equipment that gets the job done — maintained daily so it's ready when you are."
- "Gym Etiquette"

**Coaching:**
- "Level Up With Personal Coaching"
- "What Coaching Includes"
- "Who Is Coaching For?"
- "How to Get Started"

**Contact:**
- "Get In Touch"
- "Your First Visit"

**FAQ:**
- "Questions? We've Got Answers"

### CTAs (verbatim, all instances)

- "View Memberships"
- "Get In Touch"
- "See Plans & Pricing"
- "Read All Reviews"
- "Schedule a Tour"
- "Contact Us About Coaching"
- "Call (229) 340-6228"
- "Get Started" (on each pricing card — generic)
- "Send Message" (contact form submit)

### Equipment inventory (exact, from equipment.html)

**Cardio Zone:** Treadmills with incline, Elliptical trainers, Upright & recumbent bikes, Stair climber, Rowing machine

**Free Weights:** Dumbbells (5–100 lbs), Olympic barbells & plates, EZ curl bars, Kettlebells, Flat/incline/decline benches

**Machines:** Smith machine, Lat pulldown / low row, Leg press & leg curl, Cable crossover system, Chest press & shoulder press

**Functional & Flexibility:** Pull-up & dip station, Resistance bands (various), Medicine balls & slam balls, Ab rollers & mats, Dedicated stretching area

### Reviews (verbatim — 6 total on reviews.html)

> "Great gym with everything I need. Clean, well-maintained, and open whenever I want to work out. I've been to bigger gyms in Valdosta and Albany, but this place has everything I actually use without the crazy price tag." — James T., member since 2024

> "Finally, a budget-friendly gym in Tifton that's open when I need it. Night shift nurse here — this place is perfect for late night workouts." — Lisa R., member since 2025

> "Simple, no-frills, and it works. I don't need fancy classes or a sauna, just good equipment and 24/7 access. Tifton Fitness delivers." — Mike D., member since 2024

> "Love this gym! Staff is friendly, the facility is clean, and I can work out whenever my schedule allows. My husband and I got the couple's plan and it saves us a ton compared to our old gym." — Jennifer L., member since 2025

> "I'm retired and on a fixed income. This gym lets me stay active without worrying about the cost. The key card is super convenient." — Robert H., member since 2024

> "My teenage son and I train here together on the family plan. Great father-son time and the equipment is more than enough for both of us." — Marcus W., member since 2025

### FAQ content (kept verbatim — solid, usable)

All 14 FAQ answers are real, specific, and accurate to the business. Worth preserving nearly word-for-word.

---

## Visual Inventory

### Color palette (current)

| Variable | Value | Role |
|----------|-------|------|
| `--bg` | `#0a0f1c` | Page background |
| `--bg-alt` | `#111827` | Alternate background |
| `--surface` | `#1a2236` | Cards |
| `--surface-hover` | `#1f2b42` | Card hover |
| `--border` | `#2a3550` | Borders |
| `--text` | `#e2e8f0` | Body text |
| `--text-muted` | `#94a3b8` | Secondary text |
| `--accent` | `#3b82f6` | Primary accent (Tailwind blue-500) |
| `--accent-light` | `#60a5fa` | Hover accent |
| `--accent-dark` | `#2563eb` | Active accent |
| `--gold` | `#fbbf24` | Star ratings |

**Assessment:** Dark navy + Tailwind default blue. This is the exact color scheme generated by every AI for every gym website. It has zero local identity for Tifton, GA.

### Typography (current)

- **Headline and body:** Inter (single font), Google Fonts CDN
- **Weights used:** 400 through 900
- **Scale:** Uses `clamp()` for fluid responsive sizing
- **Line height:** Not consistently set; mix of default browser and explicit values

**Assessment:** Inter is fine for body text but gives zero personality to headlines. No serif. No typographic hierarchy beyond weight.

### Layout (current)

- CSS Grid for all page grids (pricing, equipment zones, blog cards, reviews)
- Flexbox for nav and buttons
- Single responsive breakpoint at 768px
- Container max-width: 1100px (main), 760px (prose)
- Radial gradients in hero sections (every hero looks identical)

### Images (current)

**None.** The entire site has zero images, zero placeholder image slots, zero photo references. All visual interest comes from colored cards on dark backgrounds.

---

## What is Working (Worth Keeping)

1. **Pricing clarity.** All three tiers and prices are visible on the memberships page. No "call for pricing." Keep this.

2. **Real contact info.** Phone, address, and "near Hobby Lobby" context are accurate and prominent. Keep this.

3. **The no-contract message.** Repeated consistently across multiple pages. This is clearly a real differentiator. Keep and strengthen.

4. **Equipment inventory.** Specific and honest — "dumbbells 5–100 lbs," names every piece of equipment. Keep this verbatim.

5. **FAQ content.** 14 questions with direct, non-evasive answers. Good stuff. Migrate to content collection.

6. **The membership "Included with every plan" section.** Six concrete benefits, no fluff icons, real statements. Mostly keeps.

7. **The `<details>` FAQ pattern.** Accessible, no-JS accordion. Smart choice — replicate with Astro.

8. **Gym etiquette section.** Specific and practical. Actual local gym would post this. Keep it.

9. **"Free orientation session" and "freeze your membership" details.** Differentiating specifics. Keep.

---

## What is AI Slop or Weak (Must Be Replaced)

### Design / Visual

1. **Dark navy + Tailwind default blue.** `#0a0f1c` + `#3b82f6` is the default output of every AI web generator. Has zero identity. Completely wrong for a small-town South Georgia gym. Replace entirely.

2. **No images anywhere.** The entire site is a wall of text on dark backgrounds. Every section that should have a photo has a colored card instead. Critical gap.

3. **Rainbow blog tags.** Purple, green, amber, rose, teal, indigo tags on blog cards. Six colors for nine posts. Chaotic and meaningless.

4. **Identical radial-gradient hero on every page.** Same `radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15)…)` on every single page. Lazy and repetitive.

### Copy / Content

5. **"Why Tifton Fitness?" heading.** Classic "Why Choose Us" section. Standard AI boilerplate. Replace with something specific.

6. **"Getting Started is Easy" 3-step section.** "Contact Us → Quick Tour → Choose Membership." Generic filler found on every gym site. The steps contain zero specific information.

7. **Trust bar.** "Open 24/7 | Tifton, GA | Local Community Gym | Secure Access" — four generic phrases that say nothing. Replace or remove.

8. **"Ready to Start Your Fitness Journey?" CTA section.** Most overused gym CTA phrase in existence. Every gym AI-generates this. Replace with something place-specific.

9. **Generic CTAs.** "Get Started" on every pricing card. No specificity. Replace with action-specific CTAs ("Start Your Membership," "Tour the Gym," "Get a 7-Day Pass").

10. **The entire coaching page.** No actual coach is named. No credentials. No rates. The page describes "a coach" as a phantom entity. Either name a real coach or remove this page.

11. **Blog (all 6 articles).** Completely generic fitness content — "The Complete Beginner's Guide to Starting at the Gym," "Cardio vs. Weights," "Eat Better Without Going on a Diet." These could have been written by any AI about any gym anywhere. No local voice, no Tifton references beyond one throwaway mention per article. The canonical URLs claim `tiftonfitness.com` as if this is already live. **Do not migrate the blog to v2.** It adds SEO noise and zero local value.

12. **Reviews attribution uncertainty.** James T., Lisa R., Mike D., Jennifer L., Robert H., Marcus W. — plausible names, but zero verification. Use these in v2 only if the owner confirms they are real members. If fake, remove.

13. **"4.8 Average Rating" hero badge on reviews page.** No source cited. No Google review link. No Yelp link. Either link to real reviews or remove the number.

14. **Coaching page audience cards.** "Beginners / Weight Loss Goals / Experienced Lifters / Athletes & Sport-Specific" — four perfectly balanced generic categories. This is the AI default segmentation. Replace with real info about who actually coaches there, or cut the page.

### Structural

15. **Contact form submits nowhere.** `action="#"` on a `POST` form. Replace with Formspree endpoint.

16. **No favicon.** No OG tags. No structured data. No sitemap. No robots.txt. All missing.

17. **Single responsive breakpoint.** Only `@media (max-width: 768px)`. No 1440px+ handling. Content strains at wide viewports.

18. **No staff page / About page.** Nothing about who owns or runs the gym. A local gym lives or dies on community trust. The absence of owner identity is a notable gap.

---

## Owner-Confirmed Answers

1. **Coach is real.** Jordan Roman — B.S. Exercise Science, Action-CPT, 3× NCAA Conference Champion, National Classic Physique Competitor. Use this verbatim on the About/Coaching page. Photo placeholder needed.

2. **AI-generated reviews on current site are fake.** Do not migrate them. Use the three real Google Reviews below instead.

3. **Real Google Reviews (confirmed, use verbatim):**

   > ★★★★★ — Vanessa Martinez
   > "This is by the BEST place to come and get fit! The owners are super awesome and the trainers are awesome and really care about making you a better you! HIGHLY RECOMMEND!! The classes here are the ones you need to get you ready for summer"
   > *(3 months ago — includes 4 photos)*

   > ★★★★★ — Austin Ball
   > "I cant say enough good about Tifton Fitness. The staff is kind and helpful. The owners are terrific and they have great equipment. The gym is always clean and tidy. Training sessions are intense in the best possible way. All in all a wonderful atmosphere that feels welcoming and homey."
   > *(3 months ago)*

   > ★★★★★ — Stephon Sykes
   > "Great place to work out! Very clean, 24 hour access, the staff is friendly and knowledgeable. Shout out to Jordan!"
   > *(2 months ago)*

   **Note:** Vanessa's review mentions "classes" — follow up with owner on whether group classes exist or if she means training sessions.

4. **Accent color:** Forest green (`#1F5F3F`) confirmed.

5. **Images:** 17 real photos in `../tifton-fitness-photos/`. See Photo Inventory section below. Cover photo (001) is 2048×1511 — usable for hero. Others are 414×414 Facebook thumbnails — usable for gallery, not hero. Ask owner for originals.

6. **Origin story:** Not available yet — use placeholder copy on About page.

7. **Day passes:** Not confirmed yet — omit from FAQ, do not speculate.

---

## Photo Inventory (`../tifton-fitness-photos/`)

Source: Tifton Fitness Facebook page. Captured 2026-04-25.

> **Warning:** 16 of 17 images are 414×414 Facebook grid thumbnails. Only `tifton-001.jpg` is full resolution (2048×1511). Get originals from owner before using as hero/banner images.

| File | Dims | Use? | Notes |
|------|------|------|-------|
| `tifton-001.jpg` | 2048×1511 | **Hero candidate** | Cover photo. Verify visually — likely branded banner. |
| `tifton-002.jpg` | 414×414 | Skip (web) | "April New Members" list graphic — community/social use only |
| `tifton-003.jpg` | 414×414 | Skip (web) | Birthday week graphic |
| `tifton-004.jpg` | 414×414 | Verify | No description — check before use |
| `tifton-005.jpg` | 414×414 | Verify | Text graphic — content unknown |
| `tifton-006.jpg` | 414×414 | **Keep** | Branded promo with contact info — confirms address/phone |
| `tifton-007–009.jpg` | 414×414 | Verify | No description — check before use |
| `tifton-010.jpg` | 414×414 | **Key asset** | Group training schedule — FORGE Functional Strength, HIIT (Mon 12pm & 6pm, Tues, etc.). **Confirms classes are real.** |
| `tifton-011.jpg` | 414×414 | Skip | Beach/ocean — unrelated |
| `tifton-012.jpg` | 414×414 | **Homepage** | "Best of Tifton 2026" award promo — strong social proof |
| `tifton-013.jpg` | 414×414 | Verify | Hand-drawn text — content unknown |
| `tifton-014.jpg` | 414×414 | **With permission** | Person smiling — possible trainer/client photo. Get consent before using. |
| `tifton-015.jpg` | 414×414 | **About/Coaching page** | "GET COACHED TODAY! 1-ON-1 COACHING / GROUP CLASSES / SEMI-PRIVATE SESSIONS — BEST OF 2026 BEST PERSONAL TRAINER: JORDAN ROMAN" — use verbatim credential |
| `tifton-016.jpg` | 414×414 | **Homepage** | Tifton Gazette "Best Fitness Center 2026" award — primary social proof asset |
| `tifton-017.jpg` | 414×414 | Verify | Activewear graphic — content unknown |

### Critical reveals from photo manifest

1. **Group classes ARE real** — Photo 010 shows a full weekly group training schedule (FORGE Functional Strength, HIIT). Vanessa Martinez's review mentioning "classes" is accurate. The current website's FAQ saying "we don't offer group classes" is **wrong** — must be corrected in v2.

2. **Jordan Roman: "Best Personal Trainer 2026"** per Tifton Gazette (photo 015). Add this credential to About and Coaching pages.

3. **"Best Fitness Center 2026"** per Tifton Gazette (photo 016). Add to homepage hero or social proof section.

4. **Services confirmed:** 1-on-1 coaching, group classes, semi-private sessions (photo 015).

### Photo copy tasks for owner

- [ ] Confirm what `tifton-001.jpg` (cover photo) shows
- [ ] Identify person in `tifton-014.jpg` and confirm consent for web use
- [ ] Provide original-resolution files for any photo used above the fold
- [ ] Provide group class schedule (days/times) to replace the schedule graphic with real text

---

## Summary Assessment

The current site has **good bones** — real pricing, real contact info, real equipment inventory, and a clear no-contract value prop. The copy in the memberships and FAQ sections is honest and specific.

The **visual layer is entirely wrong**: dark tech-startup aesthetic on a gym serving night-shift nurses, retired folks, and father-son gym-goers in a South Georgia college town. There are zero images. The design has no local identity.

The **structural gaps** are significant: no About page, no real coach identity, a non-functional contact form, no analytics, no OG meta, and a blog that reads like generic SEO content.

**v2 should preserve:** pricing, contact info, equipment list, FAQ copy, the no-contract messaging, and the core value props.

**v2 should replace:** everything visual, the color scheme, the typography, the hero sections, the coaching page (unless real coach info is provided), all generic CTAs, and the blog.
