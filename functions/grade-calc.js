const studentScore=function(obtainMarks,maxMarks){
    const result = obtainMarks/maxMarks*100
    if(result>=90&&result<=100){
        console.log(`You got A grade with(${result}%)`)
    }else if(result>=80&&result<=89){
        console.log(`You got B grade with(${result}%)`)
    }else if(result>=70&&result<=79){
        console.log(`You got C grade with(${result}%)`)
    }else if(result>=60&&result<=69){
        console.log(`You got D grade with(${result}%)`)
    }else{
        console.log(`You got F grade with(${result}%)`)
    }
}

studentScore(51,100)