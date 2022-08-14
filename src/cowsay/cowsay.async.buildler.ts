import { ConfigurableModuleBuilder, Module } from '@nestjs/common';

export interface ConfigModuleOptions {
  folder: string;
}

const builder = new ConfigurableModuleBuilder<ConfigModuleOptions>().build();
export const {
  MODULE_OPTIONS_TOKEN,
  ASYNC_OPTIONS_TYPE,
  ConfigurableModuleClass,
} = builder;

@Module({})
export class CowsayAsyncModule extends ConfigurableModuleClass {}

// test
CowsayAsyncModule.registerAsync({
  useFactory() {
    return {
      folder: '1',
    };
  },
  inject: [],
});
