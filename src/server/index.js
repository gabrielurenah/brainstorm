import express from 'express';
import { MONGO, PORT } from './config/dotenv';
import connectToDB from './services/mongo';

const app = express();

connectToDB(MONGO);

app.get('/', (req, res) => {
  res.send('Hello World!🌎');
});

app.listen(PORT, () => console.log(`Your server is 🏃‍♂️💨 on http://0.0.0.0:${PORT}`));
