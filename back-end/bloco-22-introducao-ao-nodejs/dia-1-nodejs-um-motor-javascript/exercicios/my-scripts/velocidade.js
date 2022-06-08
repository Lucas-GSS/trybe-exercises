const readline = require('readline-sync');

console.log('Calcule a velocidade média de um veículo')
const distancia = readline.questionInt('Qual a distância (em metros)? ');
const tempo = readline.questionInt('Qual o tempo (em segundos)? ');

const velocidade = (distancia, tempo) => distancia / tempo;

console.log(`A velocidade em questão é de ${velocidade(distancia, tempo).toFixed(2)} metros por segundo`);