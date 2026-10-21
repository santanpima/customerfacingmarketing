# Implementation plan

How to build the site described in [requirements.md](requirements.md), [content.md](content.md), and [information-architecture.md](information-architecture.md). **Do not write application code until this plan is accepted and the next implementation pass is requested.**

## 1. Outcome

A static public site on `santan.ai` with five pages, a demo/quote form, and a CUI statement that cannot be missed. Independently deployed. Marketing tools stay in this repository so they never land in the product. **Sign in is omitted** until the product has a live URL (Q1).

## 2. Stack

**Decided (16 October 2026):** Astro and TypeScript. Do not substitute Next.js or another framework.

Chosen for a small, copy-heavy, mostly static site that must stay out of the product repo and off the product Cloud Run service.

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Astro** (current stable) + **TypeScript** — decided | HTML first, almost no client JS, excellent SEO, one island for the form if needed |
| Styling | Plain CSS with design tokens in `src/styles/` | Temporary Q11 tokens: Dark Blue `#0E2841`, White Smoke `#F5F5F5`. Avoid a fashionable UI kit that reads as consumer SaaS |
| Fonts | Self-hosted; one sans family | Marketing may use web fonts. Self-host so the security story is not undercut by a Google Fonts runtime fetch |
| Forms | Native POST to a small function; email to the Q2 inbox | Form tools are allowed here. No CRM until asked |
| Spam | Honeypot + server rate limit; Turnstile/reCAPTCHA if Q14 | |
| Hosting | **Firebase Hosting** or **Cloud Storage + Cloud CDN + HTTPS load balancer** on GCP | Same cloud as the product, different service. Not the product Cloud Run |
| DNS / TLS | `santan.ai` apex + `www` redirect (Q4) | |
| CI | GitHub Actions: install, typecheck, build, preview | Product CI suite does **not** apply |
| Analytics | None at launch (Q13) | Slot in the layout, dark by default |

### Hosting alternatives (framework is not open)

- **Cloudflare Pages** + Pages Function, if santan.ai wants preview URLs and DNS there instead of GCP
- **Cloud Run** serving the Astro static output, only if Hosting/CDN is blocked. Still a *different* service from the product

### Explicitly not in v1

- Payment provider, cart, Stripe, etc.
- HubSpot / Salesforce / Intercom / chatbot
- CMS (Contentful, Sanity). Copy is in-repo
- Auth on this site (Identity Platform belongs to the product)
- Monorepo with the product
- Vendoring this site into the application

## 3. System picture

```text
Visitor
  │
  ├─ https://santan.ai          this repo (static)
  │     pages, CUI chrome, form UI
  │
  ├─ POST /api/contact          this repo (function)
  │     validate, CUI checkbox, email Q2 inbox
  │
  ├─ Sign in                    omitted (Q1: Beta, no live URL)
  │
  └─ Terms / Privacy            product public URLs (Q8, Q9) when they exist
```

The marketing origin never sets a session, never takes a card, and never creates a user.

## 4. Proposed repository layout

Create only when implementation starts.

```text
.
├── README.md
├── docs/                          already written
├── brand/                         temporary santan.ai marks + tokens (Q11)
├── astro.config.ts
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── og-default.png
│   ├── robots.txt
│   └── sitemap generated at build
├── src/
│   ├── env.d.ts
│   ├── content/                   optional: page Markdown sourced from docs/content.md
│   ├── layouts/
│   │   └── BaseLayout.astro       header, footer, SEO
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── CuiNotice.astro        full canonical text on product, security, thanks
│   │   ├── CtaRow.astro
│   │   ├── PlanFigure.astro       Light Scheduler still; placeholder until santan.ai supplies one
│   │   ├── ModuleList.astro       later-vs-now, never “available” for unbuilt
│   │   └── ContactForm.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── product.astro
│   │   ├── buying.astro
│   │   ├── security.astro
│   │   ├── contact.astro
│   │   ├── contact/thanks.astro
│   │   ├── pricing.astro          redirect
│   │   ├── demo.astro             redirect
│   │   ├── quote.astro            redirect
│   │   └── 404.astro
│   ├── pages/api/contact.ts       or hosting-native function
│   └── styles/
│       ├── tokens.css
│       └── global.css
├── functions/                     if the host wants a separate function
└── .github/workflows/ci.yml
```

Environment (public where needed, secret for the mailer):

| Variable | Public? | Purpose |
| --- | --- | --- |
| `PUBLIC_APP_URL` | yes | Sign in. **Keep empty** (Q1). When set later, show Sign in |
| `PUBLIC_TERMS_URL` | yes | Footer. Empty ⇒ omit |
| `PUBLIC_PRIVACY_URL` | yes | Footer. Empty ⇒ omit |
| `PUBLIC_CONTACT_EMAIL` | yes | Printed fallback. Empty ⇒ omit |
| `CONTACT_INBOX` | secret | Form destination (Q2) |
| `MAIL_PROVIDER_KEY` | secret | Only if using a transactional mailer |

