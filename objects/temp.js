
let convert = function(ferenheit){
 return { celcius : (ferenheit-32)*5/9,
          kelvin : (ferenheit+459.67)*5/9
        }
}
let celciustemp=convert(68)
let kelvintemp=convert(68)

console.log(`68 ferenhiet is ${celciustemp.celcius} celcius`)
console.log(`68 ferenhiet is ${kelvintemp.kelvin} kelvin`);
