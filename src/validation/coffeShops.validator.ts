/**
 * Validation schema for `findNearest` endpoint
 * @type {import ('fastify').RouteShortHandOptions}
 * @const
 */
export const findNearestOpts = {
	schema: {
		body: {
			type: 'object',
			required: ['latitude', 'longitude'],
			properties: {
				latitude: { type: 'number' },
				longitude: { type: 'number' },
			},
		}
	}
}