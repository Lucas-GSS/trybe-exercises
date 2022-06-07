const readline = require('readline-sync');

const nome = readline.question('Qual seu nome? ');
const idade = readline.questionInt('Qual sua idade? ');

console.log(`Ola ${nome}, sua idade é ${idade}`);