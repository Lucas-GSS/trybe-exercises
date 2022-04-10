// Recebe o input do user e devolve uma resposta conforme a comunicação com o service;
// quando os inputs estão corretos retorna status 200 e a msg 'filme criado com sucesso';
// quando os inputs estão incorretos retorna status 400 e a mensagem 'dados inválidos';

const sinon = require('sinon');
const { expect } = require('chai');

const MovieController = require('../../controllers/movieController');
const MovieService = require('../../services/movieService');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
      sinon.stub(MovieService, 'create').resolves(false);
    });

    after(() => {
      MovieService.create.restore();
    });

    it('é chamdo o código com o status 400', async() => {
      await MovieController.create(request, response);
      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
      sinon.stub(MovieService, 'create').resolves(true);
    });

    after(() => {
      MovieService.create.restore()
    });

    it('é chamado o status com o código 201', async () => {
      await MovieController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MovieController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });

});