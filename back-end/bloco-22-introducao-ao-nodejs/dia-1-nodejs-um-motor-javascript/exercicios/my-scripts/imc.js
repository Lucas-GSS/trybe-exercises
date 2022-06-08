console.log('Calculo do IMC');

const imcCalc = (peso, altura) => peso / (altura ** 2);

console.log(`Uma pessoa com o peso de 85kg e 1.85m de altura tem o IMC equivalente a:
${imcCalc(85, 1.85).toFixed(2)}.
Segundo a tabela o IMC essa pessoa está com peso normal
`);