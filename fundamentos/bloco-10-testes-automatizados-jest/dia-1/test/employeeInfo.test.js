const boardAndFunction = require('../src/employeeInfo');

describe('Testa a função searchEmployee', () => {

  test('A função existe', () => {
    expect('function').toBe(typeof boardAndFunction.searchEmployee);
  });

  test('Recebe ID e retorna o nome', () => {
    expect('Ana').toBe(boardAndFunction.searchEmployee('8579-6', 'firstName'));
  });

  test('Recebe o ID e retorna o sobrenome', () => {
    expect('Jobs').toBe(boardAndFunction.searchEmployee('5569-4', 'lastName'))
  });

  test('Recebe o ID e retorna o array specialites', () => {
    expect(['Context API', 'RTL', 'Bootstrap']).toEqual(boardAndFunction.searchEmployee('4456-4', 'specialities'));
  });

  test('Se não encontrar o ID retorna mensagem de erro', () => {
    expect(() => boardAndFunction.searchEmployee('111', 'firstName')).toThrow();
  });

});

