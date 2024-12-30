import express from 'express';
import config from 'config';

const app = express();
const PORT = config.get('port');

app.listen(PORT, () => {
  console.log(`App is running at port 5000 `);
});
