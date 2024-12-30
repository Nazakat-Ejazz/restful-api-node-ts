import mongoose from 'mongoose';
import logger from './logger';

function connect() {
  const dbUrl = process.env.DATABASE_URL as string;
  return mongoose
    .connect(dbUrl)
    .then(() => {
      logger.info('DB connected successfully');
    })
    .catch(() => {
      logger.error('DB connection failed');
      process.exit(1);
    });
}

export default connect;
