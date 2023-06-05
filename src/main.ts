import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import proxy from 'http-proxy-middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
