let custoProduto = 100;
let valorVenda = 50;
let custoTotal = custoProduto + custoProduto * 20 / 100;
let lucro = valorVenda - custoTotal
if (custoProduto < 0 || valorVenda < 0) {
    console.log("Erro: valores inválidos")
} else if (lucro < 0) {
    console.log("Tu tá no prejuízo")
} 
else {
    console.log("O lucro total é", lucro)
};