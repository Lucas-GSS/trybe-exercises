let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let numberOfElements = numbers.length;
let media;
for (let index = 0; index < numbers.length; index += 1) {
    sum = sum + numbers[index]
}
media = sum / numberOfElements
if (media > 20) {
    console.log("O valor é" + media + "é maior que 20")
} else {
    console.log("O valor é menor ou igual a 20")
};
