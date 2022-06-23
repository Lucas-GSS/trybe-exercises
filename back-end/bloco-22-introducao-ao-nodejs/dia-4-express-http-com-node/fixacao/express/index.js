const express = require('express');

const app = express();

// rotas divididas por métodos http
app.get('/', (_req, res) => res.status(200).send('Olaaaaaaaaaaaa'));
app.post('/', (_req, res) => res.status(200).send('Winter is coming'));

// rota encadeada para evitar repetir o caminho
app.route('/br')
.get((_req, res) => res.status(200).send('Heisenberg'))
.post((_req, res) => res.status(200).send('You goddamn right'));

app.listen(3001, () => {
  console.log('rodando na porta 3001');
});
