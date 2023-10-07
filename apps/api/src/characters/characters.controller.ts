import { CharactersService } from './characters.service';
import { Controller, Get, Param } from '@nestjs/common';
import { IdParamDTO } from 'src/common/id-param.dto';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  findAll() {
    return this.charactersService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: IdParamDTO) {
    return this.charactersService.findOne(id);
  }
}
