# Requirements (source of truth)

Locked facts for the Pima marketing site. Implementers copy from here; they do not invent commercial, security, or product claims.

Sources named below are product-program documents (register 33, documents 01, 27, 29, 48, 53, 54). They are not in this repository. If a later register entry contradicts this file, update this file first, then the pages.

## 1. Purpose and ownership

| Item | Fact |
| --- | --- |
| Requirement | Document 54, §3.6, C1: a website with product, pricing, security, contact, and a trial or demo request |
| Gate | Gate 1 — required before the first paying customer |
| Owner | Marketing |
| Repo | This repository, deployed on its own |
| Domain | Company domain `santan.ai` |
| Not | A folder of the product repo; not served by the product Cloud Run service |

Nearby work this site **supports** and must **not pretend is done**:

| ID | Work | Site implication |
| --- | --- | --- |
| C2 | Demo account and demo script (Drone Project plan is a start) | No public demo login |
| C3 | What a trial is (undecided, register 33 E6) | No free trial, no self-serve signup, no “start free” |
| C5 | Support address, hours, response times | Contact may be email or a form. Do not invent an SLA |
| C7 | Competitive positioning vs Primavera, Microsoft Project, and later Deltek ProPricer | Gate 3. Do not build the first site around competitor comparisons. Document 48 is not launch copy |

## 2. Names and hosts

- Product name: **Pima**, written that way, not PIMA (register 33, D64)
- Company: **santan.ai**
- Marketing host: `santan.ai`
- Application host: none live. The product is in Beta. Document 54 E4 still records `app.santan.ai` as a candidate; **do not link it**. Q1 (16 October 2026): **Sign in stays hidden** until a production URL exists
- Older charter also names `santanaipima.com` as a user-alias domain, with a government domain held in reserve (document 01). Do not select it here
- There is no public self-registration. People are invited by their organization’s administrator, or, for the first customers, created by santan.ai
- Password reset and two-factor authentication exist **in the product**. This site does not perform them and must not explain them as if it does

## 3. What is for sale now

There are **no tiers**. Register 33, D11 abolished the tier entity on 25 September 2026. Starter / Advanced / Professional / Enterprise and the seat totals in document 53 §2 are stale. Do not publish a price, a “from $X”, or any tier name.

A quote comes from santan.ai until the founder publishes a new price list (document 54, F1).

### 3.1 Project Modules (bought, named seats)

A customer buys a quantity of seats in a module. An administrator assigns each seat to one person. A seat is the licence to reach that module at all, reading included (D31). Losing a seat removes the module, reading included (D38). Revenue scales by which modules are bought and by how many people hold seats. Same purchase shape as Primavera, Deltek, and Autodesk.

Only **Light Scheduler** is in the first production release (D79, document 54).

| Module | What it is | First release? |
| --- | --- | --- |
| Light Scheduler | Plan the work without the formal apparatus: the grid and its outline, dates, durations, the Gantt, dependencies, constraints, and the forward pass | **Yes. This is what is being released** |
| Master Scheduler | Formal integrated master schedule: the whole WBS, the baseline, float and the critical path, the EVMS-compliant schedule foundation | No. Design questions answered; development held |
| Agile Planner | Sprints and backlogs. Identifier remains `agile-scheduler` until built. Renamed 13 October 2026 (D94) | No |
| Risk Management | Risk register, 5×5, handling, issues and opportunities, schedule risk simulation (DoD RIO Guide) | No |
| Project Finance (Plan vs. Actuals) | Budget against actuals without the EIA-748 apparatus. The budget is calculated, never typed | No |
| Proposal Pricer | A priced proposal. Its own estimating. No schedule required. Meant, when built, to compete with Deltek ProPricer | No |
| Earned Value | PV, EV, AC, variances, formats, work authorization | No |
| Portfolio | A seat that can read across the account’s data. Project access and roles still limit what that person sees. Cross-project time uses one master calendar; cross-project money uses one display currency | No |
| Change Management | Bought and seated, one project at a time (D25). Nothing else about it is decided | No |

Say that later modules follow in later releases. Do not describe unbuilt modules as available. Do not use document 48 as Pricer marketing copy.

### 3.2 What a Light Scheduler customer actually gets

These arrive or appear with Light Scheduler and are built:

- **Project Registry** — projects, people, access, change log, currency
- **Calendars** — working time; the product never fetches holidays from the web
- **Admin Panels** — the customer’s own administrator invites people, assigns seats, suspends and removes
- **Security so far** — email/password sign-in, two-factor authentication, roles. On this site the label is **Security**.
- **Import, Export, and Reporting** — including printing and the Graphic
- **The Assistant**

