import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  summary?: StringNullableFilter;
  description?: StringNullableFilter;
  status?: "Option1";
  jiraId?: StringNullableFilter;
  relatedFeature?: StringNullableFilter;
};
