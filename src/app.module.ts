import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CowsayModule } from './cowsay/cowsay.module';
import { ConfigModule } from '@nestjs/config';
import configuration, { extraConfig } from './config/configuration';
import { AccessLogMiddleware } from './common/middleware/access-log.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration, extraConfig],
    }),
    CoffeesModule,
    MikroOrmModule.forRoot({
      entities: ['./dist/**/entities/*.js'],
      entitiesTs: ['./src/**/entities/*.ts'],
      // autoLoadEntities: true,
      type: 'mysql',
      logger: null,
      dbName: process.env.DB_NAME,
      // host: 'localhost',
      // port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      // TODO: 从配置中获取
      debug: true,
      // https://mikro-orm.io/docs/upgrading-v4-to-v5#required-properties-are-validated-before-insert
      validateRequired: false,
    }),
    CowsayModule.register(`{"status": "ok"}`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AccessLogMiddleware).forRoutes('/config');
  }
}
