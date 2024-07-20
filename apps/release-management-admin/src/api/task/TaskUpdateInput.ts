export type TaskUpdateInput = {
  summary?: string | null;
  description?: string | null;
  status?: "Option1" | null;
  jiraId?: string | null;
  relatedFeature?: string | null;
};
