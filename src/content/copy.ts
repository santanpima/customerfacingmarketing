/**
 * Locked marketing strings and the module catalogue.
 * Shared foundation: page agents import this file. Do not paraphrase claims.
 * Facts are copied from docs/requirements.md and docs/content.md.
 * Positioning options B–F stay in docs/content.md. Do not delete them.
 */

export const productName = "Pima" as const;
export const companyName = "Santan" as const;

export const cuiCanonical =
  "Commercial Pima is not FedRAMP authorized and is not FedRAMP Moderate equivalent. It is not for Controlled Unclassified Information (CUI) or covered defense information. A defense contractor who puts CUI into this service can break their own contract. A path for CUI would be a later, separate deployment. That deployment is not for sale now." as const;

export const cuiShort =
  "This service is not for CUI and is not FedRAMP authorized." as const;

export const cuiCheckbox =
  "I understand that commercial Pima is not for Controlled Unclassified Information or covered defense information, and is not FedRAMP authorized." as const;

/**
 * Q6. Option A is the homepage headline so the site can be built.
 * It is a placeholder, not a decided slogan. Do not label it as the brand line.
 */
export const homepageHeadline =
  "Pima is Santan’s project-controls platform. The first thing for sale is Light Scheduler: plan unclassified work by named seat. This service is not for CUI and is not FedRAMP authorized." as const;

export const homeLede =
  "Pima is a project-controls platform. You buy Project Modules by named seat. The first module for sale is Light Scheduler." as const;

export const buyingLede =
  "There is no public price list and there are no tiers. Santan sends a quote." as const;

export const paymentIntent =
  "Card for small accounts; invoice and purchase order, net-30, for larger ones. Santan does not hold card numbers. No payment provider is on this site because none is chosen and nothing can be bought here." as const;

export const trialNote =
  "What a trial is has not been decided. There is no self-serve trial. Ask for a demo." as const;

export const securityLede =
  "A FedRAMP deployment shape is designed and is not this service." as const;

/** Q7 is unanswered. Do not add an authorization sentence, and do not transfer Google’s authorization onto Pima. */
export const signInFact = "Sign-in is Google Identity Platform." as const;

export const securityNotYet =
  "No SOC 2 report, no penetration-test letter, no VPAT, no standard security questionnaire pack. Buyers who need a questionnaire can use the contact page." as const;

export const contactIntro =
  "Tell Santan whether you want a demo, a quote, or both. There is no public signup and no checkout. The product is in Beta and has no public sign-in URL on this site." as const;

/** Q2 is unanswered. Do not POST the form until an inbox exists. */
export const contactFormClosed = "The request form is not open yet." as const;

export const thanksBody =
  "Thank you. Santan has the request. If you asked for a demo or a quote, Santan will reply. This site cannot create an account or take payment." as const;

export const laterModulesFollow =
  "Later modules follow in later releases." as const;

export const notOnFirstReleaseLabel = "Not on the first release." as const;

export const copyrightLine = "© Santan" as const;

export const ctaDemo = {
  label: "Request a demo",
  href: "/contact?intent=demo",
} as const;

export const ctaQuote = {
  label: "Request a quote",
  href: "/contact?intent=quote",
} as const;

/** Sign in is omitted. Q1: Beta has no live URL. */
export const primaryNav = [
  { label: "Product", href: "/product" },
  { label: "Buying", href: "/buying" },
  { label: "Security", href: "/security" },
  { label: "Contact", href: "/contact" },
] as const;

export const seo = {
  home: {
    title: "Pima by Santan — project controls, Light Scheduler first",
    description:
      "Pima is Santan’s project-controls platform. First release: Light Scheduler. Price and demo by request. Not for CUI. Not FedRAMP authorized.",
  },
  product: {
    title: "Light Scheduler — Pima",
    description:
      "Plan unclassified work: grid, dates, Gantt, dependencies. Later modules are later. Not for CUI.",
  },
  buying: {
    title: "How buying works — Pima",
    description:
      "Named seats in Project Modules. No public price list. Santan quotes. No self-serve checkout.",
  },
  security: {
    title: "Security — Pima",
    description:
      "Commercial Pima is not FedRAMP authorized and not for CUI. How data is kept apart, sign-in, and the Assistant.",
  },
  contact: {
    title: "Request a demo or quote — Pima",
    description:
      "Ask Santan for a demo or a quote. No public signup. This service is not for CUI.",
  },
  thanks: {
    title: "Request received — Pima",
    description: thanksBody,
  },
  notFound: {
    title: "Page not found — Pima",
    description: "That address is not a page on this site.",
  },
} as const;

export const firstReleaseStatus = "first-release" as const;
export const laterReleaseStatus = "not-on-first-release" as const;

export interface FirstReleaseModule {
  readonly id: "light-scheduler";
  readonly name: "Light Scheduler";
  readonly summary: string;
  readonly status: typeof firstReleaseStatus;
}

export type LaterModuleId =
  | "master-scheduler"
  | "agile-scheduler"
  | "risk-management"
  | "project-finance"
  | "proposal-pricer"
  | "earned-value"
  | "portfolio"
  | "change-management";

