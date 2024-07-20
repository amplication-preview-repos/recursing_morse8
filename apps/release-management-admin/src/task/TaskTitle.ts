import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "summary";

export const TaskTitle = (record: TTask): string => {
  return record.summary?.toString() || String(record.id);
};
