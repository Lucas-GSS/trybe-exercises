//Criar o meu jogo
let lucasGame = [7, 23, 10, 21, 50, 15];

//Sortear números da Mega
let firstNumber = Math.floor(Math.random() * 60 - 1) + 1;
let secondNumber = Math.floor(Math.random() * 60 - 1) + 1;
let thirdNumber = Math.floor(Math.random() * 60 - 1) + 1;
let fourthNumber = Math.floor(Math.random() * 60 - 1) + 1;
let fifthNumber = Math.floor(Math.random() * 60 - 1) + 1;
let sixthNumber = Math.floor(Math.random() * 60 - 1) + 1;

//Lugar para armazenar esses valores gerados
let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];
let hits = 0;
//Conferir jogo
for (let index = 0; index < megaSenaNumbers.length; index += 1){
    let drawNumber = megaSenaNumbers[index];
    for (let gameIndex = 0; gameIndex < lucasGame.length; gameIndex += 1){
        let gameNumber = lucasGame[gameIndex];
        if (drawNumber === gameNumber) {
            hits += 1;
        }
    }
}

console.log('Meu jogo: ' + lucasGame);
console.log('Jogo Sorteado ;' + megaSenaNumbers);
console.log('Acertos: ' + hits);