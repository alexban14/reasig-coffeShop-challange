import { AxiosPromise } from "axios";
import fastify from "../../api";

const remoteUtils = {
	async getRemoteFile(url: string): AxiosPromise<ArrayBuffer> {
		return await fastify.axios.get(url, {
			responseType: 'arraybuffer',
		})
	},
};

export default remoteUtils;
