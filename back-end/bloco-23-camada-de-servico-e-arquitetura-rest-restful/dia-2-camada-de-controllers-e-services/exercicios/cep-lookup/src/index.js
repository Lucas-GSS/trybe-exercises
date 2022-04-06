const express = require('express');
const app = express();
const pingRoute = require('./routes/pingRoute');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const PORT = process.env.PORT;

app.use(express.json());

app.use('/ping', pingRoute);

app.listen(PORT, console.log(`Listening on port ${PORT}`));