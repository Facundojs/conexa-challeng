import { SwapiService } from './common/swapi.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  providers: [AppService, SwapiService],
  controllers: [AppController],
  imports: [HttpModule],
})
export class AppModule {}
