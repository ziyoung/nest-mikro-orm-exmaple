import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { Cookie } from 'src/common/decorator/cookie.decorator';
import { Role } from 'src/common/decorator/role.decorator';
import { RoleGuard } from 'src/common/guard/role.guard';
import { TimeoutInterceptor } from 'src/common/interceptor/timeout.interceptor';
import { CowsayService } from './cowsay.service';
import { setTimeout } from 'timers/promises';

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

  @UseInterceptors(TimeoutInterceptor)
  @Get('cookie')
  async cookie(@Cookie('my-cookie') cookie: string) {
    if (!cookie) {
      await setTimeout(1.2e3);
      return 'unknown';
    }
    return `my-cookie: ${cookie}`;
  }
}
