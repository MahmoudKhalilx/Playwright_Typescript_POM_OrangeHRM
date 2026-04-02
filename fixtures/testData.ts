import { requireEnv } from '../utils/env';
import { loadEnvFromFile } from '../utils/loadEnv';

loadEnvFromFile();

export const appConfig = {
  baseUrl: requireEnv('ORANGEHRM_BASE_URL'),
} as const;

export const credentials = {
  username: requireEnv('ORANGEHRM_ADMIN_USERNAME'),
  password: requireEnv('ORANGEHRM_ADMIN_PASSWORD'),
} as const;
