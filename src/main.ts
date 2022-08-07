import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  });
  app.useLogger(app.get(Logger))
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        // https://www.npmjs.com/package/class-transformer#implicit-type-conversion
        // query 中的字段都是 string，配置该属性完成自动的转换
        // 对于嵌套数据，还是得使用 @Type(() => Class)
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(3100);
}
bootstrap();
