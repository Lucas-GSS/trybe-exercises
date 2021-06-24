let lado1 = 30;
let lado2 = 70;
let lado3 = 90;
if (lado1 + lado2 + lado3 === 180) {
    console.log("É um triângulo")
} else if (lado1 < 0 && lado2 < 0 && lado3 < 0 ) {
    console.log("Erro! Valor incorreto")
} else {
    console.log("Não é um triângulo")
};