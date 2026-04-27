import type { DocumentRequest } from "../types/request";

export const requests: DocumentRequest[] = [
  {
    id: 1,
    ticketId: "DOC-101",
    title: "Premium amount missing from quote summary",
    requestType: "Bug",
    priority: "Critical",
    status: "In Progress",
    stakeholder: "Underwriting",
    impact: "Quote cannot be sent to customer until premium output is restored.",
  },
  {
    id: 2,
    ticketId: "DOC-102",
    title: "Add state-specific compliance notice language",
    requestType: "Compliance Update",
    priority: "High",
    status: "New",
    stakeholder: "Compliance",
    impact: "Required notice language must be added before rollout.",
  },
  {
    id: 3,
    ticketId: "DOC-103",
    title: "Create binder template for cyber package",
    requestType: "New Template",
    priority: "Medium",
    status: "Blocked",
    stakeholder: "Product",
    impact: "Waiting on final schema fields from product requirements.",
  },
  {
    id: 4,
    ticketId: "DOC-104",
    title: "Update endorsement date formatting",
    requestType: "Change Request",
    priority: "Low",
    status: "Resolved",
    stakeholder: "Documents Platform",
    impact: "Date formatting corrected and regression-tested in QA.",
  },
];