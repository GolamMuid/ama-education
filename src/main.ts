import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Set the global prefix
  app.setGlobalPrefix('api/');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.getHttpAdapter().get('/', (res: Response) => {
    res.send('AMA Education');
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
