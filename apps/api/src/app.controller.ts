import { Controller, Get, Param, Query } from '@nestjs/common';
import { SwapiService } from './common/swapi.service';
import { IdParamDTO, QueryDTO } from './common/dto';
import { ResourceType } from './types/resources';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly swapiService: SwapiService,
    private readonly appService: AppService,
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
