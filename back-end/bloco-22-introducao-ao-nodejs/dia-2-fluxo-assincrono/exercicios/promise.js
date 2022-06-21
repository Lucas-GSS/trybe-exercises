function validateNumbers(numbers) {
  return numbers.some((number) => typeof(number) !== 'number')
}
function calc(number1, number2, number3) {
  const promise = new Promise((resolve, reject) => {
    if (validateNumbers([number1, number2, number3])) return reject(Error('Informe apenas números'))
    const result = (number1 + number2) * number3;
    if (result < 50) return reject(Error('Valor muito baixo'))
    return resolve(result)
  })
  return promise;
}

function generateNumbers() {
  return Math.floor(Math.random() * 100 + 1)
}

calc(generateNumbers(), generateNumbers(), generateNumbers())
.then((r) => console.log(r))
.catch((e) => console.error(e.message))