### 3.3 Enterprise Modules (not sold)

Enterprise Modules are not on the order form. They arrive because a Project Module needs them. They are not sold and not seated.

Current members: Project Registry, Calendars, Resources, Rates, Burdens, Organizations, Security, Admin Panels.

- Security is provided at no charge (Chris, 13 October 2026)
- Project Registry was reclassified as an Enterprise Module on 12 October 2026 (D88, D92). Document 53 §3 still saying it is the only no-cost **Project** Module is superseded
- A person with no seat in any Project Module the account holds cannot see the register

### 3.4 Functions (never sold)

Chris: “a function can never be sold” (D24). Members: Import / Export / Reporting (including the Gantt graphic and print), Assignment, Rollup, Pricing Engine, and the Assistant.

They appear wherever a seated person needs them. Do not list them as products or add-ons.

## 4. The Assistant and AI commercials

- The Assistant **proposes**. The person **keeps or discards**. It does not apply a change on its own
- The platform is fully usable with AI switched off (C6)
- A file attached to a sentence is sent to the model vendor as **text** and is **not kept**
- Do not attach Controlled Unclassified Information
- How AI is paid for (D78), both ways stand, credits used first:
  1. Each module licence will bring monthly AI Credits, pooled at the account
  2. When they run out or expire, the customer’s own model key takes over, or they buy more credits
- Quantities and the credit price are **not set**. Credits are **not built**. The Beta runs on the customer’s own key
- Do not quote a credit price, a token allowance, or a model vendor as santan.ai's
- If the customer uses their own key, their contract with that vendor governs
- AI is the only thing ever metered. A hard stop can only stop the Assistant, never the schedule

## 5. How money moves (and what this site must not build)

There is **no checkout**. Nothing can be bought inside the product. “Buy more” on the administrator’s Seats screen appears only when the platform has a place to send someone; it does not on the Beta.

The order form, payment, and the control plane that would record a purchase are undesigned. First customers’ accounts are created by hand.

Commercial intent (document 54, F3), for copy about *how santan.ai intends to sell*, not for a working pay flow:

- Card for small accounts
- Invoice and purchase order on net-30 terms for larger accounts (how defense contractors buy)
- santan.ai must not hold card numbers
- No payment provider has been chosen

**Do not build** a cart, a card form, or a self-serve purchase. Do not add a payment provider, a CRM, or a chatbot unless santan.ai asks.

## 6. Account shapes

Chosen at sale, separately from modules (document 53, register 33 A1). Six shapes:

| # | Shape | First release? |
| --- | --- | --- |
| 1 | Joint tenancy, one login. Shared database, row-level security | Available |
| 2 | Joint tenancy, multiple logins. Same. **The Beta is this shape:** one santan.ai account | Available; Beta |
| 3 | Single tenant, one login, dedicated database. Kept available; no separate order-form line until someone asks | Available if asked |
| 4 | Single tenant, multiple logins, dedicated database (own instance only if a contract demands it) | Available if a contract demands it |
| 5 | FedRAMP: a separate deployment inside a Google Assured Workloads boundary | **Not** the first release. **Not authorized** |
| 6 | Customer-operated, on the customer’s own infrastructure, full suite, flat rate. No update path and no enforcement that can lock a live schedule | **Not** the first release |

Do not publish infrastructure prices. Figures in document 53 (~$17/month Beta, ~$107/month dedicated-core database) are **santan.ai's costs**, not customer prices.

## 7. Account lifecycle (deferred from v1 pages)

Register 33, Part E, for shapes 1–5, once subscriptions exist. Plain-language policy only if counsel has not written different terms. **Do not present it as the signed contract.**

| State | Meaning |
| --- | --- |
| Active | A paid Project Module is current |
| Dormant (days 0–30 after lapse) | Sign-in, one read-only view, no editing, no export, no AI, no reporting |
| Dark (days 31–60) | Sign-in, one page saying what is held and how to renew |
| Archived (day 61 on) | Reinstatement offer; data pulled out of the live system |
| Reinstated | On a fee |
| Orderly exit | A customer who gives notice and settles up gets their data returned as a service. Different from a lapse |
| Shape 6 | No lifecycle |

**v1 decision:** do not publish this on the site until counsel reviews it. It reads like contract terms (L1 / L4 are still open). Keep it in this file so later copy can use it.

## 8. Who it is for

Defense contractors and the commercial schedules they can keep on an ordinary cloud service:

- Unclassified planning
- Internal projects
- Commercial work
- Proposals before award

The first buyer conversation is with people who already buy Primavera, Microsoft Project, or Deltek. That is **audience**, not a comparison page.

