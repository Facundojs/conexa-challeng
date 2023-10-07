import { Injectable } from '@nestjs/common';

@Injectable()
export class CharactersService {
  findAll() {
    return `This action returns all characters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} character`;
  }
}
