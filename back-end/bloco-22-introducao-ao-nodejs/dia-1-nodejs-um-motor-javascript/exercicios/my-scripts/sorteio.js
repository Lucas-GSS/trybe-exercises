const readline = require('readline-sync');

console.log('Jogo de advinhação');

const nome = readline.question('Qual seu nome? ');

const numeroEscolhido = readline.questionInt(`Ok ${nome}, agora insira seu número da sorte entre 0 e 10: `);

const numeroSorteado = Math.floor(Math.random() * 10);

numeroEscolhido === numeroSorteado ? console.log(`Parabéns ${nome}! Acertou na mosca!`)
  : console.log(`Não foi dessa vez ${nome}. Número sorteado: ${numeroSorteado}`);