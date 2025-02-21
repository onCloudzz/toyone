import { Controller, Get } from '@nestjs/common';
import { AppService } from './toyone.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bye')
  getBye(): string {
    return this.appService.getBye();
  }
}
