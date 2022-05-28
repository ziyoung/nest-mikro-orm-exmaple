import { Inject, Injectable, Scope } from '@nestjs/common';
import cowsayConfig, { CowsayConfigType } from './cowsay.config';
import { STATUS_TEXT } from './cowsay.constants';

/**
 * https://docs.nestjs.com/fundamentals/injection-scopes
 * https://docs.nestjs.com/fundamentals/injection-scopes#scope-hierarchy
 * Scope.REQUEST 会影响到所有用到的 provider
 */
@Injectable({
  scope: Scope.DEFAULT,
})
export class CowsayService {
  constructor(
    @Inject(STATUS_TEXT) private texts: string[],
    @Inject(cowsayConfig.KEY) private config: CowsayConfigType,
  ) {}

  cowsay() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>text: ${this.texts.join('\t===\t')}</div>
  <div>partial: hello is ${this.config.hello}</div>
  </body>
</html>`;
  }
}
