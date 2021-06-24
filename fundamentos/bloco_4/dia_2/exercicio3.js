let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let numberOfElements = numbers.length;
let media;
for (let index = 0; index < numbers.length; index += 1) {
    sum = sum + numbers[index]
}
media = sum / numberOfElements
console.log("A média é:" + media);