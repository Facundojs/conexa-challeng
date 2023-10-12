import { Controller, Get, Param, Query } from '@nestjs/common';
import { SwapiService } from './common/swapi.service';
import { IdParamDTO, QueryDTO } from './common/dto';
import { AppService } from './app.service';
import { ResourceType } from './types';

@Controller()
export class AppController {
  constructor(
    readonly swapiService: SwapiService,
    readonly appService: AppService,
  ) {}

  @Get()
  healthCheck() {
    return this.appService.healthCheck();
  }

  @Get(':resource')
  findAll(@Param('resource') resource: ResourceType, @Query() query: QueryDTO) {
    return this.swapiService.search(resource, query);
  }

  @Get(':resource/:id')
  findOne(
    @Param('resource') resource: ResourceType,
    @Param() { id }: IdParamDTO,
  ) {
    return this.swapiService.findOne(resource, id);
  }
}
