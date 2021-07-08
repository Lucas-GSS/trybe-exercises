function checkPalindrome (string){
    let palindrome = string.split('').reverse().join('')
    return string === palindrome
}
console.log(checkPalindrome('lucas'));

//Fonte:https://pt.stackoverflow.com/questions/315456/fun%C3%A7%C3%A3o-para-checar-pal%C3%ADndromo
