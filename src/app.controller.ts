import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('')
  async healthCheck(
  ) {
    console.log('health');
  }
}