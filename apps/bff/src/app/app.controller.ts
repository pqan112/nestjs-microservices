import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PORT } from '@common/constants/common.constant';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    console.log('PORT ne: ', PORT);
    return this.appService.getData();
  }
}
