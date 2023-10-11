import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueryDTO } from './common/dto';
import { SwapiService } from './common/swapi.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, SwapiService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.healthCheck()).toBe('App is running!');
    });
  });

  describe('findAll', () => {
    it('should throw BadRequestException whem resource is not valid', () => {
      expect(
        appController.findAll('invalid-resource' as any, new QueryDTO()),
      ).toThrow(BadRequestException);
    });
  });
});
