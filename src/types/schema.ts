export type MappingStatus = "Mapped" | "Missing" | "Incorrect Format" | "Logic Issue";

export interface SchemaField {
  id: number;
  fieldName: string;
  sourcePath: string;
  templateOutput: string;
  status: MappingStatus;
  notes: string;
}