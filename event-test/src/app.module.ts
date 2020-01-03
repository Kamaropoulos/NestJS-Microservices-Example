import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { ECHO_SERVICE, ECHO_SERVICE_HOST, ECHO_SERVICE_PORT } from './app.constants';

@Module({
  imports: [
    ClientsModule.register([{ name: ECHO_SERVICE, transport: Transport.TCP, options: {host: ECHO_SERVICE_HOST, port: ECHO_SERVICE_PORT}}]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
