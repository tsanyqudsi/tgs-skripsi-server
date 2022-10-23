import type { FastifyInstance, RouteShorthandOptions } from 'fastify';
import fastify from 'fastify';
import { marginPersen, url } from './constants';
import { ambilKurs } from './libs/ambilKurs';

export const server: FastifyInstance = fastify({ logger: true })

// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
void server.register(require('@fastify/cors'), () => (req: { headers: { origin: string; }; }, callback: (arg0: undefined, arg1: {
    // This is NOT recommended for production as it enables reflection exploits
    origin: boolean;
  }) => void) => {
    const corsOptions = {
      // This is NOT recommended for production as it enables reflection exploits
      origin: true
    };

    // Do not include CORS headers for requests from localhost
    if (/^localhost$/m.test(req.headers.origin)) {
      corsOptions.origin = false
    }

    // Callback expects two parameters: error and options
    callback(undefined, corsOptions)
  })

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          data: {
            type: 'array'
          }
        }
      }
    }
  }
}

// Declare a route

server.get('/ambil-kurs', opts, async (_request, _reply) => {
  const data = await ambilKurs(url, marginPersen)
  return {data};
})
