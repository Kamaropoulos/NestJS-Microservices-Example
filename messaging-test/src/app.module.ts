import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EVENT_SERVICE, EVENT_SERVICE_HOST, EVENT_SERVICE_PORT } from './app.constants';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([{ name: EVENT_SERVICE, transport: Transport.TCP, options: {host: EVENT_SERVICE_HOST, port: EVENT_SERVICE_PORT}}]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
