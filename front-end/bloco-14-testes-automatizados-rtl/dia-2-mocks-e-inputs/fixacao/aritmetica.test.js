const fns = require('./aritimetica');
jest.mock('./aritimetica.js'); // mocka todo o módulo de funções

describe("Testa a função 'Somar'", () => {
  it('Se existe', () => {
    expect(fns.somar).toBeTruthy();
  });

  it('Se é chamada', () => {
    fns.somar();
    expect(fns.somar).toHaveBeenCalled();
    fns.somar();
    fns.somar();
    fns.somar();
    expect(fns.somar).toHaveBeenCalledTimes(4);
  });
  // mockImplementation() permite refazer a implentação da função mockada
  it('Se retorna a soma de dois números', () => {
    fns.somar.mockImplementation((a, b) => a + b);
    fns.somar(2, 5);
    expect(fns.somar).toHaveBeenCalled();
    expect(fns.somar).toHaveBeenCalledWith(2, 5);
    expect(fns.somar(2, 5)).toBe(7);
  });


  // Exemplo com o spyOn(), que "espia" a simulação da função para o teste, mas mantém sua implmentação original
  it('Retorna a soma', () => {
    const mock = jest.spyOn(fns, "somar");
    mock(2, 2);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(2, 2);
    expect(mock(2, 2)).toEqual(4);
  });
});