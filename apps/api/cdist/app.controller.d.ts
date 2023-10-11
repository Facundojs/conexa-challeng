import { SwapiService } from './common/swapi.service';
import { IdParamDTO, QueryDTO } from './common/dto';
import { ResourceType } from './types/resources';
import { AppService } from './app.service';
export declare class AppController {
    private readonly swapiService;
    private readonly appService;
    constructor(swapiService: SwapiService, appService: AppService);
    healthCheck(): string;
    findAll(resource: ResourceType, query: QueryDTO): Promise<import("./common/swapi-response").ISwapiListResponse<import("./types/resources").Resource[]>>;
    findOne(resource: ResourceType, { id }: IdParamDTO): Promise<import("./types/resources").Resource>;
}
//# sourceMappingURL=app.controller.d.ts.map