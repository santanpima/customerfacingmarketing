# Content and claims

Voice, allowed claims, forbidden language, positioning drafts, and page copy for v1. Facts come from [requirements.md](requirements.md). If copy and requirements disagree, requirements win.

## Voice

- Direct, specific, and calm. Defense-adjacent commercial software, not consumer SaaS
- Short sentences. Named things (Light Scheduler, named seats, CUI) rather than mood words (“powerful”, “seamless”, “next-gen”)
- First person plural is Santan (“we will send a quote”). The product is Pima
- Do not hype unbuilt modules. Later is later
- Do not sound like a signed contract. Legal pages are counsel’s
- Do not sound like the signed-in application. No Ask bar, no “projects” chrome

### Names

| Use | Do not use |
| --- | --- |
| Pima | PIMA, Pima™, Pima® |
| Santan | Santana, Santan AI as the product name |
| Light Scheduler | “our scheduling suite” as if Master Scheduler were shipping |
| named seats | “users”, “licenses” as the unit of sale (seat is the unit) |
| request a demo / request a quote | start free, sign up, buy now, get started (as a primary CTA) |
| commercial Pima / this service | government cloud, authorized Pima |

## Claims matrix

### Allowed now

- Pima is a project-controls platform from Santan
- The first release for sale is Light Scheduler
- Light Scheduler: grid and outline, dates, durations, Gantt, dependencies, constraints, forward pass
- With Light Scheduler the customer also gets Project Registry, Calendars, Admin Panels, current Security, Import / Export / Reporting (including print and the Graphic), and the Assistant
- Customers buy Project Modules by named seat. An administrator assigns each seat to one person. A seat is the licence to reach that module, reading included
- Enterprise Modules are not sold; they arrive because a Project Module needs them. Security is provided at no charge
- Functions are not sold. They appear where a seated person needs them
- Later modules are named as later releases, not as available products
- Price is by quote from Santan. Small accounts: card intended. Larger: invoice and PO, net-30. Santan does not hold card numbers. No provider chosen — so **no pay flow**
- Accounts for first customers are created by Santan. This site does not offer Sign in while the product has no live URL (Q1)
- Assistant proposes; the person keeps or discards; fully usable with AI off; AI calls are recorded
- Files attached to a prompt are sent to the model vendor as text and not kept. Do not attach CUI
- AI is the only metered capability; a hard stop can only stop the Assistant, never the schedule
- Customer data is kept apart by the database; row-level security is forced; no cross-customer read path, including for Santan’s AI
- Organization is never in the sign-in token; no long-lived service-account keys; credentials in a secret store; audit logs 400 days
- Product build installs no packages from the internet
- Sign-in is Google Identity Platform (authorization sentence only with a dated re-check — see Q7)
- A FedRAMP deployment shape is designed and is not this service
- Who it is for: unclassified planning, internal projects, commercial work, proposals before award
- Audience cue: first conversations are with people who already buy Primavera, Microsoft Project, or Deltek — as **who we talk to**, not a bake-off

### Allowed only with the exact caveat

| Claim | Required caveat |
| --- | --- |
| Identity Platform FedRAMP High | Dated check of Google’s scope list. **Does not authorize Pima** |
| Account shapes 1–4 | No infrastructure prices. Shape 3–4 only if asked / if a contract demands it |
| Shapes 5–6 | Not the first release. Shape 5 is not authorized and not for sale |
| AI credits | Both payment ways stand; quantities and price unset; credits not built; Beta uses the customer’s key |
| How Santan intends to take payment | Intent only. No checkout exists |
| “Capable” FedRAMP shape | Capable, **not authorized**. Not this service |

### Forbidden

- Any price, “from $X”, seat total, or tier name (Starter, Advanced, Professional, Enterprise as SKUs)
- “Start free”, “free trial”, “sign up”, public registration, demo login
- Cart, “buy now”, card form, payment provider logos
- Unbuilt modules described as available
- Functions or Enterprise Modules listed as add-ons you buy
- Document 01 / 08 / 53 prices and the old “Registry is a free Project Module” line
- Document 48 as Proposal Pricer launch copy
- Competitor comparison tables or “vs Primavera” as the spine of the site
- “FedRAMP ready”, “FedRAMP compliant”, “FedRAMP authorized” (about Pima), “government cloud”
- SOC 2, ISO, penetration test, VPAT, unless they later exist
- Support SLA, hours, “we respond in 4 hours”
- Customer logos, testimonials, “trusted by”, Beta testers as references
- “Trademark pending” or ® on Pima
- A second Terms, Privacy, or MSA authored in this repo
- Transferring Google’s Identity Platform authorization onto Pima
- Santan’s internal infrastructure costs as customer prices
- Credit prices, token allowances, or a model vendor named as Santan’s
- Chatbot or CRM marketing widgets unless Santan asks

