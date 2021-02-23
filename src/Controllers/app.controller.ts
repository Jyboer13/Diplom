import {Controller, Inject, Get} from "@nestjs/common";
import { AppService } from '../Services/';

@Controller()
export class AppController {
  private readonly appService: AppService;
  constructor(@Inject(AppService) appService: AppService) {
    this.appService = appService
  }

  @Get('/')
  async getHello(): Promise<Object> {
    return this.appService.getHello();
  }
}
