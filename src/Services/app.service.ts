import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<Object> {
    return {
      "name": "qazDevelopHr",
      "version": "0.1.0"
    };
  }
}