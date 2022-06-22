const { expect } = require('chai');
const sinon = require('sinon');

const { checkNumber, writeFile} = require('./index');

const fs = require('fs');

describe('Teste `checkNumber', () => {

  describe('ao receber número maior que 0', () => {
    it('retorna uma string', () => {
      const retorno = checkNumber(7);
      expect(retorno).to.be.a('string');
    });

    it('retorna a mensagem `positivo`', () => {
      const string = checkNumber(7);
      expect(string).to.be.eqls('positivo')
    });

  });

  describe('ao receber um número menor que 0', () => {
    it('retorna uma string', () => {
      const retorno = checkNumber(7);
      expect(retorno).to.be.a('string');
    });

    it('retorna a mensagem `negativo`', () => {
      const string = checkNumber(-5);
      expect(string).to.be.eqls('negativo');
    });
  });

  describe('ao receber 0', () => {
    it('retorna uma string', () => {
      const retorno = checkNumber(7);
      expect(retorno).to.be.a('string');
    });

    it('retorna a mensagem `neutro`', () => {
      const string = checkNumber(0);
      expect(string).to.be.eqls('neutro');
    });
  });

  describe('se parâmetro não for um número', () => {
    it('retorna uma string', () => {
      const retorno = checkNumber(7);
      expect(retorno).to.be.a('string');
    });
    
    it('retrona o alerta: `o valor deve ser um número`', () => {
      const string = checkNumber('a');
      expect(string).to.be.eqls('o valor deve ser um número');
    });
  });

});

describe('Teste `writeFile', () => {
  describe('recebe o nome de arquivo e conteúdo para adicionar nele', () => {
    const filePath = './ola.txt';
    const fileContent = 'Olá pessoas';

    before(() => {
      sinon.stub(fs, 'writeFileSync')
    });
    after(() => {
      fs.writeFileSync.restore();
    })
    it('após escrever o conteúdo no arquivo retorna um `ok`', () => {
      const result = writeFile(filePath, fileContent);
      expect(result).to.be.a('string');
      expect(result).to.be.eql('ok');
    });

  });

});