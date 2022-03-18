function aritimetica(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number' || typeof(num3) !== 'number')
      reject(new Error('Informe apenas números'))
    const resultado = (num1 + num2) * num3;
    resolve(resultado > 50 ? resultado : 'Valor muito baixo')
  });
  return promise
};

const randomNum1 = Math.floor(Math.random() * 50 + 1);
const randomNum2 = Math.floor(Math.random() * 50 + 1);
const randomNum3 = Math.floor(Math.random() * 50 + 1);
aritimetica(randomNum1, randomNum2, randomNum3)
.then((valor) => console.log(valor))
.catch((err) => console.error(err));