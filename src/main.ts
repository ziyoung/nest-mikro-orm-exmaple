import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filter/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(Logger));

  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapterHost));

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

  app.use(cookieParser());
  await app.listen(3100);
}
bootstrap();
