import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';

export default function appConfig() {
  return {
    port: parseInt(process.env.PORT) || 3100,
  };
}

export function extraConfig() {
  return load(
    readFileSync(join(__dirname, 'config.yml'), 'utf8').toString(),
  ) as Record<string, any>;
}
