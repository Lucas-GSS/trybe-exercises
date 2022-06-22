const { expect } = require('chai');
const media = require('./media');

describe('Teste função `media`', () => {
  describe('ao receber média maior que 7', () => {
    it('retorna a mensagem `Aprovado`', () => {
      const mensagem = media(9);
      expect(mensagem).to.be.eql('Aprovado')
    });
  });

  describe('Ao receber média menor que 7', () => {
    it('retorna a mensagem `Reprovado`', () => {
      const mensagem = media(4);
      expect(mensagem).to.be.eql('Reprovado');
    });
  });

  describe('ao receber média igual a 7', () => {
    it('retorna a mensagem `Recuperação`', () => {
      const mensagem = media(7);
      expect(mensagem).to.be.eql('Recuperação');
    });
  });
});