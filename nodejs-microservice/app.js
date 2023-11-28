// app.js
const express = require('express');
const app = express();
const port = 3000;

// Define a simple endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js microservice!' });
});

// Register with Traefik
app.use((req, res, next) => {
  res.setHeader('X-Traefik-Backend', 'nodejs-microservice');
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server
app.listen(port, () => {
  console.log(`Node.js microservice listening at http://localhost:${port}`);
});
