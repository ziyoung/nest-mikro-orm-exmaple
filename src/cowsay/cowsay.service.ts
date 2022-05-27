import { Inject, Injectable } from '@nestjs/common';
import { STATUS_TEXT } from './cowsay.constants';

@Injectable()
export class CowsayService {
  constructor(@Inject(STATUS_TEXT) private texts: string[]) {}

  cowsay() {
    // return 'cowsay'
    return this.texts.join('====');
  }
}
