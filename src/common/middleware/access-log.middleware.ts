import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { performance } from 'perf_hooks';

@Injectable()
export class AccessLogMiddleware implements NestMiddleware {
  constructor(
    @InjectPinoLogger(AccessLogMiddleware.name)
    private readonly logger: PinoLogger,
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    const start = performance.now();
    // next -> 调用之后，执行 middleware guard
    next();
    // 这里要调整：使用 filter 是不是更合适
    res.on('close', () => {
      const latency = ((performance.now() - start) / 1000).toFixed(2);
      const code = res.statusCode;
      const data = {
        code,
        latency,
        // method: req.method,
        // ip: req.ip,
        // url: req.originalUrl,
        // userAgent: req.get('User-Agent'),
      };
      this.logger.assign(data);
      if (code >= 400) {
        this.logger.warn('AccessLog Warn Middleware');
      } else {
        this.logger.info('AccessLog Info Middleware');
      }
    });
  }
}
