import { Injectable } from '@nestjs/common';

@Injectable()
export class PingService {
  getStatusJSON(): Object {
    return {ping: "pong"};
  }
}
