import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 404,
      whitelist: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3001);
}
bootstrap();
