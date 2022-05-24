import { Inject, Injectable } from '@nestjs/common';
import { STATUS_TEXT } from './config.constants';

@Injectable()
export class ConfigService {
  constructor(@Inject(STATUS_TEXT) private texts: string[]) {}

  cowsay() {
    // return 'cowsay'
    return this.texts.join('====');
  }
}
