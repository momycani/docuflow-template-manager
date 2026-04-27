import type { SchemaField } from "../types/schema";

export const schemaFields: SchemaField[] = [
  {
    id: 1,
    fieldName: "customerName",
    sourcePath: "account.primaryNamedInsured.name",
    templateOutput: "Named Insured",
    status: "Mapped",
    notes: "Displays correctly across QA and Production outputs.",
  },
  {
    id: 2,
    fieldName: "policyNumber",
    sourcePath: "policy.identifier",
    templateOutput: "Policy Number",
    status: "Mapped",
    notes: "Used in policy, binder, and endorsement templates.",
  },
  {
    id: 3,
    fieldName: "effectiveDate",
    sourcePath: "policy.term.effectiveDate",
    templateOutput: "Effective Date",
    status: "Incorrect Format",
    notes: "Date must render as MM/DD/YYYY for customer-facing documents.",
  },
  {
    id: 4,
    fieldName: "premiumAmount",
    sourcePath: "pricing.totalPremium",
    templateOutput: "Total Premium",
    status: "Missing",
    notes: "Premium value is not appearing on quote summary output.",
  },
  {
    id: 5,
    fieldName: "coverageLimit",
    sourcePath: "coverage.cyber.limit",
    templateOutput: "Cyber Coverage Limit",
    status: "Logic Issue",
    notes: "Conditional logic should hide this field when coverage is declined.",
  },
];