## Positioning

Document 27 still needs a final one sentence. **Q6 (16 October 2026):** use **Option A** as the homepage headline so the site can be built. Options B–F stay documented. Option A is a **placeholder**, not a decided campaign slogan. Expect it to change. Do not delete B–F. Do not present A as “the brand line.”

### Option A — conservative factual (**current placeholder headline**)

> Pima is Santan’s project-controls platform. The first thing for sale is Light Scheduler: plan unclassified work by named seat. This service is not for CUI and is not FedRAMP authorized.

**Why:** Three facts the Gate 1 site must teach. No slogan. CUI is in the first screen, not a footnote.

**Risk:** Long for a hero. Split across headline + lede if needed.

### Option B — buyer conversation, no bake-off

> Pima is for the unclassified schedule: internal projects, commercial work, and proposals before award.

**Why:** Matches “who it is for.” Leaves product mechanics to the next block.

**Risk:** Does not name Light Scheduler. Needs an immediate second line that the first release is Light Scheduler.

### Option C — purchase shape

> Buy seats in the modules you need. Pima’s first module is Light Scheduler.

**Why:** Tiers are gone; this is the commercial model in one breath.

**Risk:** “Modules you need” can sound as if the later catalogue is for sale now. Must be paired with “later modules follow in later releases.”

### Option D — Assistant discipline

> Pima plans the work. The Assistant proposes; the person keeps or discards. The schedule still runs with AI off.

**Why:** Answers a real buyer fear about AI writing the program.

**Risk:** Makes AI the headline. The first sale is Light Scheduler, not the Assistant. Assistant is a function, never sold.

### Option E — CUI-forward

> Commercial Pima is project controls for work you can keep on an ordinary cloud — and must not use for CUI.

**Why:** The mandatory line, in the sentence.

**Risk:** Leads with a negative. Accurate, but cold as the only sentence.

### Option F — named-seat analogue (use with care)

> Named seats, by module — the same purchase shape as the tools schedule teams already buy. First release: Light Scheduler.

**Why:** Speaks to Primavera / Deltek / Autodesk buyers without a comparison page.

**Risk:** “The tools you already buy” invites a bake-off. Keep competitors off the homepage headline.

**Current build:** Option A in the hero. To change later, replace the headline string only. Do not pick D as the only sentence. Do not pick F without stripping competitor echo if it reads as C7.

## Shared copy

### CUI notice (canonical)

Use this text, or a strict shortening that keeps every clause, on **home, product, security,** and **contact confirmation**. Not in the footer only.

> Commercial Pima is not FedRAMP authorized and is not FedRAMP Moderate equivalent. It is not for Controlled Unclassified Information (CUI) or covered defense information. A defense contractor who puts CUI into this service can break their own contract. A path for CUI would be a later, separate deployment. That deployment is not for sale now.

**Short banner** (always accompanied by a link to `/security` for the full statement):

> This service is not for CUI and is not FedRAMP authorized.

### Primary CTAs

| CTA | Goes to | Notes |
| --- | --- | --- |
| Request a demo | `/contact?intent=demo` | Default primary |
| Request a quote | `/contact?intent=quote` | Equal weight on `/buying` |
| Sign in | Application URL, when one exists | **Hidden (Q1, 16 October 2026).** Beta has no live URL. Do not guess `app.santan.ai`. Revisit when a production host exists. |

Do not use: Get started, Start free, Try Pima, Create account, Buy, See pricing (as if a price list).

### Navigation labels

| Label | Target |
| --- | --- |
| Product | `/product` |
| Buying | `/buying` |
| Security | `/security` |
| Contact | `/contact` |
| Sign in | **Omit** until Q1 has a live URL |

### Footer

- Santan lockup from [`brand/`](../brand/README.md) (navy on light, white on Dark Blue)
- Product name **Pima** typeset nearby; there is no Pima logo yet
- Repeat short CUI banner + link to `/security`
- Nav repeated
- Terms / Privacy: only when Q8 / Q9 exist
- Optional printed email: only when Q3 exists
- Copyright: © Santan. No trademark claim on Pima

