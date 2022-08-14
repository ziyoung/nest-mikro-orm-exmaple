import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const Cookie = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest() as Request;
    if (req.cookies && data) {
      return req.cookies[data];
    }
    return req.cookies;
  },
);
