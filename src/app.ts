import express from 'express';
import config from 'config';
import dotenv from 'dotenv';
import connect from './utils/connect';

const app = express();
dotenv.config();
const PORT = config.get('port') as number;

app.listen(PORT, () => {
  console.log(`App is running at port 5000 `);
  connect();
});
