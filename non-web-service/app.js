const { Kafka } = require('kafkajs');
const { v4: uuidv4 } = require('uuid');

const kafka = new Kafka({
  clientId: uuidv4(),
  brokers: ['redpanda:9092'],
  // 'auto.create.topics.enable': true, // You can set this in your broker configuration
});

const consumer = kafka.consumer({ groupId: process.env.SERVICE_UNIQUE_ID });
const topics = [
  'nodejs-microservice',
  'python-flask-microservice'
];

const runConsumer = async () => {
  await consumer.connect();

  try {
    await consumer.subscribe({ topics });
  } catch (error) {
    console.error(`Error subscribing to topics: ${error.message}`);
    // Handle the error (e.g., log, retry, or exit the application)
  }

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // console.log({
      //   value: message.value.toString(),
      //   key: message.key.toString(),
      //   topic,
      //   partition,
      //   offset: message.offset,
      // });
      console.log(`==> Received an async message from "${topic}"!!`)
    },
  });
};

runConsumer().catch(console.error);
