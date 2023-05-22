'use strict';

const PORT = 8080;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is launched on ${PORT} port`);
});