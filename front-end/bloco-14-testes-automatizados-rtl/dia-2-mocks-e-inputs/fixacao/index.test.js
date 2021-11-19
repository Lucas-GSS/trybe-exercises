let { divisivelPorDois, retornaNumeroAleatorio } = require(".");

describe("Testando a função 'diviselPorDois'", () => {
  divisivelPorDois = jest.fn(); // Para mockar a função utiliza-se jest.fn(), jest.mock ou jest.spyOn(). Depende da necessidade.
  test('Testa se a função existe', () => {
    expect(divisivelPorDois).toBeTruthy();
  });

  divisivelPorDois = 
  jest.fn()
  .mockReturnValue('Default call') // Esse método serve para definirmos o valor do retorno do nosso mock. Passa a ser o retorno padrão 
  .mockReturnValueOnce('First call')
  .mockReturnValueOnce('Second call'); // Serve para definirmos um valor de retorno uma única vez, e é executado antes do mockReturnValue()
  
  test("Retorno da função", () => {
    expect(divisivelPorDois()).toBe('First call');
    expect(divisivelPorDois()).toBe('Second call');
    expect(divisivelPorDois()).toBe('Default call');
    expect(divisivelPorDois).toHaveBeenCalledTimes(3);
    // toHaveBeenCallled() e toHaveBeenCalledTimes(entre outos métodos) só funcionam com funções mockadas.
  });
});

describe('Testa a função "retornaNumeroAleatorio"', () => {
  test('Testa se quando o retorno é par, a função "divisivelPorDois" retorna true', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(8);
    divisivelPorDois = jest.fn().mockImplementation(() => retornaNumeroAleatorio() % 2 === 0);
    // Ao mockar a função, perde-se sua implementação original, mockImplementation() permite recuperar a implçementação ou fazer outra

    expect(divisivelPorDois()).toBe(true);
  });

  test('Testa se quando o retorno é impar, a função "divisivelPorDois" retorna false', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(7);
    expect(divisivelPorDois()).toBe(false);
  });
});


