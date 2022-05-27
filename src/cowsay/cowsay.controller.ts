import { Controller, Get } from '@nestjs/common';
import { CowsayService } from './cowsay.service';

@Controller('config')
export class CowsayController {
  constructor(private readonly configService: CowsayService) {
    console.log('cowsay controller constructor');
  }
  @Get()
  config() {
    return this.configService.cowsay();
  }
}
