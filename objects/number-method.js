let min = 0
let max = 1
let randomNumber = Math.floor(Math.random()*(max - min + 1)) + min
console.log(randomNumber)

//challenge area

let guess = function(makeGuess){
    let min = 1
    let max = 5
    let randomNumber = Math.floor(Math.random()*(max - min + 1)) + min
    return makeGuess===randomNumber
}
console.log(guess(4))