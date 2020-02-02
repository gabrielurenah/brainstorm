import express from 'express';
import { PORT } from './config/dotenv';

const app = express();

app.listen(PORT, () => console.log(`server running🏃‍♂️ on port ${PORT}`));
