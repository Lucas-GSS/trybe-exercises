function highNumber(array){
    let highIndex = 0;
    for (let key in array){
        if (array[highIndex] < array[key])
        highIndex = key
    }
    return(highIndex)
}
console.log(highNumber([2, 3, 6, 7, 1, 10]));