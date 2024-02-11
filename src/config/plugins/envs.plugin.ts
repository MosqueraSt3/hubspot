import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    PROD: env.get('PROD').required().asBool(),
    PORT: env.get('PORT').required().asPortNumber(),
}