import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { performance } from 'perf_hooks';

function format(data: Record<string, any>) {
  let chunk: string[] = [];
  for (const [key, value] of Object.entries(data)) {
    chunk.push(`${key}=${value}`);
  }
  return chunk.join(' ');
}

@Injectable()
export class AccessLogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = performance.now();
    next();
    // 这里要调整：使用 filter 是不是更合适
    res.on('close', () => {
      const latency = ((performance.now() - start) / 1000).toFixed(2);
      const code = res.statusCode;
      const data = {
        code,
        latency,
        method: req.method,
        ip: req.ip,
        url: req.originalUrl,
        userAgent: req.get('User-Agent'),
      };
      const message = format(data);
      if (code >= 400) {
        Logger.warn(message, 'AccessLog Warn');
      } else {
        Logger.log(message, 'AccessLog Info');
      }
    });
  }
}
