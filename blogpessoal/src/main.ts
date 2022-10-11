import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.tz = "-03:00"; // utilizar o horário de brasília
  app.useGlobalPipes(new ValidationPipe()); // estou dizendo que meu validation está configurado para rodar de forma global
  app.enableCors(); // Habilitar que o computador receba requisições de fora

  await app.listen(4000);
}
bootstrap();
