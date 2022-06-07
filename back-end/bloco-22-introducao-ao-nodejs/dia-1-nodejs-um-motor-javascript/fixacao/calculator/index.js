const readline = require('readline-sync');

const sum = require('./sum');
const multiply = require('./multiply');
const divide = require('./divide');
const subtract = require('./subtract');

const nome = readline.question('Ola, qual seu nome? ');
const opcoes = `
1 - Soma;
2- Subtração;
3- Multiplicação;
4- Divisão;
`;
const operacao = readline.questionInt(`Ola ${nome}, qual operação deseja realizar? ${opcoes}`);

const valor1 = readline.questionInt('Primeiro valor: ');
const valor2 = readline.questionInt('Segundo valor: ');

switch (operacao) {
  case 1:
    console.log(`O resultado é: ${sum(valor1, valor2)}`);
    break;
  case 2:
    console.log(`O resultado é: ${subtract(valor1, valor2)}`);
    break;
  case 3:
    console.log(`O resultado é: ${multiply(valor1, valor2)}`);
    break;
  case 4:
    console.log(`O resultado é: ${divide(valor1, valor2)}`);
    break;
  default:
    console.log('Opção inválida');
    break;
}
