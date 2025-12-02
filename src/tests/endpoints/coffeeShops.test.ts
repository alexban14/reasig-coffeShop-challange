import fastify from '../../api';
import { mock, test, TestContext } from 'node:test';
import { openAsBlob } from 'node:fs';

test('Test find top 3 nearest coffee shops endpoint', async (t: TestContext) => {
	t.plan(1);

	await fastify.ready();
	
	const mockCsvFile = await openAsBlob('/home/alex/Work/scaleUpSolutions/takehomeassignments/reasig-coffeShop-challange/storage/coffee_shops.csv');
	const buffer = Buffer.from(await mockCsvFile.arrayBuffer());
	
	mock.method(fastify.axios, 'get', async () => {
		return { data: buffer };
	});

	const coordsPayload = {
		"latitude": 47.6,
		"longitude": -122.4
	};

	const response: any = await fastify.inject({
		method: 'POST',
		url: '/api/v1/coffee-shops/nearest',
		payload: coordsPayload,
	});

	t.assert.strictEqual(response.statusCode, 200, response.body);
});