## 5. Design direction (temporary Q11)

Source: [`brand/README.md`](../brand/README.md). Replaceable when a finished kit exists.

- Surfaces: White Smoke `#F5F5F5` page ground; Dark Blue `#0E2841` text, header/footer, dark bands; white type on Dark Blue
- Header/footer lockup: navy on light, white on Dark Blue. Product name **Pima** is typeset; there is no Pima logo
- CUI notice visually **primary** on `/security` and clearly visible on every other page — not a muted legal footer
- No gradients-as-identity. No fake product screenshot presented as the product. A labeled placeholder is allowed until santan.ai supplies a still; the replacement rules are in [content.md](content.md) under “Light Scheduler still” (`public/light-scheduler-placeholder.svg`)
- No testimonial cards, logo clouds, or “trusted by”
- Do not copy the product’s signed-in Ask bar or `index.html`
- Light Scheduler diagrams are optional and must not depict Master Scheduler / EVMS screens
- Prefer SVG from `brand/` (navy fill `#0F264F`, white `#FFFFFF`). PNG is raster fallback. Do not recolor marks to surface Dark Blue `#0E2841`

## 6. Form behavior

1. Prefill intent from `?intent=demo|quote|both`
2. Server re-validates every field; CUI checkbox must be true
3. Reject file uploads
4. Send an email to Q2: name, org, email, intent, optional fields, timestamp
5. Redirect to `/contact/thanks` (PRG)
6. Thanks page: `noindex`, canonical CUI text, no “account created”, no SLA, “santan.ai will reply” (Q5)
7. Failure: stay on `/contact` with a generic error, still no SLA

Until Q2 exists, ship the pages with the form **disabled** and a line that contact is not open yet — or hold the production domain. Do not POST into a black hole.

Mailer options, in order:

1. Workspace / group inbox via a transactional API (Resend, Postmark, or Gmail API) — still not a CRM
2. Form backend (Formspree, Basin) pointed at Q2 — allowed “form tool”
3. Do not use the product’s Identity Platform or Cloud Run for this

## 7. Phases

Do not skip the copy freeze into a pretty empty layout.

### Phase 0 — Documentation (this pass)

- [x] Requirements
- [x] Content and claims
- [x] IA
- [x] This plan
- [x] Open questions

**Exit:** Plan written. Stack decided: Astro + TypeScript. Q1 Sign in hidden; Q5 “santan.ai will reply”; Q6 Option B as current homepage headline (A and C–F retained); Q11 temporary brand in `brand/`. Do not write application code until implementation is requested.

### Phase 1 — Foundation

- Scaffold Astro + TypeScript
- Tokens, `BaseLayout`, header, footer
- Routes and redirects from the IA, with stub headings
- `robots.txt`, 404
- CI: typecheck + build
- Env vars wired so Sign in / legal links **disappear when empty**

**Exit:** Every route renders chrome locally.

### Phase 2 — Page copy

- Home, Product, Buying, Security from [content.md](content.md)
- Module list component that cannot mark later modules as available
- SEO titles, descriptions, Open Graph
- Homepage headline is Option B (current). Keep A and C–F in docs so a later swap is copy-only

**Exit:** A reviewer can walk the five pages and tick the “done when” list using only the UI.

### Phase 3 — Contact

- Form, validation, CUI checkbox
- Function + mail to Q2 (blocked on Q2)
- Thanks page with full CUI restatement
- Spam controls

**Exit:** A test submit arrives in the inbox; thanks page shows CUI; unchecked box cannot submit.

### Phase 4 — Brand, domain, egress

- Use `brand/` **SVG** marks and tokens (Q11). Favicon from the icon SVG (PNG if a raster favicon is required); OG from the navy lockup PNG until Q12
- Keep `PUBLIC_APP_URL` empty; no Sign in (Q1)
- Terms / Privacy footer (Q8, Q9) when real
- Hosting project, DNS, TLS, `www` redirect (Q4)
- Dated Identity Platform sentence only if Q7 is yes

**Exit:** `https://santan.ai` serves this site. Sign in is still hidden.

### Phase 5 — Launch hardening

- Accessibility pass (keyboard, contrast, one h1, labels)
- Mobile and desktop
- Confirm no signup, checkout, price, trial, or competitor matrix slipped in
- Confirm unbuilt modules read as later
- Optional analytics (Q13) — default off
- Launch checklist below

**Exit:** Gate 1 “done when” is true for a stranger.

## 8. Implementation rules for the next agent

