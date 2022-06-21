
const divisao = (a, b) => {
  if (b === 0) throw new Error('Não pode ser feito uma divisão por zero');
  return a / b;
};

try {
  console.log(divisao(2, 1));
} catch(e) {
  console.error(e.message)
};
