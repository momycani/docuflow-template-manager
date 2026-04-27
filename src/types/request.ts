export type RequestType = "Bug" | "Change Request" | "New Template" | "Compliance Update";

export type RequestPriority = "Low" | "Medium" | "High" | "Critical";

export type RequestStatus = "New" | "In Progress" | "Blocked" | "Resolved";

export interface DocumentRequest {
  id: number;
  ticketId: string;
  title: string;
  requestType: RequestType;
  priority: RequestPriority;
  status: RequestStatus;
  stakeholder: string;
  impact: string;
}