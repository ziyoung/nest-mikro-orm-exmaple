import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    // return `hello: ${this.appService.getHello()}`;
    return `hello: ${this.appService.getHello()}\ncowsay: ${this.configService.cowsay()}`;
  }
}
