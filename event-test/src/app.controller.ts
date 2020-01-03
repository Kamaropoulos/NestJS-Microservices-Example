import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
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
}
