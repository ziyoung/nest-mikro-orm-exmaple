import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CowsayModule } from './cowsay/cowsay.module';
import { CowsayService } from './cowsay/cowsay.service';

@Module({
  imports: [
    CoffeesModule,
    MikroOrmModule.forRoot({
      entities: ['./dist/**/entities/*.js'],
      entitiesTs: ['./src/**/entities/*.ts'],
      // autoLoadEntities: true,
      dbName: 'coffeebar',
      type: 'mysql',
      // host: 'localhost',
      // port: 3306,
      user: 'root',
      password: '12345',
      // TODO: 从配置中获取
      debug: true,
      // https://mikro-orm.io/docs/upgrading-v4-to-v5#required-properties-are-validated-before-insert
      validateRequired: false,
    }),
    CowsayModule.register(`{"status": "ok"}`),
  ],
  controllers: [AppController],
  providers: [AppService],
  // exports
})
export class AppModule {}
