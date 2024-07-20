import { SortOrder } from "../../util/SortOrder";

export type FeaturesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  featureType?: SortOrder;
  typeField?: SortOrder;
  relatedRelease?: SortOrder;
  relatedTask?: SortOrder;
};
