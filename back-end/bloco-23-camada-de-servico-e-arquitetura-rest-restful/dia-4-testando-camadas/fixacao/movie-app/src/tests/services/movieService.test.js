// testar a camada de service, que possui um metodo create
// esse metodo recebe um objeto com title, releaseyear e directedBy
// se algum dos campos o todos estiverem vazios ou não forem uma string retorna false
// se os campos estiverem preenchidos corretamente retorna o ID do filme adicionado

const { expect } = require('chai');
const sinon = require('sinon');

const MovieService = require('../../services/movieService');
const MovieModel = require('../../models/movieModel');

describe('Recebe um filme e o adiciona um filme ao BD', () => {
  describe('se os dados do filme estiverem inválidos', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.be.a('boolean');
    });

    it('o boolean deve ser "false"', async() => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.be.equal(false);
    });
  })

  describe('se os dados estiverem corretos', () => {
    const payloadMovie = {
      title: 'Django Livre',
      directedBy: 'Tarantino',
      releaseYear: 2013,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MovieModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

  
    after(() => {
      MovieModel.create.restore();
    });

    it('retorna um objeto', async() => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.be.a('object');
    });

    it('o objeto retornado contém o "ID" do filme adicionado', async() => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.have.property('id');
    });

  });

});
