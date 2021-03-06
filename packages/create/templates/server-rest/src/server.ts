import * as cors from 'cors';
import * as express from 'express';
import { createServer, Server } from 'http';
import swaggerUi from 'swagger-ui-express';

// Virtual module generated by spinjs via swagger-jsdoc
import swaggerDocument from './swagger';

import setupRoutes from './routes';

export default async (port: number): Promise<Server> => {
  const app = express();

  const server: Server = createServer(app);

  app.use('*', cors({ origin: 'http://localhost:3000' }));

  setupRoutes(app);

  app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  return new Promise<Server>(resolve => {
    server.listen(port, () => {
      resolve(server);
    });
  });
};
