import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { performance } from 'perf_hooks';
import { Request, Response } from 'express';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class AccessLogInterceptor implements NestInterceptor {
  constructor(@InjectPinoLogger(AccessLogInterceptor.name) private readonly logger: PinoLogger) {
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const host = context.switchToHttp();
    const req = host.getRequest<Request>();
    const res = host.getResponse<Response>();
    const start = performance.now();
    return next.handle().pipe(
      tap(() => {
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
        this.logger.assign(data);
        if (code >= 400) {
          this.logger.warn('AccessLog Warn Interceptor');
        } else {
          this.logger.info('AccessLog Info Interceptor');
        }
      }),
    );
  }
}

function format(data: Record<string, any>) {
  let chunk: string[] = [];
  for (const [key, value] of Object.entries(data)) {
    chunk.push(`${key}=${value}`);
  }
  return chunk.join(' ');
}
