import { Controller, Get } from '@nestjs/common';
import { PingService } from './ping.service';

@Controller()
export class PingController {
  constructor(private readonly appService: PingService) {}

  @Get("/ping")
  getHello(): Object {
    return this.appService.getStatusJSON();
  }
}
