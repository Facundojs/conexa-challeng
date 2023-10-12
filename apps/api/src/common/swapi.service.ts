import { BadRequestException, Injectable } from '@nestjs/common';
import { ISwapiListResponse } from './swapi-response';
import { Resource, ResourceType } from '../types';
import { HttpService } from '@nestjs/axios';
import { QueryDTO } from './dto';

// https://docs.nestjs.com/techniques/caching

@Injectable()
export class SwapiService {
  readonly root = 'https://swapi.dev/api';

  constructor(readonly httpService: HttpService) {}

  get url() {
    return this.root;
  }

  async search<R extends Resource>(
    resource: ResourceType,
    query: QueryDTO,
  ): Promise<ISwapiListResponse<R[]>> {
    this.validateResource(resource);
    const url = `${this.url}/${resource}`;

    const { data } = await this.httpService.axiosRef.get(
      QueryDTO.wrap(url, query),
      {
        params: {
          page: query.page,
        },
      },
    );

    return data;
  }

  async findOne<R extends Resource>(
    resource: ResourceType,
    id: string,
  ): Promise<R> {
    this.validateResource(resource);
    const url = `${this.url}/${resource}/${id}`;

    const { data } = await this.httpService.axiosRef.get(url);

    return data;
  }

  validateResource(resource: string) {
    const isResource = Object.values(ResourceType).includes(
      resource as ResourceType,
    );
    if (!isResource)
      throw new BadRequestException(
        `Resource ${resource} is not valid. Valid resources are: ${Object.values(
          ResourceType,
        ).join(', ')}`,
      );
  }
}
