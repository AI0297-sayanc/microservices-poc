/* Code to enable "registration" of service over TCP with Trafeik */
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected.');
  
  // Handle data received from the client
  socket.on('data', (data) => {
    console.log(`Data received: ${data}`);
  });
  
  // Handle client connection termination
  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
/* End of Code to enable "registration" of service over TCP with Trafeik */


/* Code for handling async communication (Redpanda/Kafka/RabbitMQ) */


/* End of Code for handling async communication (Redpanda/Kafka/RabbitMQ) */
