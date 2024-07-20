export type Features = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  status?: "Option1" | null;
  featureType?: "Option1" | null;
  typeField?: "Option1" | null;
  relatedRelease: string | null;
  relatedTask: string | null;
};
