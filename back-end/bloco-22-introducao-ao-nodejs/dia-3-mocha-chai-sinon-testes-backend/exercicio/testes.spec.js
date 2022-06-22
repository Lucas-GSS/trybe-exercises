const { expect } = require('chai');

const checkNumber = require('./index');

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