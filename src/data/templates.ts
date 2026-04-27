import type { DocumentTemplate } from "../types/template";

export const templates: DocumentTemplate[] = [
  {
    id: 1,
    name: "Cyber Liability Policy Packet",
    documentType: "Policy",
    insuranceLine: "Cyber Insurance",
    status: "Testing",
    owner: "Documents Support",
    environment: "QA",
    lastUpdated: "2026-04-27",
    description:
      "Customer-facing policy packet with coverage details, exclusions, notices, and required compliance language.",
  },
  {
    id: 2,
    name: "Commercial Quote Summary",
    documentType: "Quote",
    insuranceLine: "Commercial Package",
    status: "Approved",
    owner: "Underwriting Ops",
    environment: "Production",
    lastUpdated: "2026-04-25",
    description:
      "Reusable quote template that maps customer, premium, coverage, and underwriting data into a clean output.",
  },
  {
    id: 3,
    name: "Binder Confirmation",
    documentType: "Binder",
    insuranceLine: "Cyber Insurance",
    status: "Rolled Out",
    owner: "Product Operations",
    environment: "Production",
    lastUpdated: "2026-04-22",
    description:
      "Temporary proof-of-coverage document generated after underwriting approval and before full policy issuance.",
  },
  {
    id: 4,
    name: "Endorsement Change Notice",
    documentType: "Endorsement",
    insuranceLine: "Professional Liability",
    status: "Needs Fix",
    owner: "Documents Support",
    environment: "Dev",
    lastUpdated: "2026-04-26",
    description:
      "Change notice template used when policy terms, limits, named insured details, or effective dates are updated.",
  },
  {
    id: 5,
    name: "Compliance Notice Template",
    documentType: "Notice",
    insuranceLine: "Multi-Line",
    status: "Draft",
    owner: "Compliance",
    environment: "Dev",
    lastUpdated: "2026-04-24",
    description:
      "Notice template for required customer communications, state-specific language, and compliance-driven updates.",
  },
];