export type TemplateStatus = "Draft" | "Testing" | "Approved" | "Rolled Out" | "Needs Fix";

export type Environment = "Dev" | "QA" | "Production";

export type DocumentType = "Policy" | "Quote" | "Binder" | "Endorsement" | "Notice";

export interface DocumentTemplate {
  id: number;
  name: string;
  documentType: DocumentType;
  insuranceLine: string;
  status: TemplateStatus;
  owner: string;
  environment: Environment;
  lastUpdated: string;
  description: string;
}