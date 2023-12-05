// app.js
const express = require('express');
const app = express();
const port = 3000;

const { announce } = require("./announce.util")
const TOPIC = process.env.SERVICE_UNIQUE_ID || 'general'

// Register with Traefik
app.use((req, res, next) => {
  res.setHeader('X-Traefik-Backend', 'nodejs-microservice');
  res.removeHeader("X-Powered-By");
  next();
});

// Define a simple endpoint
app.get('/', async (req, res) => {
  await announce(TOPIC, "OK")
  // console.log("Hello! ==> ", Date.now())
  // Get the IP address of the server
  const serverIp = req.socket.localAddress.split(':').pop();
  return res.json({ message: `Hello from Node.js microservice (${serverIp})!` });
});

// Health check endpoint
app.all('/health', (req, res) => {
  // console.log("Healthy! ==> ", Date.now())
  return res.status(200).send('OK');
});

// Start the server
app.listen(port, () => {
  console.log(`Node.js microservice listening at http://localhost:${port}`);
});
