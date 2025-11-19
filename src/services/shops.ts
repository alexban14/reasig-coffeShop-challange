import axios from 'axios';
import Papa from 'papaparse';
import { CsvShopData, FindNearestRequest, FindNearestResponse } from '../shared/types/shops';
import fastify from '../api';

export const shops = {
	async fetchCsvContents(url: string): Promise<string>  {
		try {
			const res = await axios.get(url, { 
				responseType: 'arraybuffer',
			});

			const buffer = Buffer.from(res.data);

			return buffer.toString('utf8');
		} catch (err) {
			fastify.log.error(err);

			throw err;
		}
	},

	async parseCsv(csvString: string): Promise<CsvShopData[]> {
		const parsedData = Papa.parse<string[]>(
			csvString, 
			{ header: false, skipEmptyLines: true }
		).data;

		return parsedData.map((row) => ({
			name: row[0],
			latitude: row[1],
			longitude: row[2],
		}));
	},

	/**
	 * This function calculates the Euclidean distance between input location
	 * and each coffee shop's location using the Pythagorean theorem (hypotenuse calculation).
	 * It then sorts the shops based on this distance and returns the three closest ones.
	 * @param data 
	 * @param payload 
	 * @returns FindNearestResponse[]
	 */
	findNearestEuclidean(
		data: CsvShopData[], 
		payload: FindNearestRequest
	): FindNearestResponse[] {
		const nearestShops = data.map((shop) => {
			const shopLat = parseFloat(shop.latitude);
			const shopLng = parseFloat(shop.longitude);
		
			const distance = Math.hypot(
				shopLat - payload.latitude,
				shopLng - payload.longitude,
			);

			return {
				name: shop.name,
				latitude: shopLat,
				longitude: shopLng,
				distance,
			};
		});

		return nearestShops.sort((a, b) => a.distance - b.distance).slice(0, 3).map(shop => ({
			name: shop.name,
			latitude: shop.latitude,
			longitude: shop.longitude,
			distance: Math.round(shop.distance * 10000) / 10000,
		}));
	},
}