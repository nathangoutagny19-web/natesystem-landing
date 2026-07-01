# PROMPT — NateSystem · Reviews landing page

Copy everything below into the Claude Code agent for the NateSystem landing project.

---

You are working on the **NateSystem landing site** (`C:\Users\natha\OneDrive\Documents\NateSystem\Landing\`). There is an existing page at [app/reviews/page.tsx](app/reviews/page.tsx) — **rework it** into a high-converting, minimalist landing page for a new NateSystem service called **NateSystem · Reviews**.

You must follow the NateSystem brand rigorously (trigger the `natesystem-brand` skill for the full charte). Short version: dark `#0e0e12` or light `#f5f5f0` background, grid overlay, accent red `#E63946` only, Instrument Serif italic for display, DM Sans for body, JetBrains Mono for labels, border-radius 12px on buttons, 16px on cards, no gold, no pills, no gradients on surfaces, no font-weight ≥ 700.

## 1. Positioning — read this first, it changes everything

**NateSystem · Reviews is an agency, not a SaaS.** We sell a *result* — a measurably better reputation — not a subscription to a dashboard.

The platform exists, and it's core to how we work. But the hero should never say "our software", "our app", "our tool". The platform is the machinery behind the scenes; the deliverable is the outcome:
- Your score goes up.
- Your 1-star reviews get answered within hours, in the reviewer's language, in your voice.
- Your 90-day plan is written for you, prioritised, and executed by us.
- You get a PDF every month that you could hand to an investor.

The screenshots in `./nate-reviews-assets/` *prove* that the machinery is real — they are not the product. Frame them as evidence ("this is what running your reputation looks like behind the scenes"), not as features.

## 2. What the service actually is

A reputation management agency for restaurants, operating for ~30 mid-market restaurants in Budapest (pilot market), referred mainly through a strategic partnership with a local restaurant consultant.

Each month we deliver:
- AI sentiment analysis across every review (Google Maps, TripAdvisor, Facebook, Wolt) — aspect-level scores (food, service, ambiance, price, cleanliness, wait time), keyword extraction, suspicious review detection
- A strategic 90-day action plan grounded in your actual review data + a diagnostic discovery call — not a template
- Response drafting in the reviewer's exact language (HU, EN, DE, FR, IT) in your brand voice, approved by you before it ships
- A branded PDF report (audit quarterly, monthly summary, weekly briefing)
- Alerts when something goes wrong — 3 bad reviews in 48h triggers a crisis response with a draft ready to send

Restaurant owners get a restricted portal to see what's happening. The tooling that powers the work is ours.

**Partner Welcome Pack** — every prospect referred by the partner gets:
1. Free NateSystem digital audit
2. **Free €790 reputation audit** (NateSystem · Reviews) — a branded PDF deliverable, AI-generated, shipped in under 3 business days
3. 5% off the setup fee

## 3. Page objective

Convert a **restaurant owner** (or their marketing lead) into a **qualified booking** for a 20-minute intro call.

Assume:
- Cold traffic from Google / LinkedIn / partner referrals.
- Primarily Hungarian restaurant owners, 35-60, skeptical of generic SaaS, sensitive to cost, allergic to buzzwords.
- They want to see **proof** (screenshots, concrete numbers), not promises.
- Single hero CTA: "Book a free audit" → existing `/book` route in this repo.

## 4. Non-negotiable design principles

- **Agency tone, not platform tone.** Copy leads with *"we"* (the agency), not *"our app"*. Read every heading twice — if it could appear on a SaaS landing, rewrite it.
- **Minimalist.** No decorative fluff. Every element earns its place.
- **Evidence over claims.** Show the product, quote real language an owner uses, cite concrete numbers (e.g. "€790 audit", "~30 restaurants", "3 business days", "5 languages").
- **Dark default.** Match the rest of NateSystem.
- **Typography drives hierarchy.** Big Instrument Serif italic headings. Short sentences. Generous whitespace (100px section gaps desktop).
- **One accent.** Red `#E63946` only. Nothing else chromatic.
- **Grid + noise background** only on the hero and CTA sections — keep middle sections on flat `var(--bg)` for contrast.

## 5. Page structure

Target a **tight single-scroll page**. Eight narrative beats.

### 5.1 — Hero (full viewport)
- Kicker (JetBrains Mono, 11px, uppercase, 3px letter-spacing): `NATESYSTEM · REVIEWS`
- H1 (Instrument Serif italic, `clamp(44px, 6vw, 80px)`): *"We run your restaurant's reputation. You run your restaurant."* — write 3 variants, pick the strongest.
- Subtitle (DM Sans 300, 16-18px, `var(--text-secondary)`, max 600px): 1-2 lines that name the deliverable: *"A Budapest-based agency managing reviews, responses, and reputation for 30 mid-market restaurants. Every month we lift your score, answer your guests, and report to you in a single PDF."*
- Two CTAs side by side:
  - Primary (bg `#E63946`, white text, 12px radius): "Book a free audit"
  - Ghost (transparent, red border): "See what we do"
- Hero visual: **[./01-reputation-score.png](./01-reputation-score.png)** — the Kéfrenkos Overview showing the RepScore 72/100, impact KPIs, critical alert banner, SWOT. Frame flat (no 3D mockup) with a subtle red glow behind it. 1600×1000.
- Social proof line: "~30 restaurants in Budapest · +14 points average reputation lift in 90 days" — JetBrains Mono 11px, muted.

### 5.2 — Problem section
- Kicker: `THE REAL COST OF IGNORING REVIEWS`
- 3 cards, responsive (collapses to 1 col < 768px). Each: number (Instrument Serif italic 56px, red) + headline (18px/500) + 2-line body (13px secondary).
  - **47%** — of Budapest diners check Google reviews before booking
  - **1★ drop** — can cut revenue 5-9% (Harvard Business Review)
  - **40 min** — average time between a 1★ hitting Google and us surfacing it
- Flat `var(--bg)`.

### 5.3 — The deliverable: a 90-day roadmap you execute (not write)
- Kicker: `THE DELIVERABLE`
- H2: *"From 200 reviews to <span class='accent'>8 actions that matter.</span>"*
- Copy (left column, 2 short paragraphs): "We don't send you templates. Every 90 days we read every review you've had, cross-reference them with your 3 closest competitors, and write an action plan prioritised by revenue impact. You tick actions off. We help with the ones that need our hands." Make it clear the *plan* is the deliverable, and the platform is the tracking surface.
- Right: **[./02-action-plan.png](./02-action-plan.png)** — real plan for Kéfrenkos, 1 of 8 actions completed (13% progress), with category badges (SEO & Google Maps, Reviews Growth), priority tags, descriptions.

### 5.4 — What we see that you don't (the AI analysis layer)
- Kicker: `HOW WE READ YOUR REVIEWS`
- H2: *"Every review, scored on six dimensions."*
- Copy: "Food, service, ambiance, price, cleanliness, wait time. Each review is decomposed — not just positive/negative, but *which part* of the experience was weak. After 200 reviews, we know exactly where your reputation leaks."
- Visual: **[./03-aspect-analysis.png](./03-aspect-analysis.png)** — the real Aspect analysis for Kéfrenkos: Ambiance 79%, Food 69%, Service 58%, Price 26%, Wait Time 18%, Cleanliness 5%, with mention counts and keyword extraction.

### 5.5 — How we answer (the SmartReview agent)
- Kicker: `HOW WE RESPOND`
- H2: *"Every guest gets an answer, in their language, in your voice."*
- Two-column: left is copy, right is the screenshot.
- Left: "Your brand voice, your dishes, your regular guests — we train the agent on your restaurant. Every response is drafted by the AI, reviewed by us, approved by you, and shipped. Hungarian, English, German, French, Italian. Never robotic."
- Right: **[./06-responses.png](./06-responses.png)** — the real AI Response Agent config for Kéfrenkos: Brand Voice ("warm but professional, neighborhood bistro, acknowledge specific dishes, sign off with manager's first name"), system prompt, response length selector, auto-generate toggle, language matching toggle, learned examples from approved Hungarian responses, response templates.
- Below the visual, a small one-liner: "Average time from review to approved response: under 4 hours." (mono, 11px, muted)

### 5.6 — The feed, live (the evidence section)
- Kicker: `SEE IT WORK`
- H2: *"One review. Six aspects scored. One response drafted."*
- Full-width visual: **[./05-reviews-ai.png](./05-reviews-ai.png)** — Kéfrenkos reviews page. On screen: a 3-star English review by Chris Robinson for the steakhouse, with inline keyword highlights ("fine, Good, steak, view, pricey, tourist"), aspect badges (Food: neutral, Ambiance: neutral, Price: negative), AI Analysis summary ("A decent but unremarkable steakhouse experience with good food and a nice view, let down by high prices and a lack of distinctiveness"), and the "Generate in Responses →" CTA.
- Caption under (13px secondary): "Live dashboard for a partner restaurant. All 200 reviews, every platform, scored and routed automatically — so our team can spend its hours on what only humans can do."

### 5.7 — The €790 Partner audit (conversion anchor)
**This is the conversion accelerator.** Full-width dark ribbon with `var(--accent-subtle)` background wash.
- Kicker: `PARTNER WELCOME PACK`
- H2 (Instrument Serif italic, 56px): *"Start with a free €790 audit."*
- Body (DM Sans 300, 16px, max 560px): "AI-generated, grounded in your actual reviews, benchmarked against your three closest competitors, with a 90-day roadmap. Delivered as a branded PDF within 3 business days. No commitment. No meeting required to receive it."
- Right: **[./04-audit-pdf.png](./04-audit-pdf.png)** — the real first page of the PDF deliverable for Kéfrenkos: SCRAPAVIS header, REPUTATION AUDIT badge, restaurant name, 72/100 score, 3.5 average rating, 200 reviews analysed, "Prepared by ScrapAvis · Referred by Kis Zoltán" — 1488×2104 portrait. Show at least 560px wide.
- Primary CTA: "Claim your audit"

### 5.8 — Proof by numbers
- 4 stat blocks (Instrument Serif italic numbers, 64px, red accent).
  - **~30** restaurants running
  - **+14 pts** average score lift, 90 days
  - **5 languages** for guest responses
  - **3 days** audit turnaround
- Flat `var(--bg)`, generous gaps.

### 5.9 — How it works
- Kicker: `HOW IT WORKS`
- H2: *"Four steps. No software to learn."*
- Vertical numbered list. Numbers in Instrument Serif italic 72px muted, titles 20px, body 13px secondary.
  1. **Discovery call (20 min)** — we understand your current reputation, pain points, goals
  2. **Free audit** — we import your reviews, run the AI analysis, deliver the PDF in 3 business days
  3. **Setup (2 weeks)** — we monitor every platform, train the response agent on your voice, benchmark your competitors, onboard you into your private portal
  4. **Monthly execution** — we answer, we report, we refine the plan quarterly — you keep running your restaurant

### 5.10 — FAQ (5 questions)
Suggested:
- "Are we locked into a contract?" — Month-to-month. Cancel anytime.
- "Do you work in Hungarian?" — Yes. We also respond in German, English, French, Italian. Our agent matches the reviewer's language automatically.
- "Who owns the data?" — You. Full export anytime, in CSV and PDF.
- "How is the audit free?" — It's a Partner Welcome Pack bonus. A €790 deliverable — we're confident the work speaks for itself.
- "What's your pricing?" — Flat monthly fee after the free audit. Shared on the discovery call so it matches your restaurant's volume.

### 5.11 — Final CTA
Same ribbon treatment as 5.7. One massive serif line:
*"Your reputation is already being written. <span class='accent'>Let us run it.</span>"*
Single primary CTA below: "Book a free audit → /book"

### 5.12 — Footer
Minimal. Left: logo mark + `© NateSystem 2026`. Right: link row (`Privacy`, `Terms`, `Mentions légales`). Theme toggle.

## 6. Assets — real screenshots from production

Every PNG is in this folder: `./nate-reviews-assets/`. **These are real screenshots from the live ScrapAvis platform** (the tooling that powers NateSystem · Reviews), captured on a real partner restaurant ("Kéfrenkos", District IV Budapest, 200 reviews imported, real partner audit). Not mockups, not stylised renderings — actual live data.

Frame them as evidence of the agency's machinery, not as product shots.

| File | What it shows | Use in section |
|---|---|---|
| `01-reputation-score.png` | Overview dashboard: RepScore 72/100, impact KPIs, 72 critical alerts banner, score decomposition (Sentiment 60, Volume 100, Recency 79, Response 1, Spread 100, Quality 84, Rating 72, Trend 100), platform ratings | 5.1 Hero |
| `02-action-plan.png` | Real 90-day plan: "1 of 8 completed · 13%", SEO & GMB done, TripAdvisor TO DO, Respond to 1-2★ IN PROGRESS, QR cards pending, SLA action | 5.3 Deliverable |
| `03-aspect-analysis.png` | Aspect scoring: ranking of Ambiance 79% · Food 69% · Service 58% · Price 26% · Wait Time 18% · Cleanliness 5%, mention counts, per-aspect cards with extracted keywords | 5.4 AI analysis |
| `04-audit-pdf.png` | Cover page of the €790 Partner Audit PDF (real document, rendered via @react-pdf/renderer) | 5.7 Audit anchor |
| `05-reviews-ai.png` | Reviews feed with one review open: inline keyword highlights, aspect badges (food/service/price), AI summary, "Generate in Responses →" | 5.6 Live evidence |
| `06-responses.png` | AI Response Agent config: brand voice, system prompt, response length, auto-generate, language matching, learned examples from approved HU responses, templates | 5.5 SmartReview agent |

**Rules for images:**
- Import as Next.js `<Image>` or `<img loading="lazy" decoding="async">`.
- Never crop or letterbox. HTML pages are 1600×1000. PDF is 1488×2104 (A4 at 2.5×). `width: 100%; max-width: 900px; height: auto`.
- Presentation: `border-radius: 16px`, `1px solid var(--border)`, `box-shadow: 0 40px 80px -30px rgba(0,0,0,0.4)`. Optional red glow behind the hero image only.
- Never apply CSS filters. Images are finished.
- Do not rename files. If you need to regenerate them: from this folder run `node capture-real.js` (HTML pages) or `node capture-audit-pdf.mjs` (PDF cover). Credentials are baked in; restaurant slug is `kefrenkos`.

## 7. Conversion hygiene

- **Mobile CTA sticky bottom bar**: "Book a free audit".
- **CTA wording stays consistent everywhere**: "Book a free audit". Not "Get started", not "Book a demo".
- **No modal popups, no chatbots, no exit intent.** Trust and minimalism.
- **Page load budget: 2s on 4G.** Lazy-load all images except the hero. No JS animations above the fold.
- **Bilingual HU/EN.** Use existing `data-en` / `data-fr` pattern, add `data-hu` (Hungarian is the primary target market). Default lang: EN. Provide a Hungarian translation for every text string.

## 8. Out of scope — do NOT do this

- **Don't position us as a SaaS.** No "try it free", no "start your trial", no "sign up". We're an agency. The only conversion is "Book a free audit".
- Don't invent stats, logos, or testimonials. If you need social proof and don't have real quotes, leave the section out.
- Don't add 3D device mockups or isometric graphics — the PNGs are deliberately flat.
- Don't add gradients on the CTA buttons. Flat `#E63946` only, 12px radius, white text.
- Don't use Lucide icons with color fills — if you use icons, stroke-only, `var(--text-secondary)`.
- Don't add a carousel or tabs. Linear scroll only.
- Don't add a newsletter signup. Single conversion goal: `/book`.

## 9. Deliverables checklist

- [ ] Updated `app/reviews/page.tsx` (or `app/reviews/components/*` split if > 300 lines).
- [ ] `app/reviews/layout.tsx` with correct `<title>`, `<meta description>`, OG image (use `04-audit-pdf.png`).
- [ ] Sticky mobile CTA component.
- [ ] Hungarian translations for every string.
- [ ] Lighthouse 90+ on mobile.
- [ ] Verified on 375px, 768px, 1440px breakpoints.

Commit: `feat(reviews): agency-positioned landing with real production screenshots`. Push to main.

## 10. Copy — keep/reject examples

✅ *"We run your restaurant's reputation. You run your restaurant."*
✅ *"Every guest gets an answer, in their language, in your voice."*
✅ *"From 200 reviews to 8 actions that matter."*
✅ *"A Budapest-based agency managing reviews, responses, and reputation for 30 mid-market restaurants."*

❌ "Unlock the power of AI-driven reputation intelligence"
❌ "The platform restaurants trust"
❌ "Start your free trial"
❌ "Sign up in 30 seconds"

Write like an agency signing a client, not a SaaS closing a self-serve signup.
