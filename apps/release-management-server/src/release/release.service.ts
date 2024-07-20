import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReleaseServiceBase } from "./base/release.service.base";

@Injectable()
export class ReleaseService extends ReleaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
