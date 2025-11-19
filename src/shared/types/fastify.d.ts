import 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: number;
      COFFEE_SHOPS_CSV_LINK: string;
    };
  }
}