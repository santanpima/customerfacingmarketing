# Pima marketing website

Public marketing site for **Pima**, a project-controls platform from [**santan.ai**](https://santan.ai).

This repository is the company-domain website. It is not the product, not a folder of the product repository, and not served by the product’s Cloud Run service.

**Status:** first version is implemented (Astro + TypeScript). The contact form is closed until an inbox exists (Q2). Sign in stays hidden.

**Stack (decided):** Astro and TypeScript.

**Sign in:** hidden. The product is in Beta and has no live URL (Q1).

## What this site is

Gate 1, owned by marketing. A stranger should be able to:

- Learn what Pima is
- See that the first thing for sale is **Light Scheduler**
- See that price and a trial are **by request**
- See that this service is **not for CUI** and is **not FedRAMP authorized**
- Ask santan.ai for a **demo** or a **quote**

They must not be able to create an account, pay, or read a contract counsel has not written.

## Pages in scope

| Path | Page |
| --- | --- |
| `/` | Home |
| `/product` | Product (Light Scheduler now; later modules named as later) |
| `/buying` | How buying works (modules and named seats; no prices) |
| `/security` | Security, including the CUI statement |
| `/contact` | Demo or quote request |

No other pages until santan.ai asks. See [docs/information-architecture.md](docs/information-architecture.md).

## Documentation

| Document | Purpose |
| --- | --- |
| [docs/requirements.md](docs/requirements.md) | Locked product and commercial facts. Source of truth for the site. |
| [docs/content.md](docs/content.md) | Voice, claims matrix, positioning drafts, page copy. |
| [docs/information-architecture.md](docs/information-architecture.md) | Routes, navigation, CTAs, form, SEO. |
| [docs/implementation-plan.md](docs/implementation-plan.md) | Stack, structure, phases, launch checklist. |
| [docs/open-questions.md](docs/open-questions.md) | Decisions santan.ai still owes. |
| [brand/README.md](brand/README.md) | Temporary santan.ai marks and color tokens (Q11). |

Where an older product document disagrees with register 33, the register governs. Where this marketing documentation disagrees with documents 01, 08, or 53 §3, this documentation governs for the site.

## What this repo will never do

- Serve the application or restyle it
- Offer self-serve signup, a free trial, or checkout
- Publish a price, a “from $X”, or a tier name
- Publish Terms, Privacy, or a master subscription agreement written here
- Claim FedRAMP ready, FedRAMP compliant, government cloud, or authorized
- Invent SOC 2, a penetration test, a VPAT, a support SLA, or customer logos

## Hostnames

| Host | Role |
| --- | --- |
| `santan.ai` | This marketing site (canonical) |
| Application host | Product. **No live URL in Beta.** Sign in stays hidden. Do not guess `app.santan.ai`. |
| `santanaipima.com` | Older user-alias domain. Do not choose it as the marketing host |

Do not pick a final application hostname in this repo.

## Brand

- Product: **Pima** (not PIMA), typeset until a Pima mark exists
- Company: **santan.ai**, using the temporary kit in [brand/](brand/README.md)
- Colors: Dark Blue `#0E2841`, White Smoke `#F5F5F5`. Navy mark fill in SVG is `#0F264F` — do not recolor it
- Marks: SVG first (icon, wordmark, lockup; navy and white). PNG is fallback. See [brand/](brand/README.md)
- Homepage headline is Option B (split): “Pima is for the unclassified schedule.” Other positioning drafts stay in [docs/content.md](docs/content.md)
