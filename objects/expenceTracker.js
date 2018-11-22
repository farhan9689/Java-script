let myAccount = {
    name:'farhan',
     expences:0,
     income:0
 }
 let otherAccount = {
     name:'mirza',
     expences:0,
     income:0
 }

 let addExpences = function(account,amount){
 account.expences=account.expences+amount
 
 }

 let addIncome = function(account,amount){
     account.income = account.income + amount
 }
 
 let accountSummary = function(account){
     let balance = account.income - account.expences
     return `${account.name} has ${balance} and income is ${account.income},${account.expences} is expences`
 }

 let reset = function(account){
     account.expences=0
     account.income=0
 }
 
 addExpences(myAccount,2000)
 addIncome(myAccount,15000)
 console.log(accountSummary(myAccount))
 console.log(accountSummary(otherAccount))
 reset(myAccount)
 console.log(accountSummary(myAccount))