## Page copy

Headlines below are drafts. Body is the substance that must appear.

### Home `/`

**Purpose.** What Pima is, what is for sale now, CUI, how to ask Santan.

**Hero**

- Headline: **Option A** (placeholder; Q6). Not a decided slogan.
- Lede: Pima is a project-controls platform. You buy Project Modules by named seat. The first module for sale is Light Scheduler.
- CTAs: Request a demo. Request a quote. No Sign in (Q1).

**CUI.** Canonical notice or short banner + `/security`.

**What Light Scheduler is.** Plan the work without the formal IMS apparatus: the grid and its outline, dates, durations, the Gantt, dependencies, constraints, and the forward pass.

**What comes with it.** Registry, calendars, admin, security (sign-in, 2FA, roles), import/export/reporting including print and the Graphic, the Assistant. Phrase these as included with Light Scheduler, not as extra SKUs.

**Later.** Master Scheduler, Agile Planner, Risk Management, Project Finance, Proposal Pricer, Earned Value, Portfolio, and Change Management are later releases. They are not for sale on the first release.

**Who.** Defense contractors and commercial teams who need unclassified planning, internal projects, commercial work, and proposals before award, on an ordinary cloud service. First conversations are often with people who already buy Primavera, Microsoft Project, or Deltek.

**Buying, one paragraph.** No published price list. Santan quotes. No self-serve signup. Request a quote or a demo.

**Assistant, one paragraph.** It proposes. You keep or discard. Usable with AI off. Do not attach CUI to a prompt.

Do not: logo row, testimonial, pricing table, “trusted by”, competitor matrix.

### Product `/product`

**Purpose.** Light Scheduler in enough detail to know what is shipping. Later modules named as later.

**CUI.** Canonical notice.

**Light Scheduler.** Repeat the definition. Be concrete: grid, outline, dates, durations, Gantt, dependencies, constraints, forward pass. Do not describe Master Scheduler features (full WBS, baseline, float, critical path, EVMS-compliant foundation) as if they were Light Scheduler.

**Included with it** (not sold separately):

- Project Registry: projects, people, access, change log, currency. A person with no Project Module seat cannot see the register
- Calendars: working time. Pima does not fetch holidays from the web
- Admin Panels: the customer’s administrator invites people, assigns seats, suspends and removes. First accounts may be created by Santan
- Security so far: email/password, two-factor authentication, roles. Sign-in happens in the product, not on this site
- Import, Export, Reporting: including printing and the Graphic
- Assistant: proposes only; keep or discard; recorded; works off; attachments become text at the model vendor and are not kept; no CUI

**Later modules.** A table or list using the definitions in requirements.md. Column or label: **Not on the first release.** One line: later modules follow in later releases.

**Enterprise Modules and functions.** Short note: not sold. They appear because a seated module needs them, or because a seated person needs a function. Do not put them in a buy grid.

**AI metering.** Credits are planned and not built. Beta uses the customer’s own key. No quantities. A hard stop cannot stop the schedule.

### Buying `/buying`

This page **is** the Gate 1 “pricing” page. It explains the model. It has no numbers.

**Title:** How buying works

**Open.** There is no public price list and there are no tiers. Santan sends a quote. Request a quote or a demo. First accounts are created by hand.

**What you buy.** Project Modules, by the named seat. Quantity of seats in a module; administrator assigns each seat to one person; seat is the licence to reach that module, reading included; losing the seat removes the module, reading included.

**What you do not buy.**

- Enterprise Modules (not on the order form; they arrive with a Project Module; Security at no charge)
- Functions (never sold)
- Later Project Modules that are not in the first release

**What is for sale now.** Light Scheduler seats. Later modules later.

**How Santan intends to charge** (intent, not a checkout): card for small accounts; invoice and purchase order, net-30, for larger ones. Santan does not hold card numbers. No payment provider is on this site because none is chosen and nothing can be bought here.

**Account shape.** Chosen at sale, separately from modules. v1 may say:

- Shared tenancy with row-level security (the Beta is joint tenancy, multiple logins, one Santan account)
- Dedicated database if a customer needs it
- A FedRAMP deployment inside an Assured Workloads boundary is designed, **not authorized, not this service, not for sale now**
- Customer-operated on the customer’s infrastructure is not the first release

No dollar figures.

