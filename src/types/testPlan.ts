export type TestStatus = "Passed" | "Failed" | "Pending";

export interface TestPlan {
  id: number;
  templateName: string;
  testCase: string;
  environment: "Dev" | "QA" | "Production";
  status: TestStatus;
  expectedResult: string;
}