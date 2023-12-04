const { Kafka } = require('kafkajs');
const { v4: uuidv4 } = require('uuid');

// Define the Kafka broker(s)
const kafka = new Kafka({
  clientId: process.env.SERVICE_UNIQUE_ID || `my-producer-${uuidv4()}`,
  brokers: ['redpanda:9092'], // Replace with your Redpanda broker address
});

// Create a Kafka producer
const producer = kafka.producer();
const admin = kafka.admin();

// Function to produce a message
const produceMessage = async (topic, msgBody) => {
  // Example message to be published
  const message = {
    key: uuidv4(),
    value: msgBody,
  };
  try {
    // Connect to the admin client to manage topics
    await admin.connect();

    // Check if the topic exists, and create it if not
    const topicExists = await admin.listTopics();
    console.log("topicExists ==> ", topicExists)
    if (!topicExists.includes(topic)) {
      await admin.createTopics({
        topics: [{ topic }],
      });
      console.log(`Topic '${topic}' created successfully!`);
    }

    // Connect to the producer
    await producer.connect();

    // Send the message to the specified topic
    await producer.send({
      topic,
      messages: [message],
    });

    console.log('Message published successfully!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Disconnect the admin client and producer
    await admin.disconnect();
    await producer.disconnect();
  }
};

module.exports = { announce: produceMessage }
