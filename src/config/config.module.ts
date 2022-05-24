import { DynamicModule, Module } from '@nestjs/common';
import { setTimeout } from 'timers/promises';
import { STATUS_TEXT } from './config.constants';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';

@Module({})
export class ConfigModule {
  static register(message: string): DynamicModule {
    return {
      module: ConfigModule,
      controllers: [ConfigController],
      providers: [
        {
          provide: STATUS_TEXT,
          async useFactory() {
            await setTimeout(500);
            console.log('async orm-status', message);
            return ['passed', message];
          },
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
