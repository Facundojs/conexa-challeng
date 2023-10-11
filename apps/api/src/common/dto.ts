import { IsNumberString, IsOptional, IsString, Matches } from 'class-validator';

const OnlyLettersRegExp = /^[a-zA-Z]+$/;

export class IdParamDTO {
  @IsNumberString()
  id: string;
}

export class QueryDTO {
  @IsOptional()
  @IsNumberString()
  page = '1';

  @IsOptional()
  @IsString()
  @Matches(OnlyLettersRegExp)
  search?: string;

  static wrap(url: string, dto: QueryDTO) {
    let query = `?page=${dto.page}`;

    if (dto.search) query += `&search=${dto.search}`;

    return `${url}${query}`;
  }
}