**Trial.** What a trial is has not been decided. There is no self-serve trial. Ask for a demo.

**AI commercials.** Both credit and bring-your-own-key will stand; credits first when they exist. Quantities unset. Do not quote a credit price.

**Lifecycle.** Omit on v1 pending Q10.

### Security `/security`

**Purpose.** Document 54 S1 overview plus the mandatory CUI line. Not a questionnaire pack.

**Lead with CUI.** Canonical notice, full text, not a banner-only treatment.

**This service is not.** Not FedRAMP authorized. Not FedRAMP Moderate equivalent. Not for CUI or covered defense information. Shape 5 is designed and is not this service.

**How customer data is kept apart.** Database isolation; forced row-level security; no cross-customer read path, including Santan’s AI.

**Credentials and audit.** Organization not in the sign-in token; no long-lived service-account keys; credentials in a secret store; audit logs kept 400 days.

**Build.** Product build installs no packages from the internet. (This is a product fact; do not imply the marketing site follows the same rule.)

**Sign-in.** Google Identity Platform. Dated FedRAMP High sentence only after Q7. Explicit: that authorization is Google’s, not Pima’s.

**Assistant.** Proposes; person decides; every AI call recorded; works with AI off; attachments to the vendor as text, not kept; no CUI in prompts.

**Not yet.** No SOC 2 report, no penetration-test letter, no VPAT, no standard security questionnaire pack. Buyers who need a questionnaire can use `/contact`. Do not pretend S3 or the VPAT are done.

**security.txt.** Product task S4. Do not publish a marketing `security.txt` as if it were the product’s.

### Contact `/contact`

**Purpose.** Demo or quote request. The only conversion.

**Intro.** Tell Santan whether you want a demo, a quote, or both. There is no public signup and no checkout. The product is in Beta and has no public sign-in URL on this site.

**CUI.** Short banner on the form page; **full canonical notice on the confirmation page** (required).

**Form fields** (keep short):

| Field | Required | Notes |
| --- | --- | --- |
| Name | Yes | |
| Organization | Yes | |
| Work email | Yes | |
| Intent | Yes | Demo / Quote / Both. Prefill from query string |
| Role | No | |
| Approximate seats (Light Scheduler) | No | Do not imply a price |
| Notes | No | |
| CUI acknowledgement | Yes | Checkbox. Cannot submit unchecked |

**Checkbox copy:**

> I understand that commercial Pima is not for Controlled Unclassified Information or covered defense information, and is not FedRAMP authorized.

**Submit:** Send request

**Do not collect:** password, card, CUI, file uploads of program data.

**No SLA.** After submit, do not promise a response time.

### Contact confirmation `/contact/thanks`

Required CUI restatement (canonical).

> Thank you. Santan has the request. If you asked for a demo or a quote, Santan will reply. This site cannot create an account or take payment.

> [Canonical CUI notice]

Do not name a person (Q5). If Q3 has an email, print it as a fallback. No “your trial is ready.” No calendar embed unless Santan later asks.

## SEO drafts

Titles ≤ ~60 characters where possible. Every public page includes CUI in the description or on-page, not only in metadata.

| Page | Title | Meta description |
| --- | --- | --- |
| Home | Pima by Santan — project controls, Light Scheduler first | Pima is Santan’s project-controls platform. First release: Light Scheduler. Price and demo by request. Not for CUI. Not FedRAMP authorized. |
| Product | Light Scheduler — Pima | Plan unclassified work: grid, dates, Gantt, dependencies. Later modules are later. Not for CUI. |
| Buying | How buying works — Pima | Named seats in Project Modules. No public price list. Santan quotes. No self-serve checkout. |
| Security | Security — Pima | Commercial Pima is not FedRAMP authorized and not for CUI. How data is kept apart, sign-in, and the Assistant. |
| Contact | Request a demo or quote — Pima | Ask Santan for a demo or a quote. No public signup. This service is not for CUI. |
| Thanks | Request received — Pima | `noindex` recommended |

## Tone examples

**Use**

> Light Scheduler is the first Project Module for sale. You buy named seats. Santan sends a quote.

> The Assistant proposes a change. The person keeps it or discards it. Pima is usable with AI switched off.

> This service is not for CUI and is not FedRAMP authorized.

**Do not use**

> Start your free trial of Pima Professional from $X/user.

> FedRAMP-ready project controls trusted by defense.

> AI that updates your IMS automatically.
