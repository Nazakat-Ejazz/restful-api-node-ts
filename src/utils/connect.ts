import mongoose from 'mongoose';
import config from 'config';

function connect() {
  const dbUrl = process.env.DATABASE_URL as string;
  return mongoose
    .connect(dbUrl)
    .then(() => {
      console.log('DB connected successfully');
    })
    .catch(() => {
      console.log('DB connection failed');
      process.exit(1);
    });
}

export default connect;
