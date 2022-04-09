const express = require('express');
const bodyParser = require('body-parser');
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(bodyParser.json());

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Listening on port ${PORT}`));