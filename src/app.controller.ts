import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/:id')
  getId(@Param('id') id: string): string {
    return id;
  }
}
