import { FastifyInstance } from 'fastify';

const routes = async (fastify: FastifyInstance) => {
	fastify.route({
		url: '/',
		method: 'GET',
		handler: async () => {
			return { hello: 'world' };
		},
	});
};

export default routes;
