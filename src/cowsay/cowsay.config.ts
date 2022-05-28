import { ConfigType, registerAs } from '@nestjs/config';

const factory = registerAs('cowsayConfig', () => ({
  hello: 'cowsay module for test',
}));

export default factory;

export type CowsayConfigType = ConfigType<typeof factory>;
