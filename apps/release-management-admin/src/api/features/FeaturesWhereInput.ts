import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FeaturesWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  status?: "Option1";
  featureType?: "Option1";
  typeField?: "Option1";
  relatedRelease?: StringNullableFilter;
  relatedTask?: StringNullableFilter;
};
