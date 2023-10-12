import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { SwapiService } from './swapi.service';
import { HttpModule } from '@nestjs/axios';
import { ResourceType } from '../types';

describe('SwapiService', () => {
  let service: SwapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwapiService],
      imports: [HttpModule],
    }).compile();

    service = module.get<SwapiService>(SwapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw BadRequestException for invalid resource', () => {
    const invalidResource = 'invalid_resource';

    try {
      service.validateResource(invalidResource);
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
      //@ts-expect-error response is private
      expect(e.response.message).toBe(
        `Resource ${invalidResource} is not valid. Valid resources are: starships, vehicles, species, planets, people, films`,
      );
    }
  });

  it('should call httpService.axiosRef.get when findOne is called', async () => {
    const resource = ResourceType.People;
    const id = '1';
    const axiosRef = jest.spyOn(service.httpService.axiosRef, 'get');

    await service.findOne(resource, id);

    expect(axiosRef).toHaveBeenCalledWith(`${service.url}/${resource}/${id}`);
  });

  it('should call httpService.axiosRef.get when search is called', async () => {
    const resource = ResourceType.Starships;
    const query = { page: '1', search: 'example' };
    const axiosRef = jest.spyOn(service.httpService.axiosRef, 'get');

    await service.search(resource, query);

    expect(axiosRef).toHaveBeenCalledWith(
      `${service.url}/${resource}?page=1&search=example`,
      { params: { page: '1' } },
    );
  });
});