/**
 * Later modules have one legal status. There is no "available" field.
 * Callers cannot construct one except through `laterModule()`.
 */
export interface LaterModule {
  readonly id: LaterModuleId;
  readonly name: string;
  readonly summary: string;
  readonly status: typeof laterReleaseStatus;
}

export function laterModule(
  id: LaterModuleId,
  name: string,
  summary: string,
): LaterModule {
  return {
    id,
    name,
    summary,
    status: laterReleaseStatus,
  };
}

export const lightScheduler: FirstReleaseModule = {
  id: "light-scheduler",
  name: "Light Scheduler",
  summary:
    "Plan the work without the formal apparatus: the grid and its outline, dates, durations, the Gantt, dependencies, constraints, and the forward pass.",
  status: firstReleaseStatus,
};

export const laterModules: readonly LaterModule[] = [
  laterModule(
    "master-scheduler",
    "Master Scheduler",
    "Formal integrated master schedule: the whole WBS, the baseline, float and the critical path, the EVMS-compliant schedule foundation.",
  ),
  laterModule("agile-scheduler", "Agile Planner", "Sprints and backlogs."),
  laterModule(
    "risk-management",
    "Risk Management",
    "Risk register, 5×5, handling, issues and opportunities, schedule risk simulation (DoD RIO Guide).",
  ),
  laterModule(
    "project-finance",
    "Project Finance (Plan vs. Actuals)",
    "Budget against actuals without the EIA-748 apparatus. The budget is calculated, never typed.",
  ),
  laterModule(
    "proposal-pricer",
    "Proposal Pricer",
    "A priced proposal. Its own estimating. No schedule required. Meant, when built, to compete with Deltek ProPricer.",
  ),
  laterModule(
    "earned-value",
    "Earned Value",
    "PV, EV, AC, variances, formats, work authorization.",
  ),
  laterModule(
    "portfolio",
    "Portfolio",
    "A seat that can read across the account’s data. Project access and roles still limit what that person sees. Cross-project time uses one master calendar; cross-project money uses one display currency.",
  ),
  laterModule(
    "change-management",
    "Change Management",
    "Bought and seated, one project at a time. Nothing else about it is decided.",
  ),
];

/** Included with Light Scheduler. Not extra SKUs. */
export const includedWithLightScheduler = [
  {
    name: "Project Registry",
    summary:
      "Projects, people, access, change log, currency. A person with no Project Module seat cannot see the register.",
  },
  {
    name: "Calendars",
    summary: "Working time. Pima does not fetch holidays from the web.",
  },
  {
    name: "Admin Panels",
    summary:
      "The customer’s administrator invites people, assigns seats, suspends and removes. First accounts may be created by Santan.",
  },
  {
    name: "Security so far",
    summary:
      "Email/password, two-factor authentication, roles. Sign-in happens in the product, not on this site.",
  },
  {
    name: "Import, Export, and Reporting",
    summary: "Including printing and the Graphic.",
  },
  {
    name: "The Assistant",
    summary:
      "Proposes only; the person keeps or discards; every AI call is recorded; works with AI off. A file attached to a sentence is sent to the model vendor as text and is not kept. Do not attach CUI.",
  },
] as const;

export const unsold = false as const;

export interface UnsoldItem {
  readonly name: string;
  readonly sold: typeof unsold;
}

function unsoldItem(name: string): UnsoldItem {
  return { name, sold: unsold };
}

export const enterpriseModulesNote =
  "Enterprise Modules are not on the order form. They arrive because a Project Module needs them. They are not sold and not seated. Security is provided at no charge." as const;

export const enterpriseModules: readonly UnsoldItem[] = [
  unsoldItem("Project Registry"),
  unsoldItem("Calendars"),
  unsoldItem("Resources"),
  unsoldItem("Rates"),
  unsoldItem("Burdens"),
  unsoldItem("Organizations"),
  unsoldItem("Security"),
  unsoldItem("Admin Panels"),
];

export const functionsNote =
  "Functions are not sold. They appear where a seated person needs them." as const;

export const functions: readonly UnsoldItem[] = [
  unsoldItem("Import / Export / Reporting"),
  unsoldItem("Assignment"),
  unsoldItem("Rollup"),
  unsoldItem("Pricing Engine"),
  unsoldItem("The Assistant"),
];

export const assistantSummary =
  "The Assistant proposes a change. The person keeps it or discards it. Pima is usable with AI switched off. Do not attach CUI to a prompt." as const;

export const whoItIsFor =
  "Defense contractors and commercial teams who need unclassified planning, internal projects, commercial work, and proposals before award, on an ordinary cloud service." as const;

export const dataIsolation =
  "Each customer’s data is kept apart by the database itself. Row-level security is forced. There is no cross-customer read path, including for Santan’s own AI." as const;

export const credentialsAndAudit =
  "The organization is never carried in the sign-in token. No long-lived service-account keys. Credentials sit in a secret store. Audit logs are kept 400 days." as const;

export const productBuild =
  "The product build installs no packages from the internet." as const;
