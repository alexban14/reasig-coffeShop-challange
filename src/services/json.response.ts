import { JsonResponse } from "../shared/types/jsonResponse";

const jsonResponse = {
	success: (data: any, code: number = 200): JsonResponse => {
		return {
			success: true,
			code,
			data,
		};
	},
	error: (message: string, code: number = 500): JsonResponse => {
		return {
			success: false,
			code,
			error: message,
		};
	},
}

export default jsonResponse;