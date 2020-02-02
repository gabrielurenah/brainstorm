import express from 'express';
import { MONGO, PORT } from './config/dotenv';
import connectToDB from './services/mongo';

const app = express();

connectToDB(MONGO);

app.listen(PORT, () => console.log(`server running🏃‍♂️ on port ${PORT}`));
