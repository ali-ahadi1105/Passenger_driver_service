import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('App.port', 3000);
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}
bootstrap();
