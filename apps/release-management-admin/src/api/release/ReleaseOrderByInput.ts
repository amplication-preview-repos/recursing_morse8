import { SortOrder } from "../../util/SortOrder";

export type ReleaseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  channels?: SortOrder;
  features?: SortOrder;
  name?: SortOrder;
  date?: SortOrder;
};
