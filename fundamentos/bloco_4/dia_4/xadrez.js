//Posição da rainha
let queenRowPosition = 6;
let queenColumnPosition = 4;

//Posição da peça oponente
let oponnentRowPosition = 3;
let oponnentColumnPosition = 6;

//Pode atacar?
let canAttack = false;

//Cálculo para entender se o ataque foi bem sucedido ou não:
//Se a Rainha está na mesma linha ou na mesma coluna do oponente o ataque pode ser bem sucedido, caso contrário, não!
if (queenRowPosition === oponnentRowPosition || queenColumnPosition === oponnentColumnPosition) {
    canAttack = true;
}

//Identificar se o oponente está na diagonal inferior esquerda

//Identificar se o oponente está na diagonal superior esquerda

//Identificar se o oponente está na diagonal inferior direita

//Identificar se o oponente está na diagonal superior direita
console.log('Ataque bem sucedido? ' + canAttack);

