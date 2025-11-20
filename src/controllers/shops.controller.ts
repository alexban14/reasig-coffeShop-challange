import fastify from '../api';
import { FindNearestRequest, FindNearestResponse } from "../shared/types/shops";
import { shops as shopsService } from "../services/shops";
import  jsonResponse from '../services/json.response';
import { JsonResponse } from '../shared/types/jsonResponse';

const shops = {
	async findNearest(payload: FindNearestRequest): Promise<JsonResponse> {
		const url = fastify.config.COFFEE_SHOPS_CSV_LINK;
		fastify.log.info(url);

		const csvString = await shopsService.fetchCsvContents(url);
		
		const parsedCsv = await shopsService.parseCsv(csvString);

		fastify.log.info(parsedCsv);
		fastify.log.info(typeof parsedCsv);


		const nearestShops: Array<FindNearestResponse> = shopsService.findNearestEuclidean(parsedCsv, payload);

		return jsonResponse.success(nearestShops);
	},
}

export default shops;