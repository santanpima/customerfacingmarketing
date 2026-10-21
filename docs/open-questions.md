# Open questions for santan.ai

Items this site cannot honestly invent. Split into **launch blockers** and **can ship with a placeholder**.

Owner on every row is santan.ai unless noted. Update this file when a decision lands, then update [requirements.md](requirements.md) and [content.md](content.md).

## Launch blockers still open

| ID | Question | Why it matters | Placeholder if unanswered |
| --- | --- | --- | --- |
| Q2 | Which inbox receives demo and quote requests? | Form delivery. C5 support address does not exist yet | Block form go-live; page can still explain “email us” only if Q3 is answered |
| Q3 | What public email, if any, is printed on the site? | Contact path without inventing a support SLA | Omit a printed address; form-only |
| Q4 | Confirm `santan.ai` apex as canonical marketing host, and `www` behavior | DNS, canonical tags, certificates | Assume apex canonical, `www` → apex, until told otherwise |

## Should answer before quoting on the page

Not structural, but copy is wrong if we guess.

| ID | Question | Why it matters | Placeholder |
| --- | --- | --- | --- |
| Q7 | Re-confirm Google Identity Platform is still listed in FedRAMP High scope on the **live** Google compliance page, and the date of that check | Security page may say Identity Platform was FedRAMP High when checked; must not transfer that onto Pima | Omit the Identity Platform authorization sentence until dated |
| Q8 | Product public **Terms** URL | Footer | Omit the link |
| Q9 | Product public **Privacy** URL | Footer | Omit the link |
| Q10 | May v1 publish the account-lifecycle states (Active / Dormant / Dark / Archived)? Counsel has not written L1 | Reads like contract terms | **Omit from v1** (recommended) |
| Q12 | Dedicated Open Graph / social image (favicon can use the Q11 icon for now) | Link previews | Navy lockup on White Smoke; icon as favicon. See [brand/README.md](../brand/README.md) |
| Q13 | Analytics: none, Plausible, GA4, or other? | Marketing-only; never the product | **None at launch** |
| Q14 | Form spam protection: Cloudflare Turnstile, reCAPTCHA, or honeypot only? | Contact form | Honeypot + server-side rate limit until chosen |
| Q15 | Hosting preference: Firebase Hosting, Cloud Storage + CDN, Cloud Run, Cloudflare Pages, other? | Ops next to GCP vs specialist static host | See recommendation in [implementation-plan.md](implementation-plan.md) |

Type (font family) was not in the Q11 drop. Until supplied, self-host a grotesque sans. Do not treat a runtime Google Fonts fetch as required.

## Nice to have; do not block Gate 1

| ID | Question | Note |
| --- | --- | --- |
| Q16 | Founder price list (document 54, F1) | Until it exists, the buying page has **no numbers** |
| Q17 | What a trial is (register 33, E6) | Until decided, do not offer one. Demo/quote request is the path |
| Q18 | Demo account / public demo login (C2) | Do not add a demo login |
| Q19 | Support hours and response times (C5) | Do not invent. Form + email only |
| Q20 | Competitive one-pager vs Primavera / MS Project / ProPricer (C7, Gate 3) | Out of scope for this site |
| Q21 | CRM or marketing automation | Do not add unless asked. Form → inbox is enough |
| Q22 | Chatbot | Do not add unless asked |
| Q23 | Payment provider | Do not add. There is no checkout |
| Q24 | Trademark claim on “Pima” (L9) | Do not claim ® or ™ |
| Q25 | Whether nav should say **Buying** or **Pricing** | Recommendation: label **Buying**, path `/buying`, redirect `/pricing` → `/buying` |

## Decisions already made (do not reopen in copy)

Recorded so a later draft does not “clarify” them back into old documents.

- Product name is Pima, not PIMA
- Company is santan.ai
- Tiers are abolished
- No public prices on this site
- Light Scheduler is the only Project Module in the first release
- Project Registry is an Enterprise Module (D88, D92), not a sold Project Module
- Functions are never sold
- Enterprise Modules are not on the order form
- Assistant proposes; the person keeps or discards; product works with AI off
- Commercial Pima is not for CUI and is not FedRAMP authorized
- No self-serve signup, no free trial button, no checkout
- Beta testers are not public references
- This site is not the product and is not bound by the product’s “no third-party fetches / no web fonts” rule
- Framework is **Astro** and **TypeScript** (confirmed 16 October 2026). Do not substitute another framework
- **Q1 (16 October 2026):** The product is in Beta and has **no live URL**. **Sign in stays hidden.** Do not link `app.santan.ai` or any guessed host. Revisit when a production application URL exists.
- **Q5 (16 October 2026):** Confirmation and contact copy name **santan.ai**, not a person. “santan.ai will reply.”
- **Q6 (16 October 2026):** Use **Option A** as the homepage headline so implementation can start. Options B–F stay documented in [content.md](content.md). Option A is a **placeholder**, not a decided campaign slogan. Expect it to change; swapping the hero sentence must not require an IA change.
- **Q6 (21 October 2026):** Homepage uses **Option B**, split. Title: “Pima is for the unclassified schedule.” Lede: platform, Light Scheduler first for sale, named seats, short CUI. Still not a decided campaign slogan. Options A and C–F remain in [content.md](content.md). Swapping the hero sentence must not require an IA change.
- **Q11 (16 October 2026):** Temporary brand is in [`brand/`](../brand/README.md). Tokens: Dark Blue `#0E2841`, White Smoke `#F5F5F5`. Marks: icon, `santan.ai` wordmark, and lockup, each in navy (`#0F264F`) and white, **SVG preferred** (PNG fallback). No Pima logotype. No type files. Treat as replaceable.
