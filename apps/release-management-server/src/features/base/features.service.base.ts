/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Features as PrismaFeatures } from "@prisma/client";

export class FeaturesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FeaturesCountArgs, "select">): Promise<number> {
    return this.prisma.features.count(args);
  }

  async featuresItems(
    args: Prisma.FeaturesFindManyArgs
  ): Promise<PrismaFeatures[]> {
    return this.prisma.features.findMany(args);
  }
  async features(
    args: Prisma.FeaturesFindUniqueArgs
  ): Promise<PrismaFeatures | null> {
    return this.prisma.features.findUnique(args);
  }
  async createFeatures(
    args: Prisma.FeaturesCreateArgs
  ): Promise<PrismaFeatures> {
    return this.prisma.features.create(args);
  }
  async updateFeatures(
    args: Prisma.FeaturesUpdateArgs
  ): Promise<PrismaFeatures> {
    return this.prisma.features.update(args);
  }
  async deleteFeatures(
    args: Prisma.FeaturesDeleteArgs
  ): Promise<PrismaFeatures> {
    return this.prisma.features.delete(args);
  }
}