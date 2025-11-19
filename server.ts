import api from './src/api';

const start = async () => {
	try {
		await api.listen({ port: 3131 });
		api.log.info(`server listening on ${api.server.address}`);
	} catch (err) {
		api.log.error(err);
		process.exit(1);
	}
}

start();
