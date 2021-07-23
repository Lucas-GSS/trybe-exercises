//Minha solução
function fatorial(number) {
  if(number === 0) {
    console.log(1); 
  } else {
    let plus = 1;
    for (let index = 1; index <= number; index += 1) {
      plus *= index
    }
    console.log(plus)
  }
}
fatorial(0);
//Utilizando função recursiva. Uma função recursiva é uma função que retorna ela mesma até uma condição ser satisfeita. No caso abaixo as condições são : se o parâmetro da função é maior que 1, então multiplica o parâmetro por ele mesmo, decrementando 1 enquanto essa condição for verdadeira, chegando assim ao fatorial do parâmetro passado, que é a multiplicação de todos os números anteriores a ele. Se o parâmetro é menor que 1, ou seja zero, a função já retorna 1 pois o fatorial de 0 é 1.
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(6));

const highWord = (phrase) => {
  const words = phrase.split(" ");
  let higher = words[0];
  for (let key of words) {
    if (key.length > higher.length){
      higher = key;
    }
  }
  console.log(higher)
}
highWord("Antônio foi no banheiro e não sabemos o que aconteceu");
