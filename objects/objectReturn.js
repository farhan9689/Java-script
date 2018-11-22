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
 return {
     summary: `${book.title} by ${book.author}`,
     pageSummary: `${book.title} is ${book.pagecount} pages long` 
 }
 }

 let bookSummary=getSummary(myBook)
 let otherBookSummary = getSummary(otherBook)
  
/*console.log(bookSummary.pageSummary);--> 1984 is 235 pages long
console.log(bookSummary.summary);--> 1984 by george orwell
console.log(otherBookSummary.summary);--> A peoples history by harwrd zinn
console.log(otherBookSummary.pageSummary);--> A peoples history is 725 pages long
*/

console.log(bookSummary)
console.log(otherBookSummary)