export type Release = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  channels?: Array<"Option1">;
  features?: Array<"Option1">;
  name: string | null;
  date: Date | null;
};
