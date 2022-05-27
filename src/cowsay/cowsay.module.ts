import { DynamicModule, Module, Scope } from '@nestjs/common';
import { setTimeout } from 'timers/promises';
import { STATUS_TEXT } from './cowsay.constants';
import { CowsayService } from './cowsay.service';
import { CowsayController } from './cowsay.controller';

@Module({})
export class CowsayModule {
  static register(message: string): DynamicModule {
    return {
      module: CowsayModule,
      controllers: [CowsayController],
      providers: [
        {
          provide: STATUS_TEXT,
          async useFactory() {
            await setTimeout(500);
            console.log('async orm-status', message);
            return ['passed', message];
          },
        },
        CowsayService,
      ],
      exports: [CowsayService],
    };
  }
}
