import api from './src/api';

const start = async () => {
	try {
		await api.ready();
		await api.listen({ port: api.config.PORT, host: '0.0.0.0' });
		api.log.info(`server listening on ${api.server.address}`);
	} catch (err) {
		api.log.error(err);
		process.exit(1);
	}
}

start();
