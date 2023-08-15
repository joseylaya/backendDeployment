const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const config = require(`./config/config.${environment}`);

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT} in ${environment} mode.`);
});
