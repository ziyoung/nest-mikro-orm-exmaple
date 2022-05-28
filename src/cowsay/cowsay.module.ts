import { DynamicModule, Module } from '@nestjs/common';
import { setTimeout } from 'timers/promises';
import { STATUS_TEXT } from './cowsay.constants';
import { CowsayService } from './cowsay.service';
import { CowsayController } from './cowsay.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import cowsayConfig from './cowsay.config';

@Module({})
export class CowsayModule {
  static register(message: string): DynamicModule {
    return {
      module: CowsayModule,
      imports: [ConfigModule.forFeature(cowsayConfig)],
      controllers: [CowsayController],
      providers: [
        {
          provide: STATUS_TEXT,
          async useFactory(configService: ConfigService) {
            await setTimeout(500);
            const data = {
              dbName: configService.get('DB_NAME'),
              dbUser: configService.get('DB_USER'),
              errorText: configService.get('errorText'),
              maxRetryCount: configService.get('maxRetryCount'),
            };
            return ['passed', message, JSON.stringify(data)];
          },
          inject: [ConfigService],
        },
        CowsayService,
      ],
      exports: [CowsayService],
    };
  }
}