## 9. CUI and FedRAMP (mandatory)

Document 54, section 4. The CUI line is **mandatory on the site, not a footnote**. Required on the product page, the security page, and any demo or contact confirmation.

The commercial service:

- Is **not** FedRAMP authorized
- Is **not** FedRAMP Moderate equivalent
- Is **not** for Controlled Unclassified Information or covered defense information
- A defense contractor who puts CUI into commercial Pima can break their own contract
- The path for CUI is a later, separate deployment (shape 5) or a FedRAMP Moderate equivalency assessment; **neither is for sale now**

Forbidden phrases: “FedRAMP ready”, “FedRAMP compliant”, “government cloud”, “authorized” (as if Pima were). The accurate register phrase is **capable, not authorized**.

## 10. Security facts that may be said

Document 54, section 7. Say them as facts. Do not turn them into a certification.

1. Each customer’s data is kept apart by the database itself. Row-level security is forced. There is no cross-customer read path, including for santan.ai's own AI
2. The organization is never carried in the sign-in token. No long-lived service-account keys. Credentials sit in a secret store. Audit logs are kept 400 days
3. The product build installs no packages from the internet
4. Sign-in is Google Identity Platform. Last internal check: FedRAMP High authorized on 15 September 2026. **Re-check 16 October 2026:** Identity Platform still appears in Google’s [FedRAMP and DoD compliance scope](https://docs.cloud.google.com/docs/security/compliance/fedramp-dod-compliance-scope) (document last reviewed 18 August 2026; services table updated August 2026) as a listed service in the FedRAMP High scope. **Do not transfer that authorization onto Pima.** Re-check the live Google page before quoting, and date the quote
5. The AI proposes and the person keeps or discards. Every AI call is recorded. The product works with AI off
6. A FedRAMP deployment shape is designed and is **not this service**

A security overview page is wanted (document 54, S1). A standard questionnaire answer set does not exist yet.

**Do not invent:** SOC 2, a penetration test, a VPAT. Those are later (S3 is Gate 2–3; VPAT is Gate 2). `security.txt` is a **product** task (S4), not marketing copy.

## 11. Legal

| Item | Status | Site rule |
| --- | --- | --- |
| Terms of Service | Counsel, L1 | Do not write one here |
| Privacy policy | Counsel, L4 | Do not write one here |
| CUI clause | Counsel, L7 | Restate the operational CUI warning; do not draft the legal clause |
| Product interim terms-acceptance | Built 16 October 2026 (D103). Temporary, non-binding | Irrelevant to this site except as a reason not to duplicate terms |
| Trademark on “Pima” | L9, not done | Do not claim a trademark |
| Product public Terms and Privacy URLs | Not confirmed | Footer may link **once those URLs exist**. Omit until then. Do not 404 and do not publish a second set |

## 12. Positioning

Document 27, open question C (24 September 2026): the one sentence on the website. Several other questions in that document were later decided (tiers gone; Assistant proposes, person keeps or discards). The one-sentence claim **was not**.

Draft options live in [content.md](content.md). Q6 (16 October 2026): Option A was the homepage headline so implementation could start. Q6 (21 October 2026): the homepage uses **Option B**, split: title “Pima is for the unclassified schedule”; lede carries platform, Light Scheduler first for sale, named seats, and the short CUI line. It is the current headline, not a decided slogan. Options A and C–F remain documented.

## 13. Build constraints (this repository only)

The product’s rules (no third-party fetches, no web fonts, a specification entry before any feature, the product CI suite) apply to the **application**, not this site.

- Marketing analytics, fonts, and form tools belong **here** so they never land in the product
- Do not vendor this site into the product
- Do not add a payment provider, a CRM, or a chatbot unless santan.ai asks

## 14. Explicitly out of scope until asked

- Blog, careers, checkout, customer logos, testimonials, “trusted by”
- The eight Beta testers inside one santan.ai account are **not** public references
- Competitor comparison pages
- Support SLA, hours, phone tree
- Public demo login
- Cart, card form, self-serve purchase or signup
- Prices, tiers, credit quantities, model-vendor-as-santan.ai's
- Second legal terms, privacy policy, or MSA
- SOC 2 / pen test / VPAT / FedRAMP-ready language
- Restyling the signed-in product (`index.html`, the Ask bar)

## 15. Done when

A stranger can learn what Pima is, see that the first thing for sale is the Light Scheduler, see that price and a trial are by request, see that this service is not for CUI and is not FedRAMP authorized, and can ask santan.ai for a demo or a quote. They cannot create an account, pay, or read a contract the lawyer has not written.
