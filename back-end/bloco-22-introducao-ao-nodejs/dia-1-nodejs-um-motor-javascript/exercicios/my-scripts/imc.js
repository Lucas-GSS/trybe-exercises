const readline = require('readline-sync');

console.log('Calculo do IMC');

const peso = readline.questionFloat('Qual seu peso(kg)? ');
const altura = readline.questionFloat('Qual sua altura(metro)? ');

const imcCalc = (peso, altura) => peso / (altura ** 2);

console.log(`
  Seu IMC é: ${imcCalc(peso, altura).toFixed(2)}!
  Confira abaixo os Indices:
`);
console.log(`
IMC	                Situação
Abaixo de 18,5	    Abaixo do peso (magreza)
Entre 18,5 e 24,9	  Peso normal
Entre 25,0 e 29,9	  Acima do peso (sobrepeso)
Entre 30,0 e 34,9	  Obesidade grau I
Entre 35,0 e 39,9	  Obesidade grau II
40,0 e acima	      Obesidade graus III e IV
`);