let toDo = ['wake-up early','take a long bath','have a lunch','take a good nap']

// console.log(`you have ${toDo.length} items to do.`)
// //console.log(`toDo:${toDo[toDo.length-1]}`)
// //console.log(`toDo:${toDo[toDo.length-2]}`)
// toDo.splice(2,1)
// toDo.push('exercise')
// console.log(toDo)
// console.log(toDo.shift())
// console.log(toDo)

// console.log(`you have ${toDo.length} todo's`)
// toDo.forEach(function(todo,index){
//     const num = index+1
//     console.log(`${num}. ${todo}`)
    
// })

// for(let count=1;count<=toDo.length;count++){
//     console.log(`${count}. ${toDo[count]}`)
// }
let arr = [{

}, {
title: 'asdvc',
body:'asdfv'
} ,{
title: 'habbits',
body: 'efvjhba'
}]
 
arr.findIndex(function(note,index){
    console.log(note,  index)
})
//
let index = arr.findIndex(function(ele){
    return ele.title === 'habbits'
})
console.log(index)
