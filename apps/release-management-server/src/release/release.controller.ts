import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReleaseService } from "./release.service";
import { ReleaseControllerBase } from "./base/release.controller.base";

@swagger.ApiTags("releases")
@common.Controller("releases")
export class ReleaseController extends ReleaseControllerBase {
  constructor(protected readonly service: ReleaseService) {
    super(service);
  }
}
