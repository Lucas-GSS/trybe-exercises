let nota = 50;
if (nota > 100 || nota < 0) {
    console.log("Erro: valor inválido")
}
else if (nota >= 90) {
    console.log("A")
}
else if (nota < 90 && nota >=80) {
    console.log("B")
} else if (nota < 80 && nota >= 70) {
    console.log("C")
} else if (nota < 70 && nota >= 60) {
    console.log("D")
} else if (nota < 60 && nota >= 50) {
    console.log("E")
} else {
    console.log("F")
};