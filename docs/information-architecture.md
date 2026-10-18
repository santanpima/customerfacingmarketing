# Information architecture

Five public pages. No more until Santan asks.

## Site map

```text
santan.ai
├── /                  Home
├── /product           Product — Light Scheduler now; later modules named as later
├── /buying            How buying works — Gate 1 “pricing” page, no prices
├── /pricing           Redirect 301 → /buying
├── /security          Security + mandatory CUI statement
├── /contact           Demo / quote request
│   └── /thanks        Confirmation (CUI restated; noindex)
└── 404                Not found → home + contact
```

`/signin`, `/login`, `/app`: **do not redirect** while Q1 is “no live URL.” 404 is correct. Add a 302 to the application host only when a production URL is confirmed.

Footer may add Terms and Privacy as **external** links to the product’s public pages once those URLs exist. They are not routes in this site.

## Navigation

### Header (all pages)

Left: Santan navy lockup (`brand/santan-ai-logo-navy.svg`) → `/`, with **Pima** typeset as the product name. There is no Pima logo yet. See [brand/README.md](../brand/README.md).  
Right, in order:

1. Product
2. Buying
3. Security
4. Contact (text or quiet button)

**Sign in is omitted** (Q1, 16 October 2026). Do not add it until a live application URL exists.

Mobile: same items in a simple disclosure. Do not invent extra items (“Resources”, “Customers”, “Blog”).

### CUI chrome

A short CUI banner is part of the chrome, not optional page flavor, and it is not dismissible. Full canonical text is on `/product`, `/security`, and `/contact/thanks`, and at least the short banner + `/security` link on `/` and `/contact`.

### Footer

- Santan lockup (navy on White Smoke, white if the footer is Dark Blue)
- Short CUI banner → `/security`
- Product, Buying, Security, Contact
- No Sign in (Q1)
- Terms, Privacy (if Q8 / Q9)
- Email (if Q3)
- © Santan

## Page intents and primary actions

| Page | Visitor should leave knowing | Primary action |
| --- | --- | --- |
| Home | What Pima is; first sale is Light Scheduler; not for CUI; price/trial by request | Request a demo |
| Product | What Light Scheduler does; what is included; what is later | Request a demo |
| Buying | Named seats, no tiers, no prices, quote from Santan, no checkout | Request a quote |
| Security | Not authorized, not for CUI; true isolation/AI/sign-in facts; no fake certs | Contact Santan |
| Contact | How to ask; acknowledgement of CUI | Submit form |
| Thanks | Request received; CUI again; no account was created; Santan will reply | Done |

## Conversion

One conversion: **talk to Santan**.

```text
any page  →  /contact?intent=demo|quote|both  →  POST  →  /contact/thanks
existing customer  →  not offered on this site until Q1 has a live URL
```

There is no second funnel (trial, signup, pay). Do not add calendar widgets, chat, or “book a time” unless Santan asks.

Query `intent` prefills the form radio. Direct `/contact` defaults to **Both** or unselected-required, implementer’s choice; recommended default **Demo**.

## Redirects and aliases

| From | To | Reason |
| --- | --- | --- |
| `/pricing` | `/buying` | Buyers look for “pricing”; the page has no prices |
| `/demo` | `/contact?intent=demo` | Common guess |
| `/quote` | `/contact?intent=quote` | Common guess |
| `/signin`, `/login`, `/app` | 404 | Q1: no live URL. Do not guess a host |
| `/www` host | apex `santan.ai` | Q4 default |

Do not create `/blog`, `/careers`, `/customers`, `/legal`, `/terms`, `/privacy`, `/trial`, `/signup`. If someone guesses them, 404 is correct (except Terms/Privacy **external** when they exist).

## SEO and robots

- Index: `/`, `/product`, `/buying`, `/security`, `/contact`
- `noindex`: `/contact/thanks`
- Canonical host: `https://santan.ai` (Q4)
- `sitemap.xml` of the five indexable URLs
- `robots.txt` allow all except thanks if you prefer; thanks with `noindex` is enough
- Open Graph on each indexable page from [content.md](content.md) titles/descriptions
- Do not publish a marketing `security.txt` pretending to be the product’s (S4 is a product task)

## Accessibility and reading order

- One `h1` per page
- CUI banner is in the document order near the top, not only CSS-sticky after the fold
- Form labels are visible, not placeholder-only
- CUI checkbox is a real label, keyboard reachable, not pre-checked
- No Sign in control until Q1 is reopened with a live URL
- Target sizes and contrast suitable for a professional site; no animation that hides the CUI line

## What a stranger must see without hunting

Gate 1 “done when” mapped to IA:

| Criterion | Where it is unavoidable |
| --- | --- |
| What Pima is | Home hero |
| First thing for sale is Light Scheduler | Home hero + Product `h1` |
| Price and trial by request | Home + Buying + Contact (no other path) |
| Not for CUI; not FedRAMP authorized | Banner on every page; full text on product, security, thanks |
| Ask for demo or quote | Header Contact + page CTAs + `/contact` |
| Cannot create an account | No signup route; Sign in omitted |
| Cannot pay | No checkout route |
| Cannot read an unwritten contract | No Terms/Privacy pages in this repo |

## Content types we will not add

No CMS, blog engine, or case-study type. Copy lives in the site as reviewed text (implementation may use Markdown files in-repo). Changing a claim should be a pull request against [content.md](content.md) and the page, not an unreviewed CMS field.
