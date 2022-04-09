const express = require('express');
const app = express();
const bodyParser = require('body-parser');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = process.env.PORT

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./controllers/productController'));

app.listen(PORT, console.log(`rodando na porta ${PORT}`));