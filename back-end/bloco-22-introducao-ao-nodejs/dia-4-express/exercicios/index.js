const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

const port = 3001;

app.listen(port, console.log(`Running on locallhost:${port}`));