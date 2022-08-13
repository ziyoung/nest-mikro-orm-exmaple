import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CowsayModule } from './cowsay/cowsay.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration, { extraConfig } from './config/configuration';
import { AccessLogMiddleware } from './common/middleware/access-log.middleware';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration, extraConfig],
    }),
    LoggerModule.forRoot(),
    MikroOrmModule.forRootAsync({
      useFactory(config: ConfigService) {
        return {
          entities: ['./dist/**/entities/*.js'],
          entitiesTs: ['./src/**/entities/*.ts'],
          // autoLoadEntities: true,
          type: 'mysql',
          // logger: null,
          dbName: config.getOrThrow('DB_NAME'),
          // host: 'localhost',
          // port: 3306,
          user: config.getOrThrow('DB_USER'),
          password: config.getOrThrow('DB_PASSWORD'),
          // debug: Boolean(config.get('DEBUG')),
          // https://mikro-orm.io/docs/upgrading-v4-to-v5#required-properties-are-validated-before-insert
          validateRequired: false,
        };
      },
      inject: [ConfigService],
    }),
    CowsayModule.register(`{"status": "ok"}`),
    // MikroOrmModuleWrap.register(),
    CoffeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AccessLogMiddleware).forRoutes('/config');
  }
}
