import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';

import { connect } from './src/main/db/config/connection';
import { user } from './src/main/api/user/user.api';

dotenv.config();

if (!process.env.APP_PORT) {
  console.log(`Config Error: Node server port is undefined`);
  process.exit(1);
}

const PORT = parseInt(process.env.APP_PORT as string, 10);
const APP_NAME = process.env.APP_NAME;


// database connection
connect().then(() => {

  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  const server = app.listen(PORT, () => {
    console.log(`[server]: ${APP_NAME} is running at http://localhost:${PORT}`);
  });

  // Default URL
  app.get('/', (req: any, res: any) => res.send(`Welcome to ${APP_NAME} ~ Running....`));

  // Routes
  app.use('/api', user);

}).catch((error) => console.error(error));
