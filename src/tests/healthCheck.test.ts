import fastify from '../api';
import { test, TestContext } from 'node:test';

test('Test health check endpoint', async (t: TestContext) => {
	t.plan(1);

	const response: any = await fastify.inject({
		method: 'GET',
		url: '/api/v1/',
	});

	t.assert.strictEqual(response.statusCode, 200, 'returns a status code of 200')
});