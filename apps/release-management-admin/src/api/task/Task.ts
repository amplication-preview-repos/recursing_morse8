export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  summary: string | null;
  description: string | null;
  status?: "Option1" | null;
  jiraId: string | null;
  relatedFeature: string | null;
};
