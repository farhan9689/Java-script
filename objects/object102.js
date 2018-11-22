let myBook = {
    title: 1984,
    author: 'george orwell',
    pagecount: 235
}
let otherBook = {
    title: 'A peoples history',
    author: 'Harword zinn',
    pagecount: 725
}
 let getSummary = function (book){
 console.log(`${book.title} by ${book.author}`);
 console.log(`${book.title} is ${book.pagecount} pages long`)
 }

 getSummary(myBook)
 getSummary(otherBook)
 