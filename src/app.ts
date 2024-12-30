import express from 'express';
import config from 'config';
import dotenv from 'dotenv';

// custom imports
import connect from './utils/connect';
import logger from './utils/logger';

const app = express();
dotenv.config();
const PORT = config.get('port') as number;

app.listen(PORT, () => {
  logger.info(`App is running at port: ${PORT} `);
  connect();
});
