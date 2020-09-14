# es6

1. ecmascript foundation - do an update every year
   es6 - 2015 update
   es7 - 2016
   es8 - 2017
---
2. Template Literals - usage
const fullNametl = `${firstName} ${lastName}`
console.log(fullNametl);
// using Template Literals for multiline strings
let multilineString2 = `${firstName}
${lastName}
`;
---
3. Destructuring Objects - gives us the ability to write shorthand code as well as reassign values
const {firstName, lastName} = authorProfile;
or
const {firstName: fn, lastName: ln} = authorProfile;
console.log(`${fn} ${ln}`);
document.getElementById('example').innerText = `${fn} ${ln}`;
---
4. Destructuring Arrays
let popularAuthorsofNovels = ['Leo Tolstoy', 'Charles Dickens', 'Ernest Hemingway', 'F. Scott Fitzgerald', 'Jane Austen', 'J. K. Rowling', 'Mark Twain', 'George Orwell', 'Agatha Christie', 'J. R. R. Tolkien'];
let [author1] = ['Leo Tolstoy', 'Charles Dickens', 'Ernest Hemingway', 'F. Scott Fitzgerald', 'Jane Austen', 'J. K. Rowling', 'Mark Twain', 'George Orwell', 'Agatha Christie', 'J. R. R. Tolkien'];
let [auth1, auth2] = ['Leo Tolstoy', 'Charles Dickens', 'Ernest Hemingway', 'F. Scott Fitzgerald', 'Jane Austen', 'J. K. Rowling', 'Mark Twain', 'George Orwell', 'Agatha Christie', 'J. R. R. Tolkien'];
auth2 = 'Dan Brown'
console.log(author1);
console.log(auth1 + ' ' + auth2);
---