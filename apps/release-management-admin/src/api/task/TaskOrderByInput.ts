import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  summary?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  jiraId?: SortOrder;
  relatedFeature?: SortOrder;
};
