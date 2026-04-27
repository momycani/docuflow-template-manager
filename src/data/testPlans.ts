import type { TestPlan } from "../types/testPlan";

export const testPlans: TestPlan[] = [
  {
    id: 1,
    templateName: "Cyber Liability Policy Packet",
    testCase: "Required customer and policy fields render correctly",
    environment: "QA",
    status: "Passed",
    expectedResult: "Named insured, policy number, effective date, and coverage details display correctly.",
  },
  {
    id: 2,
    templateName: "Commercial Quote Summary",
    testCase: "Premium values display in customer-facing currency format",
    environment: "QA",
    status: "Failed",
    expectedResult: "Total premium should render with dollar sign, commas, and two decimal places.",
  },
  {
    id: 3,
    templateName: "Binder Confirmation",
    testCase: "Binder output matches approved underwriting terms",
    environment: "Production",
    status: "Passed",
    expectedResult: "Coverage limits, dates, and insured details match source data.",
  },
  {
    id: 4,
    templateName: "Endorsement Change Notice",
    testCase: "Regression check after effective date logic update",
    environment: "Dev",
    status: "Pending",
    expectedResult: "Updated endorsement date logic does not impact policy or binder templates.",
  },
];