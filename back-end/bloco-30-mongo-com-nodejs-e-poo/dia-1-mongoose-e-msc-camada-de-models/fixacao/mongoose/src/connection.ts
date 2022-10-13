import { connect } from 'mongoose';

// instalar o mongoose: npm i mongoose

// o método connect importado do mongoose serve para criar uma conexão com o mongoose. Ele espera receber a URI do banco
connect('mongodb://localhost:27017/test') 

/**
 * Um objeto options pode ser passado como segundo parâmetro para options:
 * const options = {
  user: 'user', // Usuário do banco de dados.
  pass: 'password' // senha do usuário do banco de dados.
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
};
connect('mongodb://localhost:27017/', options);
 */