// enum é uma estrura para definir nomes simbólicos para um conjunto de valores que podem ser usados em variáveis
// é recomendado sempre que uma variável poder receber um conjunto definido de valores diferentes
enum weekDays {
  Domingo = 1,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
};

console.log(weekDays.Domingo)
console.log(weekDays.Segunda)
console.log(weekDays.Sexta)
console.log(weekDays.Sabado)

enum rainbowColors {
  blue = 'Azul',
  pink = 'Rosa',
  green = 'Verde'
}

console.log(rainbowColors.blue)

const sum = (a: number, b: number): number => a + b;
console.log(sum(1, 6))