import { Controller, Get } from '@nestjs/common';
import { CowsayService } from './cowsay.service';

@Controller('config')
export class CowsayController {
  constructor(private readonly configService: CowsayService) {}
  @Get()
  config() {
    return this.configService.cowsay();
  }
}
