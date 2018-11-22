let myAccount = {
   name:'farhan',
    expences:0,
    income:0
}

let addExpences = function(account,amount){
account.expences=account.expences+amount
console.log(account)
}
addExpences(myAccount,2000)