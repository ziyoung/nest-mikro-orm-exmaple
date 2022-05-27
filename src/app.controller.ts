import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CowsayService } from './cowsay/cowsay.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: CowsayService,
  ) {}

  @Get()
  getHello(): string {
    return `hello: ${this.appService.getHello()}\ncowsay: ${this.configService.cowsay()}`;
  }
}
