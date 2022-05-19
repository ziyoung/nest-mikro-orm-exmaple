import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    CoffeesModule,
    MikroOrmModule.forRoot({
      // entities: ['./dist/**/entities'],
      // entitiesTs: ['./src/**/entities'],
      autoLoadEntities: true,
      dbName: 'coffeebar',
      type: 'mysql',
      // host: 'localhost',
      user: 'root',
      password: '12345',
      debug: true,
      // port: 3306,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
