const botao = document.querySelector("#btn");
let clickCount = 0;
const score = document.querySelector('#score');

botao.addEventListener('click',  () => score.innerHTML = clickCount += 1);