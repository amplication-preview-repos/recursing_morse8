import { Features as TFeatures } from "../api/features/Features";

export const FEATURES_TITLE_FIELD = "name";

export const FeaturesTitle = (record: TFeatures): string => {
  return record.name?.toString() || String(record.id);
};
