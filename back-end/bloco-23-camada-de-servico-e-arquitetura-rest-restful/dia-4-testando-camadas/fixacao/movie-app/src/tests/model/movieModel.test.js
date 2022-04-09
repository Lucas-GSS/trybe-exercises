const { expect } = require('chai');

// Primeiro passo do TDD é entender o requisito e escrever um teste que falhe
// Depois criar um mock do comportamento da função, já que ela nem está implementada ainda;

const MoviesModel = {
  create: (id, title, releaseYear, directedBy) => ({id, title, releaseYear, directedBy})
};

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    id: 1,
    title: 'Pulp Fiction',
    releaseYear: 1994,
    directedBy: 'Quentin Tarantino'
  }
  describe('Quando é inserido com sucesso', async () => {
    const response = await MoviesModel.create(payloadMovie);
    it('retorna um objeto', () => {
      expect(response).to.have.a('object')
    });
    it('tal objeto possui o "id" do novo filme inserido', () => {
      expect(response).to.have.a.property('id')
    });
  });
});