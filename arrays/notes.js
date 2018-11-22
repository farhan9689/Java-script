let note = ['note1','note2','note3']
note.push('note4')
// console.log(note)
// note.pop()
// console.log(note)
// note.shift()
// note.unshift('start')
// console.log(note)
note.splice(3,3,'end')
console.log(note)
 
note.forEach(function(element ,index){
console.log(`${index+1}. ${element}`)
})

for(let count=0;count<note.length;count++){
console.log(note[count])
}
for(let count=note.length-1;count>=0;count--){
    console.log(note[count])
    }