1. Read `docs/` before any component. Do not scrape prices or tiers from the product repo
2. Do not write Terms, Privacy, or an MSA
3. Do not add pages outside the IA
4. Do not add “Start free”, prices, or checkout “just as a placeholder”
5. Do not claim FedRAMP, SOC 2, VPAT, or a support SLA
6. Do not use Beta testers or invented logos
7. Keep third-party scripts on this origin only; never propose them for the product
8. If asked for both a marketing widget and something that would need the product, implement only this site
9. Positioning: Option B in the hero as the **current** headline. Never label it as a decided slogan. Keep A and C–F in `docs/content.md`
10. When copy is uncertain, omit. Do not soften CUI to fill a hole

## 9. Test plan

Manual is enough for v1. Automate the build and a few link/a11y checks.

**Every page**

- [ ] Header: Product, Buying, Security, Contact
- [ ] No short CUI banner in header or footer
- [ ] No Sign in control anywhere (`PUBLIC_APP_URL` empty per Q1)
- [ ] Footer has no Terms/Privacy if URLs empty
- [ ] No price, tier name, “start free”, testimonial, logo cloud

**Home**

- [ ] Pima named correctly; santan.ai named
- [ ] Light Scheduler is the first thing for sale
- [ ] Later modules are later
- [ ] Primary CTA is demo or quote, not signup

**Product**

- [ ] Light Scheduler capabilities match the allowed list
- [ ] Included Enterprise pieces and functions are not sold as add-ons
- [ ] Full CUI notice present
- [ ] Later-module table/list is explicitly not the first release

**Buying**

- [ ] Named-seat model explained
- [ ] No numbers
- [ ] No checkout
- [ ] Quote CTA
- [ ] Trial described as no self-serve trial; ask for a demo. Not offered. Do not print that a trial is undecided.

**Security**

- [ ] Full CUI + not authorized + not equivalent
- [ ] Isolation, credentials, audit, AI-off facts present
- [ ] No SOC 2 / pen test / VPAT
- [ ] Identity Platform sentence absent or dated and explicitly not Pima’s ATO

**Contact / thanks**

- [ ] Cannot submit without CUI checkbox
- [ ] No file upload
- [ ] Thanks restates CUI
- [ ] No “account is ready”, no SLA
- [ ] Mail arrives at Q2

**Routes**

- [ ] `/pricing` → `/buying`
- [ ] Guessed `/signup`, `/trial`, `/blog` are 404
- [ ] This host is not the product UI

**Browser**

- [ ] Desktop and a narrow mobile viewport
- [ ] Keyboard through nav and form
- [ ] Confirmation flow end to end, not only a screenshot of the form

## 10. Launch checklist (Gate 1)

A stranger on `santan.ai` can:

- [ ] Learn what Pima is
- [ ] See that the first thing for sale is Light Scheduler
- [ ] See that price and a trial are by request
- [ ] See that this service is not for CUI and is not FedRAMP authorized
- [ ] Ask santan.ai for a demo or a quote

And cannot:

- [ ] Create an account on this site
- [ ] Pay
- [ ] Read a contract counsel has not written

Ops:

- [ ] Site is this repo, not product Cloud Run
- [ ] HTTPS on `santan.ai`
- [ ] Sign in hidden (Q1: no live application URL)
- [ ] Form inbox monitored
- [ ] Analytics absent or marketing-only

## 11. Worked estimate

Order of magnitude for a single implementer after copy is frozen:

| Phase | Effort |
| --- | --- |
| 1 Foundation | ~0.5 day |
| 2 Pages | ~1–1.5 days |
| 3 Form + function | ~0.5–1 day, blocked on Q2 |
| 4 Domain / brand | ~0.5 day, blocked on DNS. Q11 temporary kit is in `brand/` |
| 5 Hardening + browser pass | ~0.5 day |

Critical path is **santan.ai answers**, not code: **Q2** (form inbox), **Q4** (DNS). Q1, Q5, Q6, and Q11 are decided enough to implement.

## 12. Suggested first implementation commit sequence

When code is requested, small commits in this order:

1. Scaffold Astro + CI
2. Layout, CUI chrome, empty routes
3. Copy for home + product
4. Copy for buying + security
5. Contact form + thanks
6. Redirects, SEO, 404
7. Hosting config

Do not open with a theme pack or a blog.

## 13. After Gate 1 (out of scope now)

Only if santan.ai asks:

- Price list on `/buying` when F1 exists
- Trial language when E6 exists
- Lifecycle copy when counsel agrees (Q10)
- Competitive material at Gate 3 (C7)
- SOC 2 / VPAT / questionnaire pack when S3 exists
- CRM, analytics, chatbot
- Blog, careers, customer logos (only if they become real and public)
- Linking a FedRAMP *service* if shape 5 is ever authorized — never retrofit “ready” onto commercial Pima
