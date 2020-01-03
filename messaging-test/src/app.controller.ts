import { Controller, Get, Inject } from '@nestjs/common';
import { MessagePattern, ClientProxy } from '@nestjs/microservices';
import { EVENT_SERVICE } from './app.constants';

@Controller()
export class AppController {
  constructor(@Inject(EVENT_SERVICE) private readonly client: ClientProxy) {}

  @MessagePattern({ cmd: 'echo' })
  msgEcho(data: String): String {
    return "You sent: " + data;
  }

  @Get()
  getEchoService(): string {
    this.client.emit("endpoint_hit", "hello event service!");
    return "Success!";
  }
  
}
