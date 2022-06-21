const fizzBuzz = (number) => {
  const promise = new Promise((resolve, reject) => {
    if(!number || number < 0) return reject(Error('Número inválido'))
    if (number % 3 === 0 && number % 5 === 0) return resolve('FizzBuzz');
    number % 3 === 0 && resolve('Fizz');
    number % 5 === 0 && resolve('Buzz');
    reject(number)
  });
  return promise;
}

fizzBuzz(1)
.then((r) => console.log(r))
.catch((e) => console.log(e))