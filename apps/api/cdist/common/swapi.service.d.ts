import { Resource, ResourceType } from 'src/types/resources';
import { ISwapiListResponse } from './swapi-response';
import { HttpService } from '@nestjs/axios';
import { QueryDTO } from './dto';
export declare class SwapiService {
    private readonly httpService;
    private readonly root;
    constructor(httpService: HttpService);
    protected get url(): string;
    search<R extends Resource>(resource: ResourceType, query: QueryDTO): Promise<ISwapiListResponse<R[]>>;
    findOne<R extends Resource>(resource: ResourceType, id: string): Promise<R>;
    private validateResource;
}
//# sourceMappingURL=swapi.service.d.ts.map