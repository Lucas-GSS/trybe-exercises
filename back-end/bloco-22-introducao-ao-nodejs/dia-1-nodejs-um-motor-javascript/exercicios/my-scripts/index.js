const readline = require('readline-sync');

// const sorteio = require('./sorteio');
// const imcCalc = require('./imc');
// const velocidade = require('./velocidade');

const opcoes = `
1- Jogo do Sorteio;
2- Cáculo do IMC;
3- Cálculo de velocidade;
`

const opcaoEscolhida = readline.questionInt(`Olá, qual opção você deseja?
  ${opcoes}
`);

switch (opcaoEscolhida) {
  case 1:
    require('./sorteio')
    break;
  case 2:
    require('./imc')
    break;
  case 3:
    require('./velocidade')
    break;
  default:
    console.log('Opção inválida. Saindo...');
    break;
};
