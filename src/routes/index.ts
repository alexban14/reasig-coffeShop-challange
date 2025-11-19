import shops from '../controllers/shops.controller';
import { FindNearestRequest } from '../shared/types/shops';
import { findNearestOpts } from '../validation/coffeShops.validator';
import { FastifyInstance, FastifyRequest } from 'fastify';

const routes = async (fastify: FastifyInstance) => {
	fastify.route({
		url: '/',
		method: 'GET',
		handler: async () => {
			return { hello: 'world' };
		},
	}),
	fastify.post(
		'/coffee-shops/nearest',
		findNearestOpts, 
		async (request: FastifyRequest) => {
			const { latitude, longitude } = request.body as FindNearestRequest;

			return await shops.findNearest({ latitude, longitude });
		},
	)
};

export default routes;
