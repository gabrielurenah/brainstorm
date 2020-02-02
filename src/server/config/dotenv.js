import dotenv from 'dotenv';

dotenv.config();

const AMQP_CONNECTION_URL = process.env.AMQP_CONNECTION_URL || 'http://localhost:5672';
const PORT = process.env.PORT || 3000;

export { AMQP_CONNECTION_URL, PORT };
