import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<Object> {
    return {
      "name": "Citadel",
      "version": "0.1.0"
    };
  }
}