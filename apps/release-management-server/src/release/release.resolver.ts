import * as graphql from "@nestjs/graphql";
import { ReleaseResolverBase } from "./base/release.resolver.base";
import { Release } from "./base/Release";
import { ReleaseService } from "./release.service";

@graphql.Resolver(() => Release)
export class ReleaseResolver extends ReleaseResolverBase {
  constructor(protected readonly service: ReleaseService) {
    super(service);
  }
}
