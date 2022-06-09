import { Controller, Get, UseGuards } from '@nestjs/common';
import { Role } from 'src/common/decorator/role.decorator';
import { RoleGuard } from 'src/common/guard/role.guard';
import { CowsayService } from './cowsay.service';

@Controller('config')
@UseGuards(RoleGuard)
export class CowsayController {
  constructor(private readonly configService: CowsayService) {
    console.log('cowsay controller constructor');
  }

  @Role('admin')
  @Get()
  config() {
    return this.configService.cowsay();
  }

  @Get('skip')
  skip() {
    return 'skip authorization';
  }
}
