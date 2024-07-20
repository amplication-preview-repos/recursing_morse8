import { Release as TRelease } from "../api/release/Release";

export const RELEASE_TITLE_FIELD = "name";

export const ReleaseTitle = (record: TRelease): string => {
  return record.name?.toString() || String(record.id);
};
