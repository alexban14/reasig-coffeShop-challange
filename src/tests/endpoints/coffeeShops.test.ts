import fastify from '../../api';
import { test, TestContext } from 'node:test';
import AxiosMockAdapter from 'axios-mock-adapter';
import { openAsBlob } from 'node:fs';

test('Test find top 3 nearest coffee shops endpoint', async (t: TestContext) => {
	t.plan(1);

	const axiosMock = new AxiosMockAdapter(fastify.axios, { onNoMatch: "throwException" });
	
	const mockCsvFile = await openAsBlob('/home/alex/Work/scaleUpSolutions/takehomeassignments/reasig-coffeShop-challange/src/tests/storage/coffee_shops.csv');

	const mockReply = await mockCsvFile.arrayBuffer();
	
	axiosMock.onGet("https://static.reasig.ro/interview/coffee_shops_exerceise/coffee_shops.csv").reply(function () {
			return [200, mockReply];
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