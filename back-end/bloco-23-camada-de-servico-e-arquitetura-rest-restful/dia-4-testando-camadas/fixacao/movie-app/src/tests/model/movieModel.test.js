// Primeiro passo do TDD é entender o requisito e escrever um teste que falhe
// Depois criar um mock do comportamento da função, já que ela nem está implementada ainda;

const sinon =  require('sinon');
const { expect } = require('chai');

// Ao testar unitariamente, devemos isolar o comportamento da função, principalmente no caso dela realizar opração I/O
// Como a função se comunica com o BD se torna necessário isolá-la
// Trazer o driver de conexão com o BD para fazer um stub
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

// Antes de executar o teste faço o stub para simular a adição do filme no BD
before(async () => {
  const execute = [{ insertId: 1 }];
  sinon.stub(connection, 'execute').resolves(execute);
});

// Após o teste restaurar o comando execute;
after(async() => {
  connection.execute.restore();
});

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Pulp Fiction',
    releaseYear: 1994,
    directedBy: 'Quentin Tarantino'
  }
  describe('Quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.have.a('object')
    });
    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.have.a.property('id')
    });
  });
});