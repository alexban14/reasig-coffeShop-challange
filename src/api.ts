import Fastify from 'fastify';
import routes from './routes';
import fastifyEnv from '@fastify/env';
import { envSchema } from './validation/env.validator';

const fastify = Fastify({
	logger: true,
});

const fastifyEnvsOptions = { schema: envSchema };

fastify.register(fastifyEnv, fastifyEnvsOptions);
fastify.register(routes, { prefix: '/api/v1' });

export default fastify;
