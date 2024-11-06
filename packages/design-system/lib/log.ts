import { log as logtail } from '@logtail/next';
import { env } from '@titan/env';

export const log = env.NODE_ENV === 'production' ? logtail : console;
