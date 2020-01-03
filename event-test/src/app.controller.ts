import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ECHO_SERVICE } from './app.constants';

@Controller()
export class AppController {
  constructor(@Inject(ECHO_SERVICE) private readonly client: ClientProxy) {}

  @Get()
  getEchoService(): Observable<string> {
    const pattern = { cmd: 'echo' };
    const data = "hello from event-test";
    return this.client.send<string>(pattern, data);
  }

  @EventPattern('endpoint_hit')
  async handleUserCreated(data: string) {
    console.log("Endpoint Hit with message: "+ data);
  }
}
