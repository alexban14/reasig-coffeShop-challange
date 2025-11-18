import server from './src/api';

const start = async () => {
	try {
		await server.listen({ port: 3131 });
		server.log.info(`server listening on ${server.server.address}`);
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
}

start();
