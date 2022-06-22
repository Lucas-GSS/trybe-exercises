const { expect } = require('chai');
const sinon = require('sinon');

const readFile = require('./readFile');
const fs = require('fs');
const conteudoDoArquivo = 'You Better Call Saul'

describe('Teste `readFile`', () => {

  describe('ao receber o nome de um arquivo existente', () => {

    before(() => {
      sinon.stub(fs, 'readFileSync').returns(conteudoDoArquivo)
    });
    
    after(() => {
      fs.readFileSync.restore()
    });

    it('retorna o conteúdo do arquivo', () => {
      const conteudo = readFile('./arquivo_que_existe.txt');
      expect(conteudo).to.be.eql(conteudoDoArquivo)
    });

  });

  describe('ao receber um arquivo inexistente', () => {

    before(() => {
      sinon.stub(fs, 'readFileSync').throws(new Error('Arquivo não encontrado'))
    });

    after(() => {
      fs.readFileSync.restore();
    });

    it ('retorna null', () => {
      const conteudo = readFile('arquivo_inexistente.txt');
      expect(conteudo).to.be.eql(null)
    });

  });
});