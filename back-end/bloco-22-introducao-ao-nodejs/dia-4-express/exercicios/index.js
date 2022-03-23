const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}` });
})



const port = 3001;
app.listen(port, console.log(`Running on locallhost:${port}`));