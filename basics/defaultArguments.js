let getScore=function(name='Anonymous',score=0){

    return `name:${name} score:${score}`
}
console.log(getScore())
console.log(getScore('farhan',20))
console.log(getScore('farhan'))
console.log(getScore(undefined ,50))