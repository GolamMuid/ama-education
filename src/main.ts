import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Set the global prefix
  app.setGlobalPrefix('api/');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // ? Swagger setup

  const config = new DocumentBuilder()
    .setTitle('AMA-Education')
    .setDescription('Api documentation for AMA-Education Backend')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.getHttpAdapter().get('/', (res: Response) => {
    res.send('AMA Education');
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
