//challenge area

let isValidPassword = function(password){
    return password.length > 8 && !password.includes('password')
}
console.log(isValidPassword('asPAS'))
console.log(isValidPassword('ascdcjhwecpasswordD'))
console.log(isValidPassword('ascd3432#$2#$'))