let bill=function(total,tip=.2){
    let tipPercentage=tip*100
    let includeTip = total*tip
    return `A ${tipPercentage}% tip on ${total} would be ${includeTip}`
}
let includeTip=bill(100,.25)
console.log(includeTip)