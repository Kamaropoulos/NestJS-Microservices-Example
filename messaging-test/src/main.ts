import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000, host: '0.0.0.0',port: 3011 },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(3001);
}
bootstrap();
