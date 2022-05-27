import { Inject, Injectable, Scope } from '@nestjs/common';
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
  constructor(@Inject(STATUS_TEXT) private texts: string[]) {
    console.log('cowsay service constructor');
  }

  cowsay() {
    // return 'cowsay'
    return this.texts.join('====');
  }
}
