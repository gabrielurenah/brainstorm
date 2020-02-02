import amqp from 'amqplib/callback_api';
import { AMQP_CONNECTION_URL } from '../config/dotenv';

export default function (message = 'Hello World!') {
  amqp.connect(AMQP_CONNECTION_URL, (err, connection) => {
    connection.createChannel((err, channel) => {
      const exchange = 'questions';

      channel.assertExchange(exchange, 'fanout', { durable: false });
      channel.publish(exchange, '', Buffer.from(message));
      console.log(" [x] Sent %s", message);
    });

    setTimeout(() => connection.close(), 500);
  });
}
